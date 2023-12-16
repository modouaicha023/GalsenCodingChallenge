import { Github } from "lucide-react";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <Container>
      <footer className="bg-opacity-50 opacity-70">
        <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <li>
                <Button asChild variant="ghost">
                  <Link href={"/"}>Home</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href={"/challenges"}>Challenges</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
            <Button asChild variant="ghost">
              <Link
                href={
                  "https://github.com/modouaicha023/galsencodingchallenge"
                }>
                <Github size={32} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="pb-2">
          <p className="text-center">
            © {new Date().getFullYear()} Galsen Coding Challenge.
          </p>
        </div>
      </footer>
    </Container>
  );
}
