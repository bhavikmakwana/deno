import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Product one",
    descption: "This is first desciption product",
    price: 29.99,
  },
  {
    id: "2",
    name: "Product two",
    descption: "This is second desciption product",
    price: 28.99,
  },
  {
    id: "3",
    name: "Product three",
    descption: "This is third desciption product",
    price: 27.99,
  },
  {
    id: "4",
    name: "Product four",
    descption: "This is fouthth desciption product",
    price: 21.99,
  },
  {
    id: "5",
    name: "Product five",
    descption: "This is fifth desciption product",
    price: 25.99,
  },
];

//@desc getAll Product
//@route GET/api/v1/products
const getAllProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

//@desc getSingleProduct
//@route GET/api/v1/products:id
const getSingleProduct = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "no product found",
    };
  }
};

//@desc Updated Product
//@route GET/api/v1/products:id
const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (product) {
    const body = await request.body();

    const updateData: { name?: string; description?: string; price?: number } =
      body.value;

    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );

    response.status = 200;
    response.body = {
      success: true,
      data: products,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found",
    };
  }
};

//@desc add Product
//@route GET/api/v1/products
const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

//@desc delete Product
//@route GET/api/v1/products
const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  products = products.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    msg: "Product removed",
  };
};

export {
  getAllProducts,
  getSingleProduct,
  updateProduct,
  addProduct,
  deleteProduct,
};
