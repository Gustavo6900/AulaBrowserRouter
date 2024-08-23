import { Link } from "react-router-dom"

export default function Header (){
    return(
        <div className="nav">
            <div className="nomeLoja">
            <h1 >GP Imports</h1>
            </div>
            <div className="opcoes">
                <Link to="/" className="paginas" >Home</Link>
                <Link to="/Produtos" className="paginas" >Produtos</Link>
                <Link to="/Ofertas" className="paginas" >Ofertas</Link>
            </div>
        </div>
    )
}