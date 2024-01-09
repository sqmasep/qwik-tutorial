import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { cn } from "~/utils/cn";

interface SelectProps {
  options: string[];
  value: Signal<string>;
}

export const FamilySelect = component$<SelectProps>(({ options, value }) => {
  return (
    <div class="inline-flex flex-wrap justify-center gap-2">
      {options.map((option) => (
        <button
          class={cn(
            "rounded-md px-3 py-1 transition-colors hover:bg-zinc-800",
            option === value.value && "bg-blue-800 hover:bg-blue-900",
          )}
          onClick$={() => {
            value.value = option;
          }}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
});
