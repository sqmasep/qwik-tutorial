import type { Signal } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import { colorMap } from "~/data/colorMap";
import type { Atom } from "~/lib/validation/atom";
import { cn } from "~/utils/cn";

interface SelectProps {
  options: string[];
  value: Signal<string>;
  class?: string;
}

export const FamilySelect = component$<SelectProps>(
  ({ options, value, class: className }) => {
    const handleSelect = (option: string) => $(() => (value.value = option));

    return (
      <div class={cn("inline-flex flex-wrap justify-center gap-2", className)}>
        {options.map((option) => (
          <button
            class={cn(
              "rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-zinc-200 transition-colors duration-75 hover:bg-zinc-800",
            )}
            style={{
              backgroundColor:
                option === value.value
                  ? option === "All"
                    ? "#0048ff"
                    : colorMap.family[option as Atom["family"]["name"]] + "60"
                  : undefined,
            }}
            tabIndex={0}
            onClick$={handleSelect(option)}
            onMouseEnter$={handleSelect(option)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    );
  },
);
