import Image from "next/image";
import SectionHeading from "../Common/SectionHeading";
import casesData from "./casesData";

const Cases = () => {
  return (
    <section id="cases" className="bg-cream py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          title="גלריה"
        />

        <ul className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {casesData.map((item) => (
            <li
              key={item.title}
              className="overflow-hidden rounded-sm border border-stroke-stroke bg-white shadow-one"
            >
              <div className="border-b-2 border-accent p-5 md:p-6">
                <h3 className="text-lg font-bold leading-snug text-black md:text-xl">
                  {item.title}
                </h3>
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cases;
