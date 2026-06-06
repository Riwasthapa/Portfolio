import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="border-t border-zinc-200 bg-[#f5f5f7] py-32">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="mb-8 text-6xl font-bold">
            Let's Work Together
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-zinc-500">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want
            to say hi, feel free to reach out!
          </p>

          <div className="flex justify-center gap-4">

            <button className="flex items-center gap-3 rounded-xl bg-[#020223] px-8 py-4 text-white">
              <FiMail size={20} />
              Email Me
            </button>

            <button className="rounded-xl border border-zinc-200 bg-white p-4">
              <FaGithub size={22} />
            </button>

            <button className="rounded-xl border border-zinc-200 bg-white p-4">
              <FaLinkedinIn size={22} />
            </button>

          </div>

        </div>

      </section>

      <footer className="border-t border-zinc-200 bg-[#f5f5f7] py-10">
        <p className="text-center text-zinc-500">
          © 2026 Alex Morgan. Built with React & Tailwind CSS.
        </p>
      </footer>
    </>
  );
}