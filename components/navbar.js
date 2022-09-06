import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav className="container">
            <div className="logo"><h1>Super Blogs</h1></div>
            <ul className="navlink">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/contact"><a>Contact </a></Link></li>      
                <li><Link href="/reviews"><a >Reviews </a></Link></li>             
            </ul>
        </nav>
     );
}
 
export default Navbar;