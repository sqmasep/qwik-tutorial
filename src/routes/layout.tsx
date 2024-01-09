import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { parse } from "valibot";
import { atomsSchema } from "~/lib/validation/atom";

export const useAtoms = routeLoader$(async ({ url }) => {
  const res = await fetch(`${url.origin}/data/atoms.json`);
  const data = await res.json();

  const safeData = parse(atomsSchema, data);

  return safeData;
});

export default component$(() => {
  return (
    <main>
      <Slot />
    </main>
  );
});
