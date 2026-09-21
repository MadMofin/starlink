import { SITE_NAME } from "@/constants/site";
import { A } from "@/components/ui-ux/A";

export const Logo = () => {
  return (
    <A
      href="/"
      className="
          flex
          mt-1
          items-center
          gap-2
          font-perandory
          text-2xl
          lg:text-4xl
          font-bold
          tracking-wider
          mb-2
          text-textPrimary
          hover:text-textPrimary
          lg:text-contrast
          lg:hover:text-contrast
          text-center
      "
    >
      {SITE_NAME}
    </A>
  );
};
