import { Checkbox } from '../components/ui/checkbox'

export default function Example() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  )
}
