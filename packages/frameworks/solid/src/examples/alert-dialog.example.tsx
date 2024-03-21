import {
	AlertDialog,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

export default function Example() {
	return (
		<div class="flex justify-center items-center h-screen">
			<AlertDialog>
				<AlertDialogTrigger>
					<Button variant="outline">Show Dialog</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
