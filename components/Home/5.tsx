import Image from "next/image";
import Link from "next/link";

export default function Five(){
    return(
        <div className="flex flex-row justify-center gap-30 p-20">
            <div className="hidden md:block pt-10">
                <Image 
                    src="/icons/Socials_Left.png"
                    alt=""
                    width={200}
                    height={200}
                />
            </div>
            
            <Link className="flex-shrink-1 duration-500 ease-out hover:scale-110" href="https://linktr.ee/uoagdg?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGngPRfH_5I_J6m6cXt-lj3I-780-D2pv1GObCkYvmOd0hV4TexpFpbJO-gKXw_aem_2QYTGlyS8C8FMK6kY2S5gQ">
                <Image
                    src="/icons/Socials.png"
                    alt=""
                    width={400}
                    height={200}
                />
            </Link>
            <div className="hidden md:block pt-10">
                <Image 
                    src="/icons/Socials_Right.png"
                    alt=""
                    width={200}
                    height={200}
                />
            </div>
        </div>
    )
}