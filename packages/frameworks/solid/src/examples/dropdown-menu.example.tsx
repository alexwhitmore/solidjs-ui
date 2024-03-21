import { Portal } from "solid-js/web";
import { Button } from "../components/ui/button";
import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-solid";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownPosition,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
	DropdownMenuShortcut,
} from "../components/ui/dropdown-menu";

export default function Example() {
	return (
		<DropdownMenu positioning={{ placement: "bottom" }}>
			<DropdownMenuTrigger class="outline-none">
				<Button variant="outline">Open</Button>
			</DropdownMenuTrigger>
			<DropdownPosition>
				<DropdownMenuContent>
					<DropdownMenuLabel for="group-1">My Account</DropdownMenuLabel>
					<DropdownMenuSeparator class="-mx-1 my-1 h-px bg-muted" />
					<DropdownMenuItem id="profile">
						<User class="mr-2 h-4 w-4" />
						<span>Profile</span>
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem id="billing">
						<CreditCard class="mr-2 h-4 w-4" />
						<span>Billing</span>
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem id="settings">
						<Settings class="mr-2 h-4 w-4" />
						<span>Settings</span>
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem id="keyboard-response">
						<Keyboard class="mr-2 h-4 w-4" />
						<span>Keyboard response</span>
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuSeparator class="-mx-1 my-1 h-px bg-muted" />
					<DropdownMenuItem id="team">
						<Users class="mr-2 h-4 w-4" />
						<span>Team</span>
					</DropdownMenuItem>

					<DropdownMenu>
						<DropdownMenuSubTrigger>
							<UserPlus class="mr-2 h-4 w-4" />
							<span>Invite users</span>
						</DropdownMenuSubTrigger>
						<Portal>
							<DropdownPosition>
								<DropdownMenuSubContent>
									<DropdownMenuItem id="email">
										<Mail class="mr-2 h-4 w-4" />
										<span>Email</span>
									</DropdownMenuItem>
									<DropdownMenuItem id="message">
										<MessageSquare class="mr-2 h-4 w-4" />
										<span>Message</span>
									</DropdownMenuItem>
									<DropdownMenuSeparator class="-mx-1 my-1 h-px bg-muted" />
									<DropdownMenuItem id="more">
										<PlusCircle class="mr-2 h-4 w-4" />
										<span>More...</span>
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownPosition>
						</Portal>
					</DropdownMenu>

					<DropdownMenuItem id="new-team">
						<Plus class="mr-2 h-4 w-4" />
						<span>New team</span>
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuSeparator class="-mx-1 my-1 h-px bg-muted" />
					<DropdownMenuItem id="github">
						<Github class="mr-2 h-4 w-4" />
						<span>GitHub</span>
					</DropdownMenuItem>
					<DropdownMenuItem id="support">
						<LifeBuoy class="mr-2 h-4 w-4" />
						<span>Support</span>
					</DropdownMenuItem>
					<DropdownMenuItem id="api" disabled>
						<Cloud class="mr-2 h-4 w-4" />
						<span>API</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator class="-mx-1 my-1 h-px bg-muted" />
					<DropdownMenuItem id="log-out">
						<LogOut class="mr-2 h-4 w-4" />
						<span>Log out</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownPosition>
		</DropdownMenu>
	);
}
