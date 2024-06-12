import '../styles/components/HeaderMKS.sass'
import Carrinho from '../img/Carrinho.png';

export default function HeaderMKS(props:any) {
    let numeroItens: number = 0;


    return (
        <header>
            <div id="box-mks-sistemas">
                <span id="mks">MKS </span>
                <span>Sistemas</span>
            </div>

            <button id="cart-button" onClick={props.carrinhoFechado}>
                <img src={Carrinho} id="icone-carrinho" alt="Imagem de um carrinho de compras" />
                <span id="numero-itens">{numeroItens}</span>
            </button>
        </header>
    );
}