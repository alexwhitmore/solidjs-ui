import type { Component } from "solid-js";
import { splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import type { HoverCardContentProps } from "@ark-ui/solid";
import { HoverCard as ArkHoverCard } from "@ark-ui/solid";
import { cn } from "../../lib/utils";

const HoverCard = ArkHoverCard.Root;
const HoverCardTrigger = ArkHoverCard.Trigger;

const HoverCardContent: Component<HoverCardContentProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<Portal>
			<ArkHoverCard.Positioner>
				<ArkHoverCard.Content
					class={cn(
						"z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[placement=bottom]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[placement=bottom]:fade-in-0 data-[state=closed]:zoom-out-95 data-[placement=bottom]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
						props.class,
					)}
					{...rest}
				>
					{props.children}
					<ArkHoverCard.Arrow>
						<ArkHoverCard.ArrowTip />
					</ArkHoverCard.Arrow>
				</ArkHoverCard.Content>
			</ArkHoverCard.Positioner>
		</Portal>
	);
};

export { HoverCard, HoverCardTrigger, HoverCardContent };
