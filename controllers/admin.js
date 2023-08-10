const product=require('../model/admin');
exports.postProduct = async (req, res, next) => {
    try {
        const itemName = req.body.itemName;
        const Description = req.body.Description;
        const price = req.body.price;
        const Quantity = req.body.quantity;
        
        const newProduct = await product.create({
            itemName: itemName,
            Description: Description,
            price: price,
            Quantity: Quantity
        });
        res.status(200).json({ newProducts: newProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating the product.' });
    }
};
exports.getProduct= async (req,res,next)=>{
    try {
        const userProduct=await product.findAll();
        res.status(200).json({productDetails:userProduct});
    } catch (error) {
        console.log(error);
    }
}
exports.updateProduct= async (req,res,next)=>{
    const productId = req.params.id;
    const updatedDetails = req.body;
    try {
        const existingProduct = await product.findByPk(productId);

        if (!existingProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        await existingProduct.update(updatedDetails);

        const updatedProduct = await product.findByPk(productId);

        res.status(200).json({ message: "Product updated", productDetails: updatedProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating product" });
    }
}