import { useState } from "react";
import faq from "../data/faq.json";

const FAQ = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="px-22 mx-auto my-12 w-[80%]">
      <h1 className="flex justify-center p-2 text-2xl font-semibold text-hero-bg">
        FAQ
      </h1>
      {faq.map((item, index) => (
        <div className="" key={index}>
          <div
            onClick={() => toggleItem(index)}
            className="flex cursor-pointer items-center justify-start gap-8 py-3 pl-5 "
          >
            <span>{activeItem === index ? "-" : "+"}</span>
            <p className="p-4 text-lg font-semibold text-[#4d4d4d]">
              {item.question}
            </p>
          </div>

          <div className="border-b-2 border-[#4d4d4d] transition-all duration-1000 ease-in">
            <p
              className={`${
                activeItem === index ? "block" : "hidden"
              } py-4 leading-7 text-[#4d4d4d] transition-all`}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
