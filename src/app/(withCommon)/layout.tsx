import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { TChildren } from "@/types/global";
import Image from "next/image";

const CommonLayout = ({ children }: TChildren) => {
  return (
    <div>
      <Navbar />
      <div>
        <Image
          src={"/bg-svg-1.svg"}
          width={500}
          height={500}
          className="h-[500px] w-[500px] fixed top-0 -left-10 -z-50"
          alt="Bg svg"
        />
      </div>

      {children}

      <div>
        <Image
          src={"/bg-svg-2.svg"}
          width={500}
          height={500}
          className="h-[500px] w-[500px] fixed bottom-0 -right-10 -z-50"
          alt="Bg svg"
        />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
