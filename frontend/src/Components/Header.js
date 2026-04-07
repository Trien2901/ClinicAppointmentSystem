import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector('.nav-menu-item');
    const panel = document.querySelector('.offcanvas-panel');

    if (!hamburger || !panel) return;

    hamburger.onclick = () => {
      hamburger.classList.toggle("active");
      panel.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-container">

        <div className="header-brand">
          <a href="/" className="logo">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <p className="brand-sub">
            Nội khoa - Nhi khoa - Tim mạch
          </p>
        </div>

        <div className="header-center-item-right">

          <nav className="header-nav">
            <ul className="nav-list">
              <li><a href="#">Clinic</a></li>
              <li><a href="#">Medical</a></li>
              <li><a href="#">Infor</a></li>
            </ul>
          </nav>

          <div className="m-header-btn">
            <strong>Liên hệ</strong>
            <a href="tel:0123456789">0123 456 789</a>
          </div>

          <div className="nav-menu-item">
            <span></span><span></span><span></span>
          </div>
        </div>

        <div className="offcanvas-panel">
          <h3>MENU</h3>
        </div>

      </div>
    </header>
  );
}

export default Header;