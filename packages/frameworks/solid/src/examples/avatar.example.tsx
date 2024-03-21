import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Example() {
	return (
		<Avatar>
			<AvatarFallback>AW</AvatarFallback>
			<AvatarImage
				src="https://github.com/alexwhitmore.png"
				alt="@alexwhitmore"
			/>
		</Avatar>
	);
}
