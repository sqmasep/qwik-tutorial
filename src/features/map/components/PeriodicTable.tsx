/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { parse } from "valibot";
import type { Atom, Atoms } from "~/lib/validation/atom";
import { atomsSchema } from "~/lib/validation/atom";
import { createArray } from "~/utils/createSlicedArray";

const ReactPeriodicTable: React.FC = () => {
  //Le code d'affichage du tableau periodique est ici correct, il faut maintenant lui fournir les données 😉
  const renderAtom = (atom: Atom) => {
    return <div>{atom.symbol}</div>;
  };

  if (!atoms.length) return null;

  return (
    <div className="grid-cols-18 grid">
      <div>{renderAtom(atoms[0])}</div>
      <div className="col-span-16" />
      <div>{renderAtom(atoms[1])}</div>

      <div>{renderAtom(atoms[2])}</div>
      <div>{renderAtom(atoms[3])}</div>
      <div className="col-span-10" />

      {createArray(4, 9).map((value) => (
        <div key={value}>{renderAtom(atoms[value])}</div>
      ))}

      <div>{renderAtom(atoms[10])}</div>
      <div>{renderAtom(atoms[11])}</div>
      <div className="col-span-10" />

      {createArray(12, 56).map((value) => (
        <div key={value}>{renderAtom(atoms[value])}</div>
      ))}

      {createArray(71, 88).map((value) => (
        <div key={value}>{renderAtom(atoms[value])}</div>
      ))}

      {createArray(103, 117).map((value) => (
        <div key={value}>{renderAtom(atoms[value])}</div>
      ))}

      <div className="col-span-18 h-6" />

      <div className="col-span-3" />
      {createArray(57, 70).map((value) => (
        <div key={value}>{renderAtom(atoms[value])}</div>
      ))}

      <div className="col-span-1" />

      <div className="col-span-3" />
      {createArray(89, 102).map((value) => (
        <div key={value}>{renderAtom(atoms[value])}</div>
      ))}

      <div className="col-span-1" />
    </div>
  );
};

export const PeriodicTable = qwikify$(ReactPeriodicTable, {
  eagerness: "load",
});
