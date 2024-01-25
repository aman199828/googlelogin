"use client";
import Image from "next/image";
import logo from "../../public/google.png";
import profile from "../../public/profile.svg";
import cart from "../../public/cart.svg";
import instagram from "../../public/instagram.svg";
import discord from "../../public/discord.svg";
import axios from "axios";
export default function app() {
  const handleClick = async () => {
    const response = await axios.post("http://localhost:5050/auth/googlelogin");
    const data = await response.data;
    navigate1(data.url);
  };
  function navigate1(url) {
    window.location.href = url;
  }
  return (
    <>
      <div className="max-w-md border border-black shadow-xl py-5 flex flex-col justify-between mx-auto h-[700px] my-10 rounded-2xl">
        <div className="px-5">
          <header className="flex justify-between items-center">
            <h4 className="text-2xl text-[#B00EC4]">artefax.ai</h4>
            <div className="flex gap-5">
              <p>shop</p>
              <p>create</p>
              <Image
                src={profile}
                alt="Picture of the author"
                width={20}
                height={20}
              />
              <Image
                src={cart}
                alt="Picture of the author"
                width={20}
                height={20}
              />
            </div>
          </header>
          <div className="text-center mt-10">
            <h2 className="text-3xl text-[#B00EC4]"> creator login/ sign up</h2>
            <p className="my-2">
              start creating & selling your brand to your audience. Customizing
              to your heart's desire! What is possible is infinite!
            </p>
            <div
              className="flex gap-3 items-center bg-gray-50 py-2 rounded-md w-fit mx-auto px-5 border mt-5"
              onClick={handleClick}
            >
              <Image
                src={logo}
                alt="Picture of the author"
                width={30}
                height={30}
              />
              <p className="font-bold">Sign In with Google</p>
            </div>
          </div>
        </div>
        <footer className="border-t border-[#B00EC4]">
          <div className=" flex justify-between items-center px-5 my-2">
            <h4 className="text-2xl text-[#B00EC4]">artefax.ai</h4>
            <div className="flex gap-5">
              <Image
                src={instagram}
                alt="Picture of the author"
                width={20}
                height={20}
              />
              <Image
                src={discord}
                alt="Picture of the author"
                width={25}
                height={20}
              />
            </div>
          </div>
          <p className="text-[#B00EC4] text-xs px-5">
            LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </footer>
      </div>
    </>
  );
}
