import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Terminal } from "lucide-solid";

export default function Example() {
	return (
		<div class="max-w-md mx-auto flex items-center h-screen">
			<Alert>
				<Terminal class="h-4 w-4" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components to your app using the cli.
				</AlertDescription>
			</Alert>
		</div>
	);
}
