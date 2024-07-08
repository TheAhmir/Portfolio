
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import "./admin-home.css"

export default function Page() {
    const { userId } = auth();
    if (!userId) {
        redirect('/admin');
      }

  return (
    <div className='home-page'>
        <h1>hi</h1>
    </div>
  )
}