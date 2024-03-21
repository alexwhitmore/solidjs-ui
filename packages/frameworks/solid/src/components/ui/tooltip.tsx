import { splitProps, type Component } from "solid-js";
import { Portal } from "solid-js/web";
import { Tooltip as ArkTooltip, type TooltipContentProps } from "@ark-ui/solid";
import { cn } from "../../lib/utils";

const Tooltip = ArkTooltip.Root;
const TooltipTrigger = ArkTooltip.Trigger;

const TooltipContent: Component<TooltipContentProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<Portal>
			<ArkTooltip.Positioner>
				<ArkTooltip.Content
					class={cn(
						"z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
						props.class,
					)}
					{...rest}
				/>
			</ArkTooltip.Positioner>
		</Portal>
	);
};

export { Tooltip, TooltipTrigger, TooltipContent };
