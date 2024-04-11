import Link from "next/link";
import Image from "next/image"
import { HomeIcon } from '@heroicons/react/24/solid'


export default function Navbar() {
  
  return (

    <nav className="bg-transparent border-b-4 border-dashed border-green-700 dark:border-green-600">


      <div className="flex flex-wrap max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl items-center justify-center mx-auto p-2">


        <div className="flex items-center place-items-center justify-center md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">

          <button className="p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
            onClick={() => {
              const navbar = document.getElementById('navbar');
              navbar.classList.toggle("hidden");
            }}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

        </div>

        <div className="items-center justify-center hidden  place-items-center md:flex md:w-auto md:order-2" id="navbar">
          <ul className="flex flex-col p-4 md:p-0 mt-4 align-center font-medium border border-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-black">
            <li>
              <Link className="block py-2 pr-4 pl-3" href={'/'}>
                <div className="flex flex-row space-x-2 place-items-center">
                  <HomeIcon className="w-4 h-4 text-green-600  md:w-6 md:h-6" />
                  <p className="text-green-600">FranceVerte</p>
                </div>
              </Link>
            </li>
            <li className="text-center">
              <Link href="/maps/" className="block py-2 pr-4 pl-3  border-0">Cartes</Link>
            </li>
            <li className="text-center">
              <Link href="/maps/tas/" className="block py-2 pr-4 pl-3  border-0">Température</Link>
            </li>
            <li className="text-center">
              <Link href="/maps/precipitation/" className="block py-2 pr-4 pl-3  border-0">Précipitations</Link>
            </li>
            <li className="text-center">
              <Link href="/agriculture/" className="block py-2 pr-4 pl-3  border-0">Agriculture</Link>
            </li>
            <li className="text-center">
              <Link href="/natural-disaster/" className="block py-2 pr-4 pl-3  border-0">Catastrophes naturelles</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}