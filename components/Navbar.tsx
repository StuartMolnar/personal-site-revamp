import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spin as Hamburger } from "hamburger-react"
import { useScrollLock } from "@/hooks/useScrollLock";

function Navbar() {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);

    useScrollLock(isOpen);



    return (
        <>
        <nav className="items-center justify-between hidden px-32 pt-10 text-black bg-white text-header font-body md:flex">
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
            <div className="flex items-center gap-4">
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

            <div 
                id="menu" className={`fixed inset-0 z-20 gap-y-8 flex flex-col items-center justify-center w-full text-white bg-black text-header transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <Link href="/" className={`${router.pathname === "/" ? "font-bold" : ""}`}>Home</Link>
                <Link href="/#projects" className={`${router.pathname !== "/" ? "font-bold" : ""}`}>Work & Projects</Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="">Résumé</a>
            </div>
        </nav>
        </>
    );
  }
  
  export default Navbar;