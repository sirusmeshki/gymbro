import { FC } from "react";

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
    <label className="border-right flex h-full w-12 flex-col items-center justify-center">
      <input
        className="focus:border-right focus:border-left h-3/5 w-8 rounded-none text-center text-xs transition focus:border-black focus:bg-lightGreen focus:outline-none"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e)}
        type="number"
      />
      {title && (
        <p className="border-top flex h-2/5 w-full items-center justify-center text-sm font-light">
          {title}
        </p>
      )}
    </label>
  );
};

export default NumberInput;
