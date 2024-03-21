import type { Component } from "solid-js";
import { splitProps } from "solid-js";
import type {
	TabListProps,
	TabTriggerProps,
	TabContentProps,
	TabIndicatorProps,
} from "@ark-ui/solid";
import { Tabs as ArkTabs } from "@ark-ui/solid";
import { cn } from "../../lib/utils";

const Tabs = ArkTabs.Root;

const TabsList: Component<TabListProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkTabs.List
			class={cn(
				"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
				props.class,
			)}
			{...rest}
		/>
	);
};

const TabsTrigger: Component<TabTriggerProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkTabs.Trigger
			class={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
				props.class,
			)}
			{...rest}
		/>
	);
};

const TabsContent: Component<TabContentProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkTabs.Content
			class={cn(
				"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				props.class,
			)}
			{...rest}
		/>
	);
};

const TabsIndicator: Component<TabIndicatorProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkTabs.Indicator
			class={cn(
				"duration-250ms absolute transition-all data-[orientation=horizontal]:bottom-[-1px] data-[orientation=vertical]:right-[-1px] data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]",
				props.class,
			)}
			{...rest}
		/>
	);
};

export { Tabs, TabsList, TabsTrigger, TabsIndicator, TabsContent };
