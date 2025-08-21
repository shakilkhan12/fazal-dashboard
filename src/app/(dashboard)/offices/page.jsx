import AddOffice from './Components/AddOffice'
import OfficeTable from './Components/Offices'
import offices from './data'
console.log('page data here -> ', offices)
const page = () => {
  return (
    <div>
      <AddOffice />
      <OfficeTable officeData={offices} />
    </div>
  )
}

export default page
