

export default function ListarProdutos ( {props}){
    return(

        <div>
        
            {
                props.map((produto)=>
                    <di key= {produto.id}>
                        <h1>{produto.title}</h1>
                        <h2>{produto.marca}</h2>
                        <img src= {produto.imagem}/>
                        <p>{produto.cor}</p>
                        <p>{produto.preco}</p>
                    </di>
                )
            }
        </div>
    )
}