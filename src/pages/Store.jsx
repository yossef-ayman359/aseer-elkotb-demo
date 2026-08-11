import {Link} from 'react-router-dom'

import Navbar from '../componants/navbar.jsx'
import Footer from '../componants/footer.jsx'
import { useUserData } from '../componants/userDataProvider.jsx'
import Card from '../componants/card.jsx'
import style from '../assets/style/Store.module.css'
import { topSellingBooks as topSale, fantasyBooks as fantasy}  from '../data/Book1.js'

// const goToBookPage = (book) => {
//     <Book book></Book>
// }

function Store() {
    return (
        <>
            <Navbar isStore={true}></Navbar>

            <p className={ style["section-name"]}>الكتب الأكثر مبيعًا 🏆</p>
            <section className={ style["top-sale"]}>
                {topSale.sort((a, b) => a.id - b.id)
                        .map((book) => (
                            <Card key={book.id} book={book} />
                    ))}
            </section>

            <hr />

            <p className={ style["section-name"]}>عوالم الفانتازيا 👻</p>
            <section className={ `${style["top-sale"]} ${style["top-sale"]}`}>
                {fantasy.sort((a, b) => a.id - b.id)
                        .map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
            </section>

            <hr />

            <p className={ style["section-name"]}>عوالم الفانتازيا 👻</p>
            <section className={ `${style["top-sale"]} ${style["top-sale"]}`}>
                {fantasy.sort((a, b) => a.id - b.id)
                        .map((book) => (
                            <Card key={ book.id } book={book} />
                    ))}
            </section>

            <Footer></Footer>
        </>
    )
}

export default Store