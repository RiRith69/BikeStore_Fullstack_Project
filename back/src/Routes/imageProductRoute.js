import express from 'express';
import upload from '../Middleware/upload.js';
import  Product from '../Models/Product.js';

const router = express.Router();

router.post('/upload', upload.single('image'), async ( req, res) => {
    try {
        const imageUrl = req.file.path;
        const { name, price, model_year, BrandId} = req.body;

        const newProduct = await Product.create({
            product_name: name,
            price,
            model_year,
            BrandId,
            image_url: imageUrl,
        })
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.error(error);
        res.status(404).json({ error: "upload failed"});
    }
});

export default router;