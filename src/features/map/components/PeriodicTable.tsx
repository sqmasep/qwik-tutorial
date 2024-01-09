import { component$, useSignal } from "@builder.io/qwik";
import { FamilySelect } from "~/components/router-head/FamilySelect";
import { colorMap } from "~/data/colorMap";
import type { Atom } from "~/lib/validation/atom";
import { useAtoms } from "~/routes/layout";
import { createArray } from "~/utils/createSlicedArray";

export const PeriodicTable = component$(() => {
  const atoms = useAtoms();

  const selectedFamily = useSignal("All");
  const families = new Set(atoms.value.map((atom) => atom.family.name));

  const search = useSignal("");

  const renderAtom = (atom: Atom) => {
    const shouldShow =
      selectedFamily.value === "All" ||
      selectedFamily.value === atom.family.name;

    const shouldScale = atom.name.fr
      .toLowerCase()
      .includes(search.value.toLowerCase());

    return (
      <div
        class="relative flex h-16 w-16 items-center justify-center rounded transition-all"
        style={{
          backgroundColor: shouldShow
            ? colorMap.family[atom.family.name] + "60"
            : "#333",
          scale: search.value.length === 0 ? 1 : shouldScale ? 1.1 : 0.5,
          border:
            "1px solid" + shouldShow
              ? colorMap.family[atom.family.name] + "90"
              : "#444",
        }}
      >
        <span class="absolute left-2 top-0 text-sm">{atom.atomicNumber}</span>
        <span class="text-xl">{atom.symbol}</span>
        <span class="absolute bottom-2 text-[0.5rem]">{atom.name.fr}</span>
      </div>
    );
  };

  if (!atoms.value.length) return null;

  return (
    <div>
      <FamilySelect
        options={["All", ...families]}
        value={selectedFamily}
        class="mx-auto my-2 flex max-w-3xl justify-center"
      />

      <input
        bind:value={search}
        class="mx-auto my-2 flex max-w-3xl justify-center rounded-full border border-zinc-500 bg-transparent px-4 py-2 outline-none"
      />

      <div class="mx-auto grid max-w-7xl grid-cols-18 gap-2">
        <div>{renderAtom(atoms.value[0])}</div>
        <div class="col-span-16" />
        <div>{renderAtom(atoms.value[1])}</div>

        <div>{renderAtom(atoms.value[2])}</div>
        <div>{renderAtom(atoms.value[3])}</div>
        <div class="col-span-10" />

        {createArray(4, 9).map((value) => (
          <div key={value}>{renderAtom(atoms.value[value])}</div>
        ))}

        <div>{renderAtom(atoms.value[10])}</div>
        <div>{renderAtom(atoms.value[11])}</div>
        <div class="col-span-10" />

        {createArray(12, 56).map((value) => (
          <div key={value}>{renderAtom(atoms.value[value])}</div>
        ))}

        {createArray(71, 88).map((value) => (
          <div key={value}>{renderAtom(atoms.value[value])}</div>
        ))}

        {createArray(103, 117).map((value) => (
          <div key={value}>{renderAtom(atoms.value[value])}</div>
        ))}

        <div class="col-span-18 h-6" />

        <div class="col-span-3" />
        {createArray(57, 70).map((value) => (
          <div key={value}>{renderAtom(atoms.value[value])}</div>
        ))}

        <div class="col-span-1" />

        <div class="col-span-3" />
        {createArray(89, 102).map((value) => (
          <div key={value}>{renderAtom(atoms.value[value])}</div>
        ))}

        <div class="col-span-1" />
      </div>
    </div>
  );
});
