"use client";

import Card from "@/components/Card";
import { DATA_CARDS } from "@/constant/cardData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState<number>(1);

  function increment() {
    setState((prev) => prev + 1);
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold text-center">Welcome to my website</h1>

      <Image src="/globe.svg" alt="Next.js logo" width={200} height={200} />

      <p className="text-lg text-center">
        This is a Next.js project with Tailwind CSS and TypeScript.
      </p>

      <p>ini angka {state}</p>

      <button onClick={increment}>tambah angka</button>

      <div className="flex gap-2">
        {DATA_CARDS.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            number={state}
          />
        ))}
      </div>

      <div className="flex mt-10">
        <Link href="/profile">ke profile</Link>
      </div>
    </div>
  );
}
