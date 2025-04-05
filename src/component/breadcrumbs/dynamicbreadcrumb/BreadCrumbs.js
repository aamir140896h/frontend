import React from "react";
import { Link, useLocation } from "react-router-dom";
import breadcrumbsMap from "./breadCrumbconfig";
import "./breadcrumb.css";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter(Boolean);
  console.log(pathNames);

  const buildPath = (index) => "/" + pathNames.slice(0, index + 1).join("/");

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
      {pathNames.map((_, index) => {
        const path = buildPath(index);
        const isLast = index === pathNames.length - 1;
        const label = breadcrumbsMap[path] || pathNames[index];

        return (
          <span key={path} className="breadcrumb-item">
            <span className="seperator">/</span>
            {isLast ? (
              <span className="current">{label}</span>
            ) : (
              <Link to={path}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
