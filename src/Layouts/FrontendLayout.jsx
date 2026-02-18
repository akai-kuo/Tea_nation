import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import TeaNationLogo from "../assets/image/TeaNationLogo.jpg";
import menu from "../assets/image/menu.png";
import Footer from "../components/Footer";

const FrontendLayout = () => {
  // 控制漢堡選單開關狀態
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // 切換選單
  const handleToggle = () => setIsNavCollapsed(!isNavCollapsed);

  // 關閉選單（點擊連結或 Logo 時觸發）
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-0 ">
        <div className="container">
          {/* 左側：Logo */}
          <div className="navbar-brand m-0 py-0">
            <Link to="/" onClick={closeNav}>
              <img
                src={TeaNationLogo}
                alt="Tea Nation"
                style={{ height: "80px", transition: "0.3s" }}
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
            <img src={menu} alt="" />
          </button>

          {/* 內容區塊：漢堡選單 */}
          <div
            className={`nav-transition-wrapper ${!isNavCollapsed ? "show" : ""} navbar-collapse`}
          >
            <div className="nav-transition-inner w-100">
              <div className="d-lg-flex justify-content-between align-items-center w-100 py-3 py-lg-0">
                {/* 中間：導覽連結 */}
                <ul className="navbar-nav mx-auto gap-lg-4">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about" onClick={closeNav}>
                      關於我
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/product" onClick={closeNav}>
                      產品列表
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/cart" onClick={closeNav}>
                      購物車
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* 東西應該在這邊 */}
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};;
export default FrontendLayout;
