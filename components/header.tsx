import { Button } from "antd";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between bg-green-800 p-2 border-spacing-5">
      <Image
        className="flex items-center w-a ml-6"
        src="/nutracker-logo.png"
        width={140}
        height={40}
        alt="nutracker_logo"
      />

      <div className="m-6 float-right">
        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button color="default" variant="solid" size="large">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
