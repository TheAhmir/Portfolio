
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SignOutButton } from "@clerk/nextjs";
import { folderIDS, noteIDS } from '../temp_data';
import "./admin-home.css"

export default function Page() {
    const { userId } = auth();

    if (!userId) {
      redirect('/admin/sign-in');
    }

    return (
        <div className='home-page'>
            {folderIDS.map((id) => (
                <a href={`/admin/folder/${id}`} key={id}>{id}</a>
            ))}
            {<a href={`/admin/note/${noteIDS[0]}`}>{noteIDS[0]}</a>}
            <SignOutButton redirectUrl="/">
                <button>Sign out</button>
            </SignOutButton>
        </div>
    )
}
