import Sample from "@/app/_components/Sample";
import Accordion from "@/app/_components/Accordion";

const SamplePage = () => {
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
    </>
  );
};

export default SamplePage;
