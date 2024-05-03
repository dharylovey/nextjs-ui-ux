import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaGithub, FaDribbble  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <Label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </Label>

              <Input
                className="w-full rounded border-gray-200 bg-gray-100 p-6 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="example@gmail.com"
              />

              <Button className="absolute end-1 top-1/2 -translate-y-1/2 rounded bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary/80">
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <CiFacebook className="h-6 w-6" />
              </Link>

              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <CiInstagram className="h-6 w-6" />
              </Link>

              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Twitter </span>

                <CiTwitter className="h-6 w-6"/>
              </Link>

              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>

                <FaGithub className="h-6 w-6" />
              </Link>

              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Dribbble </span>

                <FaDribbble />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Marketing{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Graphic Design
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    App Development
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> About </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Our Team{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    FAQs{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Live Chat{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Dharyl 2024. All rights reserved.
            <br />
            Created with{" "}
            <Link
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              Next Js
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              ShadCn | HyperUi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
