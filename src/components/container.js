import React from "react";
import * as containerStyles from "src/styles/container.module.css";

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>;
}
