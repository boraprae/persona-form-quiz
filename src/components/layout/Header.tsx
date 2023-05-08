import * as React from "react";
import { VscChromeClose } from "react-icons/vsc";

export interface HeaderProps {
  className?: string;
  pageLabel?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className,
  pageLabel,
  ...props
}) => {
  return (
    <header className={`${className}`} {...props}>
        <div className="flex flex-row justify-between items-start p-5 border-b-[1px] border-grey">
          <label className="label-header">Add Custom Persona</label>
          <div>
            <button type="button" className="mt-[2px] lg:mt-2">
              <VscChromeClose className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400"/>
            </button>
          </div>
        </div>
    </header>
  );
};

export default Header;
