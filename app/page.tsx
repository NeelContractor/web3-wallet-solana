import Image from "next/image";
import { CardContent } from "../components/ui/card";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <CardContent>
      <div className="flex justify-center mb-10">
        <Image src="" alt="Logo" height={300} width={300} />
      </div>
      <Link href="/mnemonic">
        <Button className="w-full">Create New Wallet</Button>
      </Link>
      <Link href="/recover">
        <Button className="w-full">Recover Wallet</Button>
      </Link>
    </CardContent>
  );
}
