import { component$ } from "@builder.io/qwik";
import { Counter } from "~/integrations/react/Counter";

export default component$(() => {
  return (
    <>
      <div class="">
        <div>a</div>
        <Counter />
      </div>
    </>
  );
});
