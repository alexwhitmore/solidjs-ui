import type { Component } from "solid-js";
import { splitProps } from "solid-js";
import type { RadioGroupRootProps, RadioGroupItemProps } from "@ark-ui/solid";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/solid";
import { Circle } from "lucide-solid";
import { cn } from "../../lib/utils";

const RadioGroup: Component<RadioGroupRootProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return <ArkRadioGroup.Root class={cn("grid gap-2", props.class)} {...rest} />;
};

/**
 *
 * TODO: Figure out why vertical alignment in ArkRadioGroup.Indicator
 * doesn't work. As a temporary workaround I've offset its position
 * with mt-[3px]
 */

const RadioGroupItem: Component<RadioGroupItemProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkRadioGroup.Item
			class={cn(
				"aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5 cursor-pointer",
				props.class,
			)}
			{...rest}
		>
			<ArkRadioGroup.ItemControl class="flex justify-center">
				<ArkRadioGroup.Indicator class="mt-[3px]">
					<Circle class="h-2.5 w-2.5 fill-current text-current" />
				</ArkRadioGroup.Indicator>
			</ArkRadioGroup.ItemControl>
		</ArkRadioGroup.Item>
	);
};

export { RadioGroup, RadioGroupItem };
