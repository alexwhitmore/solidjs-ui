import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Example() {
	return (
		<div class="flex justify-center items-center h-screen">
			<Card class="w-[350px]">
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div class="grid items-center w-full gap-4">
							<div class="flex flex-col space-y-1.5">
								<Label for="name">Name</Label>
								<Input id="name" placeholder="Name of your project" />
							</div>
							<div class="flex flex-col space-y-1.5">
								<Label for="framework">Framework</Label>
								<Input id="name" placeholder="Framework of your choice" />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter class="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Deploy</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
