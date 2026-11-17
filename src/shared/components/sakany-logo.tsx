import Image from "next/image";
import logo from "@/images/sakany-logo.svg";

type Props = {
  width?: number;
  className?: string;
};

export default function SakanyLogo({ width, className }: Props) {
  return (
    <Image src={logo} alt="Sakany logo" width={width} className={className} />
  );
}
