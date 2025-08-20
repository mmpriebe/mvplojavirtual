import { MenuContainer, MenuSide, MenuItem } from "./style"

//@ts-ignore
import Logo from "../../assets/images/logo1.png"

export default function Menu() {
  return (
    <>
      <MenuContainer>
        <MenuSide>
          <MenuItem>
            <img src={Logo} alt="" />
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