import { Checkbox } from "../components/ui/checkbox";

export default function Example() {
	return (
		<div class="flex justify-center items-center h-screen">
			<div class="flex items-center space-x-2">
				<Checkbox id="terms" />
				<label
					for="terms"
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept terms and conditions
				</label>
			</div>
		</div>
	);
}
