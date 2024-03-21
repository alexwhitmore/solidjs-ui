import { splitProps } from "solid-js";
import type { Component, ComponentProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
	Dialog as ArkDialog,
	type DialogBackdropProps,
	type DialogContentProps,
	type DialogTitleProps,
	type DialogDescriptionProps,
} from "@ark-ui/solid";
import { X } from "lucide-solid";
import { cn } from "../../lib/utils";

const Dialog = ArkDialog.Root;
const DialogTrigger = ArkDialog.Trigger;
const DialogPosition = ArkDialog.Positioner;
const DialogClose = ArkDialog.CloseTrigger;

const DialogOverlay: Component<DialogBackdropProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.Backdrop
			class={cn(
				"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DialogContent: Component<DialogContentProps> = (props) => {
	const [, rest] = splitProps(props, ["class", "children"]);
	return (
		<Portal>
			<DialogOverlay />
			<ArkDialog.Positioner>
				<ArkDialog.Content
					class={cn(
						"fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
						props.class,
					)}
					{...rest}
				>
					{props.children}
					<ArkDialog.CloseTrigger class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground">
						<X class="w-4 h-4" />
						<span class="sr-only">Close</span>
					</ArkDialog.CloseTrigger>
				</ArkDialog.Content>
			</ArkDialog.Positioner>
		</Portal>
	);
};

const DialogHeader: Component<ComponentProps<"div">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col space-y-1.5 text-center sm:text-left",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DialogFooter: Component<ComponentProps<"div">> = (props) => {
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

const DialogTitle: Component<DialogTitleProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.Title
			class={cn(
				"text-lg font-semibold leading-none tracking-tight",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DialogDescription: Component<DialogDescriptionProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.Description
			class={cn("text-sm text-muted-foreground", props.class)}
			{...rest}
		/>
	);
};

export {
	Dialog,
	DialogTrigger,
	DialogPosition,
	DialogClose,
	DialogOverlay,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
