import { Input, array, boolean, number, object, string } from "valibot"

export const atomSchema = object({
  atomicNumber: number(),
  symbol: string(),
  atomicMass: string(),
  meltingPoint: object({
    kelvin: string(),
    celsius: string(),
    fahrenheit: string(),
  }),
  name: object({
    en: string(),
    fr: string(),
  }),
  phaseAtSTP: string(),
  block: string(),
  group: number(),
  period: number(),
  family: object({
    isMetal: boolean(),
    name: string(),
  }),
  discovery: object({
    by: string(),
    country: string(),
    year: number(),
  }),
})
export type Atom = Input<typeof atomSchema>

export const atomsSchema = array(atomSchema)
export type Atoms = Input<typeof atomsSchema>