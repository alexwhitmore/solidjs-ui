import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import type { JSX } from "solid-js/jsx-runtime";

import { cn } from "../../lib/utils";
import { ChevronRight } from "lucide-solid";

const Breadcrumb = (props: JSX.HTMLAttributes<HTMLElement> & { separator?: JSX.Element }) => {
  const [, rest] = splitProps(props, ["separator"]);
  return (
    <nav aria-label="breadcrumb" {...rest} />
  );
};

const BreadcrumbList = (props: JSX.HTMLAttributes<HTMLOListElement>) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <ol
      class={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        props.class
      )}
      {...rest}
    />
  )
}

const BreadcrumbItem = (props: JSX.HTMLAttributes<HTMLLIElement>) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <li
      class={cn("inline-flex items-center gap-1.5", props.class)}
      {...rest}
    />
  )
}

const BreadcrumbLink = (props: ComponentProps<"a">) => {
  const [, rest] = splitProps(props, ["class", "href"]);

  return (
    <a
      class={cn("transition-colors hover:text-foreground", props.class)}
      href={props.href}
      {...rest}
    />
  );
};

const BreadcrumbPage = (props: JSX.HTMLAttributes<HTMLSpanElement>) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      class={cn("font-normal text-foreground", props.class)}
      {...rest}
    />
  )
}

const BreadcrumbSeparator = (props: ComponentProps<"li">) => {
  const [, rest] = splitProps(props, ["class", "children"]);
  return (
    <li
      role="presentation"
      aria-hidden="true"
      class={cn("[&>svg]:size-3.5", props.class)}
      {...rest}
    >
      {props.children ?? <ChevronRight />}
    </li>
  )
}

const BreadcrumbEllipsis = (props: ComponentProps<"span">) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <span
      role="presentation"
      aria-hidden="true"
      class={cn("flex h-9 w-9 items-center justify-center", props.class)}
      {...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis">
        <title>Ellipsis Icon</title><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
      <span class="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
}