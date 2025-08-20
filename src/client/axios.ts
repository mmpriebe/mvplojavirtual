import axios from "axios";


export const getProductsAxios = async () => {
  return  [
      {
        id: '5d3fc787-dc5b-4a13-81ca-e64e434038f7',
        nome: "Camiseta - PHP",
        descricao: "Camiseta oficial do PHP",
        preco: 120,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/8559037e09489ccb44254d8aba397e8f.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79, principal: true},
          {nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
        ]
      },
      {
        id: '7b1fc787-dc5b-4a13-81ca-e64e434038f7',
        nome: "Camiseta - JavaScript",
        descricao: "Camiseta oficial do JavaScript",
        preco: 120.0,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/e2fd1bcb1ad42b887b5933ac973c8378.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79.0, principal: true},
          {nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
        ]
      },
      {
        id: '9c3fc787-dc5b-4a13-81ca-e64e434038f7',
        nome: "Camiseta - Python",
        descricao: "Camiseta oficial do Python",
        preco: 120.0,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/a43574ab1978e08445cd14c72b46b8f1.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79.00, principal: true},
          {nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
        ]
      },
      {
        id: '3d3fc787-dc5b-4a13-81ca-e64e434038f7',
        nome: "Camiseta - Ruby",
        descricao: "Camiseta oficial do Ruby",
        preco: 130.0,
        fotos: "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/73316d0a3a66fa870376414585d87662.webp",
        tamanhos: [
          {nome: 'P', quantidade_estoque: 10, preco_de: 120, preco_por: 79.0, principal: true},
          {nome: 'M', quantidade_estoque: 5, preco_de: 489, preco_por: 299, principal: false},
        ]
      }
    ]
  }