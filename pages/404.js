import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page can not be found.</h2>
      <p>
        Go back to{' '}
        <Link href="/">
          <a>Home page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
