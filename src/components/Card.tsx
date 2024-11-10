import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  number: number;
}

export default function Card({ title, description, image, number }: CardProps) {
  return (
    <div className="bg-red-300 p-5 max-w-[300px] rounded-md shadow-sm">
      <p>{number}</p>

      <h1>{title}</h1>
      <p>{description}</p>

      <Image src={image} alt={title} width={200} height={200} />
    </div>
  );
}
