import { MenuContainer, MenuSide, MenuItem } from "./style"

//@ts-ignore
import Logo from "../../assets/images/logo1.png"
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <>
      <MenuContainer>
        <MenuSide>
          <MenuItem>
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
          </MenuItem>
        </MenuSide>
        <MenuSide side="right">
          <MenuItem>
            LOGIN
          </MenuItem>
          <MenuItem>
            MEUS PEDIDOS
          </MenuItem>
          <MenuItem>
            CARRINHO
          </MenuItem>
        </MenuSide>
      </MenuContainer>
    </>
  )
}