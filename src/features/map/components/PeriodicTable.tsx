import { component$ } from "@builder.io/qwik";
import type { Atom } from "~/lib/validation/atom";
import { useAtoms } from "~/routes/layout";
import { createArray } from "~/utils/createSlicedArray";

export const PeriodicTable = component$(() => {
  const atoms = useAtoms();

  const renderAtom = (atom: Atom) => {
    return <div>{atom.symbol}</div>;
  };

  if (!atoms.value.length) return null;

  return (
    <div>
      <div class="grid grid-cols-18">
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
