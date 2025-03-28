"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Sidebar from "@/components/Sidebar";

export default function page() {
  return (
    <div className="w-full flex">
      <div className="first hidden sm:flex w-[25%]">
        <Sidebar />
      </div>
      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="relative w-full flex flex-col lg:flex-row md:flex-row gap-5  items-center justify-around">
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div className="inline-block">
              <Image src={"/View.png"} alt="" width={492} height={360} />
            </div>
            <div className=" flex  w-full items-center justify-start gap-4 lg:gap-2">
              <Image src={"/View 1.png"} alt="" width={148} height={124} />
              <Image src={"/View 2.png"} alt="" width={148} height={124} />
              <Image src={"/View 3.png"} alt="" width={148} height={124} />
            </div>
          </div>
          <div className="flex flex-col w-full  lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-end rounded-xl shadow-md">
            <Image
              src={"/Detail Car (1).png"}
              alt="Detail Car"
              width={492}
              height={508}
              className="w-full h-auto rounded-t-xl object-cover"
            />

            <div className="p-4 flex  items-center gap-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                  $80.00 /{" "}
                  <span className="text-gray-500 text-sm lg:text-base">
                    day $100.00
                  </span>
                </h1>
              </div>
              <Link href={"/paymentPage"}>
                <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className=" w-full flex items-center justify-center">
          <Image
            src={"/Reviews.png"}
            alt=""
            width={1010}
            height={452}
            className=" hidden md:flex"
          />
          <Image
            src={"/Reviews (1).png"}
            alt=""
            width={492}
            height={384}
            className=" md:hidden"
          />
        </section>
        <section className="popular w-full flex flex-col gap-5">
          <div className="first w-full flex items-center justify-between px-10 xl:px-14">
            <h1 className="text-gray-500 text-lg sm:text-xl">Recent Car</h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                View All
              </h1>
            </Link>
          </div>
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-5 ">
            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  Koenigsegg{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car1.png"} alt="" width={220} height={68} />
                <Image src={"/spec1.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $99.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  NissanGT - R{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car2.png"} alt="" width={220} height={68} />
                <Image src={"/spec2.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $100.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  Rolls-Royce{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sedan</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car3.png"} alt="" width={220} height={68} />
                <Image src={"/spec3.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $96.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Rush{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car5.png"} alt="" width={220} height={68} />
                <Image src={"/spec5.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $72.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $80.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  CR - V{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car6.png"} alt="" width={220} height={68} />
                <Image src={"/spec6.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Terios{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car7.png"} alt="" width={220} height={68} />
                <Image src={"/spec7.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $74.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
