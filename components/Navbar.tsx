import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spin as Hamburger } from "hamburger-react"
import { useScrollLock } from "@/hooks/useScrollLock";

function Navbar() {
    const router = useRouter();

    const [isOpen, setOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuStyle = {
        top: isOpen ? `${scrollY}px` : '-100%'
    };

    const closeMenu = () => {
        setOpen(false);
    };

    useScrollLock(isOpen);

    // update height of menu to account for address bar on mobile devices
    useEffect(() => {
        const updateHeight = () => {
            const menuElement = document.getElementById('menu');
            if (menuElement) {
                menuElement.style.height = `${window.innerHeight}px`;
            }
        };
    
        window.addEventListener('resize', updateHeight);
    
        updateHeight();
    
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

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

            <div id="menu" className="absolute z-20 flex flex-col items-center justify-center w-full text-white transition-all duration-300 ease-in-out bg-black gap-y-8 text-header" style={menuStyle} onClick={closeMenu}>
                <Link href="/" className={`${router.pathname === "/" ? "font-bold" : ""}`}>Home</Link>
                <Link href="/#projects" className={`${router.pathname !== "/" ? "font-bold" : ""}`}>Work & Projects</Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="">Résumé</a>
            </div>
        </nav>
        </>
    );
  }
  
  export default Navbar;