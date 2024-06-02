import { Slider } from "~/components/ui/slider"

export default function Example() {
  return (
    <Slider
      min={0}
      max={100}
      step={1}
      value={[50]}
      onChange={(value) => console.log("Slider value:", value)}
    />
  )
}