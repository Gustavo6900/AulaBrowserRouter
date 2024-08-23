import ListarProdutos from "../components/ListarProdutos"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"


export default function Ofertas(){

    const [lista, setlista] = useState ([
        {id: 6, preco: 90000, title: "BMW M3", cor: ["Verde ","Azul ","Preto "], marca: "BMW", imagem: "https://tse3.mm.bing.net/th?id=OIP.VLdQIb5P-RBIgEmmgmWYPQHaE8&pid=Api&P=0&h=180"},
        {id: 7, preco: 100000, title: "BMW M5", cor: ["Azul ","Preto ","Cinza "], marca: "BMW", imagem: "https://tse4.mm.bing.net/th?id=OIP.3ki1IAVNLDzZPAneC3Oe3wHaEK&pid=Api&P=0&h=180"},
        {id: 8, preco: 250000, title: "Mercedez-Benz AMG GT", cor: ["Cinza ","Verde ","Azul "], marca: "Mercedez-Benz", imagem: "https://tse1.mm.bing.net/th?id=OIP.FIW1D0Xdz5YfUJ9lpxkM1AHaE7&pid=Api&P=0&h=180"},
        {id: 9, preco: 1500000, title: "Porsche Carrera GT", cor: ["Vermelho ","Preto ","Cinza "], marca: "Porsche", imagem: "https://tse3.mm.bing.net/th?id=OIP.g4xqMLtptAQ3ljGdfpPBKAHaEA&pid=Api&P=0&h=180"},
        {id: 10, preco: 400000, title: "Ferrari 488 PISTA", cor: ["Cinza ","Azul ","Vermelho "], marca: "Ferrari", imagem: "https://tse1.mm.bing.net/th?id=OIP.Rw7v2aKg1C-k9jpW3r09UQHaEK&pid=Api&P=0&h=180"},
        {id: 11, preco: 3000000, title: "McLaren Senna", cor: ["Amarelo ","Vermelho ","Azul "], marca: "McLaren", imagem: "https://tse3.mm.bing.net/th?id=OIP.4HNj-FBLNO6Q6wDlNJApOAHaDt&pid=Api&P=0&h=180"},
        {id: 12, preco: 10000000, title: "Ferrari F40", cor: ["Vermelho","Branco ","Amarelo "], marca: "Ferrari", imagem: "https://tse3.mm.bing.net/th?id=OIP.aFIgUYn1EixxPITkAD8BkwHaFj&pid=Api&P=0&h=180"},
        {id: 13, preco: 1, title: "Audi R8", cor: ["Cinza ","Azul ","Vermelho "], marca: "Audi", imagem: "https://tse1.mm.bing.net/th?id=OIP.3gEWGibiy0Nz4yX-o1AXBQHaE8&pid=Api&P=0&h=180"},
        {id: 14, preco: 1, title: "McLaren 720s", cor: ["Laranja ","Preto ","Azul "], marca: "McLaren", imagem: "https://tse1.mm.bing.net/th?id=OIP.cWnmzloyUh_PIQfElpclMwHaEK&pid=Api&P=0&h=180"},
        {id: 15, preco: 1, title: "McLaren P1", cor: ["Amarelo ","Branco ","Laranja "], marca: "McLaren", imagem: "https://tse1.mm.bing.net/th?id=OIP.yLaSAQxTPDOO3g1dE3SGJQHaEA&pid=Api&P=0&h=180"},
    ])
    

    return(
        <div>
            <Header/>
            <ListarProdutos props = {lista}/>
            <Footer/>
        </div>
    )
}