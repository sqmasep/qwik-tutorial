import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { colorMap } from "~/data/colorMap";
import { useAtoms } from "~/routes/layout";
import { LuHome } from "@qwikest/icons/lucide";

export const useAtom = routeLoader$(async (requestEvent) => {
  const atoms = await requestEvent.resolveValue(useAtoms);
  const atomicNumber = requestEvent.params.atomicNumber;
  const atom = atoms.find(
    (atom) => atom.atomicNumber === parseInt(atomicNumber),
  );
  return atom;
});

export default component$(() => {
  const atom = useAtom().value;
  console.log(atom);

  const containerStyle = {
    backgroundColor: colorMap.family[atom.family.name] + "60",
    border: "1px solid " + colorMap.family[atom.family.name] + "90",
  };

  return (
    <div class="flex h-screen w-screen items-center justify-evenly text-white">
      <Link href="/" class="absolute left-16 top-6">
        <LuHome class="text-2xl" />
      </Link>
      <div
        class="relative flex h-80 w-80 items-center justify-center rounded-lg shadow-lg"
        style={containerStyle}
      >
        <span class="absolute left-2 top-2 text-4xl text-gray-800">
          {atom.atomicNumber}
        </span>
        <span class="text-8xl text-white">{atom.symbol}</span>
        <span class="absolute bottom-2 text-2xl text-gray-800">
          {atom.name.fr}
        </span>
      </div>
      <div class="flex flex-col gap-6 text-3xl text-gray-300">
        <h1 class="text-6xl font-bold">{atom?.name.fr}</h1>
        <span>Masse atomique: {atom?.atomicMass} u</span>
        <span>Point de fusion: {atom?.meltingPoint.celsius}°C</span>
        <span>Famille: {atom?.family.name}</span>
        <div class="text-4lg mt-8 font-semibold underline">
          Découverte De l'atome
        </div>
        <span class="-mt-2">Par: {atom?.discovery.by}</span>
        <span class="-mt-6">
          {atom?.discovery.country}, {atom?.discovery.year}
        </span>
      </div>
    </div>
  );
});
