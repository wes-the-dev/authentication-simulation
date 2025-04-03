import React from 'react'
import Link from "next/link";
import {SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs"

const Nav = () => {
  return (
    <nav className="flex gap-3 justify-end w-[100%] p-5">
        <SignedOut>
            <SignInButton mode='modal' />
        </SignedOut>
        <SignedIn>
            <Link href='/user-profile'>
                Profile
            </Link>
            <SignOutButton />
        </SignedIn>
    </nav>
  )
}

export default Nav