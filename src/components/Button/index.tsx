import { FC } from "react";

import Image from "next/image";
import { clsx } from "clsx";
import Link from "next/link";

type ButtonProps = {
  className?: string;
  cta?: string;
  icon?: string;
  href?: string;
  alt: string;
  placeholder?: any;
  iconWidth?: number;
  iconHeight?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({
  className,
  cta,
  icon,
  alt,
  placeholder,
  iconWidth,
  iconHeight,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `
        relative
        flex
        items-center
        justify-center
        w-full
        h-full
        font-extrabold
        text-base
        overflow-hidden
        text-neutral-800
        shadow-right
        focus-within:bg-blue-100
        group
        `,
        cta && "w-full font-semibold text-xl bg-blue-100",
        className && className
      )}>
      <div
        className={clsx(
          `
          absolute
          flex
          items-center
          justify-center
          w-full
          h-full
          font-bold
          text-xs
          sm:text-sm
          duration-200
          ease-transition-button
          translate-y-full
          bg-blue-100
          delay-75
          group-hover:translate-y-0
          `,
          cta && "bg-white"
        )}>
        {placeholder}
      </div>

      {icon && (
        <Image
          className="aspect-square"
          width={!iconWidth ? 24 : iconWidth}
          height={!iconHeight ? 24 : iconHeight}
          alt={alt}
          src={icon}
        />
      )}

      {cta && (
        <div className="flex items-center justify-center w-full h-full text-sm font-extrabold bg-lightPurple">
          {cta}
        </div>
      )}
    </button>
  );
};

export default Button;