'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import Loader from '@/app/global_components/loader';
import { usePathname } from 'next/navigation';
import DirPage from "../../components/dir_page";
import 'frontend/app/admin/components/loader-note.css';

export default function Page() {
  const { isSignedIn } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

    const getLastSegment = (path) => {
        const segments = path.split('/');
        return segments.pop() || '';
    };

    const folder_id = getLastSegment(pathname);

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
        const response = await fetch(`/api/getFolder?folder_id=${folder_id}?_=${new Date().getTime()}`);
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
        {loading ? <div className='loader-note'><Loader /></div> : <DirPage folder_id={folder_id} page_data={data}/>}
    </div>
  );
}
