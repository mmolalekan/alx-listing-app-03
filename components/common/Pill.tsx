import { PillProps } from "@/interfaces";
import { cn } from "@/utils/cn";
import React from "react";

const Pill: React.FC<PillProps> = ({ label, active, onClick, className }) => {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full cursor-pointer bg-white border text-black border-[#E9E9E9] py-3 px-6 flex items-center justify-center",
        {
          "border-[#34967C] text-[#34967C]": active,
        },
        className
      )}
      onClick={() => onClick?.( label )} // Call onClick with the label if provided
    >
      <span className="text-[19px] font-medium -mb-1.5">{label}</span>
    </button>
  );
};

export default Pill;
