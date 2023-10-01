const { prisma } = require('../config/prisma');

async function getProducts() {
  try {
    const product = await prisma.product.findMany();
    return product;
  } catch (error) {
    console.log(error);
  }
}


async function createProduct(product) {
  try {
    const createdProduct = await prisma.product.create({
      data: {
        productname: product.productname,
        brandname: product.brandname,
        price: product.price,
        image: product.image
      }
    })
    return createdProduct;
  } catch (error) {
    throw new Error(error)
  }
}

// Function to get a product by ID
async function getProductById(productId) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(productId)
      }
    })
    return product
  } catch (error) {
    throw new Error(error)
  }
}

// Function to update a product by ID
async function updateProductById(productId, updatedProduct) {
  try {
    const productUpdate = await prisma.product.update({
      where: {
        id: Number(productId)
      },
      data: {
        productname: product.productname,
        brandname: product.brandname,
        price: product.price,
        image: product.image
      }
    })
    return productUpdate;
  } catch(error) {
    throw new Error(error)
  }
}

// Function to delete a product by ID
async function deleteProductById(productId) {
  try {
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(productId)
      }
    })
    return deletedProduct;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};