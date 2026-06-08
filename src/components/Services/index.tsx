import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          eyebrow="תחומי שמאות"
          title="תחומי השמאות שלנו"
          paragraph="המשרד מתמחה במגוון רחב של שמאות נזקי רכוש – מנזקי מים יומיומיים ועד תיקים מורכבים של אובדן רכוש ושריפה. בכל תיק אנחנו מעמידים לרשותכם ניסיון של למעלה מעשור בענף."
          center
          mb="72px"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <SingleService key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
