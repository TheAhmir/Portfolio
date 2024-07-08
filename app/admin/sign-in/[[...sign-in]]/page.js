import { SignIn } from '@clerk/nextjs';
import "../../admin-notes.css"

export default function Page() {


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