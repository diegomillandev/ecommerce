import { loader } from "@/assets";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={loader}
        alt="Loading..."
        className="mx-auto my-10"
        width={150}
        height={150}
      />
    </div>
  );
}
