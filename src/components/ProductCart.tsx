import '../styles/components/ProductCart.sass'


export default function ProductCart() {

    return (

        <div id="card-product">
            <button id="btn-close-product-cart">X</button>
            <figure id="picture-product">
                <img src="../../public/apple-watch.png" alt="" />
            </figure>
            <div id="name-product">
                <span id="span-name-product">Apple Watch Series 4 GPS</span>
            </div>
            <div id="quantity-product">
                <div id='wrapper'>
                    <p id="p-qtd">Qtd:</p>
                    <div id="group-btn-qtd">
                        <div id='box-btn-min'>-</div>
                        <div id='box-span-qtd'>1</div>
                        <div id='box-btn-more'>+</div>
                    </div>
                </div>





            </div>
            <div id="price-products">
                <p id="subtotal">R$399</p>
            </div>
        </div>
    );
}