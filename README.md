# Full Stack Portfolio Website

A modern, responsive portfolio website built with **React** (frontend) and **Node.js/Express** (backend). Features dark mode, smooth animations, and a contact form with email functionality.

## ✨ Features

-  **Modern UI/UX** - Clean, responsive design with Tailwind CSS
-  **Dark/Light Mode** - Toggle between themes with persistent storage
-  **Smooth Animations** - Framer Motion for elegant transitions
-  **Contact Form** - Working contact form with email integration (Nodemailer)
-  **MongoDB Support** - Optional database for storing projects and messages
-  **Fully Responsive** - Mobile-first design that works on all devices
- **Fast Performance** - Built with Vite for optimal development and build experience

##  Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Icons

### Backend
- Node.js
- Express
- Nodemailer (Email sending)
- MongoDB (Optional - with Mongoose)
- CORS

## 📁 Project Structure

```
portfolio-fullstack/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SkillBadge.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Contact.js
│   │   └── Project.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── projects.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional - for database features)
- Gmail account (for email functionality - or use another email service)

### Installation

1. **Clone or download this repository**

2. **Install all dependencies** (root, client, and server):
   ```bash
   npm run install-all
   ```
   
   Or install manually:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `server/` directory:
   ```bash
   cd server
   cp .env.example .env
   ```

   Edit `server/.env` with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   **For Gmail:**
   - Enable 2-factor authentication
   - Generate an "App Password" (not your regular password)
   - Use the app password in `EMAIL_PASS`

4. **Start the development servers**

   From the root directory:
   ```bash
   npm run dev
   ```

   This will start both:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

   Or run them separately:
   ```bash
   # Terminal 1 - Backend
   npm run server

   # Terminal 2 - Frontend
   npm run client
   ```

## 📝 Configuration

### Customizing Your Portfolio

1. **Update Personal Information**
   - Edit `client/src/components/Hero.jsx` - Change name, role, and social links
   - Edit `client/src/components/About.jsx` - Update bio, education, and skills
   - Edit `client/src/components/Footer.jsx` - Update social links

2. **Add Your Projects**
   - Projects are fetched from the backend API
   - Edit `server/routes/projects.js` to modify sample projects
   - Or connect MongoDB and add projects via the database

3. **Update Contact Email**
   - The contact form sends emails to the address in `EMAIL_USER`
   - Update social links in Hero and Footer components

### MongoDB Setup (Optional)

If you want to use MongoDB:

1. Install MongoDB locally or use MongoDB Atlas (cloud)
2. Update `MONGODB_URI` in `server/.env`
3. The app will automatically connect and use the database

Without MongoDB, the app will use sample data for projects and skip database storage for contact messages.

## 🎨 Customization

### Colors

Edit `client/tailwind.config.js` to customize the color scheme. The primary color is used throughout the app.

### Animations

All animations use Framer Motion. Customize in individual component files.

### Styling

Global styles are in `client/src/index.css`. Component-specific styles use Tailwind classes.

## 📦 Building for Production

### Frontend
```bash
cd client
npm run build
```

The build output will be in `client/dist/`

### Backend
```bash
cd server
npm start
```

## 🚢 Deployment

### Frontend (Vercel/Netlify)
1. Build the React app: `cd client && npm run build`
2. Deploy the `client/dist` folder
3. Set environment variables if needed

### Backend (Render/Railway/Heroku)
1. Deploy the `server/` directory
2. Set environment variables in your hosting platform
3. Update the API URL in the frontend if needed

### Environment Variables for Production
- `PORT` - Server port (usually set by hosting platform)
- `MONGODB_URI` - Your MongoDB connection string
- `EMAIL_SERVICE` - Email service provider
- `EMAIL_USER` - Your email address
- `EMAIL_PASS` - Your email app password

## 📧 Email Configuration

The contact form uses Nodemailer. Supported services include:
- Gmail (recommended for testing)
- Outlook
- Yahoo
- Custom SMTP servers

For Gmail, you need an App Password (not your regular password).

## 🐛 Troubleshooting

### Email not sending?
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- For Gmail, ensure you're using an App Password
- Check your email service's SMTP settings

### MongoDB connection errors?
- MongoDB is optional - the app works without it
- Verify your `MONGODB_URI` is correct
- Ensure MongoDB is running (if using local instance)

### Port already in use?
- Change `PORT` in `server/.env`
- Update `client/vite.config.js` proxy target if needed

## 📄 License

MIT License - feel free to use this project for your portfolio!

## Credits

Built with:
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)

---

**Happy Coding! 🎉**

