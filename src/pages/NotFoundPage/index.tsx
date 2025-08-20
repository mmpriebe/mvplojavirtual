import { Container, ImagemNotFound, Title } from "./style";
import NotFoundIMG from '../../assets/images/undraw_page-not-found_6wni.svg'


export default function PageNotFound() {
  return (
    <Container>
      <Title>404 - Página Não Encontrada</Title>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <ImagemNotFound src={NotFoundIMG} alt="Página não encontrada" />
    </Container>
  );
} 