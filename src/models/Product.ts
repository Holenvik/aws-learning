import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string(),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
});

export const CarSchema = Yup.object({
  id: Yup.string(),
  description: Yup.string().required(),
  title: Yup.string().required(),
  price: Yup.number().required(),
  count: Yup.number().required(),
  image: Yup.string(),
});

export const AvailableProductSchema = ProductSchema.shape({
  count: Yup.number().integer().min(0).required().defined().default(0),
});

export type Product = Yup.InferType<typeof ProductSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;
export type Car = Yup.InferType<typeof CarSchema>;
