const LayerColumn = ({ index, removeLayer }: { index: number; removeLayer: (index: number) => void }) => {
  return (
    <div className="relative flex flex-col items-center bg-gray-700 p-4 border border-gray-600 flex-grow">
      <span className="text-white font-bold">Layer {index + 1}</span>

      {/* Remove Layer Button (Fixed Inside) */}
      <div className="mt-auto">
        <button
          onClick={() => removeLayer(index)}
          className="bg-red-500 text-white text-xs px-2 py-1 rounded mt-2"
        >
          ✖ Remove
        </button>
      </div>
    </div>
  );
};

export default LayerColumn;
