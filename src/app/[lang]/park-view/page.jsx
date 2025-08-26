import { Card } from '@mui/material'
import Parks from './components/Parks'
import offices from './data'
import AddPark from './components/AddPark'

const PageView = () => {
  return (
    <div>
      <AddPark />
      <Parks parkData={offices} />
    </div>
  )
}

export default PageView
