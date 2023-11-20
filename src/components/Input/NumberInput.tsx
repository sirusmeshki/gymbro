import { FC } from "react";

type NumberInputProps = {
  title: string;
  value: number;
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
    <label className="flex flex-col justify-center w-12 h-full border-right">
      <input
        className="text-xs text-center h-3/5 border-bottom focus:outline-none"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e)}
      />
      <p className="flex items-center justify-center text-sm font-light h-2/5">
        {title}
      </p>
    </label>
  );
};

export default NumberInput;
