import type { Icon, IconProps } from "@tabler/icons-react";
import "./IconButton.css";

interface IconButtonProps {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  title: string;
  href: string;
  className: string;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" title={props.title}>
      <props.icon className={`iconButton ${props.className}`} size="3em" />
    </a>
  );
};
