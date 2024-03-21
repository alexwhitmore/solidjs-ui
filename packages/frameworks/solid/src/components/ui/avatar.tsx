import type { Component } from "solid-js";
import { splitProps } from "solid-js";
import {
	Avatar as ArkAvatar,
	type HTMLArkProps,
	type AvatarRootProps,
} from "@ark-ui/solid";
import { cn } from "../../lib/utils";

export interface AvatarProps extends AvatarRootProps {
	name?: string;
	src?: string;
}
export interface AvatarImageProps extends HTMLArkProps<"img"> {}
export interface AvatarFallbackProps extends HTMLArkProps<"span"> {}

const Avatar: Component<AvatarRootProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkAvatar.Root
			class={cn(
				"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
				props.class,
			)}
			{...rest}
		/>
	);
};

const AvatarImage: Component<AvatarImageProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkAvatar.Image
			class={cn("aspect-square h-full w-full", props.class)}
			{...rest}
		/>
	);
};

const AvatarFallback: Component<AvatarFallbackProps> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<ArkAvatar.Fallback
			class={cn(
				"flex h-full w-full items-center justify-center rounded-full bg-muted",
				props.class,
			)}
			{...rest}
		/>
	);
};

export { Avatar, AvatarImage, AvatarFallback };
