import * as React from "react";

export interface CheckboxProps
  extends React.DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLElement>,
    HTMLElement
  > {label: string;}

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  checked,
  id,
  onClick,
  onChange,
  ...props
}) => {
  return (
    <div className={`${className}`} >
      <div
        className={`flex flex-row w-fit cursor-pointer items-start mt-4 p-[6px] border-[1px] rounded-[6px] + ${
          checked ? "border-[#043673]" : "border-[#D9D9D9]"
        }`}
      >
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-[16px] w-[16px] accent-[#C0DBFD] focus:accent-[#C0DBFD] checked  border-[1px] border-[#043673] rounded-[6px]"
            checked={checked}
            onClick={onClick}
          />
          <span className="text-[#595959] text-[12px] font-normal mx-2">
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
