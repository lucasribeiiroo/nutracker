import { Button } from "antd";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between bg-green-800 p-2 border-spacing-5">
      <Image
        className="flex items-center w-a ml-6"
        src="/nutracker-logo.png"
        width={120}
        height={40}
        alt="nutracker_logo"
      />

      <Button
        className="m-6 float-right"
        color="default"
        variant="solid"
        size="large"
      >
        Sign In
      </Button>
    </nav>
  );
};

export default Header;
