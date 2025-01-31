import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InputBar from "@/components/InputBar";
import OutputBar from "@/components/OutputBar";
import LayerColumn from "@/components/LayerColumn";

const Index = () => {
  const [layers, setLayers] = useState<number[]>([]);

  // Add a new layer
  const addLayer = () => {
    setLayers([...layers, layers.length]);
  };

  // Remove a layer
  const removeLayer = (index: number) => {
    const updatedLayers = layers.filter((_, i) => i !== index);
    setLayers(updatedLayers);
  };

  // Move layers by reordering the array
  const moveLayer = (dragIndex: number, hoverIndex: number) => {
    const updatedLayers = [...layers];
    const [draggedLayer] = updatedLayers.splice(dragIndex, 1);
    updatedLayers.splice(hoverIndex, 0, draggedLayer);
    setLayers(updatedLayers);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        {/* Main layout container */}
        <div className="flex flex-grow mt-20">
          {/* Left Sidebar (Input) */}
          <InputBar />

          {/* Middle Layers (Draggable and Centered Between Input & Output Bars) */}
          <div className="flex flex-grow justify-start items-stretch ml-[80px] mr-[80px] pb-16">
            {layers.map((_, newIndex) => (
              <LayerColumn key={newIndex} index={newIndex} moveLayer={moveLayer} removeLayer={removeLayer} />
            ))}
          </div>

          {/* Right Sidebar (Output) */}
          <OutputBar />
        </div>

        {/* Footer with Add Layer Button */}
        <Footer>
          <button
            onClick={addLayer}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Layer
          </button>
        </Footer>
      </div>
    </DndProvider>
  );
};

export default Index;
