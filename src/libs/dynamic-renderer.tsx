import dynamic from "next/dynamic";

export const DynamicRenderer = (key: string) => {
  console.log(`Attempting to load component: ${key}`);
  const DynamicComponent = dynamic(
    () =>
      import("shiphouse-toolkit").then((lib) => {
        console.log("Loaded library:", lib);
        if (!lib[key]) {
          console.error(`Component "${key}" not found`);
          return () => <p>Component not found: {key}</p>;
        }
        return lib[key];
      }),
    // .catch((error) => {
    //   console.error(`Error loading component "${key}":`, error);
    //   return () => <p>Error loading component: {key}</p>;
    // }),
    {
      ssr: true,
      loading: () => <p>Loading...</p>,
    }
  );
  return DynamicComponent;
};
