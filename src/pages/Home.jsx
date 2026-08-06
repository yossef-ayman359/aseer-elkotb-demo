import {Link} from 'react-router-dom'

import Navbar from "../componants/navbar.jsx"
import Footer from "../componants/footer.jsx"
import style  from '../assets/style/home.module.css'

function Home() { 
    return (
        <>
            <div className={style["homeDiv"]}>

                <Navbar isHome={true}></Navbar>

                <section className={style["content"]}>
                    <h1 className={ style["h1"]}>مرحباً بك في عصير الكتب</h1>
                    <p className={ style["p"]}>عصير الكتب هي وجهتك الأولى للاكتشاف وشغف القراءة، منصة متكاملة تجمع بين مكتبة إلكترونية ضخمة وأحدث الإصدارات العربية والمترجمة، إلى جانب مجتمع تفاعلي لعشاق الكتب. استكشف المراجعات، وشارك التوصيات، اشترِ كتبك المفضلة بنقرة واحدة لتصلك مباشرة حتى باب منزلك، مما يجعل رحلة قراءتك أسهل وأكثر متعة.</p>
                    <Link to="/Login">
                        <button className={style["login-button"]}>تسجيل الدخول</button>
                    </Link>
                </section>
                
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home