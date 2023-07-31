import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div>logo</div>

            <div>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="#">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
