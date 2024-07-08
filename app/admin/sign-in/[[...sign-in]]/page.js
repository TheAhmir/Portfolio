import { SignIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import "../../admin-notes.css"

export default function Page() {
  const { userId } = auth();
    if (userId) {
        redirect('/admin/home');
      }

  return (
    <div className='admin-page'>
        <SignIn appearance={{
        elements: {
          footer: {
            display: 'none',
          },
        },
      }} />
    </div>
  )
}