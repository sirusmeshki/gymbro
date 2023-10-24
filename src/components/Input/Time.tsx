const Time = ({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>> | undefined;
}) => {
  return (
    <div className="flex items-center justify-center h-full">
      <input
        className="w-12 h-full px-2 text-center border-s border-e border-neutral-200"
        type="text"
        value={value}
        onChange={(e) => setValue?.(e.target.value)}
      />
      <p className="px-2 text-xs">{title}</p>
    </div>
  );
};

export default Time;
