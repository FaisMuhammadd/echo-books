import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button';
import { sampleBooks } from '@/constans';
import { signOut } from '@/auth';
import React from 'react'

const Page = () => {
  return (
    <>
      <form action={async () => {
         "use server"
         await signOut()
      }}
         className='mb-10'>
            <Button>Logout</Button>
      </form>

      <BookList title='Borrowed Books' books={sampleBooks}/>
    </>
  )
}

export default Page