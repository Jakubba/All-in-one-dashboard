import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,
  className,
  children,
  href,
  ...props
}) => {
  const variantStyles = {
    [ButtonVariant.Primary]: 'login-form__button',
    [ButtonVariant.Secondary]: 'login-form__link',
  };

  const buttonClass = clsx(variantStyles[variant], className);

  return href ? (
    <Link to={href} className={buttonClass} {...(props as any)}>
      {children}
    </Link>
  ) : (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
