import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

export default function Example() {
	return (
		<div class="flex justify-center items-center h-screen">
			<RadioGroup value="comfortable">
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="default" />
					<Label for="r1">Default</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="comfortable" />
					<Label for="r2">Comfortable</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="compact" />
					<Label for="r3" class="m-0">
						Compact
					</Label>
				</div>
			</RadioGroup>
		</div>
	);
}
