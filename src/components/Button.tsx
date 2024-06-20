type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface Props extends BaseButtonAttributes {
    text?: string;
    icon?: React.ReactElement;
    srcIcon?: string;
}

const Button: React.FC<Props> = ({text, icon, srcIcon, onClick}) => {
  return (
    <button onClick={onClick} className='bg-primary rounded-lg no-border pointer transform-scale transition-ease py-2 px-4 color-light flex items-center gap-1'>
      { srcIcon && <img src={srcIcon} height={18} width={18} />}
      { icon ? icon : null}
      {text ? text : ''}
    </button>
  )
}

export default Button;