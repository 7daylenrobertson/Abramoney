import { useState } from 'react';
import React from "react";
import NFTModal from './NFTModal';

export default function Modal({ isvisible, onClose}) {

  const [showNFTModal, setShowNFTModal] = useState(false);
  const handleOnClose = () => {
    onClose()
  };

    if ( !isvisible ) return null;
    return (
        <div onClose={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-red-400 mt-4rounded space-y-2">
                <button className='rounded-full w-fit h-fit border-2 px-2 bg-slate-100 text-gray-500'>X</button>
                <h1>How can investing in stocks potentially help me grow my wealth over time?</h1>
                    <input className='text-gray-500' type='text' placeholder=' Enter Answer'></input>
                    <p>Thank you for Playing Abramoney!</p>
                <div className="flex space-x-10 items-center justify-center">
                <a href='https://www.spatial.io/s/TruthTalks-6428ddd4829b6c428116a900?share=4911462309497535231' className="bg-red-400 mt-4 text-white px-3 py-2 rounded text-xl">VIP</a>
                </div>
            </div>
        </div>
    );
}