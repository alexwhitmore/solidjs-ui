import React, { useRef, useEffect, useState, CSSProperties } from "react";
import {
	Accordion as ArkAccordion,
	type AccordionItemProps,
	type AccordionItemTriggerProps,
	type AccordionItemContentProps,
} from "@ark-ui/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = ArkAccordion.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof ArkAccordion.Item>,
	AccordionItemProps
>((props, ref) => {
	const { className, ...restProps } = props;
	return (
		<ArkAccordion.Item
			ref={ref}
			className={cn("border-b", className)}
			{...restProps}
		/>
	);
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof ArkAccordion.ItemTrigger>,
	AccordionItemTriggerProps
>(({ className, children, ...props }, ref) => (
	<div className="flex">
		<ArkAccordion.ItemTrigger
			ref={ref}
			className={cn(
				"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
		</ArkAccordion.ItemTrigger>
	</div>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent: React.FC<AccordionItemContentProps> = ({
	id,
	className,
	children,
}) => {
	const [rect, setRect] = useState<{ height: number; width: number }>({
		height: 0,
		width: 0,
	});
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handler = (entries: ResizeObserverEntry[]) => {
			const { height } = entries[0].contentRect;
			const adjustedHeight = height + 16;
			setRect((prevRect) => ({ ...prevRect, height: adjustedHeight }));
		};

		const resizeObserver = new ResizeObserver(handler);

		if (contentRef.current) {
			resizeObserver.observe(contentRef.current);
		}
		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	const style: CSSProperties = {
		"--accordion-content-height": `${rect.height}px`,
	} as React.CSSProperties;

	return (
		<ArkAccordion.ItemContent
			className={cn(
				"animate-accordion-up overflow-hidden text-sm transition-all",
				"data-[state=open]:animate-accordion-down",
				className,
			)}
			style={style}
		>
			<div ref={contentRef} id={id} className="pb-4 pt-0">
				{children}
			</div>
		</ArkAccordion.ItemContent>
	);
};
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
