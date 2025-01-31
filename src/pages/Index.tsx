import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputBar from "@/components/InputBar";
import OutputBar from "@/components/OutputBar";
import LayerColumn from "@/components/LayerColumn";

const MAX_LAYERS = 9; // ✅ Limit layer count

const Index = () => {
  const [layers, setLayers] = useState<number[]>([]);

  // ✅ Add a new layer only if it's less than MAX_LAYERS
  const addLayer = () => {
    if (layers.length < MAX_LAYERS) {
      setLayers([...layers, layers.length]);
    }
  };

  // ✅ Remove a layer
  const removeLayer = (index: number) => {
    const updatedLayers = layers.filter((_, i) => i !== index);
    setLayers(updatedLayers);
  };

  // ✅ Move layer left
  const moveLeft = (index: number) => {
    if (index > 0) {
      const updatedLayers = [...layers];
      [updatedLayers[index], updatedLayers[index - 1]] = [updatedLayers[index - 1], updatedLayers[index]];
      setLayers(updatedLayers);
    }
  };

  // ✅ Move layer right
  const moveRight = (index: number) => {
    if (index < layers.length - 1) {
      const updatedLayers = [...layers];
      [updatedLayers[index], updatedLayers[index + 1]] = [updatedLayers[index + 1], updatedLayers[index]];
      setLayers(updatedLayers);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Main layout container */}
      <div className="flex flex-grow mt-20">
        {/* Left Sidebar (Input) */}
        <InputBar />

        {/* Middle Layers (Max 9 Layers) */}
        <div className="flex flex-grow justify-start items-stretch ml-[80px] mr-[80px] pb-16 transition-all duration-300 ease-in-out">
          {layers.map((_, index) => (
            <LayerColumn
              key={index}
              index={index}
              moveLeft={moveLeft}
              moveRight={moveRight}
              removeLayer={removeLayer}
              totalLayers={layers.length}
            />
          ))}
        </div>

        {/* Right Sidebar (Output) */}
        <OutputBar />
      </div>

      {/* Footer with Add Layer Button */}
      <Footer>
        <button
          onClick={addLayer}
          className={`px-4 py-2 rounded ${layers.length >= MAX_LAYERS ? "bg-gray-600 cursor-not-allowed" : "bg-black text-white"}`}
          disabled={layers.length >= MAX_LAYERS} // ✅ Disable button when at max
        >
          {layers.length >= MAX_LAYERS ? "Max Layers Reached" : "Add Layer"}
        </button>
      </Footer>
    </div>
  );
};

export default Index;
