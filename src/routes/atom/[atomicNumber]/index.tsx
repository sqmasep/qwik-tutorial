import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { useAtoms } from "~/routes/layout";

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
  return 
  <>
    <h1></h1> 
  </>;
});
