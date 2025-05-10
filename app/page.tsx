"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/login");
  // });
  return (
    <>
      <div className="grid grid-row-[61px_1fr]">
        <Navbar />

        <div className="flex justify-center items-center" style={{ height: "calc(100vh - 61px)" }}>
          <h1></h1>
        </div>
      </div>
    </>
  );
}
