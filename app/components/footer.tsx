import Link from "next/link";

 const Footer = () => {
  return (
    <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
      <p>
        github:
        <Link href="https://github.com/roran-williams" className="m-3">
          roran-williams
        </Link>
        twitter:
        <Link href="https://twitter.com/mdo" className="m-3">
          @roran__williams
        </Link>
        . copyright © {new Date().getFullYear()}
      </p>
      <p className="mb-0">
        <Link href="#">Back to top</Link>
      </p>
    </footer>
  );
}

export default Footer;