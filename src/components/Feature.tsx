import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Feature() {
  return (
    <section className=" max-w-screen-xl mx-auto overflow-hidden bg-white sm:grid sm:grid-cols-2 py-28">
      <div className="p-8 flex justify-center items-center md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-start ltr:sm:text-left rtl:sm:text-right">
          <span className=" text-sm font-semibold  tracking-wide text-primary p-2 mb-4 rounded-full bg-primary/10">
            Our Promise
          </span>
          <h2 className="text-xl font-bold text-gray-900 md:text-3xl pt-4">
            Tool built for people.
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom. Circle has 100+ integrations with tools you
            already use and love.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="#"
              className=" rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Image
        alt="image"
        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover sm:h-full rounded p-4"
        width={1000}
        height={1000}
      />
    </section>
  );
}
