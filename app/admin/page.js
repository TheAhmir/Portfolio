import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


export default function Page() {
  const { userId } = auth();

  if (!userId) {
    redirect('/admin/sign-in');
  }

  else {
    redirect('/admin/home');
  }
}
