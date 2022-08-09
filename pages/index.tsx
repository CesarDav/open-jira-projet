import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layouts } from '../components/layouts'


const HomePage: NextPage = () => {
  return (
    <Layouts>
      <Typography variant='h1' color='primary'>
        Hello Word!
      </Typography>
    </Layouts>
  )
}

export default HomePage
