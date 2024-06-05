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
          priority
          className="relative"
        />
        <div className="text-center absolute top-0 flex justify-center items-center flex-col h-full">
          <div className="container">
            <div style={{ width: 700 }}>
              <h1
              // hack
                style={{ lineHeight: 1.375, color: '#fcf250'  }}
                className="text-accent text-center font-normal !text-white  dark:text-neutral-600 text-4xl"
              >
                {title}
              </h1>
              {/* hack */}
              <p style={{padding: "0 40px 0 40px"}} className="max-w-[600px] mx-auto my-8 lg:text-1xl leading-relaxed text-white">
                {text}
              </p>
              <div className="rounded-lg">
                <Button
                  size="lg"
                  variant="destructive"
                  className="ml-auto gap-1"
                >
                  <Link
                    href="#"
                    className="text-2xl uppercase font-bold dark:text-primary"
                  >
                    {buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
