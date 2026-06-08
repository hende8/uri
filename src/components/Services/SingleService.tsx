import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph } = service;
  return (
    <div className="group relative flex h-full flex-col rounded-sm border border-stroke-stroke bg-white p-8 transition duration-300 hover:border-primary hover:shadow-two">
      <div className="mb-7 flex h-[60px] w-[60px] items-center justify-center rounded-sm bg-primary/5 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-body-color">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleService;
