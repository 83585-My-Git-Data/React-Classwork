import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav style={{width:"100%"}}
      className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          MyAirbnb
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link' aria-current='page' href='#'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/properties'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Properties
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/users'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar