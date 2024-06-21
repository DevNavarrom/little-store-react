
interface Props {
    label: string;
}
const Badge: React.FC<Props> = ({ label }) => {
  return (
    <div 
        className="h-4 w-4 rounded-full bg-teal color-light font-600 right-0 top-0 absolute flex justify-center items-center">
        {label}
    </div>
  )
}

export default Badge;