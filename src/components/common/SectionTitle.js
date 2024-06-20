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
            style={{ color: "#3fa9f5" }}
            className={`h5 ${dark ? "text-warning" : "text-primary"}`}
          >
            {title}
          </h4>
          <h2
            style={{ color: "#3fa9f5" }}
            className={`${textWhite ? "text-white" : ""}`}
          >
            {subtitle}
          </h2>
          <p style={{ color: "black" }}>{description}</p>
        </div>
      ) : (
        <div
          className={`${
            centerAlign ? "section-heading text-center" : "section-heading"
          } ${classNam}`}
        >
          <h2 style={{ color: "#3fa9f5" }}>{title}</h2>
          <p style={{ color: "black" }}>{description}</p>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
