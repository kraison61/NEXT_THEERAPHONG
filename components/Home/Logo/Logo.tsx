import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/images/Logo1-1.png" alt="TP-Logo" width={100} height={100} />
      <h1 className="text-xl md:text-xl text-white uppercase font-medium">
        ธีรพงษ์เซอร์วิส
      </h1>
    </div>
  );
};
export default Logo;