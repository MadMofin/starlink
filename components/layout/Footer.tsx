import { P } from "@/components/ui-ux/P";
import { A } from "@/components/ui-ux/A";

export const Footer = () => {
  return (
    <footer className="flex justify-center">
      <P className="text-center text-xs flex gap-1 text-green">
        Coded with ❤️ by
        <A
          href="https://www.lirucisa.com/about-me"
          target="_blank"
          className="flex items-center gap-1 text-center"
        >
          Mad Mofin
        </A>
      </P>
    </footer>
  );
};
