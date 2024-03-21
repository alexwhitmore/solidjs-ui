import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

export default function Example() {
  return (
    <div className="example-center">
      <Avatar>
        <AvatarFallback>AW</AvatarFallback>
        <AvatarImage src="https://github.com/alexwhitmore.png" alt="@alexwhitmore" />
      </Avatar>
    </div>
  )
}
