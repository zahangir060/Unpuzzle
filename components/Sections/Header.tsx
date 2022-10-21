import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <Stack
      direction='row'
      spacing={2}
      justifyContent='center'
      alignItems='center'
      sx={{ mt: 8, mb: 4 }}
    >
      <Link href='/login' passHref>
        <Button variant='contained'>Login</Button>
      </Link>

      <Link href='/register' passHref>
        <Button variant='outlined'>Register</Button>
      </Link>
    </Stack>
  )
}
