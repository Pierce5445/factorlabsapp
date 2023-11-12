//import { ConnectWallet } from "@thirdweb-dev/react";


import { Navbar } from "../components/navbar";
import { ConnectWallet } from '@thirdweb-dev/react';
//import ERC20Project from "./erc20";
//import Image from "next/image";
import { NextPage } from "next";
import Buttons from "../components/Buttons";

const Home: NextPage = () => {
  return (
    <div className=" mt-10 flex justify-evenly items-center flex-col lg:flex-row-reverse flex-grow pt-0 border-2 border-black">

        <div className="flex flex-col items-center lg:mr-48">
          <div className="lg:mt-6 mt-2 flex flex-col w-64 h-72 rounded-2xl bg-slate-500"></div>
          <div className="items-center flex flex-col text-center w-1/2 lg:w-min mt-10">
            <input
              id="file-input"
              className="ml-24 lg:ml-40 pb-6 md:text-xl"
              type="file"
              //onChange={handleFileChange}
              accept="image/*"
              multiple
            />
          </div>
        </div>
        <div >
          <Buttons/>
        </div>
        </div>

    )
};

export default Home;
