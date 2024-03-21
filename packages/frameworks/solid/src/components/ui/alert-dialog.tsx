import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
	Dialog as ArkDialog,
	type DialogBackdropProps,
	type DialogContentProps,
	type DialogTitleProps,
	type DialogDescriptionProps,
	type DialogCloseTriggerProps,
} from "@ark-ui/solid";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";

const AlertDialog = ArkDialog.Root;
const AlertDialogTrigger = ArkDialog.Trigger;
const AlertDialogPosition = ArkDialog.Positioner;
const AlertDialogClose = ArkDialog.CloseTrigger;

const AlertDialogOverlay: Component<DialogBackdropProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.Backdrop
			class={cn(
				"fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
				props.class,
			)}
			{...rest}
		/>
	);
};

const AlertDialogContent: Component<DialogContentProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<Portal>
			<AlertDialogOverlay />
			<ArkDialog.Content
				class={cn(
					"space-y-4 fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
					props.class,
				)}
				{...rest}
			/>
		</Portal>
	);
};

const AlertDialogHeader: Component<ComponentProps<"div">> = (props) => {
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

const AlertDialogFooter: Component<ComponentProps<"div">> = (props) => {
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

const AlertDialogTitle: Component<DialogTitleProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.Title
			class={cn("text-lg font-semibold", props.class)}
			{...rest}
		/>
	);
};

const AlertDialogDescription: Component<DialogDescriptionProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.Description
			class={cn("text-sm text-muted-foreground", props.class)}
			{...rest}
		/>
	);
};

const AlertDialogAction: Component<ComponentProps<"button">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<button type="button" class={cn(buttonVariants(), props.class)} {...rest} />
	);
};

const AlertDialogCancel: Component<DialogCloseTriggerProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkDialog.CloseTrigger
			class={cn(
				buttonVariants({ variant: "outline" }),
				"mt-2 sm:mt-0",
				props.class,
			)}
			{...rest}
		/>
	);
};

export {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogPosition,
	AlertDialogClose,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogAction,
	AlertDialogCancel,
};
