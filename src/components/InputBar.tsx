import { useEffect, useState } from "react";
import { tokens } from "../utils/tokens";
import { getVaultBalance } from "@/utils/getVaultBalance";
import { Tooltip } from "react-tooltip";

const InputBar = () => {
  const [balances, setBalances] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchBalances = async () => {
      const balanceMap: { [key: string]: string } = {};
      for (const token of tokens) {
        const balance = await getVaultBalance(token.address);
        balanceMap[token.address] = balance;
      }
      setBalances(balanceMap);
    };

    fetchBalances();
  }, []);

  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-[80px] bg-gray-800 text-white p-2 flex flex-col items-center overflow-y-auto">
      {tokens.map((token) => (
        <div key={token.address} className="flex flex-col items-center mb-4 mt-2 relative">
          {/* Token Image with Tooltip */}
          <img
            src={token.image}
            alt={token.name}
            className="w-8 h-8 rounded-full cursor-pointer"
            data-tooltip-id={`tooltip-${token.address}`}
            data-tooltip-place="right"
            data-tooltip-container="body"
          />
          <span className="text-xs text-center mt-1">{token.name}</span>

          {/* Tooltip for Vault Balance */}
          <Tooltip
            id={`tooltip-${token.address}`}
            place="right"
            offset={15}
            className="!fixed !z-[9999] bg-black text-white p-2 rounded text-xs max-w-[200px] break-words shadow-lg"
          >
            <span>Vault Balance:</span><br />
            <span className="font-bold">{balances[token.address] || "Loading..."}</span>
          </Tooltip>
        </div>
      ))}
    </aside>
  );
};

export default InputBar;
