import { component$ } from "@builder.io/qwik";
import { PeriodicTable } from "~/features/map/components/PeriodicTable";

export default component$(() => {
  return (
    <>
      <div>
        <PeriodicTable />
      </div>
    </>
  );
});
