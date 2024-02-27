import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  detailsLoginRegister,
  megapartsLogo,
  mobileDetails,
} from "../assets/images/z-index";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const onSignin = (e) => {
    e.preventDefault();

    navigate("/homepage");
  };
  return (
    <section className=" h-screen w-full flex justify-between">
      <div className="w-full h-full xl:w-2/3 flex justify-center items-center">
        <form className="w-full md:w-3/4 h-full px-4 xl:px-12 flex justify-around lg:justify-center flex-col sm:gap-3 ">
          {/* Mobile logo */}
          <div className="bg-indigo-500 rounded-lg max-h-[250px] w-full mb-2 block lg:hidden">
            <img className="w-[200px] p-2 block lg:hidden" src={megapartsLogo} alt="img" />
            <img className="mx-auto rounded-lg block lg:hidden relative top-4 w-[80%] h-[180px]" src={mobileDetails} alt="" />
          </div>
          {/* Desktop logo */}
          <img className="w-[270px] relative lg:block hidden -top-12 right-12" src={megapartsLogo} alt="img" />
          <h1 className="text-xl lg:text-2xl hidden lg:block">Register from your email</h1>

          <label className="my-1 sm:my-2 text-xl">
            Phone number
            <Input
            className="border-2 h-14 sm:h-[70px] border-b-green-500"
            type="text"
            placeholder="Enter your phone number"
            required
          />
          </label>

          <label className="text-xl">
            Username
          <Input
            className="h-14 sm:h-[70px] border-2 border-b-green-500"
            type="text"
            placeholder="Enter your username"
            required
          />
          </label>
          <label className="text-xl">
            Enter your password
          <Input
            className="h-14 sm:h-[70px] border-2 border-b-green-500"
            type="password"
            placeholder="Enter your password here"
            required
          />
          </label>
          <div className="flex justify-between items-center space-x-2">
           <div className=" space-x-2">
           <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Remember me?
            </label>
           </div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Forgot password?
            </label>
          </div>
          <Button className="w-full h-14 sm:h-[70px] mt-3">Register</Button>
          <p><span>Already have an account? </span><Link className="text-indigo-500" to="/">Login</Link></p>
        </form>
      </div>
      <div className="w-full h-full hidden lg:block xl:w-1/2">
        <div className="w-full h-full flex justify-end items-center">
        <img className="rounded-lg absolute top-12 right-12 w-[500px] h-[570px] xl:w-[553px] xl:h-[638px] hidden lg:block" src={detailsLoginRegister} alt="" />
          <div className="h-full bg-indigo-500 w-2/3">
          </div>
        </div>
      </div>
    </section>  
  );
}
