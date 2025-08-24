import jwt from "jsonwebtoken";

type Cart = {
  id: string;
  quantidade: number;
  tamanho: string;
};

type Shipping = {
  pac: {
    valor: number;
    prazo: number;
  };
  sedex: {
    valor: number;
    prazo: number;
  };
};

export const client = {
  id: "454564546-edewf-fasdfsf",
  nome: "Marciano",
  email: "marciano@gmail.com",
};

const products = [
  {
    id: "5d3fc787-dc5b-4a13-81ca-e64e434038f7",
    nome: "Camiseta - PHP",
    descricao: "Camiseta oficial para desenvolvedores e sofredores PHP",
    preco: 120,
    fotos:
      "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/8559037e09489ccb44254d8aba397e8f.webp",
    tamanhos: [
      {
        id: "kjkjkj",
        nome: "P",
        quantidade_estoque: 10,
        preco_de: 120,
        preco_por: 79,
        principal: true,
      },
      {
        id: "e1e1e1e",
        nome: "M",
        quantidade_estoque: 5,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
      {
        id: "e1e1eaa",
        nome: "G",
        quantidade_estoque: 10,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
    ],
  },
  {
    id: "f0741fc2-d1dc-44c8-9b47-4fcddeed92e4",
    nome: "Camiseta - JavaScript",
    descricao: "Camiseta oficial do NodeJS, um novo framework a cada 5 minutos",
    preco: 120.0,
    fotos:
      "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/e2fd1bcb1ad42b887b5933ac973c8378.webp",
    tamanhos: [
      {
        nome: "P",
        quantidade_estoque: 10,
        preco_de: 120,
        preco_por: 79.0,
        principal: true,
      },
      {
        nome: "M",
        quantidade_estoque: 5,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
      {
        nome: "GG",
        quantidade_estoque: 0,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
    ],
  },
  {
    id: "4bf31ed6-cf69-497b-b134-b86c91ae63d1",
    nome: "Camiseta - Python",
    descricao: "Camiseta Python programação horientada a gambiarra",
    preco: 120.0,
    fotos:
      "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/a43574ab1978e08445cd14c72b46b8f1.webp",
    tamanhos: [
      {
        nome: "P",
        quantidade_estoque: 10,
        preco_de: 120,
        preco_por: 79.0,
        principal: true,
      },
      {
        nome: "M",
        quantidade_estoque: 5,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
      {
        nome: "G",
        quantidade_estoque: 0,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
    ],
  },
  {
    id: "b428c356-b0c5-4603-b37d-ad9e99fe7038",
    nome: "Camiseta - Ruby",
    descricao: "Camiseta oficial do Ruby",
    preco: 130.0,
    fotos:
      "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/73316d0a3a66fa870376414585d87662.webp",
    tamanhos: [
      {
        nome: "P",
        quantidade_estoque: 10,
        preco_de: 120,
        preco_por: 79.0,
        principal: true,
      },
      {
        nome: "M",
        quantidade_estoque: 0,
        preco_de: 120,
        preco_por: 79.0,
        principal: true,
      },
      {
        nome: "GG",
        quantidade_estoque: 5,
        preco_de: 489,
        preco_por: 299,
        principal: false,
      },
    ],
  },
];

const cartProducts: Cart[] = [];

export const getProductsAxios = async () => {
  return products;
};

export const getProduct = async (id: string) => {
  return products.find((product: any) => product.id === id);
};

export const addProductCart = async (cart: Cart): Promise<{ data: Cart[] }> => {
  cartProducts.push(cart);
  return { data: cartProducts };
};

export const calculateShipping = async (
  cep: string
): Promise<{ data: Shipping }> => {
  return {
    data: {
      pac: {
        valor: 15.9,
        prazo: 20,
      },
      sedex: {
        valor: 85.5,
        prazo: 5,
      },
    },
  };
};

export const getCart = async () => {
  return {
    data: {
      itens: [
        {
          id: "5d3fc787-dc5b-4a13-81ca-e64e434038f7",
          nome: "Camiseta - PHP",
          quantidade: 20,
          preco: 79,
          total: 2500,
          fotos:
            "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/8559037e09489ccb44254d8aba397e8f.webp",
          tamanho: "P",
        },
        {
          id: "f0741fc2-d1dc-44c8-9b47-4fcddeed92e4",
          nome: "Camiseta - JavaScript",
          quantidade: 15,
          preco: 89,
          total: 2000,
          descricao:
            "Camiseta oficial do NodeJS, um novo framework a cada 5 minutos",
          fotos:
            "https://rsv-ink-images.ink.rsvcloud.com/images/product_v2/main_image/e2fd1bcb1ad42b887b5933ac973c8378.webp",
          tamanho: "G",
        },
      ],
      frete: {
        pac: {
          valor: 15.9,
          prazo: 20,
          escolhido: true,
        },
        sedex: {
          valor: 50.0,
          prazo: 5,
          escolhido: false,
        },
      },
      total: 4500,
      total_frete: 4515.9,
    },
  };
};

export const createPurchase = async () => {
  return {
    data: {
      link: "http://localhost:5173/register",
    },
  };
};

export const login = async (email: string, password: string) => {
  const correctEmail = "marciano@gmail.com";
  const correctPassword = "123";

  if (email !== correctEmail || password !== correctPassword) {
    throw new Error("Credenciais inválidas");
  }

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijg4YzI5Yzc1LTViYzktNDM3MC1iMTY4LWJlNzVkYjAyNGZiNSIsIm5hbWUiOiJNYXJjaWFubyIsImVtYWlsIjoibWFyY2lhbm9AZ21haWwuY29tIiwiaWF0IjoxNzU1OTgxMTkxLCJleHAiOjE3NTU5ODQ3OTF9.udll4pQSmfBXpYvJENLf1MCT8k0Zym1DvPWQ9pywzuY";
  return {
    data: {
      token: token,
    },
  };
};


type RegisterPayload = {
  nome: string,
  email: string,
  senha: string,
  telefone: string,
  cpf: string
} 

export const register = async (payload: RegisterPayload) => {

  // TODO requisição para o backend

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijg4YzI5Yzc1LTViYzktNDM3MC1iMTY4LWJlNzVkYjAyNGZiNSIsIm5hbWUiOiJNYXJjaWFubyIsImVtYWlsIjoibWFyY2lhbm9AZ21haWwuY29tIiwiaWF0IjoxNzU1OTgxMTkxLCJleHAiOjE3NTU5ODQ3OTF9.udll4pQSmfBXpYvJENLf1MCT8k0Zym1DvPWQ9pywzuY";
  return {
    data: {
      token: token,
    },
  };
}

type Invoices = {
  id: string
  data: string
  total: number
}

const invoices: Invoices[] = [
  {
    id: "#ACD554GFA",
    data: "24/08/2025",
    total: 250.0,
  },
  {
    id: "#BGH772KLP",
    data: "23/08/2025",
    total: 489.9,
  },
  {
    id: "#XQW991ZTE",
    data: "22/08/2025",
    total: 129.5,
  },
  {
    id: "#LMN438RSD",
    data: "20/08/2025",
    total: 980.0,
  },
]


export const getInvoices =  async () => {
  return invoices

}
