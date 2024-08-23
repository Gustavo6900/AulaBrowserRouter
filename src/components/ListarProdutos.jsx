

export default function ListarProdutos ( {props}){
    return(

        <div className= "fundo">
        
            {
                props.map((produto)=>
                    <div className= "card" key= {produto.id}>
                        <h1 className="titulo">{produto.title}</h1>
                        <img className="imagem" src= {produto.imagem}/>
                        <h2 className="marca">Marca:{produto.marca}</h2>
                        <p className="cor">Cores: {produto.cor}</p>
                        <p className="preco">Preco: ${produto.preco}</p>
                    </div>
                )
            }
        </div>
    )
}