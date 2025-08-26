import axios from "axios";

const BASE_URL = 'http://localhost:3000';

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

const cartProducts: Cart[] = [];

export const getProductsAxios = async () => {
  const response = await axios.get(`${BASE_URL}/produtos`);
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/produtos/${id}`);
  console.log(response)
  return response.data;
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
  try {
    const result = await axios.post(`${BASE_URL}/login`, { email, senha: password });

    if (!result.data.token) {
      throw new Error("Credenciais Inválidas!");
    }

    return result;
  } catch (error: any) {
    console.log(error)
    if(error) {
      throw new Error(error.response.data.error);
    }
  }

};


type RegisterPayload = {
  nome: string,
  email: string,
  senha: string,
  telefone: string,
  cpf: string
}

export const register = async (payload: RegisterPayload) => {

  const response = await axios.post(`${BASE_URL}/usuarios`, payload)

  return response;
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


export const getInvoices = async () => {
  return invoices
}
