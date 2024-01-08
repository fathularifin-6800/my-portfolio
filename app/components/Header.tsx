import Link from "next/link";

const Header = () => {
    return ( 
        <header>
           <Link href='/'>Logo</Link>
            <nav>
                <Link href='/'>Blog</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
            </nav>
        </header>
     );
}
 
export default Header;