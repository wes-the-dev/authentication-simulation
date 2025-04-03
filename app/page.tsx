"use client"
import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Nav from "./components/Nav";

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <Nav />
      <SignedIn>
        <div className="p-5">
          <h1 className="text-center font-bold">User Dashboard</h1>
        </div>
      </SignedIn>
      <SignedOut>
        <div>
          <h1 className="text-center font-bold">Not Logged In, Log In</h1>
        </div>

      </SignedOut>
    </>
    
  );
}
