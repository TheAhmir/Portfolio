import { auth } from '@clerk/nextjs/server';
import { SignIn } from '@clerk/nextjs';
import './admin-notes.css'

export default function Page() {
  const { userId } = auth();

  return (
    <div className='admin-page'>
        <SignIn />
    </div>
  )
}