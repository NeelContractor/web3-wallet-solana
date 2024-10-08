"use client"

import { useRecoilState } from "recoil"
import { ethWalletsState, mnemonicState, solWalletsState } from "../../state/state"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const RecoverPage = () => {
    const [mnemonic, setMnemonic] = useRecoilState(mnemonicState);
    const [ethWallets, setEthWallets] = useRecoilState(ethWalletsState);
    const [solWallets, setSolWallets] = useRecoilState(solWalletsState);
    const [phrase, setPrase] = useState("");

    const router = useRouter();
    useEffect(() => {
        if (window !== undefined) setPrase(localStorage.getItem("mnemonic_phrase") as string);
    });

    const handleRecover = () => {
        if (phrase === null) return;
        setMnemonic(phrase);
        setEthWallets([]);
        setSolWallets([]);
        router.push("/wallet");
    };

    return (
        <CardContent className="flex flex-col py-8 px-6 items-center h-full">
            <h1 className="text-4xl font-bold">Recover Wallet</h1>
            <div className="flex-grow flex flex-col justify-center gap-4 w-full">
                <Button onClick={() => router.push("/recover/mnemonic")} className="w-full">
                    Provide Mnemonic Phrase
                </Button>
                <Button onClick={handleRecover} className="w-full" disabled={phrase === null}>
                    Recover From LocalStorage
                </Button>
            </div>
        </CardContent>
    )
}

export default RecoverPage