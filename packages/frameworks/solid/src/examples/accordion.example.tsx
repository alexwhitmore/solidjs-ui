import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";

export default function Example() {
	return (
		<div class="max-w-md mx-auto flex justify-center h-screen items-center">
			<Accordion multiple={false} collapsible class="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent id="accordion-content-1">
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Is it styled?</AccordionTrigger>
					<AccordionContent id="accordion-content-2">
						Yes. It comes with default styles that matches the other components'
						aesthetic.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent id="accordion-content-3">
						Yes. It's animated by default, but you can disable it if you prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
