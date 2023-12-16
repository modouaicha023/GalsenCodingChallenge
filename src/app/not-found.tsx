import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/../public/images/404.svg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="text-center">
      <div className=" font-bold text-lg text-center m-10">
        Page not found🤧
      </div>
      <Image
        src={notFoundImage}
        alt={"not found"}
        width={400}
        height={400}
        className=" mx-auto "
      />
      <Link href="/">
        <Button className="p-4"><ArrowLeft size={48} strokeWidth={1} absoluteStrokeWidth={true}/> Back to home</Button>
      </Link>
    </div>
  );
}
