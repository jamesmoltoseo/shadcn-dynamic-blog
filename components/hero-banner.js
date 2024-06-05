/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I834dw7Bvdu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Banner({ bannerBg, title, text, buttonText }) {
  return (
    <section>
      <div className="relative h-[210px] flex justify-end items-center sm:h-[440px] w-full px-5 py-12 mx-auto md:px-12 lg:px-16 lg:py-24">
        <Image
          src={bannerBg}
          alt="Aposta Esportiva"
          width={1732}
          height={511}
          layout="responsive"
          // style={{ objectFit: 'cover' }}
          priority
          className="relative"
        />
        <div className="text-center absolute top-0 flex justify-center items-center flex-col h-full">
          <div className="container">
            <h1 className="max-w-2xl text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-white  font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              {title}
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
              {text}
            </p>
            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="#">{buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
