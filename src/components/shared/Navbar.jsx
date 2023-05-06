import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <NavLink className="navbar-brand" to="/">ไอทีจีเนียส</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">หน้าหลัก</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">เกี่ยวกับเรา</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">ติดต่อ</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/pricing">ราคา</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/faq">ถามตอบ</NavLink></li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" id="navbarDropdownBlog" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">บลอก</NavLink>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                <li><NavLink className="dropdown-item" to="/blog">หน้าหลักบลอก</NavLink></li>
                <li><NavLink className="dropdown-item" to="/#">บลอกโพสต์</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">ผลงาน</NavLink>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                <li><NavLink className="dropdown-item" to="/portfolio">รวมผลงาน</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">รายละเอียดผลงาน</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar