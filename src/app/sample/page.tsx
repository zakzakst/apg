import Sample from "@/app/_components/Sample";
import Accordion from "@/app/_components/Accordion";

const SamplePage = () => {
  return (
    <>
      <Sample />
      <Accordion
        id="accordion"
        title="accordion title"
        content="accordion content"
        expanded
      />
    </>
  );
};

export default SamplePage;
