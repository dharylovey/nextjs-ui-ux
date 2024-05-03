import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 mx-auto max-w-screen-xl">
      <div className=" px-4 py-28 lg:flex lg:h-[65vh] lg:items-baseline">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Discover the power of user-centric design.
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Elevate your brand.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Understanding user behavior drives conversions. Analyze user flow to
            optimize strategies and enhance experiences, fostering lasting
            customer relationships.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className=" rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/80 sm:w-auto"
              href="#"
            >
              Get Started
            </Link>

            <Link
              className=" rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
