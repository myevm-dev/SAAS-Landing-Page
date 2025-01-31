import { tokens } from "./tokens";

const InputBar = () => {
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-[80px] bg-gray-800 text-white p-2 flex flex-col items-center overflow-y-auto">
      {tokens.map((token) => (
        <div key={token.address} className="flex flex-col items-center mb-4 mt-2">
          <img
            src={token.image}
            alt={token.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-xs text-center mt-1">{token.name}</span>
        </div>
      ))}
    </aside>
  );
};

export default InputBar;

