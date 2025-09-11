# logiTracker 🚀

Welcome to logiTracker – your go-to website for real-time cryptocurrency tracking! With logiTracker, you can stay updated with the latest prices, trends, and market data for your favorite cryptocurrencies.
LogiTracker is a full-stack web application built with *Node.js, Express, MongoDB, and React*. It provides user authentication, watchlist management, and real-time tracking of cryptocurrency/asset data.

---

## ⚡ Features

- 🔑 User Authentication (Signup & Login)
- 📊 View Trending and Top 10 assets
- ⭐ Manage Watchlist
- 🔍 Search & filter assets
- 🎨 Responsive UI using *TailwindCSS*
- 🌐 Backend API built with *Express & MongoDB*

---

## 🛠 Tech Stack

*Frontend:*
- React.js
- Redux Toolkit
- TailwindCSS

*Backend:*
- Node.js
- Express.js
- MongoDB (Mongoose)

*Deployment:*
- Vercel (Frontend + API)

---

## 📂 Project Structure

```
logiTracker/
 ├── api/                       # Backend (Node.js + Express + MongoDB) 
 │   ├── model/                 # Database models (Mongoose schemas) 
 │   │   └── users.js 
 │   ├── router/                # API routes 
 │   │   └── routes.js 
 │   ├── dbConnection.js        # MongoDB connection setup 
 │   ├── index.js               # Express server entry point 
 │   ├── .env                   # Environment variables 
 │   ├── package.json           # Backend dependencies 
 │   ├── package-lock.json 
 │   └── vercel.json            # Deployment config for Vercel 
 ├── client/                    # Frontend (React + Redux + TailwindCSS) 
 │   ├── public/                # Static assets 
 │   │   ├── favicon.ico 
 │   │   └── index.html 
 │   ├── src/                   # Application source code 
 │   │   ├── components/        # Reusable UI components 
 │   │   │   ├── Card.js 
 │   │   │   ├── Cards.js 
 │   │   │   ├── Footer.js 
 │   │   │   ├── Loadingui.js 
 │   │   │   └── Navbar.js 
 │   │   ├── pages/             # Page components (routing) 
 │   │   │   ├── CoinByID.js 
 │   │   │   ├── Home.js 
 │   │   │   ├── Login.js 
 │   │   │   ├── NotFound.js 
 │   │   │   ├── Signup.js 
 │   │   │   ├── Top10.js 
 │   │   │   ├── Trending.js 
 │   │   │   └── Watchlist.js 
 │   │   ├── store/             # Redux store & slices 
 │   │   │   ├── appStore.js 
 │   │   │   ├── userSlice.js 
 │   │   │   └── watchlistSlice.js 
 │   │   ├── index.css          # Global styles 
 │   │   ├── index.js           # React entry point 
 │   ├── package.json           # Frontend dependencies 
 │   ├── package-lock.json 
 │   └── tailwind.config.js     # TailwindCSS configuration 
 ├── LICENSE 
 └── README.md                  # Project documentation
```

---

## 🔧 Setup Instructions

 **Clone the repository**
   ```bash
   git clone https://github.com/faiz-ansari09/logiTracker
   ```
   **Navigate to project folder**
   ```bash
   cd logiTracker
   ```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

---

## License

This project is licensed under the [MIT License](https://github.com/faiz-ansari09/logiTracker/blob/master/LICENSE)

---

## Contact

For any questions or feedback, please reach out to us at ansarifaiz0905@gmail.com.

Thank you for choosing logiTracker. Happy tracking! 🚀