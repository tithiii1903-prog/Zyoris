import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "alternative" | "secondary" | "small" | "nav";
  className?: string;
  target?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  onClick,
  icon,
}) => {
  const variantClass =
    variant === "alternative"
      ? "is-alternative"
      : variant === "secondary"
      ? "is-secondary"
      : variant === "small"
      ? "is-small"
      : variant === "nav"
      ? "is-nav"
      : "";

  const content = (
    <>
      <div className="button-mask">
        <div button-text="" data-button-text="" className="button-text">
          {children}
        </div>
        <div button-text="" data-button-text="" className="button-text-hover">
          {children}
        </div>
      </div>
      {icon && <div className="button-icon">{icon}</div>}
    </>
  );

  const combinedClass = `button ${variantClass} ${className} w-inline-block`.trim();

  if (href) {
    if (href.startsWith("http") || target === "_blank") {
      return (
        <a
          button=""
          data-button=""
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={combinedClass}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        button=""
        data-button=""
        href={href}
        className={combinedClass}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      button=""
      data-button=""
      type="button"
      className={combinedClass}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
