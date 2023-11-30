import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[320px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/NR_logo.png"
          alt="New Relic Logo"
          width={220}
          height={37}
          priority
        />
        <div className="p-5 font-bold text-3xl">+</div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="pt-5 w-full text-center ">
        <Link
          href="/dashboard"
          className="text-3xl dark:drop-shadow-[0_0_0.5rem_#ffffff70]"
        >
          Start here
        </Link>
      </div>
    </div>
  );
}
