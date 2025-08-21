import AddOffice from './Components/AddOffice'
import CourseTable from './Components/Offices'
import offices from './data'
console.log('page data here -> ', offices)
const page = () => {
  return (
    <div>
      <AddOffice />
      <CourseTable officeData={offices} />
    </div>
  )
}

export default page
