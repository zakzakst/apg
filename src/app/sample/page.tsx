"use client";
import { useState, useMemo, useEffect } from "react";
import Sample from "@/app/_components/Sample";
import Accordion from "@/app/_components/Accordion";
import Alert from "@/app/_components/Alert";
import Breadcrumb, { BreadcrumbItems } from "@/app/_components/Breadcrumb";
import Button from "@/app/_components/Button";
import Checkbox, { CheckboxItems } from "@/app/_components/Checkbox";
import Combobox from "@/app/_components/Combobox";

import UsersRepository from "@/app/_repositories/users";

const comboboxOptions = [
  {
    value: "comboboxOption1",
    label: "comboboxOption1",
  },
  {
    value: "comboboxOption2",
    label: "comboboxOption2",
  },
];

const SamplePage = () => {
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false);
  const [checkboxItems, setCheckboxItems] = useState<CheckboxItems>([
    { id: "check1", label: "Check 1", checked: false },
    { id: "check2", label: "Check 2", checked: false },
  ]);
  const [comboboxValue, setComboboxValue] = useState("");

  const breadcrumbItems = useMemo<BreadcrumbItems>(() => {
    return [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/sample", label: "Sample" },
    ];
  }, []);

  useEffect(() => {
    (async () => {
      // TODO: エラーハンドリングも対応する
      const usersApi = UsersRepository();
      const usersItems = await usersApi.get();
      console.log(usersItems.data[0].address);
    })();
  }, []);

  return (
    <>
      <Sample />
      <Accordion
        title="accordion title"
        content="accordion content"
        expanded
        titleTag="h2"
        className="custom-class"
      />
      <Accordion title="accordion title 2" content="accordion content 2" />
      <button onClick={() => setIsShowAlert(!isShowAlert)}>
        アラート表示変更
      </button>
      <Alert isShow={isShowAlert} className="custom-class">
        アラート
      </Alert>
      <Breadcrumb
        items={breadcrumbItems}
        ariaLabel="パンくず"
        className="custom-class"
      />
      <Button
        pressed
        disabled
        haspopup
        onClick={() => console.log("on click button")}
      >
        ボタン
      </Button>
      <Checkbox
        legend="Checkbox"
        items={checkboxItems}
        className="custom-class"
        onChange={(items) => setCheckboxItems(items)}
      />
      <Combobox
        label="Combobox"
        options={comboboxOptions}
        currentValue={comboboxValue}
        onChange={setComboboxValue}
      />
    </>
  );
};

export default SamplePage;
