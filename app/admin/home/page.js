'use client';

import { useEffect, useState } from 'react';
import { useAuth, SignOutButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Divider from '@mui/material/Divider';
import { FaFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";
import { AiTwotoneFileMarkdown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Loader from '@/app/global_components/loader';
import './admin-home.css';

export default function Page() {
  const { isSignedIn } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in page if not signed in
    if (!isSignedIn) {
      router.push('/admin/sign-in');
      return;
    }

    // Fetch data from the API
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch('/api/getRoot');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData(); 
  }, [isSignedIn, router]);

  useEffect(() => {
    // Filter data based on the search query, handling null values
    const filtered = data.filter((item) => {
        const folderMatch = item.folder_name && item.folder_name.toLowerCase().includes(searchQuery.toLowerCase());
        const titleMatch = item.note_title && item.note_title.toLowerCase().includes(searchQuery.toLowerCase());
        return folderMatch || titleMatch;
    });
    setFilteredData(filtered);
}, [searchQuery, data]);



  // Display data from the API
  return (
    <div className='home-page'>
      <div className='admin-nav-bg'>
        <div className='admin-nav-items'>
          <div className='add_content'>+</div>
          <div className='search-bar'>
          <BiSearch />
            <input
        type="text"
        className="search-text"
        placeholder="Search for document"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
          </div>
          <SignOutButton redirectUrl="/">
            <div className='signout'>Sign Out</div>
          </SignOutButton>
        </div>
      </div>
      {loading ? (  // Check if loading is true
        <Loader />
      ) : (
        <div className="grid-container">
          {filteredData.map((item) => (
            item.folder_name ? 
            <div key={item.folder_id}>
              <a className='folder-group' href={`/admin/folder/${item.folder_id}`} style={{ textDecoration: 'none' }}>
                <FaFolder className='folder-icon' />
                <FaRegFolderOpen className='hover-folder-icon' />
                <p className='caption-text'>{item.folder_name}</p>
                </a>
            </div>

            :

            <div key={item.note_id}>
              <a className='file-group' href={`/admin/note/${item.note_id}`} style={{ textDecoration: 'none' }}>
                <AiTwotoneFileMarkdown className='file-icon' />
                <p className='caption-text'>{item.note_title}</p>
                </a>
            </div>
          ))}
        </div>
      ) }
    </div>
  );
}
