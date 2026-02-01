import { Outlet, Link } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin'>
                    儀表板
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/admin/productmanage'>
                    產品管理
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* 東西應該在這邊 */}
        <Outlet />
      </main>
      <footer>
        <h1>footer</h1>
      </footer>
    </>
  );
};
export default AdminLayout;
