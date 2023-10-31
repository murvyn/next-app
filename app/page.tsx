"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { useState } from "react";
import dynamic from "next/dynamic";
// import _ from 'lodash'

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>loading</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href='/users'>users</Link>
      <ProductCard /> */}
      {/* <Image
        src="https://bit.ly/react-cover"
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        fill
        alt="coffee"
        quality={100}
        priority
      /> */}
      <button onClick={async () => {
        const _ = (await import('lodash')).default
        const users = [
          {name: 'c'},
          {name: 'b'},
          {name: 'a'},
        ]
       const sorted =  _.sortBy(users, ['name'])
       console.log(sorted)
      }}>Show</button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}
