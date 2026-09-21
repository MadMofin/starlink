import { A } from "@/components/ui-ux/A";
import { AnimatedCard } from "@/components/ui-ux/AnimatedCard";
import { B } from "@/components/ui-ux/B";
import { H1 } from "@/components/ui-ux/H1";
import { H2 } from "@/components/ui-ux/H2";
import { H3 } from "@/components/ui-ux/H3";
import { P } from "@/components/ui-ux/P";

const Page = () => {
  return (
    <div className="flex flex-col gap-5">
      <P>Esto son los componentes de UI/UX que se van a usar en el proyecto.</P>
      <H1>PERANDORY</H1>
      <H2>Esto es un título H2</H2>
      <H3>Esto es un título H3</H3>
      <A href="#">Esto es un link</A>
      <B>Esto es un texto en negritas</B>

      <H1>Paleta de colores</H1>
      <div className="flex gap-10">
        <div className="bg-green w-32 h-32" />
        <div className="bg-rose w-32 h-32" />
        <div className="bg-tam w-32 h-32" />
        <div className="bg-beige w-32 h-32" />
        <div className="bg-brown w-32 h-32" />
      </div>

      <H1>Animated Cards</H1>
      <div className="flex gap-40 justify-center">
        <AnimatedCard
          image="https://static.vecteezy.com/system/resources/previews/026/979/852/non_2x/jazz-woman-singer-watercolor-music-illustration-isolated-on-white-background-png.png"
          color="bg-green"
        />
        <AnimatedCard
          image="https://static.vecteezy.com/system/resources/previews/026/979/852/non_2x/jazz-woman-singer-watercolor-music-illustration-isolated-on-white-background-png.png"
          color="bg-rose"
        />
        <AnimatedCard
          image="https://static.vecteezy.com/system/resources/previews/026/979/852/non_2x/jazz-woman-singer-watercolor-music-illustration-isolated-on-white-background-png.png"
          color="bg-tam"
        />
        <AnimatedCard
          image="https://static.vecteezy.com/system/resources/previews/026/979/852/non_2x/jazz-woman-singer-watercolor-music-illustration-isolated-on-white-background-png.png"
          color="bg-beige"
        />
        <AnimatedCard
          image="https://static.vecteezy.com/system/resources/previews/026/979/852/non_2x/jazz-woman-singer-watercolor-music-illustration-isolated-on-white-background-png.png"
          color="bg-brown"
        />
      </div>
    </div>
  );
};

export default Page;
