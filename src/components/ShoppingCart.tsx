import '../styles/components/ShoppingCart.sass'
import ProductCart from './ProductCart';

export default function ShoppingCart() {
    return (
        <div id="container-sc">
            <div style={{ paddingLeft: 38, width: 165.4, float: 'left', marginTop: 25 }}>
                <span>Carrinho</span>
                <br></br>
                <span>de compras</span>
            </div>


            <button id="btn-close-shopping-cart">X</button>
            <div id="sub-container-products">
                <ProductCart />
                <ProductCart />
                <ProductCart />

            </div>

            <div id="buy-total">
                <p>Total:</p>
                <p>R$798</p>

            </div>



            <button id="btn-finalize-purchase">
                Finalizar Compra
            </button>

        </div>

    );
}