---
Name: <%= h.capitalize(name) %>
to: src/app/_components/<%= Name %>/index.tsx
---
"use client";
// NOTE:

// import { useMemo, useState, useEffect, useId } from "react";
// import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { <%= name %> as styles } from "./styles.css";

type Props = {
  title: string;
};

const <%= Name %> = ({ title }: Props) => {
  return (
    <div className={classNames(styles.main)}>{title}</div>
  );
};

export default <%= Name %>;