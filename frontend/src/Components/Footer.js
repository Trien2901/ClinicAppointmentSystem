import { useEffect } from "react";

function Footer() {

  useEffect(() => {
    const backtop = document.getElementById("backtop");

    if (!backtop) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backtop.classList.add("is-show");
      } else {
        backtop.classList.remove("is-show");
      }
    });

    backtop.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }, []);

  return (
    <footer className="snk-footer">

      <div className="footer__inner">
        <h3>Clinic</h3>
        <p>© 2026 Clinic</p>
      </div>

      <button id="backtop" className="backtop">↑</button>

    </footer>
  );
}

export default Footer;