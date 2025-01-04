"use client";
// https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/ （Checkbox (Mixed-State) Exampleのほう）

import { useMemo } from "react";
import classNames from "classnames";
// import { checkbox as styles } from "./styles.css";

// TODO:
// - スタイル付ける
// - 1つ目の要素は必須の型定義、ジェネリクス型つかって汎用化できないか考える
// - onChangeInputなどでas CheckboxItemsをつけているが、より良い方法がないか考える

type CheckboxItem = {
  id: string;
  label: string;
  checked: boolean;
};

export type CheckboxItems = [CheckboxItem, ...CheckboxItem[]];

type Props = {
  legend: string;
  // NOTE: 1つ以上のチェックボックスがあることを保証するため、1つ目の要素は必須としている
  items: CheckboxItems;
  className?: string;
  onChange: (items: CheckboxItems) => void;
};

const Checkbox = ({ legend, items, className, onChange }: Props) => {
  const allChecked = useMemo(() => {
    const isAllChecked = items.every((item) => item.checked === true);
    const isAllUnChecked = items.every((item) => item.checked === false);
    return isAllChecked ? "true" : isAllUnChecked ? "false" : "mixed";
  }, [items]);

  const allControls = useMemo(() => {
    return items.map((item) => item.id).join(" ");
  }, [items]);

  const onChangeInput = (id: string) => {
    const changedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ) as CheckboxItems;
    onChange(changedItems);
  };

  const onClickAll = () => {
    const isAllChecked = allChecked === "true";
    const changedItems = items.map((item) => ({
      ...item,
      checked: !isAllChecked,
    })) as CheckboxItems;
    onChange(changedItems);
  };

  return (
    <fieldset
      // className={classNames(className, styles.main)}
      className={classNames(className)}
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
        {items.map((item) => (
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
