/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import { parse } from "valibot";
import type { Atom, Atoms } from "~/lib/validation/atom";
import { atomsSchema } from "~/lib/validation/atom";
import { createArray } from "~/utils/createSlicedArray";

/* 
React, c'est bien, mais maintenant, c'est l'heure de découvrir qwik
Transformez ce composant React en composant qwik
À terme, il ne doit plus rester de qwikify

Voici un lien vers la doc officielle: 
https://qwik.builder.io/docs/components/overview/
*/
const ReactPeriodicTable: React.FC = () => {
  const [atoms, setAtoms] = useState<Atoms>([]);

  const renderAtom = (atom: Atom) => {
    return <div>{atom.symbol}</div>;
  };

  useEffect(() => {
    fetch("atoms.json")
      .then((res) => res.json())
      .then((data) => {
        const safeData = parse(atomsSchema, data);
        setAtoms(safeData);
      });
  }, []);

  if (!atoms.length) return null;

  return (
    <div>
      <div className="grid grid-cols-18">
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
    </div>
  );
};

export const PeriodicTable = qwikify$(ReactPeriodicTable, {
  eagerness: "load",
});
