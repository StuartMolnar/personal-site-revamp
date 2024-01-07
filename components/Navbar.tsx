import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Spin as Hamburger } from 'hamburger-react'

function Navbar() {
    const router = useRouter();

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }

        return () => document.body.classList.remove('overflow-y-hidden');
    }, [isOpen]);

    return (
        <>
        <nav className="items-center justify-between hidden px-32 pt-10 text-black bg-white text-header font-body md:flex">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src={`Logo.svg`}
                        alt={"Logo"}
                        width={40}
                        height={30}
                    />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/">
                <p className={`hover:text-red ${router.pathname === '/' ? 'font-bold text-red' : ''}`}>Home</p>
                </Link>
                <Link href="/#projects" scroll={false}>
                <p className={`hover:text-red ${router.pathname !== '/' ? 'font-bold text-red' : ''}`}>Work & Projects</p>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <p className="hover:text-red">Résumé</p>
                </a>
            </div>
        </nav>
        <nav className="flex items-center justify-between pt-10 text-black bg-white md:hidden">

            <Link href="/" className="z-30 pl-10">
                <Image
                    src={`Logo.svg`}
                    alt={"Logo"}
                    width={40}
                    height={30}
                />
            </Link>
            <div className={`z-30 pr-10 ${isOpen ? 'text-white' : 'text-black'}`}>
                
                <Hamburger toggled={isOpen} toggle={setOpen} direction="left" distance="sm" />
            </div>

            <div className={`z-20 flex flex-col gap-y-8 absolute items-center justify-center bg-black text-white text-header w-full h-full transition-all duration-300 ease-in-out ${isOpen ? 'top-0' : 'top-[-100%]'}`}>
                <Link href="/" className={`${router.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
                <Link href="/#projects" className={`${router.pathname !== '/' ? 'font-bold' : ''}`}>Work & Projects</Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="">Résumé</a>
            </div>
        </nav>
        </>
    );
  }
  
  export default Navbar;