import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

import {
  DivFlexDirectioColumn,
  DivFlexDirectioRow,
  TextField,
} from "../../uikit";
import Logo from "../../assets/images/logo.svg";
import {
  ButtonLogin,
  DivEsqueciSenha,
  DivLinkCadastro,
  ErrorLogin,
  TituloLogin,
} from "./style";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import { login } from "../../client/axios";
import { useNavigate } from "react-router-dom";

type DecodedToken = {
  id: string;
  name: string;
  email: string;
};

export default function Login() {
  const navigate = useNavigate();

  const loginAPI = async () => {
    try {
      setError("");

      if (!email || !password) {
        throw new Error("Credenciais inválidas");
      }

      const resultLogin = await login(email, password);

      if (resultLogin.data.token) {
        const token = resultLogin.data.token;
        const dataToken: DecodedToken | null = decodeToken(token);
        Cookies.set("token", token, { expires: 7 });
        Cookies.set("name", dataToken?.name ? dataToken.name : "");
        navigate("/");
      }
      
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <DivFlexDirectioColumn
        heightTotal="80vh"
        justifycontent="center"
        paddingProp="60px"
        widthProps="550px"
      >
        <Link to={"/"}>
          <img src={Logo} alt="Logo do site" width={250} />
        </Link>
        <TituloLogin fontfamily="gilroy-bold" margintop="30px">
          LOGIN - ÁREA DO CLIENTE
        </TituloLogin>
        <br />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          maxwidth="550px"
          type="email"
          placeholder="EMAIL"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          maxwidth="550px"
          type="password"
          margintop="10px"
          placeholder="SENHA"
        />
        {error && <ErrorLogin>{error}</ErrorLogin>}

        <DivFlexDirectioRow gap="200px" margintop="2px" widthProps="100%">
          <DivEsqueciSenha>Esqueci minha senha</DivEsqueciSenha>
          <DivLinkCadastro>
            <Link to={'/register'}>Cadastro</Link>
          </DivLinkCadastro>
        </DivFlexDirectioRow>
        <ButtonLogin onClick={() => loginAPI()}>
          LOGIN
          <FaArrowRight size={15} />
        </ButtonLogin>
      </DivFlexDirectioColumn>
    </>
  );
}
