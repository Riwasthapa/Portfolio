import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <h1 className="mb-4 text-[64px] font-bold leading-none text-zinc-950">
            Hi, I'm Riwas Thapa
          </h1>

          <h2 className="mb-8 text-[26px] font-semibold text-zinc-500">
            Full-Stack Developer & Designer
          </h2>

          <p className="mb-10 max-w-xl text-[20px] leading-relaxed text-zinc-500">
            I craft beautiful, functional digital experiences that
            solve real problems. Specializing in modern web
            applications with a focus on user experience and clean
            code.
          </p>

          <div className="flex gap-4">

            <button className="rounded-xl bg-[#020223] px-8 py-4 text-white transition">
              View My Work
            </button>

            <button className="rounded-xl border border-zinc-200 px-8 py-4 text-zinc-900">
              Get In Touch
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center lg:justify-end">

          <div className="relative">

            <div className="overflow-hidden rounded-full border-[5px] border-zinc-200 shadow-xl">
              <Image
                src="/riwas.png"
                alt="profile"
                width={320}
                height={320}
                className="h-[320px] w-[320px] object-cover"
              />
            </div>

            <button className="absolute bottom-0 right-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#020223] text-white shadow-xl">

              <div className="flex">
                <ChevronLeft size={30} />
                <ChevronRight size={30} />
              </div>

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}