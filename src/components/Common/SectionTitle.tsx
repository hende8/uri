const SectionTitle = ({
  eyebrow,
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-secondary ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="accent-rule" />
          {eyebrow}
        </span>
      )}
      <h2 className="mb-5 text-3xl font-extrabold leading-tight! text-black sm:text-4xl md:text-[42px]">
        {title}
      </h2>
      {paragraph && (
        <p className="text-base leading-relaxed! text-body-color md:text-lg">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
