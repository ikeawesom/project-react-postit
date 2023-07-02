"use client";

import { signOut } from "next-auth/react";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import Image from "next/image";

interface Props {
  image: string;
}

export default function Logged({ image }: Props) {
  return (
    <li className="list-none flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25"
      >
        Sign Out
      </button>

      <Link href={"/dashboard"}>
        <Image
          width={64}
          height={64}
          src={image}
          className="w-14 rounded-full"
          alt=""
          priority
        />
      </Link>
    </li>
  );
}
