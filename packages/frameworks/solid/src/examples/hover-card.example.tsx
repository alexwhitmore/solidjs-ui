import { CalendarDays } from "lucide-solid";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../components/ui/hover-card";

export default function Example() {
	return (
		<div class="flex items-center justify-center h-screen">
			<HoverCard>
				<HoverCardTrigger>
					<Button variant="link">@nextjs</Button>
				</HoverCardTrigger>
				<HoverCardContent class="w-80">
					<div class="flex justify-between space-x-4">
						<Avatar>
							<AvatarFallback>AW</AvatarFallback>
							<AvatarImage src="https://github.com/vercel.png" alt="vercel" />
						</Avatar>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold">@nextjs</h4>
							<p class="text-sm">
								The React Framework – created and maintained by @vercel.
							</p>
							<div class="flex items-center pt-2">
								<CalendarDays class="w-4 h-4 mr-2 opacity-70" />{" "}
								<span class="text-xs text-muted-foreground">
									Joined December 2021
								</span>
							</div>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	);
}
