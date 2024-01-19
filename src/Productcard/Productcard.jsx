import './Productcard.css'

export default function Productcard() {
    return (
        <div className="productcard">
            <article>
                <h2>Best Seller</h2>
                <img src="https://st4.depositphotos.com/1024122/25296/i/450/depositphotos_252969348-stock-photo-hot-macchiato-coffee-with-caramel.jpg" alt="macbook" />
                <p>Experience pure bliss where rich espresso <br/>meets heavenly caramel.</p>
                <b>Caramel Macchiato</b>
                
            </article>

            <article>
                <h2>Seasonal Delicacy</h2>
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88170.jpg" alt="macbook" />
                <p1>A delectable delight that promises to elevate<br/>your taste buds to a world of pure indulgence.</p1>
                <b2><br/>Vanilla Bean Custard Danish</b2>
            </article>

            <article>
                <h2>C4L Mugs</h2>
                <img src="https://eunaliving.com/cdn/shop/products/japanese-vintage-coffee-mug-eunaliving-5.jpg?v=1661397235" alt="macbook" />
                <p2>Available at all Stores</p2><br/>
                { <b3>Support Us!</b3> }
            </article>

        
        </div>
    )
}