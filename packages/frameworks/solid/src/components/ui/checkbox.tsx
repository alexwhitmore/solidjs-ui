import {
	Checkbox as ArkCheckbox,
	type CheckboxRootProps as ArkCheckboxProps,
} from "@ark-ui/solid";
import type { Component } from "solid-js";
import { splitProps, Show } from "solid-js";
import { Check } from "lucide-solid";
import { cn } from "../../lib/utils";

export const Checkbox: Component<ArkCheckboxProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkCheckbox.Root
			class={cn("items-top group flex space-x-2", props.class)}
			{...rest}
		>
			{(state) => (
				<div class="flex items-center">
					<ArkCheckbox.Control
						class={
							"checkbox-outline flex items-center cursor-pointer peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-2 ring-offset-background has-[:focus]:ring-2 has-[:focus]:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
						}
					>
						<Show when={state().isChecked}>
							<Check />
						</Show>
					</ArkCheckbox.Control>
				</div>
			)}
		</ArkCheckbox.Root>
	);
};
