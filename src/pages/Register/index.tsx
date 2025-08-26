import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Logo from '../../assets/images/logo.svg'
import { DivFlexDirectioColumn, DivFlexDirectioRow, Label, TextField } from "../../uikit";
import { Title } from "../../uikit";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../../client/axios";


export default function Regsiter() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const origin = searchParams.get('origin');

  type FormType = {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    cpf: string
  }

  const [form, setForm] = useState<FormType>(
    {
      nome: '',
      email: '',
      telefone: '',
      senha: '',
      cpf: ''
    });

  const save = async () => {
    try {
      const { nome, email, telefone, senha, cpf } = form;

      if (!nome || !email || !senha || !telefone || !cpf) {
        throw new Error('Preencha todos os campos');
      }

      const result = await register(form);

      if(!result.data.token) {
        throw new Error('Ocorreu um erro no cadastro, por favor, tente novamente ou contate o suporte!');
      }
      const token = result.data.token;
      const decodedToken: { id: string, nome: string } | null = decodeToken(token);

      
      if(decodedToken) {
        Cookies.set('token', token);
        Cookies.set('name', decodedToken.nome)
      }

      if(origin && origin === 'cart') {
        navigate('/cart');
      } else {
        navigate('/');
      }

    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <>
      <DivFlexDirectioColumn justifycontent="center" alignitems="center">
        <DivFlexDirectioColumn
          paddingProp="350px 50px"
          gap="15px"
          margintop="50px"
          borderTotal="2px solid black"
          borderradius="10px"
          widthProps="100%"
          maxwidth="700px"
          justifycontent="center"
          alignitems="center"
          heightTotal="70vh"
        >
          
          <img src={Logo} width={250} alt="Logo" />

          <Title fontfamily="gilroy-bold" fontsize="20px">Vamos criar a sua conta?</Title>

          <DivFlexDirectioColumn widthProps="100%">
            <Label>Nome:</Label>
            <TextField
              maxwidth="100%"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
          </DivFlexDirectioColumn>

          <DivFlexDirectioColumn widthProps="100%">
            <Label>E-mail:</Label>
            <TextField
              maxwidth="100%"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </DivFlexDirectioColumn>


          <DivFlexDirectioColumn widthProps="100%">
            <Label>Sua senha:</Label>
            <TextField
              maxwidth="100%"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
            />
          </DivFlexDirectioColumn>


          <DivFlexDirectioColumn widthProps="100%">
            <Label>Telefone:</Label>
            <TextField
              maxwidth="100%"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            />
          </DivFlexDirectioColumn>

          <DivFlexDirectioColumn widthProps="100%">
            <Label>CPF:</Label>
            <TextField
              maxwidth="100%"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
            />
          </DivFlexDirectioColumn>

          <DivFlexDirectioRow
            widthProps="100%"
            justifycontent="space-between"
            alignitems="center"
          >
            <Link to={'/login'}>
              <Label textdecoration='underline' cursorpointer='pointer'>FAZER LOGIN</Label>
            </Link>
            <Button onClick={() => save()}>FAZER CADASTRO AGORA</Button>
          </DivFlexDirectioRow>

        </DivFlexDirectioColumn>
      </DivFlexDirectioColumn>
    </>
  )
}