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
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();

  // State for context menu
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, item: null });

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleMenuAction = (key) => {
    if (key === 'new_file') {
      handleNewNote();
    } else if (key === 'new_folder') {
      // Handle creating a new folder
    }
  };

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

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/deleteItem`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: contextMenu.item.id, type: contextMenu.item.type }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
      }

      // Refresh data after deletion
      setData(data.filter(item => item.id !== contextMenu.item.id));
      setFilteredData(filteredData.filter(item => item.id !== contextMenu.item.id));

    } catch (error) {
      console.error('Failed to delete item:', error);
    } finally {
      setLoading(false);
      setContextMenu({ visible: false, x: 0, y: 0, item: null });
    }
  };

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/admin/sign-in');
      return;
    }

    setData(page_data);
    setLoading(false);
  }, [isSignedIn, page_data]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const folderMatch = item.folder_name && item.folder_name.toLowerCase().includes(searchQuery.toLowerCase());
      const titleMatch = item.note_title && item.note_title.toLowerCase().includes(searchQuery.toLowerCase());
      return folderMatch || titleMatch;
    });
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleContextMenu = (e, item) => {
    e.preventDefault();
    setContextMenu({ visible: true, x: e.pageX, y: e.pageY, item });
  };

  const handleClick = () => {
    if (contextMenu.visible) {
      setContextMenu({ visible: false, x: 0, y: 0, item: null });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [contextMenu]);

  return (
    <div className='home-page' onContextMenu={(e) => e.preventDefault()}>
      <div className='admin-nav-bg'>
        <div className='admin-nav-items'>
          <div className='add_content'>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className='add_content'>
                  <FaPlus />
                </Button>
              </DropdownTrigger>
              <DropdownMenu className='dropdown_menu' aria-label="Static Actions" onAction={handleMenuAction}>
                <DropdownItem className='dropdown_item' key="new_file">New file</DropdownItem>
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
            <div key={item.folder_id} >
              <a className='folder-group' href={`/admin/folder/${item.folder_id}`} style={{ textDecoration: 'none' }} onContextMenu={(e) => handleContextMenu(e, { id: item.folder_id, type: 'folder' })}>
                <FaFolder className='folder-icon' />
                <FaRegFolderOpen className='hover-folder-icon' />
                <p className='caption-text'>{item.folder_name}</p>
              </a>
            </div>
            :
            <div key={item.note_id} >
              <a className='file-group' href={`/admin/note/${item.note_id}`} style={{ textDecoration: 'none' }} onContextMenu={(e) => handleContextMenu(e, { id: item.note_id, type: 'note' })}>
                <AiTwotoneFileMarkdown className='file-icon' />
                <p className='caption-text'>{item.note_title}</p>
              </a>
            </div>
          ))}
        </div>
      )}
      
      {contextMenu.visible && (
        <div 
          className="context-menu" 
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
