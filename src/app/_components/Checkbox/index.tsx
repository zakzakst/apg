// "use client";
// // https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/ （Checkbox (Mixed-State) Exampleのほう）

// import { useMemo, useState, useEffect } from "react";
// import classNames from "classnames";

// type CheckItem = {
//   id: string;
//   label: string;
//   checked: boolean;
// };

// type Props = {
//   legend: string;
//   className?: string;
// };

// const Checkbox = ({ legend, className }: Props) => {
//   const [checkItems, setCheckItems] = useState<CheckItem[]>([
//     { id: "check1", label: "Check 1", checked: false },
//   ]);

//   return (
//     <fieldset className={classNames(className)}>
//       <legend>{legend}</legend>
//     </fieldset>
//   );
// };

// export default Checkbox;
