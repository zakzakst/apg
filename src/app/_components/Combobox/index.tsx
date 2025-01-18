"use client";
// NOTE:
// - https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ （Select-Only Combobox Example）
// - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
//  - https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Roles/listbox_role

import {
  useMemo,
  useState,
  useEffect,
  useRef,
  useId,
  FocusEvent as ReactFocusEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
// import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { combobox as styles } from "./styles.css";

export type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: Option[];
  currentValue: string;
  onChange: (value: string) => void;
};

const SelectActions = {
  Close: 0,
  CloseSelect: 1,
  First: 2,
  Last: 3,
  Next: 4,
  Open: 5,
  PageDown: 6,
  PageUp: 7,
  Previous: 8,
  Select: 9,
  Type: 10,
};

const getActionFromKey = (
  e: ReactKeyboardEvent<HTMLDivElement>,
  isListboxOpen: boolean
) => {
  const { key, altKey, ctrlKey, metaKey } = e;
  const openKeys = ["ArrowDown", "ArrowUp", "Enter", " "];
  if (!isListboxOpen && openKeys.includes(key)) {
    return SelectActions.Open;
  }
  if (key === "Home") {
    return SelectActions.First;
  }
  if (key === "end") {
    return SelectActions.Last;
  }
  if (
    key === "Backspace" ||
    key === "Clear" ||
    (key.length === 1 && key !== " " && !altKey && !ctrlKey && !metaKey)
  ) {
    return SelectActions.Type;
  }
  if (isListboxOpen) {
    if (key === "ArrowUp" && altKey) {
      return SelectActions.CloseSelect;
    } else if (key === "ArrowDown" && !altKey) {
      return SelectActions.Next;
    } else if (key === "ArrowUp") {
      return SelectActions.Previous;
    } else if (key === "PageUp") {
      return SelectActions.PageUp;
    } else if (key === "PageDown") {
      return SelectActions.PageDown;
    } else if (key === "Escape") {
      return SelectActions.Close;
    } else if (key === "Enter" || key === " ") {
      return SelectActions.CloseSelect;
    }
  }
};

const Combobox = ({ label, options, currentValue, onChange }: Props) => {
  // const [id, setId] = useState<string>("");
  const id = useId();
  const [isListboxOpen, setIsListboxOpen] = useState<boolean>(false);
  const labelId = useMemo(() => `label-${id}`, [id]);
  const comboboxId = useMemo(() => `combobox-${id}`, [id]);
  const listboxId = useMemo(() => `listbox-${id}`, [id]);
  const currentOption = options.find((option) => option.value === currentValue);
  const comboboxRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const [searchTimeout, setSearchTimeout] = useState<
    number | NodeJS.Timeout | null
  >(null);
  const [searchString, setSearchString] = useState<string>("");

  const onClickLabel = () => {
    comboboxRef.current?.focus();
  };
  const getSearchString = (letter: string) => {
    const SearchTypeInterval = 500;
    if (typeof searchTimeout === "number") {
      window.clearTimeout(searchTimeout);
    }
    setSearchTimeout(
      window.setTimeout(() => {
        setSearchString("");
      }, SearchTypeInterval)
    );
    const updatedSearchString = searchString + letter;
    setSearchString(updatedSearchString);
    return updatedSearchString;
  };
  const getIndexByLetter = (letter: string): number => {
    // TODO: 元コードのgetIndexByLetterのところ対応
    return -1;
  };
  const onTypeCombobox = (letter: string) => {
    setIsListboxOpen(true);
    const currentSearchString = getSearchString(letter);
    const searchIndex = getIndexByLetter(currentSearchString);
    console.log(searchIndex);
    // TODO: 元コードのonComboTypeのところ対応
  };
  const onBlurCombobox = (e: ReactFocusEvent<HTMLDivElement>) => {
    if (listboxRef.current?.contains(e.relatedTarget)) return;
    if (isListboxOpen) {
      // TODO: 選択中の項目をcurrentに設定（キーボード移動でアクティブな項目 ※参考コードのjsだとactiveIndex。おそらくuseStateで変数作る必要ある？）
      // onChange()
      setIsListboxOpen(false);
    }
  };
  const onClickCombobox = () => {
    setIsListboxOpen(!isListboxOpen);
  };
  const onKeyDownCombobox = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    const max = options.length - 1;
    const action = getActionFromKey(e, isListboxOpen);

    switch (action) {
      case SelectActions.Last:
      case SelectActions.First:
        setIsListboxOpen(true);
        return;

      case SelectActions.Next:
      case SelectActions.Previous:
      case SelectActions.PageUp:
      case SelectActions.PageDown:
        e.preventDefault();
        // TODO: 元コードのonOptionChangeのところ対応
        return;

      case SelectActions.CloseSelect:
        e.preventDefault();
        // TODO: 元コードのselectOptionのところ対応
        return;

      case SelectActions.Close:
        e.preventDefault();
        setIsListboxOpen(false);
        return;

      case SelectActions.Type:
        e.preventDefault();
        onTypeCombobox(key);
        return;

      case SelectActions.Open:
        e.preventDefault();
        setIsListboxOpen(true);
        return;
    }
  };
  const onClickOption = (value: string) => {
    onChange(value);
    setIsListboxOpen(false);
  };
  const onMousedownOption = () => {};

  // useEffect(() => {
  //   setId(uuidv4());
  // }, []);

  return (
    <div className={classNames(styles.main)}>
      <div id={labelId} onClick={onClickLabel}>
        {label}
      </div>
      <div
        aria-controls={listboxId}
        aria-expanded="false"
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={
          currentValue ? `${id}-${currentValue}` : undefined
        }
        id={comboboxId}
        role="combobox"
        tabIndex={0}
        ref={comboboxRef}
        onBlur={onBlurCombobox}
        onClick={onClickCombobox}
        onKeyDown={onKeyDownCombobox}
      >
        {currentOption?.label || "項目を選択してください"}
      </div>
      <div
        role="listbox"
        id={listboxId}
        aria-labelledby={labelId}
        tabIndex={-1}
        onBlur={onBlurCombobox}
        ref={listboxRef}
        // TODO: 一旦暫定対応。タグ側ではdata属性に開閉状態を反映させて、スタイルはCSSで設定する
        style={{
          display: isListboxOpen ? "block" : "none",
        }}
      >
        {options.map((option) => {
          const optionId = `${id}-${option.value}`;
          return (
            <div
              key={optionId}
              role="option"
              aria-selected={option.value === currentValue}
              id={optionId}
              onClick={() => onClickOption(option.value)}
              onMouseDown={onMousedownOption}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Combobox;
