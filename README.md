# Zepto Clone
A full-stack Zepto-inspired grocery delivery web application built using the **MERN stack with TypeScript**.

## 🚀 Tech Stack

- **Frontend:** React.js, TypeScript, Context API
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (Mongoose)
---

## 🔑 Authentication Routes

- `POST /verify-otp` – Verify OTP for login.
- `PUT /add-name` – Add name after first-time login.
- `PUT /update-name-email` – Update user name and/or email.
- `DELETE /delete` – Delete account.

---

## 🏠 Address Routes

- `GET /user/addresses` – Fetch all user addresses.
- `POST /user/addresses` – Add a new address.
- `PUT /user/addresses/:addressId` – Update an existing address.
- `DELETE /user/addresses/:addressId` – Delete an address.

---

## 🛒 Product Routes

- `GET /` – Fetch all products.
- `GET /:productId` – Add a new product.
- `POST /` – Add a new product.
- `PUT /:id` – Update product details.

## 📦 Order Routes

- `GET /` – Fetch all orders (requires authentication).
- `POST /` – Create a new order (requires authentication).
---

## 🗂 Models

- **User Model** (includes `addresses` schema)
- **Product Model**
- **Order Model**
---

## ✨ Features
- Authentication & Authorization.
- Address management (Add, Edit, Delete).
- Global address access via Context API.
- Product management.
- Order creation and fetching.
- Context-based user authentication.
---

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:Swapnil-2502/Zepto-Clone.git
   cd zepto-clone 
   ```

2. **For Backend**
	```bash
	  cd backend
	  npm install
	  ```

3. **For Frontend**
	```bash
	  cd frontend
	  npm install
	  ```

4. **Set up environment variables**
Create a `.env` file in the backend directory with:
	```bash
	  PORT_NUMBER= {3001}
	  MONGODB_URL= {your_mongodb_url}
	  JWT_SECRET = {your_secret_key}
	  ```

5. **Run the development servers**
	  ```bash
		  # Start backend
				cd backend
				npm run dev

			# Start frontend
				cd frontend
				npm run dev
	```