'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import Loader from '@/app/global_components/loader';
import DirPage from "../components/dir_page"

export default function Page() {
  const { isSignedIn } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in page if not signed in
    if (!isSignedIn) {
      router.push('/admin/sign-in');
      return;
    }

    // Fetch data from the API
    const fetchData = async () => {
        if (isFetching) return;
        setIsFetching(true);
      setLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch(`/api/getRoot?_=${new Date().getTime()}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
        setIsFetching(false);
      }
    };

    fetchData(); 
  }, [isSignedIn, router]);


  // Display data from the API
  return (
    <div>
        {loading ? <Loader /> : <DirPage folder_id={'c276e0e0-738e-4293-92b1-63f93c675775'} page_data={data}/>}
    </div>
  );
}
