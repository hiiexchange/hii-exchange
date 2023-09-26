import React from "react";
import Link from "next/link";

type Props = {
  items: Array<{ title: string; link: string }>;
  className?: string;
};

const DropdownCard = ({ items, className }: Props) => {
  return (
    <ul
      className={
        className
          ? className
          : "absolute left-[-3rem] top-2 z-50 mt-3 hidden h-72 w-[12.5rem] bg-[#22295d] px-9"
      }
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownCard;
