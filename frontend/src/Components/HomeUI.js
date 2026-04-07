import { useEffect } from "react";

function HomeUI() {

  useEffect(() => {

    // slider
    const slides = document.querySelectorAll(".clinic-hero__slides li");
    let index = 0;

    if (slides.length > 0) {
      slides[index].classList.add("active");

      setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
      }, 4000);
    }

    // popup
    const popup = document.querySelector("#popup");
    const trigger = document.querySelector(".js-home-popup-trigger");

    if (popup && trigger) {
      trigger.onclick = (e) => {
        e.stopPropagation();
        popup.classList.toggle("popup--open");
      };

      popup.onclick = (e) => e.stopPropagation();

      document.onclick = () => popup.classList.remove("popup--open");
    }

  }, []);

  return (
    <main>

      {/* ===== POPUP ===== */}
      <div id="popup" className="popup">
        <button className="js-home-popup-trigger">
          Thông tin & Đặt lịch
        </button>
      </div>

      {/* ===== HERO ===== */}
      <div className="clinic-hero">
        <ul className="clinic-hero__slides">
          <li><img src="/assets/mv_01.png" /></li>
          <li><img src="/assets/mv_02.jpg" /></li>
          <li><img src="/assets/mv_03.jpg" /></li>
        </ul>

        <div className="clinic-hero__overlay">
          <h2>Phòng khám gia đình</h2>
          <p>Chăm sóc toàn diện</p>
        </div>
      </div>

      {/* ===== TROUBLE ===== */}
      <section className="trouble">
        <h2>TROUBLE</h2>
        <p>Các vấn đề thường gặp</p>
      </section>

      {/* ===== MEDICAL ===== */}
      <section className="medical">
        <h2>MEDICAL</h2>
        <p>Dịch vụ khám</p>
      </section>

      {/* ===== PICKUP ===== */}
      <section className="pickup">
        <h2>PICKUP</h2>
      </section>

      {/* ===== FEATURE ===== */}
      <section className="feature">
        <h2>FEATURE</h2>
      </section>

      {/* ===== MESSAGE ===== */}
      <section className="message">
        <h2>MESSAGE</h2>
      </section>

      {/* ===== COLUMN ===== */}
      <section className="column">
        <h2>COLUMN</h2>
      </section>

      {/* ===== CLINIC ===== */}
      <section className="clinic">
        <h2>CLINIC INFO</h2>
      </section>

    </main>
  );
}

export default HomeUI;