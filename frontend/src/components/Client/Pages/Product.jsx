import React from "react";
import Accordian, { AccordianItem } from "../../../Common/Accordian";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Accordian className="max-w-lg">
        <AccordianItem value="1" trigger="accordian Item 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus
          vel? Hic eveniet, sapiente ut suscipit facere magnam quaerat corporis!
        </AccordianItem>
        <AccordianItem value="2" trigger="accordian Item 2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus
          vel? Hic eveniet, sapiente ut suscipit facere magnam quaerat corporis!
        </AccordianItem>
        <AccordianItem value="3" trigger="accordian Item 3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus
          vel? Hic eveniet, sapiente ut suscipit facere magnam quaerat corporis!
        </AccordianItem>
      </Accordian>
    </div>
  );
};

export default Product;
