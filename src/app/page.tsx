"use client";

import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="flex flex-col gap-8 w-[95%] md:w-[50%]">
        <div className="flex gap-2 text-[40px]">
          <div>WELCOME TO</div>
          <div className=" text-amber-300">HOME</div>
        </div>
        <div className="">
          Discover the ideal dwelling that suits your lifestyle with Home. Our
          platform is designed to simplify your search for a new home, offering
          a seamless and enjoyable experience.
        </div>
        <Button
          className="!p-3 !text-amber-300 !border-amber-300 !hover:bg-amber-300 !hover:text-black animate-pulse"
          variant="outlined"
          onClick={() => router.push("/sign-up")}
        >
          {"LET'S GET STARTED"}
        </Button>
      </div>
    </main>
  );
}
