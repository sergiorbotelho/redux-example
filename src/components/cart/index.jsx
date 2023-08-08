import { useSelector } from "react-redux";
import CartItem from "../cart-item/index";
// Styles
import * as Styles from "./styles";
import { selectTotalProductCount } from "../../redux/cart/cart-selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const totalProductCount = useSelector(selectTotalProductCount);
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((product, index) => (
          <CartItem key={index} product={product} />
        ))}
        <Styles.CartTotal>Total: R$ {totalProductCount}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
