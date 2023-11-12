import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { ConnectWallet } from '@thirdweb-dev/react';
import {headerLogo, shoe4} from '../pages/assets/images'
import {hamburger} from '../pages/assets/icons';

export function Navbar(){
    return(
    
        <header className=" padding-x py-3  z-10 w-full bg-gray-800">
            <nav className="flex justify-between items-center">
            <a href="https://www.factorlabs.io/" target="_blank">
                <img
                 src="images/fl_logo.png" alt="FL Logo"
                 width={50}
                 height={50}/></a>
                 <p className="pl-4 text-white text-lg font-montserrat ">StegoSig</p>
                 <ul className="flex-1 flex justify-center items-center
                 gap-16   " >
                    
                    <a href="/" className=" text-white text-lg font-montserrat  ">Embed</a>
                    <a href="/project/Verify" className=" text-white text-lg font-montserrat  ">Verify</a>
                    <a href="" className=" text-white text-lg font-montserrat  s">Debug Contracts</a>
                    

                 </ul>

            <ConnectWallet
                btnTitle='Sign In'
                modalTitle='Select sign in method'
            />
            </nav>
        </header>

    )
};