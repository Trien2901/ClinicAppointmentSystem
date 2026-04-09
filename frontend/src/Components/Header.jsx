import React from "react";

function Header() {
    return (
        <header className="site-header">
            <div className="header-container">

                {/* BRAND */}
                <div className="header-brand">
                    <a href="/" className="logo hv-o">
                        <img
                            src="(../img/logo.svg)"
                            alt="sanuki"
                            loading="lazy"
                        />
                    </a>

                    <p className="brand-sub">
                        内科 消化器科 循環器科 小児科 訪問診療
                    </p>
                </div>

                {/* NAVIGATION */}
                <div className="header-center-item-right">

                    <nav className="header-nav">
                        <ul className="nav-list">

                            <li><a href="#">HOME</a></li>

                            <li className="menu-item-has-children">
                                <a href="#">医院案内</a>
                                <ul className="sub-menu">
                                    <li><a href="#">コンセプト</a></li>
                                    <li><a href="#">医院基本情報</a></li>
                                    <li><a href="#">診療時間</a></li>
                                    <li><a href="#">初めての方へ</a></li>
                                </ul>
                            </li>

                            <li className="menu-item-has-children">
                                <a href="#">医師紹介</a>
                                <ul className="sub-menu">
                                    <li><a href="#">理事長紹介</a></li>
                                    <li><a href="#">副院長紹介</a></li>
                                    <li><a href="#">ドクターズインタビュー</a></li>
                                </ul>
                            </li>

                            <li className="menu-item-has-children mega-menu">
                                <a href="#">診療案内</a>
                                <ul className="sub-menu">
                                    <li><a href="#">訪問診療に関するご相談</a></li>
                                    <li><a href="#">訪問診療</a></li>
                                    <li><a href="#">循環器科</a></li>
                                    <li><a href="#">一般内科</a></li>
                                    <li><a href="#">生活習慣病外来</a></li>
                                    <li><a href="#">小児科</a></li>
                                    <li><a href="#">物忘れ・認知症外来</a></li>
                                    <li><a href="#">睡眠障害外来</a></li>
                                    <li><a href="#">予防接種・健康診断</a></li>
                                    <li><a href="#">各種検査</a></li>
                                    <li><a href="#">消化器科</a></li>
                                    <li><a href="#">血管・心臓に関するお悩みについて</a></li>
                                </ul>
                            </li>

                            <li className="menu-item-has-children">
                                <a href="#">コラム</a>
                                <ul className="sub-menu">
                                    <li><a href="#">コラム</a></li>
                                    <li><a href="#">お知らせ</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">アクセス</a>
                            </li>

                        </ul>
                    </nav>

                    {/* CONTACT */}
                    <div className="m-header-btn">
                        <div className="header-btn_inner">
                            <strong className="contact_label">
                                ご予約・お問い合わせ
                            </strong>
                            <a href="tel:0852540886" className="tel">
                                0852-54-0886
                            </a>
                            <span className="location">
                                〒690-2101 島根県松江市八雲町日吉194-10
                            </span>
                        </div>
                    </div>

                    {/* MENU ICON */}
                    <div className="nav-menu-item">
                        <div className="nav-menu-item_inner">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>

                {/* OFFCANVAS */}
                <div className="offcanvas-panel">
                    {/* sau này mình làm menu mobile ở đây */}
                </div>

            </div>
        </header>
    );
}

export default Header;