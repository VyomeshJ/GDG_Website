import Image from "next/image";
import Link from "next/link";

type RegistrationProps = {
  overlay: boolean;
  showOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Registration({ overlay, showOverlay }: RegistrationProps) {
  return (
    <div className="fixed inset-0 z-[300] bg-black/50 flex items-center justify-center px-4">
      
      {/* Modal */}
      <div className="relative bg-[#2C2C2C] rounded-xl p-6 
          w-full max-w-2xl max-h-[85vh] overflow-y-auto">

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8">
          
          {/* New Member */}
          <div className="relative bg-[#5B7546]/70 hover:bg-[#5B7546]/70
              w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden group">
            
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKxD2HNlx40Za-vtGQFXcTyYdXVJDUAF6NeRAWZY3g_IOQVA/viewform?usp=dialog"
              aria-label="Join as a new member"
              className="absolute inset-0 z-10"
            />

            <div className="absolute top-4 right-4 z-20">
              <h2 className="font-PSP text-right text-xl leading-tight">
                New <br /> Member
              </h2>
            </div>

            <div className="absolute bottom-0 w-full h-2/3 bg-[#5B7546]/100 md:bg-[#5B7546]/0 group-hover:bg-[#5B7546]/100 rounded-t-xl shadow-[0_-6px_20px_rgba(0,0,0,0)] group-hover:shadow-[0_-6px_20px_rgba(0,0,0,0.3)]">
              <div className="relative w-full h-full p-6 md:p-12">
                <Image
                  src="/icons/g_dude.png"
                  alt="New member"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Returning Member */}
          <div className="relative bg-[#8A424F]/70 
              w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden group">
            
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeY_OYPd9IVlKjLs4kpRVLU4XyMgqNiEcvbYVZ0Jjo3GxQUFA/viewform?usp=dialog"
              aria-label="Join as a returning member"
              className="absolute inset-0 z-10"
            />

            <div className="absolute top-0 w-full h-2/3 bg-[#8A424F]/100 md:bg-[#8A424F]/0 group-hover:bg-[#8A424F]/100 rounded-b-xl shadow-[0_-6px_20px_rgba(0,0,0,0)] group-hover:shadow-[0_-6px_20px_rgba(0,0,0,0.3)]">
              <div className="relative w-full h-full p-6 md:p-12">
                <Image
                  src="/icons/r_dude.png"
                  alt="Returning member"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-20">
              <h2 className="font-PSP text-right text-xl leading-tight">
                Returning <br /> Member
              </h2>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <h2 className="font-SL text-xl md:text-3xl text-center">
          Anyone can join, even if you’re a grad or non-UOA!  
          Membership is just $5 per sem~
        </h2>
      </div>

      {/* Close Button */}
      <button
        className="fixed top-4 right-4 z-[400] text-white text-4xl font-bold"
        onClick={() => showOverlay(false)}
        aria-label="Close registration modal"
      >
        &times;
      </button>
    </div>
  );
}
