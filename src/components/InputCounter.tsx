interface Props {
    value: number,
    handleIncrement: () => void,
    handleDecrement: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputCounter: React.FC<Props> = ({ value, handleIncrement, handleDecrement, onChange }) => {
  return (
    <div className="custom-number-input h-6 w-32">
        <div className="flex row h-6 w-full rounded-lg relative bg-transparent mt-1">
            <button onClick={handleDecrement} className="bg-gray-300 h-full w-20 rounded-l pointer outline-none flex items-center justify-center no-border">
                <span className="text-2xl font-thin flex items-center justify-center">−</span>
            </button>
            <input onChange={onChange} type="number" className="bg-gray-300 outline-none outline-none-focus text-center w-full font-600 text-md flex items-center justify-center outline-none no-border" name="custom-input-number" value={value}></input>
            <button onClick={handleIncrement} className="bg-gray-300 h-full w-20 rounded-r pointer flex items-center justify-center no-border">
                <span className="text-2xl font-thin flex items-center justify-center">+</span>
            </button>
        </div>
    </div>
  )
}

export default InputCounter;