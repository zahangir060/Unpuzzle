import { Typography } from '@mui/material'
import Link from 'next/link'

// type PropsI = {}
// {...props}

export default function Copyright() {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      sx={{ mt: 8, mb: 4 }}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
