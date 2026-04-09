import React from "react";

function INDEX () {
    return (
        <main>

            {/* ===== POPUP ===== */}
            <div id="popup" className="js-home-popup popup u-pc">
                <button className="js-home-popup-trigger popup__head">
                    医院情報・ご予約はこちら
                </button>

                <div className="js-home-popup-content popup__content">

                    {/* LEFT */}
                    <div className="popup__set01">

                        <table className="clinic__table wow_custom">
                            <tbody>
                                <tr>
                                    <th className="clinic__table-head">診療時間</th>
                                    <th>月</th><th>火</th><th>水</th><th>木</th>
                                    <th>金</th><th>土</th><th>日</th><th>祝</th>
                                </tr>

                                <tr>
                                    <td className="clinic__table-head">
                                        08:30～12:00
                                        <span className="clinic__note-small">午前</span>
                                    </td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-close">×</td>
                                    <td className="is-close">×</td>
                                </tr>

                                <tr>
                                    <td className="clinic__table-head">
                                        16:30～18:30
                                        <span className="clinic__note-small">午後</span>
                                    </td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-open"></td>
                                    <td className="is-close">×</td>
                                    <td className="is-open"></td>
                                    <td className="is-close">×</td>
                                    <td className="is-close">×</td>
                                    <td className="is-close">×</td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="clinic__notes wow_custom">
                            ・受付時間<br />
                            午前9時〜11時30分 午後16時半〜18時<br />
                            ・訪問診療は13時～17時までの対応となります。<br />
                            ※訪問診療は木曜日も対応しております。<br />
                            休診日　日曜日　祝日
                        </p>

                        <div className="popup__btn-tel popup__btn04">
                            <a href="tel:0852-54-0886" className="popup__btn-tel--link hv-o">
                                <span className="popup__btn-tel--txt">ご予約・お問い合わせ</span>
                                <span className="popup__btn-tel--num">0852-54-0886</span>
                                <span className="popup__btn-tel--txt popup-small">
                                    〒690-2101 島根県松江市八雲町日吉194-10
                                </span>
                            </a>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="popup__set02">
                        <div className="clinic__actions wow_custom">

                            <div className="clinic__btn clinic__btn--primary">
                                <a className="clinic__btn-link" href="/first-visit">
                                    初診の方へ
                                </a>
                            </div>

                            <div className="clinic__btn clinic__btn--secondary">
                                <a className="clinic__btn-link" href="/clinic#b4">
                                    アクセス・地図
                                </a>
                            </div>

                        </div>

                        <ul className="clinic__tags u-hidden-md-down wow_custom">
                            <li className="clinic__tag">専用駐車 <br /> 場あり</li>
                            <li className="clinic__tag">日吉親水 <br /> 公園向い</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* ===== HERO ===== */}
            <div className="clinic-hero">
                <div className="clinic-hero__slider">
                    <ul className="clinic-hero__slides">
                        <li><img src="./img/mv_01.png" alt="" /></li>
                        <li><img src="./img/mv_02.jpg" alt="" /></li>
                        <li><img src="./img/mv_03.jpg" alt="" /></li>
                    </ul>

                    <div className="clinic-hero__overlay">
                        <div className="clinic-hero__text">
                            <h2 className="clinic-hero__title">
                                子どもからお年寄りまで、家族みんなを診る地域密着のかかりつけ医
                            </h2>
                            <p className="clinic-hero__desc">
                                身近な病気も、専門治療も。外来と訪問診療で切れ目のない医療をお届けします
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== NEWS ===== */}
            <div className="clinic-news">
                <div className="clinic-news__left">
                    <h3 className="clinic-news__title">
                        <span>NEWS</span>
                        <span>お知らせ</span>
                    </h3>

                    <div className="clinic-news__btn">
                        <a className="btn__default-link" href="/news">
                            お知らせ一覧
                        </a>
                    </div>
                </div>

                <div className="clinic-news__right">
                    <ul className="clinic-news__list">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <li key={item}>
                                <a href={`/news/${item}`}>
                                    <span className="date">2025.11.15</span>
                                    <span className="title">
                                        社会福祉士：藤原の11月の出勤日です
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ===== TROUBLE ===== */}
            <div className="trouble space__bottom-01">
                <div className="trouble__container-inner grid-1485">

                    <div className="section-title">
                        <h3 className="section-title-en">TROUBLE</h3>
                        <p className="section-title-ja">こんなお悩みありませんか？</p>
                    </div>

                    <ul className="trouble__list d-flex flex-wrap">
                        <li className="trouble__item">
                            <a href="/medical/home-visit" className="trouble-link">
                                <div className="trouble-category"><span>訪問診療</span></div>
                                <span className="trouble-text">
                                    病気や障害により通院が困難・自宅や施設での療養を希望している
                                </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

            {/* ===== MEDICAL ===== */}
            <div className="medical-section_bottom">
                <div className="medical__wrapper">

                    <div className="medical__heading">
                        <h3 className="section-title-en">MEDICAL</h3>
                        <p className="section-title-ja">診療案内</p>
                    </div>

                    <ul className="medical__cards d-flex flex-wrap">
                        <li className="medical__card">
                            <a href="/medical/home-visit">
                                <img src="./img/medical__01.png" alt="" />
                                <h3>訪問診療</h3>  
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            {/* ===== PICKUP ===== */}
            <div className="pickup space__top space__bottom-01">
                <div className="pickup__frame">

                    <div className="pickup__heading grid-1485">
                        <div className="pickup__heading-box vs-01 wow_custom">
                            <h3 className="section-title-en">PICKUP</h3>
                            <p className="section-title-ja">ピックアップ</p>
                        </div>
                    </div>

                    <div className="pickup__collection grid-1485 d-flex flex-wrap">

                        {/* ITEM 1 */}
                        <article className="pickup__unit wow_custom">
                            <figure className="pickup__unit-media img--zoomout">
                                <img src="./img/pickup__01.png" alt="" />
                            </figure>

                            <div className="pickup__unit-body">
                                <h4 className="pickup__unit-title">循環器科</h4>
                                <p className="pickup__unit-sub">Cardiology</p>
                                <p className="pickup__unit-desc">
                                    循環器科では、心臓や血管に関わる病気を専門的に診療します。
                                </p>
                            </div>

                            <div className="pickup__unit-action btn__default">
                                <a href="/cardiovascular" className="pickup__unit-link btn__default-link">
                                    詳しくはこちら
                                </a>
                            </div>
                        </article>

                        {/* ITEM 2 */}
                        <article className="pickup__unit wow_custom">
                            <figure className="pickup__unit-media img--zoomout">
                                <img src="./img/pickup__02.png" alt="" />
                            </figure>

                            <div className="pickup__unit-body">
                                <h4 className="pickup__unit-title">訪問診療</h4>
                                <p className="pickup__unit-sub">Home Medical Care</p>
                                <p className="pickup__unit-desc">
                                    医師が自宅や施設へ訪問し診療を行います。
                                </p>
                            </div>

                            <div className="pickup__unit-action btn__default">
                                <a href="/visit-medical" className="pickup__unit-link btn__default-link">
                                    詳しくはこちら
                                </a>
                            </div>
                        </article>

                        {/* ITEM 3 */}
                        <article className="pickup__unit wow_custom">
                            <figure className="pickup__unit-media img--zoomout">
                                <img src="./img/pickup__03.png" alt="" />
                            </figure>

                            <div className="pickup__unit-body">
                                <h4 className="pickup__unit-title">生活習慣病外来</h4>
                                <p className="pickup__unit-sub">Lifestyle Disease Clinic</p>
                                <p className="pickup__unit-desc">
                                    生活習慣病の予防・治療を行います。
                                </p>
                            </div>

                            <div className="pickup__unit-action btn__default">
                                <a href="/lifestyle" className="pickup__unit-link btn__default-link">
                                    詳しくはこちら
                                </a>
                            </div>
                        </article>

                    </div>
                </div>
            </div>


            {/* ===== FEATURE ===== */}
            <div className="feature space__top-01 space__bottom-01">
                <div className="feature__wrap">

                    <div className="feature__head">
                        <div className="feature__head-box vs-01 wow_custom">
                            <h2 className="section-title-en">FEATURE</h2>
                            <p className="section-title-ja">クリニック特徴</p>
                        </div>
                    </div>

                    <div className="feature__grid grid-1485">

                        {/* ROW 1 */}
                        <div className="feature__row d-flex flex-wrap">

                            <article className="feature__panel feature__panel--large wow_custom">
                                <span className="feature__panel-no">FEATURE 01</span>

                                <div className="feature__panel-box">
                                    <h3 className="feature__panel-title">
                                        地域のかかりつけ医として幅広い内科診療
                                    </h3>

                                    <img src="./img/feature__01.png" alt="" />

                                    <p className="feature__panel-desc">
                                        親子医師による幅広い診療を提供しています。
                                    </p>

                                    <div className="btn__default">
                                        <a href="/doctor" className="btn__default-link">医師紹介</a>
                                        <a href="/clinic" className="btn__default-link">クリニック紹介</a>
                                    </div>
                                </div>
                            </article>

                            <article className="feature__panel feature__panel--large wow_custom">
                                <span className="feature__panel-no">FEATURE 02</span>

                                <div className="feature__panel-box">
                                    <h3 className="feature__panel-title">
                                        循環器専門医による診療
                                    </h3>

                                    <img src="./img/feature__02.png" alt="" />

                                    <p className="feature__panel-desc">
                                        専門機器で早期発見を行います。
                                    </p>

                                    <div className="btn__default">
                                        <a href="/doctor" className="btn__default-link">医師紹介</a>
                                        <a href="/interview" className="btn__default-link">インタビュー</a>
                                    </div>
                                </div>
                            </article>

                        </div>

                        {/* ROW 2 */}
                        <div className="feature__row d-flex flex-wrap">

                            <article className="feature__panel feature__panel--small wow_custom">
                                <span className="feature__panel-no">FEATURE 03</span>

                                <img src="./img/feature__03.png" alt="" />

                                <h3 className="feature__panel-title">
                                    訪問診療と往診
                                </h3>

                                <p className="feature__panel-desc">
                                    在宅医療サービスを提供します。
                                </p>

                                <div className="btn__default">
                                    <a href="/visit-medical" className="btn__default-link">訪問診療</a>
                                </div>
                            </article>

                            <article className="feature__panel feature__panel--small wow_custom">
                                <span className="feature__panel-no">FEATURE 04</span>

                                <img src="./img/feature__04.png" alt="" />

                                <h3 className="feature__panel-title">
                                    24時間対応
                                </h3>

                                <p className="feature__panel-desc">
                                    夜間・休日も対応します。
                                </p>

                                <div className="btn__default">
                                    <a href="/clinic" className="btn__default-link">クリニック紹介</a>
                                </div>
                            </article>

                            <article className="feature__panel feature__panel--small wow_custom">
                                <span className="feature__panel-no">FEATURE 05</span>

                                <img src="./img/feature__05.png" alt="" />

                                <h3 className="feature__panel-title">
                                    検査設備
                                </h3>

                                <p className="feature__panel-desc">
                                    最新設備で診断します。
                                </p>

                                <div className="btn__default">
                                    <a href="/examinations" className="btn__default-link">各種検査</a>
                                </div>
                            </article>

                        </div>

                    </div>
                </div>
            </div>
            {/* ===== PICKUP ===== */}
            <div className="pickup space__top space__bottom-01">
                <div className="pickup__frame">

                    <div className="pickup__heading grid-1485">
                        <div className="pickup__heading-box vs-01 wow_custom">
                            <h3 className="section-title-en">PICKUP</h3>
                            <p className="section-title-ja">ピックアップ</p>
                        </div>
                    </div>

                    <div className="pickup__collection grid-1485 d-flex flex-wrap">

                        {/* ITEM 1 */}
                        <article className="pickup__unit wow_custom">
                            <figure className="pickup__unit-media img--zoomout">
                                <img src="./img/pickup__01.png" alt="" />
                            </figure>

                            <div className="pickup__unit-body">
                                <h4 className="pickup__unit-title">循環器科</h4>
                                <p className="pickup__unit-sub">Cardiology</p>
                                <p className="pickup__unit-desc">
                                    循環器科では、心臓や血管に関わる病気を専門的に診療します。
                                </p>
                            </div>

                            <div className="pickup__unit-action btn__default">
                                <a href="/cardiovascular" className="pickup__unit-link btn__default-link">
                                    詳しくはこちら
                                </a>
                            </div>
                        </article>

                        {/* ITEM 2 */}
                        <article className="pickup__unit wow_custom">
                            <figure className="pickup__unit-media img--zoomout">
                                <img src="./img/pickup__02.png" alt="" />
                            </figure>

                            <div className="pickup__unit-body">
                                <h4 className="pickup__unit-title">訪問診療</h4>
                                <p className="pickup__unit-sub">Home Medical Care</p>
                                <p className="pickup__unit-desc">
                                    医師が自宅や施設へ訪問し診療を行います。
                                </p>
                            </div>

                            <div className="pickup__unit-action btn__default">
                                <a href="/visit-medical" className="pickup__unit-link btn__default-link">
                                    詳しくはこちら
                                </a>
                            </div>
                        </article>

                        {/* ITEM 3 */}
                        <article className="pickup__unit wow_custom">
                            <figure className="pickup__unit-media img--zoomout">
                                <img src="./img/pickup__03.png" alt="" />
                            </figure>

                            <div className="pickup__unit-body">
                                <h4 className="pickup__unit-title">生活習慣病外来</h4>
                                <p className="pickup__unit-sub">Lifestyle Disease Clinic</p>
                                <p className="pickup__unit-desc">
                                    生活習慣病の予防・治療を行います。
                                </p>
                            </div>

                            <div className="pickup__unit-action btn__default">
                                <a href="/lifestyle" className="pickup__unit-link btn__default-link">
                                    詳しくはこちら
                                </a>
                            </div>
                        </article>

                    </div>
                </div>
            </div>


            {/* ===== FEATURE ===== */}
            <div className="feature space__top-01 space__bottom-01">
                <div className="feature__wrap">

                    <div className="feature__head">
                        <div className="feature__head-box vs-01 wow_custom">
                            <h2 className="section-title-en">FEATURE</h2>
                            <p className="section-title-ja">クリニック特徴</p>
                        </div>
                    </div>

                    <div className="feature__grid grid-1485">

                        {/* ROW 1 */}
                        <div className="feature__row d-flex flex-wrap">

                            <article className="feature__panel feature__panel--large wow_custom">
                                <span className="feature__panel-no">FEATURE 01</span>

                                <div className="feature__panel-box">
                                    <h3 className="feature__panel-title">
                                        地域のかかりつけ医として幅広い内科診療
                                    </h3>

                                    <img src="./img/feature__01.png" alt="" />

                                    <p className="feature__panel-desc">
                                        親子医師による幅広い診療を提供しています。
                                    </p>

                                    <div className="btn__default">
                                        <a href="/doctor" className="btn__default-link">医師紹介</a>
                                        <a href="/clinic" className="btn__default-link">クリニック紹介</a>
                                    </div>
                                </div>
                            </article>

                            <article className="feature__panel feature__panel--large wow_custom">
                                <span className="feature__panel-no">FEATURE 02</span>

                                <div className="feature__panel-box">
                                    <h3 className="feature__panel-title">
                                        循環器専門医による診療
                                    </h3>

                                    <img src="./img/feature__02.png" alt="" />

                                    <p className="feature__panel-desc">
                                        専門機器で早期発見を行います。
                                    </p>

                                    <div className="btn__default">
                                        <a href="/doctor" className="btn__default-link">医師紹介</a>
                                        <a href="/interview" className="btn__default-link">インタビュー</a>
                                    </div>
                                </div>
                            </article>

                        </div>

                        {/* ROW 2 */}
                        <div className="feature__row d-flex flex-wrap">

                            <article className="feature__panel feature__panel--small wow_custom">
                                <span className="feature__panel-no">FEATURE 03</span>

                                <img src="./img/feature__03.png" alt="" />

                                <h3 className="feature__panel-title">
                                    訪問診療と往診
                                </h3>

                                <p className="feature__panel-desc">
                                    在宅医療サービスを提供します。
                                </p>

                                <div className="btn__default">
                                    <a href="/visit-medical" className="btn__default-link">訪問診療</a>
                                </div>
                            </article>

                            <article className="feature__panel feature__panel--small wow_custom">
                                <span className="feature__panel-no">FEATURE 04</span>

                                <img src="./img/feature__04.png" alt="" />

                                <h3 className="feature__panel-title">
                                    24時間対応
                                </h3>

                                <p className="feature__panel-desc">
                                    夜間・休日も対応します。
                                </p>

                                <div className="btn__default">
                                    <a href="/clinic" className="btn__default-link">クリニック紹介</a>
                                </div>
                            </article>

                            <article className="feature__panel feature__panel--small wow_custom">
                                <span className="feature__panel-no">FEATURE 05</span>

                                <img src="./img/feature__05.png" alt="" />

                                <h3 className="feature__panel-title">
                                    検査設備
                                </h3>

                                <p className="feature__panel-desc">
                                    最新設備で診断します。
                                </p>

                                <div className="btn__default">
                                    <a href="/examinations" className="btn__default-link">各種検査</a>
                                </div>
                            </article>

                        </div>

                    </div>
                </div>
            </div>
            {/* ===== COLUMN ===== */}
            <div className="column space__bottom">
                <div className="column__inner grid-1485">

                    <div className="column__head d-flex justify-between items-end">
                        <h3 className="section-title-en">COLUMN</h3>

                        <div className="btn__default">
                            <a className="btn__default-link hv-o wow_custom" href="./column/">
                                もっと見る
                            </a>
                        </div>
                    </div>

                    <ul className="column__list d-flex flex-wrap wow_custom">

                        {/* item 1 */}
                        <li className="column__card img--zoomout">
                            <a href="#" className="column__link">
                                <figure className="column__thumb">
                                    <img src="./img/column__01.png" alt="" />
                                </figure>
                            </a>

                            <div className="column__body">
                                <span className="column__meta d-flex mt-1-5 mb-1">
                                    <time className="column__date">2025.11.15</time>
                                </span>

                                <a href="#" className="column__heading">
                                    <span className="column__heading-txt">
                                        10月1日より新型コロナワクチン、インフルエンザワクチン接種を開始します。
                                    </span>
                                </a>

                                <span className="column__desc">
                                    10月1日より新型コロナワクチン、インフルエンザワクチンの接種を開始します。コロナワクチンは予約が必要です。
                                    <a href="#" className="column__more">more</a>
                                </span>
                            </div>
                        </li>

                        {/* item 2 */}
                        <li className="column__card img--zoomout">
                            <a href="#" className="column__link">
                                <figure className="column__thumb">
                                    <img src="./img/column__02.png" alt="" />
                                </figure>
                            </a>

                            <div className="column__body">
                                <span className="column__meta d-flex mt-1-5 mb-1">
                                    <time className="column__date">2025.11.15</time>
                                </span>

                                <a href="#" className="column__heading">
                                    <span className="column__heading-txt">
                                        10月1日より新型コロナワクチン、インフルエンザワクチン接種を開始します。
                                    </span>
                                </a>

                                <span className="column__desc">
                                    10月1日より新型コロナワクチン、インフルエンザワクチンの接種を開始します。コロナワクチンは予約が必要です。
                                    <a href="#" className="column__more">more</a>
                                </span>
                            </div>
                        </li>

                        {/* item 3 */}
                        <li className="column__card img--zoomout">
                            <a href="#" className="column__link">
                                <figure className="column__thumb">
                                    <img src="./img/column__03.png" alt="" />
                                </figure>
                            </a>

                            <div className="column__body">
                                <span className="column__meta d-flex mt-1-5 mb-1">
                                    <time className="column__date">2025.11.15</time>
                                </span>

                                <a href="#" className="column__heading">
                                    <span className="column__heading-txt">
                                        10月1日より新型コロナワクチン、インフルエンザワクチン接種を開始します。
                                    </span>
                                </a>

                                <span className="column__desc">
                                    10月1日より新型コロナワクチン、インフルエンザワクチンの接種を開始します。コロナワクチンは予約が必要です。
                                    <a href="#" className="column__more">more</a>
                                </span>
                            </div>
                        </li>

                        {/* item 4 */}
                        <li className="column__card img--zoomout">
                            <a href="#" className="column__link">
                                <figure className="column__thumb">
                                    <img src="./img/column__04.png" alt="" />
                                </figure>
                            </a>

                            <div className="column__body">
                                <span className="column__meta d-flex mt-1-5 mb-1">
                                    <time className="column__date">2025.11.15</time>
                                </span>

                                <a href="#" className="column__heading">
                                    <span className="column__heading-txt">
                                        10月1日より新型コロナワクチン、インフルエンザワクチン接種を開始します。
                                    </span>
                                </a>

                                <span className="column__desc">
                                    10月1日より新型コロナワクチン、インフルエンザワクチンの接種を開始します。コロナワクチンは予約が必要です。
                                    <a href="#" className="column__more">more</a>
                                </span>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>



            {/* ===== CLINIC ===== */}
            <div id="clinic-top" className="clinic space__top-02">
                <div className="clinic__inner grid-1145">

                    <div className="clinic__head">
                        <div className="title__default vs-01 wow_custom">
                            <h2 className="section-title-en">CLINIC INFOR</h2>
                            <p className="section-title-ja">医院紹介</p>
                        </div>
                    </div>

                    <div className="clinic__wrap">
                        <div className="clinic__layout d-flex flex-wrap">

                            {/* LEFT */}
                            <div className="clinic__col clinic__col--primary">

                                <table className="wow_custom">
                                    <tbody className="clinic__data">

                                        <tr className="clinic__row">
                                            <td className="clinic__label">医院名</td>
                                            <td className="clinic__value">佐貫内科医院</td>
                                        </tr>

                                        <tr className="clinic__row">
                                            <td className="clinic__label">診療科目</td>
                                            <td className="clinic__value">
                                                訪問診療・循環器科・一般内科・生活習慣病外来・消化器科・小児科・認知症外来・睡眠障害外来・予防接種・健康診断・各種検査
                                            </td>
                                        </tr>

                                        <tr className="clinic__row">
                                            <td className="clinic__label">副院長</td>
                                            <td className="clinic__value">佐貫仁宣</td>
                                        </tr>

                                        <tr className="clinic__row">
                                            <td className="clinic__label">住所</td>
                                            <td className="clinic__value">〒690-2101 島根県松江市八雲町日吉194-10</td>
                                        </tr>

                                        <tr className="clinic__row">
                                            <td className="clinic__label">駐車場</td>
                                            <td className="clinic__value">クリニック敷地内に15台</td>
                                        </tr>

                                        <tr className="clinic__row">
                                            <td className="clinic__label">位置</td>
                                            <td className="clinic__value">日吉親水公園向い</td>
                                        </tr>

                                    </tbody>
                                </table>

                                <div className="clinic__actions wow_custom">
                                    <div className="clinic__btn clinic__btn--primary">
                                        <a className="clinic__btn-link" href="./first-visit/">
                                            初診の方へ
                                        </a>
                                    </div>

                                    <div className="clinic__btn clinic__btn--secondary">
                                        <a className="clinic__btn-link" href="./clinic/#b4">
                                            アクセス・地図
                                        </a>
                                    </div>
                                </div>

                                <ul className="clinic__tags u-hidden-md-down wow_custom">
                                    <li className="clinic__tag">専用駐車 場あり</li>
                                    <li className="clinic__tag">日吉親水 公園向い</li>
                                </ul>

                            </div>

                            {/* RIGHT */}
                            <div className="clinic__col clinic__col--secondary">

                                <div className="clinic__schedule">

                                    <table className="clinic__table wow_custom">
                                        <tbody>

                                            <tr>
                                                <th className="clinic__table-head">診療時間</th>
                                                <th>月</th>
                                                <th>火</th>
                                                <th>水</th>
                                                <th>木</th>
                                                <th>金</th>
                                                <th>土</th>
                                                <th>日</th>
                                                <th>祝</th>
                                            </tr>

                                            <tr>
                                                <td className="clinic__table-head">
                                                    08:30～12:00
                                                    <span className="clinic__note-small">午前</span>
                                                </td>

                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-close">×</td>
                                                <td className="is-close">×</td>
                                            </tr>

                                            <tr>
                                                <td className="clinic__table-head">
                                                    16:30～18:30
                                                    <span className="clinic__note-small">午後</span>
                                                </td>

                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-open"></td>
                                                <td className="is-close">×</td>
                                                <td className="is-open"></td>
                                                <td className="is-close">×</td>
                                                <td className="is-close">×</td>
                                                <td className="is-close">×</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <p className="clinic__notes wow_custom">
                                        ・受付時間<br />
                                        午前9時〜11時30分 午後16時半〜18時<br />
                                        ・訪問診療は13時～17時までの対応となります。<br />
                                        ※訪問診療は木曜日も対応しております。<br />
                                        休診日　日曜日　祝日
                                    </p>

                                </div>

                                <div className="clinic__contact d-flex justify-between wow_custom">
                                    <a className="clinic__tel hv-o--01" href="tel:0852-54-0886">
                                        <span className="clinic__tel-label">ご予約・お問い合わせ</span>
                                        <span className="clinic__tel-number">0852-54-0886</span>
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="clinic__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.1111030769475!2d133.09637899999998!3d35.416987899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35571ca9c405d00d%3A0xa55717b7a8f04d49!2z5L2Q6LKr5YaF56eR5Yy76Zmi!5e1!3m2!1sja!2s!4v1774399221981!5m2!1sja!2s"
                                width="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="map"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

        </main >
    );
}

// @section Scripts {
//     <script>
//         document.addEventListener("DOMContentLoaded", function () {

//     const slides = document.querySelectorAll(".clinic-hero__slides li");
//         let index = 0;

//         if (slides.length === 0) return;

//         slides[index].classList.add("active");

//         setInterval(function () {
//             slides[index].classList.remove("active");

//         index = (index + 1) % slides.length;

//         slides[index].classList.add("active");

//     }, 4000);

// });
//     </script>
// }

export default INDEX ;