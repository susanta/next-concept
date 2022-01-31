import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        voluptates vitae inventore quo atque deleniti consectetur unde facilis
        ad optio officia totam, itaque at modi nisi sed et sint laboriosam?
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
