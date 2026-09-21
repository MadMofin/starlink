import { Logo } from "./Logo";

export const TopBar = () => {
  return (
    <div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[4rem]
        px-8
        py-5
        flex
        items-center
        gap-5
        justify-between
        z-20
        bg-background
        border-b
        border-textPrimary
      "
    >
      <div className="block lg:hidden">
        <Logo />
      </div>
    </div>
  );
};
