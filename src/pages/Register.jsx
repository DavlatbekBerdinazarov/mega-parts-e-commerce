import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import {
  LoginBackground,
  Logo,
  HomepageBanner,
  LoginBgBanner
} from "../assets/images/z-index";
import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <div className="p-[50px] w-full h-screen">
      <img src={Logo} alt="logo" />
      <div className=" h-full flex justify-around">
        <form className="w-[550px] p-12 flex flex-col gap-3">
          <h1 className="text-3xl my-1">Register with your email</h1>

          <label className="my-4 text-xl">
            Phone number
            <Input
            className=" border-2 h-14 mt-3 border-b-green-500"
            type="text"
            placeholder="Enter your phone number"
          />
          </label>

          <label className="text-xl" htmlFor="">
            Username
          <Input
            className="h-14 border-2 mt-3 border-b-green-500"
            type="text"
            placeholder="Enter your password here"
          />
          </label>
          <label className="text-xl" htmlFor="">
            Enter your password
          <Input
            className="h-14 border-2 mt-3 border-b-green-500"
            type="password"
            placeholder="Enter your password here"
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
          <Button className="w-full h-14 mt-4">Login</Button>
        </form>
        <div className=" max-h-full ">
         <img className="w-[557px] rounded-2xl" src={LoginBackground} alt="" />
        </div>
      </div>
      <img className="fixed right-0 top-0 -z-30" src={LoginBgBanner} alt="" />
    </div>
  );
}
