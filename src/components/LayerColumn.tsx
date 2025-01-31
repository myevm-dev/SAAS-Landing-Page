const LayerColumn = ({ index, moveLeft, moveRight, removeLayer, totalLayers }: { 
  index: number; 
  moveLeft: (index: number) => void;
  moveRight: (index: number) => void;
  removeLayer: (index: number) => void;
  totalLayers: number;
}) => {
  return (
    <div className="relative flex flex-col items-center bg-gray-700 p-4 border border-gray-600 flex-grow">
      <span className="text-white font-bold">Layer {index + 1}</span>

      {/* Control Buttons (Left, Remove, Right) */}
      <div className="flex mt-auto space-x-2">
        {/* Left Arrow - Disabled for the first layer */}
        <button
          onClick={() => moveLeft(index)}
          disabled={index === 0}
          className={`px-2 py-1 text-white rounded bg-gray-500 hover:bg-gray-400 transition ${
            index === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ←
        </button>

        {/* Remove Layer Button */}
        <button
          onClick={() => removeLayer(index)}
          className="bg-red-500 text-white text-xs px-2 py-1 rounded"
        >
          ✖
        </button>

        {/* Right Arrow - Disabled for the last layer */}
        <button
          onClick={() => moveRight(index)}
          disabled={index === totalLayers - 1}
          className={`px-2 py-1 text-white rounded bg-gray-500 hover:bg-gray-400 transition ${
            index === totalLayers - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default LayerColumn;
