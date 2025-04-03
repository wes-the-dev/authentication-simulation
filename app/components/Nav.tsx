"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import {SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs"

const Nav = () => {
  const locationPath = usePathname();
  const userProfilePath = locationPath ==='/user-profile'
  return (
    <nav className="flex gap-3 justify-end w-[100%] p-5">
        <SignedOut>
            <SignInButton mode='modal' />
        </SignedOut>
        <SignedIn>
          {
            userProfilePath ? 
            <Link href='/'>
              Back Home
            </Link>
            : ''
          }
            
            <Link href='/user-profile'>
                Profile
            </Link>
            <SignOutButton />
        </SignedIn>
    </nav>
  )
}

export default Nav