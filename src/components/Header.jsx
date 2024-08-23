import { Link } from "react-router-dom"

export default function Header (){
    return(
        <div className="nav">
            <div className="opcoes">
                <Link to="/" >Home</Link>
                <Link to="/Produtos">Produtos</Link>
                <Link to="/Ofertas">Ofertas</Link>
            </div>

            <h1 className="nomeLoja">GP Imports</h1>
        </div>
    )
}