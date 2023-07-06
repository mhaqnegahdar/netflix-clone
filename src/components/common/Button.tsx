import { ButtonProps } from "@/types/props";
const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  formId,
  btnType,
}: ButtonProps) => {
  return (
    <button
      form={formId}
      type={btnType}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full text-white
  ${outline ? "bg-zinc-900" : "bg-red-600"}
  ${outline ? "border-white" : "border-red-600"}
  ${small ? "py-1" : "py-3"}
  ${small ? "text-sm" : "text-md"}
  ${small ? "font-light" : "font-semibold"}
  ${small ? "border-[1px]" : "border-2"}
  `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className="absolute top-3 left-4" />}
      {label}
    </button>
  );
};

export default Button;
