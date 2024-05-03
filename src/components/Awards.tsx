import Image from "next/image";
import { Card, CardTitle } from "./ui/card";

const cardData = [
  {
    id: 1,
    title: "Market leader across 18 categories",
    image: "/images/image1.svg",
    color: "#FFF5F3",
  },
  {
    id: 2,
    title: "Most loved Saas tool in 2021",
    image: "/images/image2.svg",
    color: "#FFF0F9",
  },
  {
    id: 3,
    title: "Category leader in 2022",
    image: "/images/image3.svg",
    color: "#ECFFFF",
  },
  {
    id: 4,
    title: "Most recommended tool in 2021",
    image: "/images/image4.svg",
    color: "#F6F4FF",
  },
  {
    id: 5,
    title: "Champion in survey tool 2022",
    image: "/images/image5.svg",
    color: "#FFF9E7",
  },
  {
    id: 6,
    title: "Top performer spring 2021",
    image: "/images/image6.svg",
    color: "#FFEDE4",
  },
];

export default function Awards() {
  return (
    <section className="mx-auto max-w-screen-xl flex flex-col justify-center bg-gray-100 py-28 px-4">
      <div className="text-center">
        <span className="text-sm font-semibold  text-primary p-2 mb-8 rounded-full bg-primary/10">
          Awards
        </span>
        <h1 className=" text-xl sm:text-2xl mt-4 antialiased">
          An{" "}
          <span className="text-gray-950 font-semibold antialiased">
            Award Winning
          </span>{" "}
          platform,{" "}
          <span className="text-gray-950 font-semibold antialiased ">
            loved by customers.
          </span>
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 max-w-screen-xl gap-4 mx-auto ">
        {cardData.map((card) => (
          <div key={card.id} className="group">
            <Card
              className={`flex flex-col justify-center items-center  w-[300px] h-[300px] md:w-[200px] md:h-[200px]  lg:w-[300px] lg:h-[300px] rounded-3xl  transition duration-500 group-hover:scale-105`}
              style={{ backgroundColor: card.color }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
                className="object-cover mb-2"
                priority
              />
              <CardTitle className="text-center w-36">{card.title}</CardTitle>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
