import React from 'react';
import { Upload, Embed, Sign, Download } from './ButtonHandlers';

interface ButtonsProps {
    selectedFiles: string;
  }

const Buttons: React.FC = () => {
  return (
    <div className="lg:ml-48 flex flex-col justify-between">
      <button className="btn bg-slate-900 w-48 h-10 rounded-lg" onClick={Upload}>Upload</button>
      <button className="btn bg-slate-900 h-10 rounded-lg mt-12" onClick={Embed}>Embed</button>
      <button className="btn bg-slate-900 h-10 rounded-lg mt-12" onClick={Sign}>Sign</button>
      <button className="btn bg-slate-900 h-10 rounded-lg mt-12" onClick={Download}>Download</button>
    </div>
  );
};

export default Buttons;