"use client";
// https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/ （Checkbox (Mixed-State) Exampleのほう）

import { useState, useMemo } from "react";
import classNames from "classnames";
import { checkbox as styles } from "./styles.css";

// TODO:
// - スタイル付ける
// - チェックボックスの項目をPropsで受け取る

type CheckItem = {
  id: string;
  label: string;
  checked: boolean;
};

type Props = {
  legend: string;
  className?: string;
};

const Checkbox = ({ legend, className }: Props) => {
  const [checkItems, setCheckItems] = useState<CheckItem[]>([
    { id: "check1", label: "Check 1", checked: false },
    { id: "check2", label: "Check 2", checked: false },
  ]);

  const allChecked = useMemo(() => {
    const isAllChecked = checkItems.every((item) => item.checked === true);
    const isAllUnChecked = checkItems.every((item) => item.checked === false);
    return isAllChecked ? "true" : isAllUnChecked ? "false" : "mixed";
  }, [checkItems]);

  const allControls = useMemo(() => {
    return checkItems.map((item) => item.id).join(" ");
  }, [checkItems]);

  const onChangeInput = (id: string) => {
    setCheckItems(
      checkItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const onClickAll = () => {
    const isAllChecked = allChecked === "true";
    setCheckItems(
      checkItems.map((item) => ({ ...item, checked: !isAllChecked }))
    );
  };

  return (
    <fieldset
      className={classNames(className, styles.main)}
      // className={classNames(className)}
    >
      <legend>{legend}</legend>
      <div
        role="checkbox"
        aria-checked={allChecked}
        aria-controls={allControls}
        tabIndex={0}
        onClick={onClickAll}
      >
        All
      </div>
      <ul>
        {checkItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              checked={item.checked}
              onChange={() => onChangeInput(item.id)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Checkbox;
