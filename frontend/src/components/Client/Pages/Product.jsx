import React from "react";
import Accordian, { AccordianItem } from "../../../Common/Accordian";
import Img1 from "../../../Assets/Image Placeholder.png"
import Img2 from "../../../Assets/Image Placeholder (1).png"
import Img3 from "../../../Assets/Image Placeholder (2).png"
import Img4 from "../../../Assets/Image Placeholder (3).png"
import Img5 from "../../../Assets/Image Placeholder (4).png"
const Product = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="">breadcrumb components</div>
      <div className="flex gap-6">
        <div className="grid grid-cols-2 gap-5">
          <img src={Img1} alt="" srcset="" className=""/>
          <img src={Img2} alt="" srcset="" className=""/>
          <img src={Img3} alt="" srcset="" className=""/>
          <img src={Img4} alt="" srcset="" className=""/>
          <img src={Img5} alt="" srcset="" className=""/>
        </div>
        <div className="">Product details</div>
      </div>
    </div>
  );
};

export default Product;

// <div className="min-h-screen flex flex-col items-center justify-center">
//   <Accordian className="max-w-lg">
//     <AccordianItem value="1" trigger="accordian Item 1">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus
//       vel? Hic eveniet, sapiente ut suscipit facere magnam quaerat corporis!
//     </AccordianItem>
//     <AccordianItem value="2" trigger="accordian Item 2">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus
//       vel? Hic eveniet, sapiente ut suscipit facere magnam quaerat corporis!
//     </AccordianItem>
//     <AccordianItem value="3" trigger="accordian Item 3">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ducimus
//       vel? Hic eveniet, sapiente ut suscipit facere magnam quaerat corporis!
//     </AccordianItem>
//   </Accordian>
// </div>