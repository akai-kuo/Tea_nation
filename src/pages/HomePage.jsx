import React from 'react';
import HeroBanner from '../components/HeroBanner';

// const NAV_ITEMS = ['關於品牌', '茶知識', '品茶', '禮盒'];

function HomePage() {
  return (
    <>
      {/* 輪播橫幅 */}
      <HeroBanner />

      {/* 導航選單 */}
      {/* <section className="navigation-container py-3 px-4">
        <nav className="nav-items-container d-flex gap-3 align-items-center"
             style={{ maxWidth: '1296px' }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item}
              className="nav-item d-flex align-items-center gap-1 py-2 fs-5"
              role="button"
            >
              {item}
            </div>
          ))}
        </nav>
      </section> */}

      {/* 其他區塊 */}
      <section>
        <div className="container my-5">
        
        </div>
      </section>
    </>
  );
}

export default HomePage;
