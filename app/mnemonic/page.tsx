"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import * as bip from "bip39";
import toast from "react-hot-toast";
import { CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ethWalletsState, mnemonicState, solWalletsState } from "../../state/state";

const MnemonicPage = () => {
    const [mnemonic, setMnemonic] = useState("");
    const [mnemonicRecoil, setMnemonicRecoil] = useRecoilState(mnemonicState);
    const [solWallets, setSolWallets] = useRecoilState(solWalletsState);
    const [ethWallets, setEthWallets] = useRecoilState(ethWalletsState);

    const router = useRouter();

    const generateMnemonic = () => {
        const newMnemonic = bip.generateMnemonic();
        setMnemonic(newMnemonic);
    }

    useEffect(() => {
        generateMnemonic();
    }, []);

    const handleMnemonic = () => {
        setMnemonicRecoil(mnemonic);
        setSolWallets([]);
        setEthWallets([]);
        router.push("/wallet");
    };

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => toast.success(`${type} copied to clipboard!`))
            .catch(() => toast.error(`Failed to copy ${type.toLowerCase()}`));
    };
    return (
        <CardContent className="flex flex-col items-center px-8 py-6 gap-8 h-full" >
            <div className="relative w-full text-center fle justify-center">
                <h1 className="text-4xl font-bold">Mnemonic Phrase</h1>
            </div>
            <div className="flex flex-col w-full justify-between h-full">
                <div className="w-full">
                    <div className="grid grid-cols-3 gap-4 w-full">
                        {mnemonic.split(" ").map((word) => (
                            <div key={word} className="bg-whote text-black w-full py-2 text-center rounded">
                                {word}
                            </div>
                        ))}
                    </div>
                    <Button onClick={generateMnemonic} className="w-full mt-10">
                        Refreah Mnemonic Phrase
                    </Button>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex justify-between">
                        <Button onClick={() => copyToClipboard(mnemonic, "Phrase")}>Copy Phrase</Button>
                        <Button 
                        onClick={() => {
                            if (window !== undefined) {
                                localStorage.setItem("mnemonic_phrase", mnemonic);
                                toast.success("Phrase saved to LocalStorage");
                            }
                        }}
                        className=""
                        >Save in LocalStorage</Button>
                    </div>
                    <Button onClick={handleMnemonic} className="w-full">Generate Wallet</Button>
                </div>
            </div>
        </CardContent>
    )
}

export default MnemonicPage