# 🎥 TikTik Clone – Vue/Nuxt + Laravel

A full-stack TikTok clone built with **Vue.js**, **Nuxt.js**, and **Laravel**. Features video uploads, user auth, likes, comments, and a responsive UI.

---

## 🚀 Tech Stack

- **Frontend**: Nuxt 3, Vue 3, Tailwind CSS
- **Backend**: Laravel 10, Sanctum
- **Database**: MySQL / PostgreSQL
- **Storage**: Local / Cloudinary
- **Auth**: Token-based (Sanctum)

---

## ⚙️ Setup

### Backend (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve

```

### Frontend (Nuxt)

```bash
cd frontend
npm install
echo "NUXT_API_BASE_URL=http://localhost:8000/api" > .env
npm run dev

```

----------

## 📦 Features

-   Infinite scrolling video feed
    
-   Video upload with preview
    
-   Likes, comments, and user profiles
    
-   Auth (register, login, logout)
    
-   RESTful API
    

----------

## 🧪 Testing

-   `php artisan test` (Laravel)
    
-   `npm run test` (Nuxt)
    

----------

## 📄 License

MIT

----------

## 👤 Author

[versatile kim](https://github.com/ManU4kym)
