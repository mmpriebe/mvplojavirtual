import { MenuContainer, MenuSide, MenuItem } from './style';

import Logo from '../../assets/images/logo1.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaCartShopping } from 'react-icons/fa6';

// TODO so pode aparecer login se não estiver loggado

export default function Menu() {
  const token = Cookies.get('token');

  return (
    <>
      <MenuContainer>
        <MenuSide>
          <MenuItem>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </MenuItem>
        </MenuSide>
        <MenuSide side="right">
          <MenuItem>{!token && <Link to={'/login'}>LOGIN</Link>}</MenuItem>
          <MenuItem>{token && <Link to={'/'}>MEUS PEDIDOS</Link>}</MenuItem>
          <MenuItem>CARRINHO<FaCartShopping size={20}/></MenuItem>
        </MenuSide>
      </MenuContainer>
    </>
  );
}
