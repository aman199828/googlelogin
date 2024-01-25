import Image from "next/image";
import logo from "../../public/google.png";
export default function Home() {
  return (
    <div>
      <div className="flex gap-3 items-center border p-2 w-[300px] ml-5 ">
        <Image src={logo} alt="Picture of the author" width={30} height={30} />
        <p className="font-bold">Sign In with Google</p>
      </div>
    </div>
  );
}
