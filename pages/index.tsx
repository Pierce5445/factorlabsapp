import { Navbar } from "../components/navbar";
import { ConnectWallet, useSDK, useStorageUpload, MediaRenderer } from '@thirdweb-dev/react';
import { use, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { NextPage } from "next";
import Buttons from "../components/Buttons";

const Home: NextPage = () => {
  const [uris, setUris] = useState<string[]>([]);
  const { mutateAsync: upload } = useStorageUpload();
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const _uris = await upload({ data: acceptedFiles });
      setUris(_uris);
    },
    [upload]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  console.log(uris);
  const [signature, setSignature] = useState("N/A");
  const [address, setAddress] = useState("N/A");

  // Constructing the message dynamically based on uploaded files
  const message = uris.length > 0
    ? `Please sign this IPFS link: ${uris[0]}`
    : "Please sign me!";

  const sdk = useSDK();

  const signMessage = async () => {
    const sig = await sdk?.wallet.sign(message);

    if (!sig) {
      throw new Error('No signature!')
    }
    setSignature(sig);
  };

  const recoverAddress = () => {
    const addr = sdk?.wallet.recoverAddress(message, signature);
    if (!addr) {
      throw new Error('No signature');
    }
    setAddress(addr);
  };

  const renderUploadedFiles = () => {
    return uris.map((uri, index) => (
      <div key={index} className="mb-2 pl-2 ">
        <p className="text-xs overflow-ellipsis whitespace-normal break-words">
          {`Uploaded File ${index + 1}: ${uri}`}
        </p>
      </div>
    ));
  };

  return (
    <div className="w-full mt-10 flex flex-col lg:flex-row justify-evenly items-center flex-grow pt-0 border-2 border-black">
      {/* Responsive Container */}
      <div className="w-full lg:w-1/2 xl:w-1/3 mb-6">
        <div className="lg:mt-6 mt-2 overflow-auto flex flex-col w-full md:w-64 max-w-full md:max-w-full lg:max-w-full h-72 md:h-auto lg:h-72 rounded-none bg-slate-500 flex-shrink-0">
          {renderUploadedFiles()}
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3">
        <div {...getRootProps()} className="mb-6 text-center">
          <input {...getInputProps()} />
          <button className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Drop files to authenticate
          </button>
        </div>
        <div className="text-center space-y-4">
          <button onClick={signMessage} className="w-full md:w-3/4 lg:w-2/3 mx-auto px-4 py-2 bg-blue-500 text-white rounded">
            Sign Message
          </button>
          <p className="text-xs overflow-ellipsis whitespace-normal break-words">
            {`Signature: ${signature}`}
          </p>
          <button onClick={recoverAddress} className="w-full md:w-3/4 lg:w-2/3 mx-auto px-4 py-2 bg-blue-500 text-white rounded">
            Recover Address
          </button>
          <p className="mt-2 text-xs overflow-ellipsis whitespace-normal break-words">Address: {address}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

