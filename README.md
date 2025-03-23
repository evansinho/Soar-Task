# **Soar-Task**  

This project is a **responsive finance dashboard and settings page** built using **React, React Router, Tailwind CSS, and Recharts**. It includes a dashboard with transaction history, analytics, and a settings page for user profile management.

## **Live Demo** 🌍  
🔗 **[Live App](https://soar-task-liart.vercel.app/)**

---
## **Features**
✅ Dashboard with financial insights  
✅ Interactive charts for transaction trends  
✅ Quick transfers and balance tracking  
✅ User profile settings with edit functionality  
✅ Responsive design for desktop & mobile 

## **Tech Stack**
- **React** (with Vite for fast development)
- **React Router** (for routing)
- **Tailwind CSS** (for styling)
- **Recharts** (for charts & graphs)
- **React Hook Form + Yup** (for form validation)

---

## **Setup Instructions**

### **1. Clone the Repository**
```sh
git clone https://github.com/evansinho/Soar-Task.git
cd Soar-Task
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Start the Development Server**
```sh
npm run dev
```
This will start the app at `http://localhost:5173/` (or another available port).

---

## **Project Structure**
```
src/
├── components/        # Reusable UI components
│   ├── Sidebar.jsx    # Sidebar navigation
│   ├── Navbar.jsx     # Top navbar
│   ├── Card.jsx       # Reusable card component
│   ├── Chart.jsx      # Chart components using Recharts
│   ├── TransactionList.jsx # Recent transactions
│   ├── QuickTransfer.jsx   # Transfer money section
│
├── pages/             # Main pages
│   ├── Dashboard.jsx  # Dashboard UI
│   ├── Settings.jsx   # Settings page UI
│
├── routes/            # React Router configuration
│   ├── index.jsx      # App routes
│
├── assets/            # Icons, images, and assets
├── styles/            # Global styles (if needed)
├── utils/             # Helper functions
└── App.jsx            # Main application entry
```

---

## **Assumptions Made**
1. **Routing**: The app uses **React Router** instead of Next.js for navigation.
2. **API Data**: Initially, mock data is used for transactions, user details, and card information, though I simulated API call and populated the app with mock data.
3. **Authentication**: This version does not include authentication but assumes a logged-in user.
4. **Form Validation**: The settings page form uses **React Hook Form + Yup** for validation.
5. **Responsiveness**: The UI is **fully responsive** for both desktop and mobile screens.

---

## **Deployment Instructions**
To deploy the app on **Vercel**:
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the app:
   ```sh
   vercel
   ```
   Follow the CLI instructions to set up the project.

**Updating an Existing Deployment**
If you've made changes and want to redeploy:

Using GitHub (Auto Deploy)
 ```sh
git add .
git commit -m "Updated dashboard features"
git push origin main
```
Vercel will automatically deploy the latest changes.

Manually Deploy via CLI

```sh
vercel --prod
```

Rolling Back to a Previous Version
If needed, rollback to the last successful deployment:

```sh
vercel rollback
```

---

## **To-Do (Future Enhancements)**
- Connect with an **API** to fetch real-time user and transaction data.
- Implement **authentication** and user session management.
- Improve the **UI with animations** using Framer Motion.
- Optimize the app for **better performance & accessibility**.

---

## **License**
This project is open-source under the **MIT License**.
