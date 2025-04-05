import React from "react";

const BreadCrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index} className="breadcrumb-item">
          {index !== path.length - 1 ? (
            <>
              <a href={path.href}>{path.label}</a>
              <span className="seperator">/</span>
            </>
          ) : (
            <span className="current">{path.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumb;
