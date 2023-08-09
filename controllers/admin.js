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