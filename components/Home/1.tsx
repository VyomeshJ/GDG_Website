import Image from "next/image";

type OneProps = {
  overlay: boolean;
  showOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function One({ overlay, showOverlay }: OneProps) {
  return (
    <div
      className="relative flex w-full min-h-[max(35rem,82svh)] md:min-h-[80vh] bg-black bg-cover bg-no-repeat bg-[url('/BG/Hero.png')]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_20%,_rgba(0,0,0,0.7)_100%)]"></div>

      {/* Hero content */}
      <div className="relative z-50 flex w-full flex-1 flex-col justify-center gap-6 px-[5vw] pb-[clamp(4rem,8vh,6rem)] pt-[clamp(10rem,24svh,13rem)] sm:gap-8 sm:pt-[clamp(9rem,18svh,12rem)] md:py-[clamp(7rem,14vh,11rem)]">

        <h3 className="font-PSP text-[#dbdfff] text-[clamp(1.2rem,1.6vw,1.8rem)]">
          Welcome to UoA's...
        </h3>

        <h1 className="font-bold text-white leading-tight text-[clamp(2.4rem,12vw,6rem)] md:text-[clamp(2.8rem,6vw,6rem)]">
          Game Developer Guild
        </h1>

        <h3 className="font-PSP text-[#AEF7EE] text-[clamp(1.4rem,2.2vw,2.4rem)]">
          Game Devs Unite!
        </h3>

        {/* Buttons container */}
        <div className="flex flex-wrap gap-4">

          {/* Join button */}
          <button
            className="bg-[#058B8B]/50 hover:bg-[#058B8B]/100 rounded-full border-4 border-white/50 flex items-center justify-center gap-4 px-[clamp(1rem,1.5vw,1.6rem)] py-[clamp(0.6rem,1vw,1rem)] transition-all"
            onClick={() => showOverlay(!overlay)}
          >
            <span className="font-PSP text-[clamp(1rem,1.4vw,1.6rem)]">
              Join us
            </span>

            <Image
              src="/icons/arrow_right.png"
              alt=""
              width={24}
              height={24}
              className="inline-block -mt-[2px] w-5 h-5 md:w-6 md:h-6"
            />
          </button>

          
          <a
            href="https://discord.com/invite/cnmjh8NQDT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2]/50 hover:bg-[#5865F2]/100 rounded-full border-4 border-white/50 flex items-center justify-center gap-4 px-[clamp(1rem,1.5vw,1.6rem)] py-[clamp(0.6rem,1vw,1rem)] transition-all"
          >
            <span className="font-PSP text-[clamp(1rem,1.4vw,1.6rem)]">
              Discord
            </span>

            <Image
              src="/icons/discord.png"
              alt="Discord"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </a>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-5 left-0 right-0 z-50 hidden justify-center md:flex">
        <Image
          className="block"
          src="/icons/arrow_down.png"
          alt=""
          width={59}
          height={51}
        />
      </div>
    </div>
  );
}
