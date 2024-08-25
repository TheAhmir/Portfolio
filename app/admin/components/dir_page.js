import { useEffect, useState } from 'react';
import { useAuth, SignOutButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { FaPlus } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";
import { AiTwotoneFileMarkdown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Loader from '@/app/global_components/loader';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import '../home/admin-home.css';

export default function DirPage({ folder_id, page_data }) {
  const { isSignedIn } = useAuth();
  const [data, setData] = useState(page_data || []);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

const handleNewNote = async () => {
  if (isButtonDisabled) return;
  setIsButtonDisabled(true);

  try {
    setLoading(true);
    const response = await fetch(`/api/newNote?parent_id=${folder_id}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();
    if (result) {
      router.push(`/admin/folder/${folder_id}/note/${result[0].note_id}`);
    } else {
      throw new Error('Note ID not returned by API');
    }

  } catch (error) {
    console.error('Failed to create a new note:', error);
  } finally {
    setLoading(false);
    setIsButtonDisabled(false);
  }
};


  useEffect(() => {
    if (!isSignedIn) {
      router.push('/admin/sign-in');
      return;
    }

    // Assume page_data is fetched or already available
    setData(page_data);
    setLoading(false);  // Set loading to false once data is set
  }, [isSignedIn, page_data]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const folderMatch = item.folder_name && item.folder_name.toLowerCase().includes(searchQuery.toLowerCase());
      const titleMatch = item.note_title && item.note_title.toLowerCase().includes(searchQuery.toLowerCase());
      return folderMatch || titleMatch;
    });
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div className='home-page'>
      <div className='admin-nav-bg'>
        <div className='admin-nav-items'>
          <div className='add_content'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className='add_content'>
                  <FaPlus />
                </Button>
              </DropdownTrigger>
              <DropdownMenu className='dropdown_menu' aria-label="Static Actions">
                <DropdownItem className='dropdown_item' key="new_file" onAction={handleNewNote}>New file</DropdownItem>
                <DropdownItem className='dropdown_item' key="new_folder">New folder</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
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
      {loading ? (
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
      )}
    </div>
  );
}
