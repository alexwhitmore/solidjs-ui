import type { Component } from "solid-js";
import { splitProps } from "solid-js";
import {
  Select as ArkSelect,
  type SelectTriggerProps,
  type SelectContentProps,
  type SelectItemProps,
  type SelectItemGroupLabelProps,
  type SelectItemGroupProps,
} from "@ark-ui/solid";
import { Check, ChevronDown } from "lucide-solid";
import { cn } from "../../lib/utils";

const Select = ArkSelect.Root;
const SelectValue = ArkSelect.ValueText;
const SelectControl = ArkSelect.Control;
const SelectIndicator = ArkSelect.Indicator;
const SelectItemText = ArkSelect.ItemText;

const SelectItemGroup: Component<SelectItemGroupProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return <ArkSelect.ItemGroup {...rest} />;
};

const SelectItemGroupLabel: Component<SelectItemGroupLabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <ArkSelect.ItemGroupLabel
      class="py-1.5 pl-8 pr-2 text-sm font-semibold"
      {...rest}
    />
  );
};

const SelectTrigger: Component<SelectTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkSelect.Trigger
      class={cn(
        "flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[180px]",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <ChevronDown class="h-4 w-4" />
    </ArkSelect.Trigger>
  );
};

const SelectContent: Component<SelectContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <ArkSelect.Content
      class={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 mt-1 px-1 outline-none py-1",
        props.class,
      )}
      {...rest}
    />
  );
};

const SelectItem: Component<SelectItemProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"]);
  return (
    <ArkSelect.Item
      class={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent",
        props.class,
      )}
      {...rest}
    >
      <>
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <ArkSelect.ItemIndicator>
            <Check class="h-4 w-4" />
          </ArkSelect.ItemIndicator>
        </span>
        {props.children}
      </>
    </ArkSelect.Item>
  );
};

export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectControl,
  SelectIndicator,
  SelectItemText,
  SelectItemGroup,
  SelectItemGroupLabel,
};
