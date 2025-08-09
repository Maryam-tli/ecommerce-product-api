# Products API with Postman Testing

This project demonstrates a simple **CRUD API** for managing products, tested using **Postman**.  
The API allows you to **Create**, **Read**, **Update**, and **Delete** product data via HTTP requests.

---

## Features
- **GET**: Retrieve all products or a single product.
- **POST**: Add a new product.
- **PUT**: Update an existing product.
- **DELETE**: Remove a product from the database.
- Tested with **Postman** for accurate API response validation.

---

## 🛠 Technologies Used
- **Node.js**
- **Express.js**
- **Postman** for API testing
- **JSON** data handling

---

## API Endpoints

### 1) Get All Products
**Method:** `GET`  
**URL:** `http://localhost:3000/products`

**Example Response:**
```json
[
  {
    "id": 4,
    "name": "Bluetooth Headphones",
    "category": "Electronics",
    "price": 129.9
  },
  {
    "id": 5,
    "name": "Baseball Cap",
    "category": "Apparel",
    "price": 14.5
  },
  {
    "id": 6,
    "name": "Hoodie",
    "category": "Apparel",
    "price": 42.5
  }
]
```

---

### 2) Create a Product
**Method:** `POST`  
**URL:** `http://localhost:3000/products`

**Body (JSON):**
```json
{
  "name": "Hoodie",
  "category": "Apparel",
  "price": 42.5
}
```

**Example Response:**
```json
{
  "id": 6,
  "name": "Hoodie",
  "category": "Apparel",
  "price": 42.5
}
```

---

### 3) Update a Product
**Method:** `PUT`  
**URL:** `http://localhost:3000/products/6`

**Body (JSON):**
```json
{
  "price": 39.99,
  "name": "Hoodie (Updated)"
}
```

**Example Response:**
```json
{
  "id": 6,
  "name": "Hoodie (Updated)",
  "category": "Apparel",
  "price": 39.99
}
```

---

### 4) Delete a Product
**Method:** `DELETE`  
**URL:** `http://localhost:3000/products/6`

**Example Response:**
```json
{
  "message": "Deleted",
  "product": {
    "id": 6,
    "name": "Hoodie (Updated)",
    "category": "Apparel",
    "price": 39.99
  }
}
```

---

## Postman Test Results
- [Postman GET Result](images_of_results/Postman_Result_GET.png)
- [Postman GET Result](images_of_results/Postman_Result_POST.png) 
- [Postman GET Result](images_of_results/Postman_Result_PUT.png) 
- [Postman GET Result](images_of_results/Postman_Result_DELETE.png)

*(Upload images to the repo root and ensure the filenames match to render them like: `![GET](Postman_Result_GET.png)`)*

---

## Why is `node_modules` excluded?
The `node_modules` folder is excluded from GitHub using `.gitignore` because:
- It contains thousands of dependency files.
- It increases repository size unnecessarily.
- It can be regenerated anytime with:
```bash
npm install
```

---

## How to Run
```bash
# 1) install
npm install

# 2) dev mode (if you added nodemon)
npm run dev

# or start with node
npm start
```
Server runs at: `http://localhost:3000`

