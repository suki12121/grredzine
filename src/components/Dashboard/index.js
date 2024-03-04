import {useState} from 'react'
import {IoMdSearch} from 'react-icons/io'

import {Link, Redirect} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {IoPerson} from 'react-icons/io5'
import ItemCard from '../ItemCard'
import './index.css'

const employesList = [
  {
    id: 1,
    Name: 'ARJUN',
    DOB: '16-11-2011',
    Role: 'Software Engineer',
  },
  {
    id: 2,
    Name: 'John Doe',
    DOB: '10-05-1990',
    Role: 'Project Manager',
  },
  {
    id: 3,
    Name: 'Alice Smith',
    DOB: '25-09-1985',
    Role: 'Senior Developer',
  },
  {
    id: 4,
    Name: 'Emma Johnson',
    DOB: '03-12-1982',
    Role: 'UI/UX Designer',
  },
  {
    id: 5,
    Name: 'Michael Brown',
    DOB: '14-07-1978',
    Role: 'Data Analyst',
  },
  {
    id: 6,
    Name: 'Sophia Williams',
    DOB: '21-03-1995',
    Role: 'System Administrator',
  },
  {
    id: 7,
    Name: 'David Jones',
    DOB: '08-09-1970',
    Role: 'IT Manager',
  },
  {
    id: 8,
    Name: 'Jessica Lee',
    DOB: '29-06-1989',
    Role: 'Business Analyst',
  },
  {
    id: 9,
    Name: 'Matthew Davis',
    DOB: '12-04-1987',
    Role: 'Quality Assurance Engineer',
  },
  {
    id: 10,
    Name: 'Olivia Wilson',
    DOB: '17-02-1993',
    Role: 'Product Owner',
  },
]

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const isLoggedIn =
    localStorage.getItem('username') && localStorage.getItem('password')

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Redirect to="/login" />
  }
  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredEmployees = employesList.filter(employee =>
    employee.Name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="home-bg">
      <div className="img-bg">
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/f_auto,q_auto/iwt1cjenn7om5rdzbbcg"
          alt="callUser"
          className="caller-img"
        />
      </div>
      <p className="logo-num">4</p>
      <div className="logo-bg">
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/f_auto,q_auto/wko3slnes8rwwoj8henb"
          alt="logo"
          className="logo-img"
        />
      </div>
      <div className="search-bg">
        <input
          type="text"
          placeholder="Search with name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input-bg"
        />
        <IoMdSearch className="search-icon" />
      </div>
      <ul className="items-list">
        {filteredEmployees.map(eachItem => (
          <ItemCard key={eachItem.id} eachItemDetails={eachItem} />
        ))}
      </ul>
      <div className="nav-bg">
        <Link to="/">
          <FaHome className="icon" />
        </Link>
        <Link to="/dashboard">
          <IoPerson className="icon" />
        </Link>
      </div>
    </div>
  )
}

export default Dashboard
