import Link from 'next/link'
import React from 'react'
import BookCover from './BookCover'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoanedBook = false,
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link href={`/books/${id}`}>
      	<BookCover coverColor={coverColor} colorImage={coverUrl}/>

        <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>

			{
				isLoanedBook && (
					<div className="w-full mt-3">
						<div className="book-loaned">
							<Image 
								src='/icons/calender.svg'
								alt='calender'
								width={18}
								height={18}
								className='object-contain'
							/>
							<p className='text-light-100'>
								11 days left to return
							</p>
						</div>

						<Button className='book-btn'>Download receipt</Button>
					</div>
				)
			}

      </Link>
    </li>
  )
}

export default BookCard