import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardContent, Chip, Typography } from '@mui/material'
import Image from 'next/image'

const CardView = () => {
  return (
    <Card>
      <CardContent className='flex flex-col pbs-12 gap-6'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center justify-center  flex-col gap-4'>
            <div className='flex flex-col items-center  gap-4'>
              <div className='relative'>
                <Image alt='user-profile' src='/Profile/avatar.png' width={100} height={100} />
              </div>
              <Typography className='text-lg font-medium '>Ahmad Ayaz Noor</Typography>
              <div className='border-t w-full pt-3'>
                <div className='flex items-center gap-2'>
                  <i className='tabler-address-book text-xl text-primary' />
                  <span className='text-[15px]'>101-12345</span>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                  <i className='tabler-mail text-xl text-primary' />
                  <span className='text-[15px]'>sampleemail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardView
