import { MenuContainer, MenuSide, MenuItem } from './style';

import Logo from '../../assets/images/logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// TODO so pode aparecer login se não estiver loggado

export default function Menu() {
  const token = Cookies.get('token');

  const navigate = useNavigate();

  const exit = () => {
    Cookies.remove('token');
    Cookies.remove('nome');

    window.location.href = '/'
  }

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
          <MenuItem>{token && <Link to={'/invoices'}>MEUS PEDIDOS</Link>}</MenuItem>
          <MenuItem><Link to={'/cart'}>CARRINHO</Link></MenuItem>
          {token && ( 
            <MenuItem onClick={() => exit()}>SAIR</MenuItem>
          )}
        </MenuSide>
      </MenuContainer>
    </>
  );
}
