import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spin as Hamburger } from "hamburger-react"
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
  } from 'body-scroll-lock-upgrade';

function Navbar() {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const targetElement = document.getElementById('menu');
        
        if (isOpen && targetElement) {
            disableBodyScroll(targetElement);
        } else if (targetElement) {
            enableBodyScroll(targetElement);
        }

        return () => {
            clearAllBodyScrollLocks();
        };
    }, [isOpen]);

    return (
        <>
        <nav className="items-center justify-between hidden px-6 pt-10 text-black bg-white md:px-12 xl:px-32 text-header font-body md:flex">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src={"Logo.svg"}
                        alt={"Logo"}
                        width={40}
                        height={30}
                    />
                </Link>
            </div>
            <div className="flex items-center gap-10">
                <Link href="/">
                <p className={`hover:text-red ${router.pathname === "/" ? "font-bold text-red" : ""}`}>Home</p>
                </Link>
                <Link href="/#projects" scroll={false}>
                <p className={`hover:text-red ${router.pathname !== "/" ? "font-bold text-red" : ""}`}>Work & Projects</p>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <p className="hover:text-red">Résumé</p>
                </a>
            </div>
        </nav>
        <nav className="flex items-center justify-between pt-10 text-black bg-white md:hidden">

            <Link href="/" className="z-30 pl-6">
                <Image
                    src={`Logo.svg`}
                    alt={"Logo"}
                    width={40}
                    height={30}
                />
            </Link>
            <div className={`z-30 pr-5 ${isOpen ? "text-white" : "text-black"}`}>
                
                <Hamburger toggled={isOpen} toggle={setOpen} direction="left" distance="sm" />
            </div>

            <div id="menu" className={`fixed inset-0 z-20 w-full h-[120%] text-white bg-black text-header transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className={`flex flex-col items-center w-full h-full gap-y-8 transition-all duration-300 ease-in-out ${isOpen ? 'mt-[40vh]' : ''}`}>
                    <Link href="/" className={`${router.pathname === "/" ? "font-bold" : ""}`}>Home</Link>
                    <Link href="/#projects" className={`${router.pathname !== "/" ? "font-bold" : ""}`}>Work & Projects</Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="">Résumé</a>
                </div>
            </div>
        </nav>
        </>
    );
  }
  
  export default Navbar;