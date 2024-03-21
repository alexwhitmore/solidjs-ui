import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

export function Example() {
	return (
		<div>
			<div class="flex items-center space-x-2">
				<Checkbox id="terms" />
				<Label for="terms">Accept terms and conditions</Label>
			</div>
		</div>
	);
}
