import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import ProductItem from "../../components/ProductItem";
import { Container, Products, Titulo } from "./style";
import { getProductsAxios } from "../../client/axios";

export default function Home() {

  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const productsAPI = await getProductsAxios();
    setProducts(productsAPI);
  }


  return (
    <>
      <Menu />
      <Container>
        <Titulo>Produtos em destaque:</Titulo>
        <Products>
          {products.length > 0 && products.map((product: any) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          )
          )}
        </Products>
      </Container>
    </>
  )
}
