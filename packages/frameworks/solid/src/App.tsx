import type { Component } from 'solid-js';
import { Slider } from "~/components/ui/slider"

const App: Component = () => {
  return (
    <div class='w-1/2 mx-auto flex justify-center items-center h-screen'>
      <Slider
        min={0}
        max={100}
        step={1}
        value={[50]}
        onChange={(value) => console.log("Slider value:", value)}
      />
    </div>
  );
};

export default App;
