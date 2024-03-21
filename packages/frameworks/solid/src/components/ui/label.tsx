import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { ark } from "@ark-ui/solid";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const labelVariants = cva(
	"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label: Component<ComponentProps<"label">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ark.label class={cn(labelVariants(), props.class)} {...rest}>
			{props.children}
		</ark.label>
	);
};

export { Label, labelVariants };
