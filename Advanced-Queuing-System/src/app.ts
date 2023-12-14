const { Product } = require( "./entity/product");
import express, {Request, Response } from 'express';
const { createConnection } = require('typeorm');

async function startServer() {
  try {
    const db = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "tutorial1",
      password: "112233",
      database: "queue_system",
      entities: [
        "src/entity/*.ts"
      ],
      logging: false,
      synchronize: true,
      authPlugins: {
        mysql_native_password: "mysql_native_password"
      }
    });

    const productRepository = db.getRepository(Product);
    const PORT = process.env.PORT || 5432;
    const app = express();
    const cors = require('cors');

    app.use(express.json());
    app.use(cors({
      origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
    }));

// Get Product Routes
app.get('/api/products', async (req: Request, res: Response) => {
  try {
      const products = await productRepository.find();
      res.json(products);
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create Product Routes
app.post('/api/products', async (req: Request, res: Response) => {
  try {
    // Create a new Product instance with data from the request body
    const newProduct = productRepository.create(req.body);

    // Save the newProduct to the database
    const result = await productRepository.save(newProduct);

    // Send the created product as the response
    res.json(result);
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get Product by ID
app.get('/api/products/:id', async (req: Request, res: Response) => {
  try {
    // Convert the ID to a number (assuming your product ID is a number)
    const productId = parseInt(req.params.id, 10);

    // Check if the conversion is successful
    if (isNaN(productId)) {
      return res.status(400).send('Invalid product ID');
    }

    // Find the product by ID using findByIds method
    const product = await productRepository.findByIds([productId]);

    if (!product || product.length === 0) {
      return res.status(404).send(`Product with ID ${productId} not found`);
    }

    return res.send(product[0]);
  } catch (error) {
    console.error('Error in GET /api/products/:id:', error);
    return res.status(500).send('Internal Server Error');
  }
});

// Update Product by ID
app.put('/api/products/:id', async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id, 10);

    if (isNaN(productId)) {
      return res.status(400).send('Invalid product ID');
    }

    const product = await productRepository.findByIds([productId]);

    if (!product || product.length === 0) {
      return res.status(404).send("Product not found");
    }

    productRepository.merge(product[0], req.body);
    const result = await productRepository.save(product[0]);

    return res.send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

// Delete Product by ID
app.delete('/api/products/:id', async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id, 10);

    if (isNaN(productId)) {
      return res.status(400).send('Invalid product ID');
    }

    const product = await productRepository.findByIds([productId]);

    if (!product || product.length === 0) {
      return res.status(404).send("Product not found");
    }

    await productRepository.remove(product[0]);

    return res.send("Product deleted successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});


    app.listen(PORT, () => {
      console.log(`Server is Listening on Port:${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

startServer();
