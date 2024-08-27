import Image from "next/image";
import { CardContent } from "../components/ui/card";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <CardContent>
      <div className="flex justify-center mb-10">
        <Image src="/images/BlackHole.jpeg" alt="Logo" height={300} width={300} className="mt-4 rounded-lg" />
      </div>
      <Link href="/mnemonic">
        <Button className="w-full mb-2">Create New Wallet</Button>
      </Link>
      <Link href="/recover">
        <Button className="w-full">Recover Wallet</Button>
      </Link>
    </CardContent>
  );
}
