import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get your Next app monitoring to the&nbsp;
        <code className="font-mono font-bold">next level</code>
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://www.web-dev.engineer"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            className="h-7 w-7 rounded-full bg-white/30"
            src="https://avatars.githubusercontent.com/u/6328360?s=96&v=4"
            width={28}
            height={28}
            alt="Mat Wilk avatar"
          />
          @matewilk
        </a>
      </div>
    </div>
  );
}
