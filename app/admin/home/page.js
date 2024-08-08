'use client';

import { useEffect, useState } from 'react';
import { useAuth, SignOutButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import './admin-home.css';

export default function Page() {
  const { isSignedIn } = useAuth();
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in page if not signed in
    if (!isSignedIn) {
      router.push('/admin/sign-in');
      return;
    }

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getFolders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [isSignedIn, router]);

  // Display data from the API
  return (
    <div className='home-page'>
      <h1>Folders</h1>
      {data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <a href={`/admin/folder/${item.id}`}>{item.folder_name}</a>
            </div>
          ))}
        </div>
      ) : (
        <p>No folders available.</p>
      )}
      <SignOutButton redirectUrl="/">
        <button>Sign out</button>
      </SignOutButton>
    </div>
  );
}
