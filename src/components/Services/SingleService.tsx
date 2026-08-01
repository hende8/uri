import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { title } = service;
  return (
    <div className="group flex h-full items-center justify-center rounded-sm border border-stroke-stroke bg-white p-8 text-center transition duration-300 hover:border-primary hover:shadow-two">
      <h3 className="text-xl font-bold text-black sm:text-2xl">
        {title}
      </h3>
    </div>
  );
};

export default SingleService;
