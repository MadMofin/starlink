import { H2 } from "@/components/ui-ux/H2";
import { Heading } from "@/components/ui-ux/Heading";
import { P } from "@/components/ui-ux/P";

export const Home = () => {
  return (
    <div
      className={`
      border 
      border-rose 
      flex
      flex-col
      relative
      h-[calc(100vh-4rem)]
    `}
    >
      <div className="bg-brown relative h-[calc(100vh/2)]">
        <div className="absolute lg:top-[30%] lg:left-15 z-2">
          <Heading className="text-[#FFF]">SAMARIA</Heading>
          <Heading className="text-[#FFF] -mt-10">DE LA ROSA</Heading>
        </div>
      </div>

      <div className="bg-beige relative h-[calc(100vh/2)]">
        <div className="absolute lg:top-[5%] lg:left-15 z-2 flex flex-col gap-4">
          <H2>PHOTOGRAPHER</H2>
          <div className="min-h-1 w-15 bg-brown" />
          <P>Visual Storytelling / Editorial / Travel</P>
          <P className="max-w-[350px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quidem
            omnis deserunt consequuntur, nesciunt dicta? Temporibus mollitia
            voluptate aut accusantium numquam?
          </P>
        </div>
      </div>

      <div className="lg:absolute lg:right-0 lg:top-0">
        <img
          src="/images/backgrounds/sinfondo.png"
          alt="sample"
          className={`hidden lg:block h-[calc(100vh-4rem)]`}
        />
      </div>
    </div>
  );
};
