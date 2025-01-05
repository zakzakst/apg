"use client";
// NOTE: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

// import { useMemo, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { combobox as styles } from "./styles.css";

type Props = {
  title: string;
};

const Combobox = ({ title }: Props) => {
  return <div className={classNames(styles.main)}>{title}</div>;
};

export default Combobox;
