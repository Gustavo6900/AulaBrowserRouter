import ListarProdutos from "./components/ListarProdutos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home (){

    const [lista, setlista] = useState ([
        {id: 1, preco: 2000000, title: "Lamborghini Aventador SVJ", cor: ["Preto ","Vermelho ","Marrom"], marca: "Lamborghini", imagem: "https://tse4.mm.bing.net/th?id=OIP.JugBMBp7ummagJNe8rvC0AHaD4&pid=Api&P=0&h=180"},
        {id: 2, preco: 200000, title: "Lamborghini Huracan", cor: ["Preto ","Laranja ","Amarelo "], marca: "Lamborghini", imagem: "https://tse2.mm.bing.net/th?id=OIP.ZJXL8xSHXS3KpSxLs9zvMwHaEh&pid=Api&P=0&h=180"},
        {id: 3, preco: 900000, title: "Ferrari SF90 Stradale", cor: ["Vermelho ","Preto ","Branca "], marca: "Ferrari", imagem: "https://tse3.mm.bing.net/th?id=OIP.mN5_kmdsn0U-HS4S2P8FBgHaEK&pid=Api&P=0&h=180"},
        {id: 4, preco: 4000000, title: "Ferrari LaFerrari", cor: ["Vermelho ","Amarelo ","Cinza " ], marca: "Ferrari", imagem: "https://tse4.mm.bing.net/th?id=OIP.fwotvtQzcIf3MyRgHJQovAHaEK&pid=Api&P=0&h=180"},
        {id: 5, preco: 150000, title: "Porsche 991 GT3", cor: ["Cinza ","Vermelho ","Azul "], marca: "Porsche", imagem: "https://tse2.mm.bing.net/th?id=OIP.vAXmRfnwOl_VahaMaMRneAHaEo&pid=Api&P=0&h=180"}
    ])
    
    return(
        <div>
          <Header/> 
          <Carousel
          infiniteLoop
          showArrows= {true}
          showStatus = {false}
          showThumbs= {false}
          dynamicHeight
          >
            <div>
                <img src="https://tse3.mm.bing.net/th?id=OIP.Y9k4YWtvNarBgkC1yV8oJgHaD4&pid=Api&P=0&h=180"/>
            </div>
            <div>
                <img src="https://tse4.mm.bing.net/th?id=OIP.ssr1ayJmC5tPlMkYGPBh-QHaEo&pid=Api&P=0&h=180"/>
            </div>
          </Carousel>
            <ListarProdutos props = {lista}/>
            <Footer/>
        </div>
    )
}