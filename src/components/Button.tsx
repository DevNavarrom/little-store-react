type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

interface Props extends BaseButtonAttributes {
    label?: string;
    icon?: React.ReactElement;
    srcIcon?: string;
    text?: boolean;
    rounded?: boolean;
}

const Button: React.FC<Props> = ({label, icon, srcIcon, onClick, text, rounded}) => {
  return (
    <button 
      onClick={onClick} 
      className={`${text ? 'bg-transparent' : 'bg-primary'} ${rounded ? 'rounded-3xl':'rounded-lg'} no-border pointer transform-scale transition-ease py-2 px-4 color-light flex items-center gap-1`}>
      { srcIcon && <img src={srcIcon} height={20} width={20} />}
      { icon ? icon : null}
      {label ? label : ''}
    </button>
  )
}

export default Button;