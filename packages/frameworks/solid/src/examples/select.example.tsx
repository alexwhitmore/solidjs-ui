import {
	Select,
	SelectTrigger,
	SelectControl,
	SelectValue,
	SelectItem,
	SelectItemText,
	SelectContent,
	SelectItemGroup,
	SelectItemGroupLabel,
} from "../components/ui/select";

export default function Example() {
	const items = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
	return (
		<div class="w-[180px]">
			<Select items={items}>
				<SelectControl>
					<SelectTrigger>
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
				</SelectControl>
				<SelectItemGroup id="fruits">
					<SelectContent>
						<SelectItemGroupLabel for="fruits">Fruits</SelectItemGroupLabel>
						{items.map((item) => (
							<SelectItem item={item}>
								<SelectItemText>{item}</SelectItemText>
							</SelectItem>
						))}
					</SelectContent>
				</SelectItemGroup>
			</Select>
		</div>
	);
}
