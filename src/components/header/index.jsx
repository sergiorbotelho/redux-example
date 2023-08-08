import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { selectProductCount } from "../../redux/cart/cart-selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  // const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productCount = useSelector(selectProductCount);

  const handleLogin = () => {
    dispatch(loginUser({ name: "Sergio", email: "sergio@teste.com" }));
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogout}>Sair</div>
        ) : (
          <div onClick={handleLogin}>Login</div>
        )}

        <div onClick={handleCartClick}>Carrinho ({productCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
