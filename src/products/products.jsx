import './products.css'

export default function Products() {
    return (
        <div className="products">
            <article>
                <h1>$4.50</h1>
                <h2>$6.00</h2>
                <img src="https://st4.depositphotos.com/1024122/25296/i/450/depositphotos_252969348-stock-photo-hot-macchiato-coffee-with-caramel.jpg" alt="macbook" />
                <p>Pure bliss where rich espresso <br/>meets heavenly caramel.</p>
                <b>Caramel Macchiato</b>
                
            </article>

            <article>
                <h1>$2.00</h1>
                <h2>$3.50</h2>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88170.jpg" alt="macbook" />
                <p1>A delectable delight that promises to elevate<br/>your taste buds to a world of pure indulgence.</p1>
                <b1><br/>Vanilla Bean Custard Danish</b1>
            </article>

            <article>
                <h1>$4.00</h1>
                <h2>$5.50</h2>
                <img src="https://bonteacafe.com/media/cold_brew_coffee_4.jpg" alt="macbook" />
                <p2>Where bold meets refreshing perfection.</p2>
                <b2><br />Cold Brew</b2>
            </article>

            <article>
                <h1>$1.50</h1>
                <h2>$2.50</h2>
                <img src="https://www.livewellbakeoften.com/wp-content/uploads/2021/09/Homemade-Chocolate-Cake-Pops-13.jpg" alt="macbook" />
                <p3>Bite-sized bliss and a pop of happiness!</p3>
                <b3><br />Cake Pops</b3>
            </article>
        
        </div>
    )
}