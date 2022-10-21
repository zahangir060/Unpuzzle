import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {Buttons} from '../Buttons'

export default function Header() {
  return (
    <header>
      <div className='header-top bg-red-400'>
        <div className='container mx-auto flex justify-center'>
          The best platform for interactive learning...
        </div>
      </div>
      <div className='header-main'>
        <div className='container mx-auto grid grid-cols-4'>
          <div className='col-span-2 logo'>
            <div className='float-left'>
              <Image src="/logo.png" width={70} height={70} alt=""/>
            </div>
            <form className="search-form float-left" action="" method="post">
                <svg className='search-icon absolute' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9399 18.5624L13.4474 12.0699C14.4549 10.7675 14.9999 9.17496 14.9999 7.49997C14.9999 5.49498 14.2174 3.61498 12.8024 2.19749C11.3874 0.779996 9.50246 0 7.49997 0C5.49748 0 3.61248 0.782496 2.19749 2.19749C0.779996 3.61248 0 5.49498 0 7.49997C0 9.50246 0.782496 11.3874 2.19749 12.8024C3.61248 14.2199 5.49498 14.9999 7.49997 14.9999C9.17496 14.9999 10.765 14.4549 12.0674 13.4499L18.5599 19.9399C18.579 19.959 18.6016 19.9741 18.6264 19.9844C18.6513 19.9947 18.678 20 18.7049 20C18.7318 20 18.7585 19.9947 18.7834 19.9844C18.8083 19.9741 18.8309 19.959 18.8499 19.9399L19.9399 18.8524C19.959 18.8334 19.9741 18.8108 19.9844 18.7859C19.9947 18.761 20 18.7343 20 18.7074C20 18.6805 19.9947 18.6538 19.9844 18.6289C19.9741 18.6041 19.959 18.5815 19.9399 18.5624ZM11.46 11.46C10.4 12.5174 8.99496 13.0999 7.49997 13.0999C6.00497 13.0999 4.59998 12.5174 3.53998 11.46C2.48249 10.4 1.89999 8.99496 1.89999 7.49997C1.89999 6.00497 2.48249 4.59748 3.53998 3.53998C4.59998 2.48249 6.00497 1.89999 7.49997 1.89999C8.99496 1.89999 10.4025 2.47999 11.46 3.53998C12.5174 4.59998 13.0999 6.00497 13.0999 7.49997C13.0999 8.99496 12.5174 10.4025 11.46 11.46Z" fill="black" fill-opacity="0.5"/></svg>
                <input type="text" name="search" className="search" placeholder="Search Keywords..." value="" />
              </form>
          </div>
          <nav>
            <ul>
              <li><a href="#">Puzzle Journeys</a></li>
              <li><a href="#">Confusions</a></li>
            </ul>
          </nav>
          <Stack direction='row' spacing={2} justifyContent='right' alignItems='center'>
            <Link href='/login' passHref>
              <Button variant='outlined'>Login</Button>
            </Link>
            <Link href='/register' passHref>
              <Button variant='contained'>Sign Up</Button>
            </Link>
          </Stack>
        </div>
      </div>
    </header>
  )
}
