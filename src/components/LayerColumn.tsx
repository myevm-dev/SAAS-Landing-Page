import { useDrag, useDrop } from "react-dnd";

const ItemType = "LAYER";

const LayerColumn = ({ index, moveLayer, removeLayer }: { 
  index: number; 
  moveLayer: (dragIndex: number, hoverIndex: number) => void; 
  removeLayer: (index: number) => void; 
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveLayer(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={`relative flex flex-col items-center bg-gray-700 p-4 border border-gray-600 flex-grow cursor-move transition-opacity ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <span className="text-white font-bold">Layer {index + 1}</span>

      {/* Remove Layer Button */}
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
