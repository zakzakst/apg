---
to: src/app/_components/<%= h.capitalize(name) %>/index.tsx
---
"use client";
// NOTE:

// import { useMemo, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { <%= name %> as styles } from "./styles.css";

type Props = {
  title: string;
};

const <%= h.capitalize(name) %> = ({ title }: Props) => {
  return (
    <div className={classNames(styles.main)}>{title}</div>
  );
};

export default <%= h.capitalize(name) %>;