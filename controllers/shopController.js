const productService = require('../services/shopService');

// get all products
async function getProducts(req, res) {
  try {
    const product = await productService.getProducts();
    res.status(200).json({
      message: "Successfully fetched all products",
      data: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


// Create a new product
// async function createProduct(req, res) {
//   try {
//     const productId = await productService.createProduct(req.body);
//     res.status(201).json({ productId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Get a product by ID
// async function getProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }
//     res.status(200).json({
//       message: "Successfully fetched product",
//       data: product
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// Update a product by ID
// async function updateProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }

//     // ketika ada request body productname, dan request body productname tidak sama dengan product.productname maka product.productname akan diupdate

//     if (req.body.productname && req.body.productname !== product.productname) { 
//       product.productname = req.body.productname;
//     }

//     // ketika ada request body email, dan request body email tidak sama dengan product.email maka product.email akan diupdate
    
//     if (req.body.price && req.body.price !== product.price) {
//       product.price = req.body.price;
//     }

//     // ketika ada request body password, dan request body password tidak sama dengan product.password maka product.password akan diupdate

//     //SIZE/keterangan?? no--> brand, image, 
    
//     // if (req.body.password && req.body.password !== product.password) {
//     //   product.password = req.body.password;
//     // }

//     await productService.updateProductById(productId, product);
//     res.status(200).json({
//       message: "Successfully update product",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

// // Delete a product by ID
// async function deleteProductById(req, res) {
//   const { productId } = req.params;
//   try {
//     const product = await productService.getProductById(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'product not found' });
//     }
//     const deleted = await productService.deleteProductById(productId);
//     res.status(200).json({
//       message: "Successfully delete product",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

module.exports = {
  getProducts
//   createProduct,
//   getProductById,
//   updateProductById,
//   deleteProductById,
};