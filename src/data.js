// src/data/products.js
export const products = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt",
    price: 456,
    main_image: "/images/6-piece-non-stick-baking-set.webp",
    category:"T-Shirts",
    images: [
      "/images/6-piece-non-stick-baking-set.webp",
      "/images/6-piece-non-stick-baking-set.webp",
      "/images/black-2-slot-toaster.jpg"
    ],
    variants: [
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
    ],
    seller: "Alice Johnson"
  },
  {
    id: 2,
    name: "Laptop",
    price: 567,
    description: "High performance laptop",
    main_image: "/images/countertop-blender-64-oz.jpg",
    category:"T-Shirts",
    images: [
      "/images/6-piece-non-stick-baking-set.webp",
      "/images/black-2-slot-toaster.jpg",
      "/images/countertop-blender-64-oz.jpg"
    ],
    variants: [
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
    ],
    seller: "Bob Smith"
  },
  {
    id: 3,
    name: "Laptop",
    description: "High performance laptop",
    price: 689,
    main_image: "/images/countertop-blender-64-oz.jpg",
    category:"Accessories",
    images: [
      "/images/6-piece-non-stick-baking-set.webp",
      "/images/black-2-slot-toaster.jpg",
      "/images/countertop-blender-64-oz.jpg"
    ],
    variants: [
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},

    ],
    seller: "Bob Smith"
  },
  {
    id: 2,
    name: "Laptop",
    price: 789,
    description: "High performance laptop",
    main_image: "/images/countertop-blender-64-oz.jpg",
    category:"Shoes",
    images: [
      "/images/6-piece-non-stick-baking-set.webp",
      "/images/black-2-slot-toaster.jpg",
      "/images/countertop-blender-64-oz.jpg"
    ],
    variants: [
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      { description: "Comfortable cotton t-shirt"},
      
      
    ],
    seller: "Bob Smith"
  }
];

export const categories = [
  "All",
  "T-Shirts",
  "Pants", 
  "Shoes",
  "Accessories",
  "Hats",
  "Jackets"
];



