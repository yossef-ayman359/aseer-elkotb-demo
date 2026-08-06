import Navbar from "../componants/navbar.jsx"
import Footer from "../componants/footer.jsx"
import style  from '../assets/style/home.module.css'

function Home() { 
    return (
        <>
            <div className={style["homeDiv"]}>

                <Navbar isHome={true}></Navbar>

                <section className={style["content"]}>
                    <h1 className={ style["h1"]}>Welcom to Aseer Al-Kotb</h1>
                    <p className={ style["p"]}>Aseer Al-Kotob is your premier destination for discovery and a passion for reading—an integrated platform combining a vast online bookstore with the latest Arabic and translated releases, alongside an interactive community of book lovers. Explore reviews, share recommendations, and shop your favorite books with a single click—delivered right to your doorstep, making your reading journey easier and more enjoyable.</p>
                    <button className={style["login-button"]}>Login</button>
                </section>
                
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home