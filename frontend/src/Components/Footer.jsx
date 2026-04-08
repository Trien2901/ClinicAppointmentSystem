import React from "react";

function Footer() {
    return (
        <footer>

            {/* FIXED SIDE MENU */}
            <ul className="fixed-side-menu">
                <li>
                    <a href="#clinic-top" className="menu-item schedule-link">
                        <span>診療時間</span>
                    </a>
                </li>
                <li>
                    <a href="#access" className="menu-item access-link">
                        <span>アクセス</span>
                    </a>
                </li>
            </ul>

            {/* FIXED BANNER */}
            <div className="fixed-footer-banner">
                <div className="banner-close"></div>

                <div className="banner-content">
                    <a href="#" target="_blank" rel="noreferrer" className="banner-link">
                        <span className="banner-text">
                            <span>採用サイト</span>
                            <span>スタッフ募集中！</span>
                        </span>
                    </a>
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="snk-footer">
                <div className="footer__inner grid-1475">

                    <div className="footer-gp d-flex">

                        {/* LEFT */}
                        <div className="footer-gp-box">
                            <div className="footer__logo">
                                <a href="#">
                                    <img
                                        src="http://xs792656.xsrv.jp/sanuki/wp-content/uploads/2025/08/logo_footer.svg"
                                        alt=""
                                    />
                                </a>
                            </div>

                            <p>
                                〒690-2101 <br />
                                島根県松江市八雲町日吉194-10
                            </p>
                        </div>

                        {/* RIGHT MENU */}
                        <div className="footer-gp-box d-flex u-pc">

                            {/* CLINIC */}
                            <div className="footer-gp-item vs-01">
                                <div className="footer-title-01">CLINIC</div>

                                <ul className="menu-footer">
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">コラム</a></li>
                                    <li><a href="#">よくある質問Q&A</a></li>
                                    <li><a href="#">医師紹介</a></li>
                                    <li><a href="#">ドクターズインタビュー</a></li>
                                    <li><a href="#">お知らせ</a></li>
                                    <li><a href="#">サイトマップ</a></li>
                                    <li><a href="#">医院案内</a></li>
                                    <li><a href="#">採用情報</a></li>
                                    <li><a href="#">初めての方へ</a></li>
                                </ul>
                            </div>

                            {/* MEDICAL */}
                            <div className="footer-gp-item vs-02">
                                <div className="footer-title-01">MEDICAL</div>

                                <ul className="menu-footer">
                                    <li><a href="#">一般内科</a></li>
                                    <li><a href="#">消化器科</a></li>
                                    <li><a href="#">小児科</a></li>
                                    <li><a href="#">睡眠障害外来</a></li>
                                    <li><a href="#">各種検査</a></li>
                                    <li><a href="#">訪問診療に関するご相談</a></li>
                                    <li><a href="#">生活習慣病外来</a></li>
                                    <li><a href="#">循環器科</a></li>
                                    <li><a href="#">物忘れ・認知症外来</a></li>
                                    <li><a href="#">予防接種・健康診断</a></li>
                                    <li><a href="#">訪問診療</a></li>
                                    <li><a href="#">血管・心臓に関するお悩みについて</a></li>
                                </ul>
                            </div>

                            {/* INFOR */}
                            <div className="footer-gp-item vs-01">
                                <div className="footer-title-01">INFOR</div>

                                <ul className="menu-footer">
                                    <li><a href="#">よくある質問Q&A</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="copyright d-flex items-center justify-center">

                        <div className="copyright-item logo">
                            <a href="https://medical-grits.jp/">
                                <img
                                    src="http://xs792656.xsrv.jp/sanuki/wp-content/uploads/2025/08/medical_grits.png"
                                    alt=""
                                />
                            </a>
                        </div>

                        <div className="copyright-item-txt">
                            <p>
                                ©2026 佐貫内科医院. All Rights Reserved
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;