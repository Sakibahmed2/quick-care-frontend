"use client";

import logo from "@/assets/logo.png";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { title: "Home", path: "/" },
  { title: "All Doctors", path: "/doctors" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false); // close menu on route change
  }, [pathname]);

  return (
    <Container className="fixed top-0 left-0 right-0 z-50  ">
      <div className="py-2 px-2 border-b bg-white/90 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={logo} height={48} width={48} alt="logo" />
            <h1 className="text-3xl font-semibold">
              Quick<span className="text-primary">Care</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-10">
              {items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className={cn(
                      "text-gray-800 hover:text-primary transition-colors duration-300 ",
                      pathname === item.path
                        ? "text-primary border-b-2 border-primary"
                        : ""
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <button className="btn-small btn-primary">Login</button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-4">
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-gray-800 hover:text-primary transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/login">
                  <button className="btn-small btn-primary w-full mt-2">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
