import { Button } from "../components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../components/ui/tooltip";

export default function Example() {
	return (
		<div class="flex justify-center items-center h-screen">
			<Tooltip>
				<TooltipTrigger>
					<Button variant="outline">Hover</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
}
