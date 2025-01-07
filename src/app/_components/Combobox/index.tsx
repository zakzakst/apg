"use client";
// NOTE: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

import { useMemo, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { combobox as styles } from "./styles.css";

type Props = {
  id: string;
  label: string;
};

const Combobox = ({ id, label }: Props) => {
  const labelId = useMemo(() => `label-${id}`, [id]);
  const comboboxId = useMemo(() => `combobox-${id}`, [id]);
  const listboxId = useMemo(() => `listbox-${id}`, [id]);
  return (
    <div className={classNames(styles.main)}>
      <div id={labelId}>{label}</div>
      <div
        aria-controls={listboxId}
        aria-expanded="false"
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        id={comboboxId}
        role="combobox"
        // TODO: 読む
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
        tabIndex={0}
      ></div>
      <div
        role="listbox"
        // TODO: 読む
        // https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role
        id={listboxId}
        aria-labelledby={labelId}
        tabIndex={-1}
      ></div>
    </div>
  );
};

export default Combobox;
