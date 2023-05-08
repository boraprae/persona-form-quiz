import * as React from "react";
import { VscChromeClose } from "react-icons/vsc";

export interface TagsProps {
  className?: string;
  label: string;
}

export const Tags: React.FC<TagsProps> = ({ className, label, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <div className="flex flex-row w-fit items-start p-2 border-[1px] rounded-[6px] border-grey">
        <label className="label-tags mr-4">{label}</label>
        <button type="button">
          <VscChromeClose className="w-5 h-5 text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Tags;
