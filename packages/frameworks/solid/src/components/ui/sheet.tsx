import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import type {
	DialogBackdropProps,
	DialogContentProps,
	DialogTitleProps,
	DialogDescriptionProps,
} from "@ark-ui/solid";
import { Dialog as ArkDrawer } from "@ark-ui/solid";
import { cva } from "class-variance-authority";
import { X } from "lucide-solid";
import { cn } from "../../lib/utils";

const sheetVariants = cva(
	"fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
	{
		variants: {
			side: {
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
			},
		},
		defaultVariants: {
			side: "right",
		},
	},
);

const Sheet = ArkDrawer.Root;
const SheetTrigger = ArkDrawer.Trigger;
const SheetClose = ArkDrawer.CloseTrigger;
const SheetPortal = Portal;

const SheetOverlay: Component<DialogBackdropProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDrawer.Backdrop
			class={
				"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
			}
			{...rest}
		/>
	);
};

const SheetContent: Component<
	DialogContentProps & { side?: "top" | "right" | "bottom" | "left" }
> = (props) => {
	const [, rest] = splitProps(props, ["class"]);

	return (
		<SheetPortal>
			<ArkDrawer.Content
				class={cn(sheetVariants({ side: props.side }), props.class)}
				{...rest}
			>
				{props.children}
				<SheetClose class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
					<X class="h-4 w-4" />
					<span class="sr-only">Close</span>
				</SheetClose>
			</ArkDrawer.Content>
		</SheetPortal>
	);
};

const SheetHeader: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col space-y-2 text-center sm:text-left",
				props.class,
			)}
			{...rest}
		/>
	);
};

const SheetFooter: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
				props.class,
			)}
			{...rest}
		/>
	);
};

const SheetTitle: Component<DialogTitleProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDrawer.Title
			class={cn("text-lg font-semibold text-foreground", props.class)}
			{...rest}
		/>
	);
};

const SheetDescription: Component<DialogDescriptionProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDrawer.Description
			class={cn("text-sm text-muted-foreground", props.class)}
			{...rest}
		/>
	);
};

export {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetPortal,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
	SheetOverlay,
};
