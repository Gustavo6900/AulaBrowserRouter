

export default function ListarProdutos ( {props}){
    return(

        <div>
        
            {
                props.map((produto)=>
                    <di className= "Card" key= {produto.id}>
                        <h1 className="titulo">{produto.title}</h1>
                        <h2 className="marca">{produto.marca}</h2>
                        <img className="imagem" src= {produto.imagem}/>
                        <p className="cor">{produto.cor}</p>
                        <p className="preco">{produto.preco}</p>
                    </di>
                )
            }
        </div>
    )
}