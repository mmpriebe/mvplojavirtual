import axios from "axios";

const products =  [
      {
        id: '5d3fc787-dc5b-4a13-81ca-e64e434038f7',
        nome: "Camiseta - PHP",
        descricao: "Camiseta oficial para desenvolvedores e sofredores PHP",
        preco: 120,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/8559037e09489ccb44254d8aba397e8f.webp",
        tamanhos: [
          {id: 'kjkjkj', nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79, principal: true},
          {id: 'e1e1e1e', nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
          {id: 'e1e1eaa', nome: 'G', quantidade_estoque: 10, preco_de: 489, preco_por: 299, principal: false},
        ]
      },
      {
        id: 'f0741fc2-d1dc-44c8-9b47-4fcddeed92e4',
        nome: "Camiseta - JavaScript",
        descricao: "Camiseta oficial do NodeJS, um novo framework a cada 5 minutos",
        preco: 120.0,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/e2fd1bcb1ad42b887b5933ac973c8378.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79.0, principal: true},
          {nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
          {nome: 'GG', quantidade_estoque: 0, preco_de: 489, preco_por: 299, principal: false},
        ]
      },
      {
        id: '4bf31ed6-cf69-497b-b134-b86c91ae63d1',
        nome: "Camiseta - Python",
        descricao: "Camiseta Python programação horientada a gambiarra",
        preco: 120.0,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/a43574ab1978e08445cd14c72b46b8f1.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79.00, principal: true},
          {nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
          {nome: 'G', quantidade_estoque: 0, preco_de: 489, preco_por: 299, principal: false},
        ]
      },
      {
        id: 'b428c356-b0c5-4603-b37d-ad9e99fe7038',
        nome: "Camiseta - Ruby",
        descricao: "Camiseta oficial do Ruby",
        preco: 130.0,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/73316d0a3a66fa870376414585d87662.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79.0, principal: true},
          {nome: 'M', quantidade_estoque: 0, preco_de: 120, preco_por: 79.0, principal: true},
          {nome: 'GG', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
        ]
      }
    ]

export const getProductsAxios = async () => {
  return products
  }

export const getProduct = async (id: string) => {
  return products.find((product: any) => product.id === id)
}