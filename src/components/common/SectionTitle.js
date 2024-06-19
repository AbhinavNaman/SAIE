import React from "react";

const SectionTitle = ({
  subtitle,
  dark,
  textWhite,
  title,
  centerAlign,
  description,
  classNam,
}) => {
  return (
    <>
      {subtitle !== undefined ? (
        <div
          className={`${
            centerAlign ? "section-heading text-center" : "section-heading"
          } ${classNam}`}
        >
          <h4
            style={{ color: "#fd8c29" }}
            className={`h5 ${dark ? "text-warning" : "text-primary"}`}
          >
            {title}
          </h4>
          <h2
            style={{ color: "#fd8c29" }}
            className={`${textWhite ? "text-white" : ""}`}
          >
            {subtitle}
          </h2>
          <p>{description}</p>
        </div>
      ) : (
        <div
          className={`${
            centerAlign ? "section-heading text-center" : "section-heading"
          } ${classNam}`}
        >
          <h2 style={{ color: "#fd8c29" }}>{title}</h2>
          <p style={{ color: "#ffffffd6" }}>{description}</p>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
