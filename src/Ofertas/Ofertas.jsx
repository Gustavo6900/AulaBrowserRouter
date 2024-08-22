import ListarProdutos from "../components/ListarProdutos"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"


export default function Ofertas(){

    const [lista, setlista] = useState ([
        {id: 1, preco: 20, title: "Produto1", cor: "Azul", marca: "teste", imagem: "https://tse2.mm.bing.net/th?id=OIP.MRmZXRI7c_Ejfas6rvHa_QHaFL&pid=Api&P=0&h=180"},
        {id: 2, preco: 20, title: "Produto2", cor: "Preto", marca: "teste", imagem: "https://tse2.mm.bing.net/th?id=OIP.pGJxkID7P2n2gYdJ5Pp-yAHaEo&pid=Api&P=0&h=180"},
        {id: 3, preco: 20, title: "Produto3", cor: "Roxo", marca: "teste", imagem: "https://tse2.mm.bing.net/th?id=OIP.4wpyVD5d3tAJdO4M1085HwHaE5&pid=Api&P=0&h=180"},
        {id: 4, preco: 20, title: "Produto4", cor: "Verde", marca: "fake", imagem: "https://tse2.mm.bing.net/th?id=OIP.GtCCG7-UR1-ZoQHcu2sw9AHaE8&pid=Api&P=0&h=180"},
        {id: 5, preco: 20, title: "Produto5", cor: "Vermelho", marca: "fake", imagem: "https://tse3.mm.bing.net/th?id=OIP.9mhqBaEED2LxZFZpZ6cF-QHaEo&pid=Api&P=0&h=180"},
        {id: 6, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 7, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 8, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 9, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 10, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 11, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 12, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 13, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 14, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
        {id: 15, preco: 1, title: "Produto", cor: "", marca: "", imagem: ""},
    ])
    

    return(
        <div>
            <Header/>
            <ListarProdutos props = {lista}/>
            <Footer/>
        </div>
    )
}