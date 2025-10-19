import { CategoryIconProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

const CategoryIcons = ({ icon, label, active, onClick }: CategoryIconProps) => {
  return (
    <button
      type="button"
      className={`relative py-4 flex flex-col items-center gap-2 cursor-pointer `}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={label}
        width={34}
        height={34}
        className="h-9 w-9 object-contain"
      />
      <span className="font-medium text-xs text-[#616161]">{label}</span>
      {active && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0F4E3D]" />
      )}
    </button>
  );
};

export default CategoryIcons;
