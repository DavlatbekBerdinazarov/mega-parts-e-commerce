import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import {
  LoginBackground,
  Logo,
  HomepageBanner,
  LoginBgBanner
} from "../assets/images/z-index";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onSignin = (e) => {
    e.preventDefault()

    navigate("/homepage")
  };
  return (
    <div className="p-[50px] w-full h-screen">
      <img src={Logo} alt="logo" />
      <div className=" h-full flex justify-around">
        <form onSubmit={onSignin} className="w-[550px] p-16 flex flex-col gap-4">
          <h1 className="text-3xl my-3">Login with your email</h1>

          <label className="my-4 text-xl">
            Phone number
            <Input
            className=" border-2 h-14 mt-3 border-b-green-500"
            type="text"
            placeholder="Enter your phone number"
          />
          </label>

          <label className="text-xl" htmlFor="">
            Enter your password
          <Input
            className="h-14 border-2 mt-3 border-b-green-500"
            type="password" placeholder="Enter your password"
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
          <Button className="w-full h-14 mt-8">Login</Button>
          <Link to="/register">Dont have account register now?</Link>
        </form>
        <div className=" max-h-full ">
         <img className="w-[557px] rounded-2xl" src={LoginBackground} alt="" />
        </div>
      </div>
      <img className="fixed right-0 top-0 -z-30" src={LoginBgBanner} alt="" />

    </div>
  );
}
