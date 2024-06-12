import '../styles/components/Product.sass'
import ShoppingBad from '../img/shopping-bag.png'

export default function Product(props: any) {

    return (

        <div id="card">
            <figure id="box-img-product-card">
                <img src={props.caminhoImagem} alt={props.descricaoImagem} id="img-product-card" />
            </figure>
            <div id="box-product-price">
                <span id="span-name-product">{props.nomeProduto}</span>
                <div id="box-card-price-product">
                    <span id="span-price">R${props.precoProduto}</span>
                </div>
            </div>
            <div id="box-product-description">
                <p>Redesigned from scratch and completely revised.</p>
            </div>
            <button id="btn-buy">
                <img src={ShoppingBad} alt="sacola de compra" style={{ marginRight: 5 }} />
                comprar
            </button>
        </div>
    );
}