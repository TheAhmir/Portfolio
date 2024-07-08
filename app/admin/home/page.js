
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SignOutButton } from "@clerk/nextjs";
import "./admin-home.css"

export default function Page() {
    const { userId } = auth();
    if (!userId) {
        redirect('/admin/sign-in');
      }

  return (
    <div className='home-page'>
        <h1>Congrats! You are now signed in!</h1>
        <SignOutButton redirectUrl= "/">
        <button>Sign out</button>
      </SignOutButton>
    </div>
  )
}