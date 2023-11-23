import { FC, InputHTMLAttributes } from "react";

type NumberInputProps = {
  title?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
};

const NumberInput: FC<NumberInputProps> = ({
  title,
  value,
  setValue,
  placeholder,
}) => {
  return (
    <label className="flex flex-col items-center justify-center w-12 h-full border-right">
      <input
        className="w-8 text-xs text-center transition rounded-none h-3/5 focus:outline-none focus:border-right focus:border-left focus:border-black focus:bg-lightGreen"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e)}
        type="number"
      />
      {title && (
        <p className="flex items-center justify-center w-full text-sm font-light h-2/5 border-top">
          {title}
        </p>
      )}
    </label>
  );
};

export default NumberInput;
