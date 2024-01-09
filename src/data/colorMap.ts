import type { Atom } from "~/lib/validation/atom";

export const colorMap = {
  family: {
    "Alkali metal": "#FB87FF",
    Actinide: "#FF0201",
    "Alkaline earth metal": "#4D058E",
    Halogen: "#FFCC00",
    Lanthanide: "#B4FF4E",
    Metalloid: "#FFB23A",
    "Noble gas": "#B87E0C",
    "Non-metal": "#319EFF",
    "Post-transition metal": "#4DFF60",
    "Transition metal": "#32D3FF",
  },
} satisfies { family: Record<Atom["family"]["name"], string> };
