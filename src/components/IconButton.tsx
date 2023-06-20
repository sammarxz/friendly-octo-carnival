import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  Icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick = () => {},
  Icon,
  className = "w-4 h-4",
}) => {
  return (
    <button onClick={onClick} type="button" className={className}>
      <Icon className="w-full h-full" />
    </button>
  );
};

export { IconButton };
