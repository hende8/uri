import SectionHeading from "../Common/SectionHeading";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="max-w-[1080px]">
          <SectionHeading title="תחומי השמאות" />

          <ul className="mt-10 grid md:mt-12 md:grid-cols-2 md:gap-x-16">
            {servicesData.map((service) => (
              <li
                key={service.id}
                className="flex items-center gap-3 border-t border-black/10 py-5 text-lg font-semibold text-black md:text-xl"
              >
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
