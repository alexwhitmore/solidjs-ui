import { splitProps } from "solid-js";
import { Slider as ArkSlider } from "@ark-ui/solid";
import type { SliderRootProps } from "@ark-ui/solid";
import { cn } from "~/lib/utils";

const Slider = (props: SliderRootProps) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSlider.Root
      class={cn("relative flex w-full touch-none select-none items-center", local.class)}
      {...rest}
    >
      <ArkSlider.Control class="relative w-full flex items-center">
        <ArkSlider.Track class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <ArkSlider.Range class="absolute h-full bg-primary" />
        </ArkSlider.Track>
        <ArkSlider.Thumb
          index={0}
          class="relative block w-4 h-4 transition-colors border rounded-full shadow border-primary/50 bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        />
      </ArkSlider.Control>
    </ArkSlider.Root>
  );
};

export { Slider };
