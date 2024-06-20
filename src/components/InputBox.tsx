interface Props {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBox = ({ type, placeholder, name, value, onChange }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className="w-full rounded-xl border-stroke bg-transparent px-5 py-2 text-base text-body-color outline-none border-primary shadow-none"
      />
    </div>
  );
};

export default InputBox;
