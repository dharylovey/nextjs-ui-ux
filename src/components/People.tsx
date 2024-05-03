import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoCreateOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { BsCollection } from "react-icons/bs";
import { TbAnalyze } from "react-icons/tb";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function People() {
  return (
    <section className="mx-auto max-w-screen-xl flex flex-col justify-center py-28 px-4">
      <div className="text-center">
        <span className="text-sm font-semibold  text-primary p-2 mb-8 rounded-full bg-primary/10">
          Built for People
        </span>
        <h1 className=" text-xl sm:text-2xl mt-4 antialiased">
          <span className="text-gray-950 font-semibold">Easy</span> for
          beginners.{" "}
          <span className="text-gray-950 font-semibold">Powerfull</span> for
          experts.
        </h1>
      </div>
      <div className="mx-auto mt-6 flex justify-center">
        <Tabs defaultValue="create" className=" flex-col justify-center">
          <TabsList className=" justify-center">
            <TabsTrigger value="create">
              <span className="pr-2 hidden sm:block">
                <IoCreateOutline />
              </span>
              Create
            </TabsTrigger>
            <TabsTrigger value="distribute">
              <span className="pr-2 hidden sm:block">
                <CiLight />
              </span>
              Distribute
            </TabsTrigger>
            <TabsTrigger value="collect">
              <span className="pr-2 hidden sm:block">
                <BsCollection />
              </span>
              Collect
            </TabsTrigger>
            <TabsTrigger value="analyze">
              <span className="pr-2 hidden sm:block">
                <TbAnalyze />
              </span>
              Analyze
            </TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-2 sm:p-8 lg:px-16">
              <div className="text-center sm:text-start">
                <h2 className="text-3xl text-gray-950 font-semibold mb-2">
                  Create
                </h2>
                <h4 className="text-xl text-gray-950 mb-4">
                  Advanced research software
                </h4>
                <p className="text-gray-500 sm:w-[320px] lg:w-[400px] antialiased leading-relaxed mb-8 text-start">
                  Ask the right questions and get the answers you need with the
                  most secure and collaborative surver platform on th market
                  featuring powerful logic, sophisticated analytics, and
                  built-in automation and integrations.
                </p>
                <Link
                  className="w-full mt-4 rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <Image
                  src={"/images/screenshot.svg"}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                  className="h-56 w-full object-cover sm:h-full rounded pt-2"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="distribute">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-2 sm:p-8 lg:px-16">
              <div className="text-center sm:text-start">
                <h2 className="text-3xl text-gray-950 font-semibold mb-2">
                  Create
                </h2>
                <h4 className="text-xl text-gray-950 mb-4">
                  Advanced research software
                </h4>
                <p className="text-gray-500 sm:w-[320px] lg:w-[400px] antialiased leading-relaxed mb-8 text-start">
                  Ask the right questions and get the answers you need with the
                  most secure and collaborative surver platform on th market
                  featuring powerful logic, sophisticated analytics, and
                  built-in automation and integrations.
                </p>
                <Link
                  className="w-full mt-4 rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <Image
                  src={"/images/screenshot.svg"}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                  className="h-56 w-full object-cover sm:h-full rounded pt-2"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="collect">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-2 sm:p-8 lg:px-16">
              <div className="text-center sm:text-start">
                <h2 className="text-3xl text-gray-950 font-semibold mb-2">
                  Create
                </h2>
                <h4 className="text-xl text-gray-950 mb-4">
                  Advanced research software
                </h4>
                <p className="text-gray-500 sm:w-[320px] lg:w-[400px] antialiased leading-relaxed mb-8 text-start">
                  Ask the right questions and get the answers you need with the
                  most secure and collaborative surver platform on th market
                  featuring powerful logic, sophisticated analytics, and
                  built-in automation and integrations.
                </p>
                <Link
                  className="w-full mt-4 rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <Image
                  src={"/images/screenshot.svg"}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                  className="h-56 w-full object-cover sm:h-full rounded pt-2"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analyze">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-2 sm:p-8 lg:px-16">
              <div className="text-center sm:text-start">
                <h2 className="text-3xl text-gray-950 font-semibold mb-2">
                  Create
                </h2>
                <h4 className="text-xl text-gray-950 mb-4">
                  Advanced research software
                </h4>
                <p className="text-gray-500 sm:w-[320px] lg:w-[400px] antialiased leading-relaxed mb-8 text-start">
                  Ask the right questions and get the answers you need with the
                  most secure and collaborative surver platform on th market
                  featuring powerful logic, sophisticated analytics, and
                  built-in automation and integrations.
                </p>
                <Link
                  className="w-full mt-4 rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <Image
                  src={"/images/screenshot.svg"}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                  className="h-56 w-full object-cover sm:h-full rounded pt-2"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
