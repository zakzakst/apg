"use client";
import { useState, useMemo } from "react";
import Sample from "@/app/_components/Sample";
import Accordion from "@/app/_components/Accordion";
import Alert from "@/app/_components/Alert";
import Breadcrumb, { BreadcrumbItems } from "@/app/_components/Breadcrumb";

const SamplePage = () => {
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false);

  const breadcrumbItems = useMemo<BreadcrumbItems>(() => {
    return [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/sample", label: "Sample" },
    ];
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
      <Alert isShow={isShowAlert}>アラート</Alert>
      <Breadcrumb items={breadcrumbItems} ariaLabel="パンくず" />
    </>
  );
};

export default SamplePage;
