'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const closeOnClick = () => setNavbarOpen(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2  bg-slate-500	 z-10 drop-shadow-md ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2  whitespace-nowrap uppercase text-white"
              href="/"
            >
              <Image
                src="https://open-platform.theguardian.com/public/img/theguardian-op-logo.svg"
                width={200}
                height={45}
                alt="Logo"
                className="inline-block hover:opacity-75"
              />
            </Link>
            <button
              className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image src="/menu.svg" width={50} height={50} alt="menu" className="inline-block" />
            </button>
          </div>
          <div className={'md:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} data-testid="nav">
            <ul className="flex flex-col md:flex-row list-none md:ml-auto font-serif text-white	">
              <Link href="/" onClick={closeOnClick}>
                Main Page
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
