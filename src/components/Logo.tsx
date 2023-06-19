import LogoImage from "@/assets/logo.svg";
import LogoIcon from "@/assets/logo_icon.svg";

type LogoProps = {
  type?: "normal" | "icon";
  className?: string;
};

const Logo = ({ type = "normal", className }: LogoProps) => {
  const logoSrc = {
    normal: LogoImage,
    icon: LogoIcon,
  };

  return <img src={logoSrc[type]} alt="Logo" className={className} />;
};

export { Logo };
