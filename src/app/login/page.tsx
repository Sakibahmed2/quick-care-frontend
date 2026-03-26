import logo from "@/assets/logo.png";
import LoginForm from "@/components/page/login/LoginForm";
import Image from "next/image";
import Link from "next/link";


const LoginPage = () => {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-primary/30 border-2 p-8 shadow-md w-full max-w-[400px] rounded-lg">
        <div className="mb-2">
          <Image
            src={logo}
            height={50}
            width={50}
            alt="logo"
            className="mx-auto mb-2"
          />
          <h1 className="text-2xl font-semibold text-center mb-2">Welcome </h1>
          <p className=" text-sm text-gray-500 text-center">
            Please enter your email and password to login to your account.
          </p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-gray-500 mt-4  ">
          Don&rsquo;t have an account?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
