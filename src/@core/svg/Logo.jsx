import Image from "next/image";

const Logo = (props) => {
  return (
    <Image
      src="/Office/Mask group.svg" // must be in /public folder
      alt="Logo"
      width={35}  // match your desired size
      height={24}
      {...props}  // allows extra props like className
    />
  );
};

export default Logo;
