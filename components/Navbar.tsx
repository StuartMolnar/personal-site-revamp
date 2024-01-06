import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Navbar() {
    const router = useRouter();

    const isActive = (href: string) => router.pathname === href;
    return (
        <nav className="flex items-center justify-between px-32 pt-10 font-normal text-black font-body">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src={`Logo.svg`}
                        alt={"Logo"}
                        width={40} // Maximum width
                        height={30}
                    />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/">
                <p className={`hover:text-red ${isActive('/') ? 'font-bold' : ''}`}>Home</p>
                </Link>
                <Link href="/#projects" scroll={false}>
                <p className={`hover:text-red ${isActive('/link1') ? 'font-bold' : ''}`}>Work & Projects</p>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <p className="hover:text-red">Résumé</p>
                </a>
            </div>
        </nav>
    );
  }
  
  export default Navbar;