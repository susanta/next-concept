import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a href="">About</a>
      </Link>
      <Link href="/ninjas">
        <a href="">Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
