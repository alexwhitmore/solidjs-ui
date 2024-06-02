import type { Component, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";
import { Menu } from "@ark-ui/solid";
import type {
  MenuContentProps,
  MenuItemProps,
  MenuItemGroupLabelProps,
  MenuTriggerItemProps,
} from "@ark-ui/solid";
import { ChevronRight } from "lucide-solid";
import { cn } from "../../lib/utils";

const DropdownMenu = Menu.Root;
const DropdownMenuTrigger = Menu.Trigger;
const DropdownPosition = Menu.Positioner;
const DropdownMenuSeparator = Menu.Separator;
const DropdownMenuGroup = Menu.ItemGroup;

const DropdownMenuContent: Component<MenuContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <Menu.Content
      class={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-none",
        props.class,
      )}
      {...rest}
    />
  );
};

const DropdownMenuItem: Component<MenuItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <Menu.Item
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent outline-none",
        props.class,
      )}
      {...rest}
    />
  );
};

const DropdownMenuLabel: Component<MenuItemGroupLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <Menu.ItemGroupLabel
      class={cn("px-2 py-1.5 text-sm font-semibold outline-none", props.class)}
      {...rest}
    />
  );
};

const DropdownMenuSubContent: Component<MenuContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <Menu.Content
      class={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-none",
        props.class,
      )}
      {...rest}
    />
  );
};

const DropdownMenuSubTrigger: Component<MenuTriggerItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <Menu.TriggerItem
      class={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent data-[highlighted]:bg-accent",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <ChevronRight class="ml-auto h-4 w-4" />
    </Menu.TriggerItem>
  );
};

const DropdownMenuShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <span
      class={cn("ml-auto text-xs tracking-widest opacity-60 outline-none", props.class)}
      {...rest}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownPosition,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSubContent,
  DropdownMenuShortcut,
};
