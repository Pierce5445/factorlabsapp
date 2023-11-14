import { useState } from 'react';
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';
import Image from 'next/image';
import { hamburger } from '../assets/icons';

export function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="px-6 py-4 bg-gray-900">
      <nav className="max container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <a href="https://www.factorlabs.io/" target="_blank" className="mr-4">
            <Image src="/images/StegoSig.png" alt="FL Logo" width={75} height={75} />
          </a>
          <p className="text-white text-lg font-semibold ">StegoSig</p>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden" onClick={toggleDropdown}>
          {/* Add your hamburger menu icon */}
          <Image src={hamburger} alt="Hamburger Icon" width={30} height={30} />
        </div>

        {/* Navigation links for mobile */}
        {isDropdownOpen && (
          <div className=" lg:hidden absolute top-full left-0 right-0 bg-gray-900 z-10  rounded-3xl  ">
            <ul className="flex flex-col items-center mt-4 space-y-2 p-4">
              <Link href="/" className="text-white text-lg font-semibold py-2" onClick={closeDropdown}>
                Embed
              </Link>
              <Link href="/project/Verify/" className="text-white text-lg font-semibold py-2" onClick={closeDropdown}>
                Verify
              </Link>
              <Link href="" className="text-white text-lg font-semibold py-2" onClick={closeDropdown}>
                Debug Contract
              </Link>
            </ul>
          </div>
        )}

        {/* Navigation links for desktop */}
        <ul className={`lg:flex justify-center items-center space-x-6 ${isDropdownOpen ? 'hidden' : 'hidden lg:flex'}`}>
          <Link href="/" className="text-white text-lg font-semibold">
            Embed
          </Link>
          <Link href="/project/Verify/" className="text-white text-lg font-semibold">
            Verify
          </Link>
          <Link href="" className="text-white text-lg font-semibold">
            Debug Contract
          </Link>
        </ul>

        {/* Connect wallet button */}
        <ConnectWallet btnTitle="Sign In" modalTitle="Select sign in method" />
      </nav>
    </header>
  );
}