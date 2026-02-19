import { useState } from "react"; // 必須匯入 useState
import { Outlet, Link } from "react-router-dom"; // 確保匯入 Link
import Footer from "../components/Footer";

import TeaNationLogo from "../assets/images/TeaNationLogo.jpg";
import menu from "../assets/images/menu.png";

const AdminLayout = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleToggle = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark border-bottom shadow-sm py-0">
        {/* 我幫你把背景改成 bg-dark，這樣可以一眼區分前台與後台 */}
        <div className="container">
          {/* 左側：Logo */}
          <div className="navbar-brand m-0 py-0">
            <Link to="/admin" onClick={closeNav}>
              <img
                src={TeaNationLogo}
                alt="Tea Nation Admin"
                style={{
                  height: "60px",
                  transition: "0.3s",
                  filter: "brightness(0) invert(1)",
                }}
                // filter 可以讓黑 Logo 變白 Logo
              />
            </Link>
          </div>

          {/* 漢堡選單按鈕 */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={!isNavCollapsed}
          >
            <img src={menu} alt="menu" style={{ filter: "invert(1)" }} />
          </button>

          {/* 內容區塊 */}
          <div
            className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
          >
            <ul className="navbar-nav mx-auto gap-lg-4">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/admin/adminProducts"
                  onClick={closeNav}
                >
                  管理產品
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="/admin/orders"
                  onClick={closeNav}
                >
                  管理訂單
                </Link>
              </li>
            </ul>
            <Link to="/" className="btn btn-outline-light btn-sm">
              返回前台
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要內容區 */}
      <main className="container py-5" style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AdminLayout;
