import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="תחומי השמאות שלנו"
            paragraph="המשרד מתמחה במגוון רחב של שמאות נזקי רכוש – מנזקי מים יומיומיים ועד תיקים מורכבים של אובדן רכוש ושריפה. בכל תיק אנחנו מעמידים לרשותכם ניסיון של למעלה מעשור בענף."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
