import { ethers } from "ethers";
import { tokens } from "./tokens";

// Base Chain RPC
const RPC_URL = "https://mainnet.base.org";
const VAULT_ADDRESS = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";

// ERC20 ABI (Minimal for balance check)
const ERC20_ABI = ["function balanceOf(address owner) view returns (uint256)"];

export const getVaultBalance = async (tokenAddress: string) => {
  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
    const balance = await tokenContract.balanceOf(VAULT_ADDRESS);

    // Get token decimals from `tokens.ts`
    const token = tokens.find((t) => t.address.toLowerCase() === tokenAddress.toLowerCase());
    const decimals = token ? token.decimals : 18; // Default to 18 if unknown

    // Format balance using correct decimals and display 6 decimal places
    const formattedBalance = parseFloat(ethers.formatUnits(balance, decimals)).toFixed(6);

    // ✅ Add Comma Separators
    return new Intl.NumberFormat("en-US").format(parseFloat(formattedBalance));
  } catch (error) {
    console.error("Error fetching vault balance:", error);
    return "Error";
  }
};
