import { topSellingBooks as topSale, fantasyBooks as fantasy } from '../data/Book1.js'
import style from '../assets/style'

function BookPage(Book)
{
    return (
        <>
            <aside className={ style["right-section"]}>
                <div className="img-div">
                    <img src={Book.coverImage} alt={Book.title} />
                </div>
            </aside>
        </>
    )
}

export default BookPage