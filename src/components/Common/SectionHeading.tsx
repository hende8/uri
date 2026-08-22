const SectionHeading = ({
  title,
  paragraph,
  className = "",
}: {
  title: string;
  paragraph?: string;
  className?: string;
}) => (
  <div className={className}>
    <h2 className="max-w-[22ch] text-[1.75rem] font-extrabold leading-[1.14] tracking-[0] text-black sm:text-[2.125rem] md:text-[2.625rem] lg:text-[3.125rem]">
      {title}
    </h2>
    {paragraph && (
      <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    )}
  </div>
);

export default SectionHeading;
