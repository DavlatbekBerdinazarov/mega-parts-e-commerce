import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  detailsLoginRegister,
  megapartsLogo,
  mobileDetails,
} from "../assets/images/z-index";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const onSignin = (e) => {
    e.preventDefault();
    if(phoneNumber == "100") {
      navigate("/homepage")
    }
    console.log("Error")
  };
  return (
    <section className=" h-screen w-full flex justify-between">
      <div className="w-full h-full xl:w-2/3 flex justify-center items-center">
        <form onSubmit={onSignin} className="w-full md:w-3/4 h-full px-4 xl:px-12 justify-around lg:justify-center flex flex-col gap-3 sm:gap-3 ">
          {/* Mobile logo */}
          <div className="bg-indigo-500 rounded-lg max-h-[250px] w-full mb-2 block lg:hidden">
            <img className="w-[200px] p-2 block lg:hidden" src={megapartsLogo} alt="img" />
            <img className="mx-auto rounded-lg block lg:hidden relative top-4 w-[80%] h-[180px]" src={mobileDetails} alt="" />
          </div>

          {/* Desktop logo */}
          <img className="w-[270px] relative hidden lg:block -top-16 right-16" src={megapartsLogo} alt="img" />
          <h1 className="text-xl lg:text-2xl hidden lg:block">Login here</h1>

          <label className="my-1 sm:my-2 text-xl">
            Phone number
            <Input
            className="border-2 h-14 sm:h-[70px] border-b-green-500"
            type="text"
            placeholder="Enter your phone number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          </label>
          <label className="text-xl">
            Enter your password
          <Input
            className="h-14 sm:h-[70px] border-2 border-b-green-500"
            type="password"
            placeholder="Enter your password here"
            onChange={(e) => setPassword(e.target.value)}
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
          <Button type="submit" className="w-full h-14 sm:h-[70px] mt-3">Login</Button>
          <p><span>Don't have an account? </span><Link className="text-indigo-500" to="/register">Register</Link></p>
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
