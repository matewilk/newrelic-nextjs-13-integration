type RenderingMethod = {
  name: string;
  description: string;
  link: string;
};

const renderingMethods = [
  {
    name: "Static",
    description:
      "With Static Rendering, routes are rendered at build time, or in the background after data revalidation.",
    link: "/about",
  },
  {
    name: "Dynamic",
    description:
      "With Dynamic Rendering, routes are rendered for each user at request time.",
    link: "/blog",
  },
  {
    name: "Client Side",
    description:
      "Client Components are rendered differently depending on whether the request is part of a full page load or a subsequent navigation",
    link: "/client-side-rendering",
  },
];

const Tile = ({ name, description, link }: RenderingMethod) => {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {name}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </a>
  );
};

export default async function Blog() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold font-mono text-center dark:drop-shadow-[0_0_0.5rem_#ffffff70] p-20 before:absolute before:h-[80px] before:w-[320px] before:bg-gradient-conic before:blur-2xl before:dark:from-sky-900 before:dark:via-[#28ff02] before:dark:opacity-50 ">
        Select rendering method
      </h1>
      <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left text-center">
        {renderingMethods.map((method) => (
          <Tile
            key={method.name}
            name={method.name}
            description={method.description}
            link={method.link}
          />
        ))}
      </div>
    </div>
  );
}
