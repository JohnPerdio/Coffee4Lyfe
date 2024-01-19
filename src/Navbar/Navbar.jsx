import './Navbar.css'

export default function Navbar() {
    return (
        <div className="topnav">
           
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/promotion">Promotion</a>
            <a className="active" href="/about">About</a>
        
        </div>
    )
}