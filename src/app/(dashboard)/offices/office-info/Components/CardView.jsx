import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardContent, Chip, Typography } from '@mui/material'

const CardView = () => {
  return (
    <Card>
      <CardContent className='flex flex-col pbs-12 gap-6'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <div className='flex flex-col items-center gap-4'>
              <div className='relative'>
                <CustomAvatar
                  alt='user-profile'
                  src='/images/avatars/1.png'
                  className='border-[3px] border-primary rounded-[6px]'
                  size={154}
                />
                <span className='absolute flex items-center justify-center cursor-pointer -bottom-[10px] -right-[10px] w-[34px] h-[34px] rounded-full bg-primary z-[9999]'>
                  <i className='tabler-edit text-xl text-white' />
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <i className='tabler-building-skyscraper text-[24px] text-primary' />
                <Typography className=' text-lg font-medium '>Municipality Office</Typography>
              </div>
              <Chip label='Active' className='text-[#28C76F] bg-[#28C76F3D]' />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardView
