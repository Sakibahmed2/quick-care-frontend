import logo from "@/assets/logo.png";
import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "All Doctors",
    path: "/doctors",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <Container>
      <div className="py-2 px-2 border-b ">
        <div className="flex items-center justify-between ">
          {/* img section */}
          <div className="flex items-center gap-2">
            <Image src={logo} height={48} width={48} alt="logo" />
            <h1 className="text-3xl font-semibold">
              Quick<span className="text-primary">Care</span>
            </h1>
          </div>

          {/* nav section */}
          <nav>
            <ul className="flex items-center gap-12">
              {items.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.path}
                    className=" text-gray-800 hover:text-primary"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* button section */}
          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <button className="btn-small btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
