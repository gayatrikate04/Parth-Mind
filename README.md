# ParthMind

ParthMind is an AI-powered chatbot website designed to help users overcome overthinking and depression. It provides an interactive, friendly experience with features like journaling, music recommendations, and activity suggestions.

## 🚀 Features
- **ParthMind Chatbot** – Engaging and supportive conversations.
- **ParthDiary** – A personal journaling feature with a realistic 3D page-turning effect.
- **ParthSangeet** – Music recommendations.
- **Activity Suggestions** – Interactive ideas to help improve mood.
- **User Authentication** – Simple sign-up and login system.

## 🛠 Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (pgAdmin for management)
- **APIs**: Spotify API (for ParthSangeet)
- **Hosting**: Vercel

## 📂 Project Structure
```
/parthmind
 ├── /public           # Static assets
 ├── /src              
 │   ├── /components   # Reusable components
 │   ├── /pages        # Page routes
 │   ├── /styles       # Global & module styles
 │   ├── /utils        # Helper functions
 │   ├── /context      # Context providers
 │   ├── /hooks        # Custom hooks
 │   ├── /lib          # API / database interactions
 │   ├── /constants    # Static values
 ├── .gitignore        
 ├── package.json
 ├── README.md
 └── next.config.js
```

## 🚀 Getting Started

First, clone the repository and install dependencies:
```bash
git clone https://github.com/gayatrikate04/ParthMind.git
cd ParthMind
npm install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Environment Variables
Create a `.env.local` file and add the required environment variables:
```env
NEXT_PUBLIC_API_KEY=your_api_key
DATABASE_URL=your_db_url
```

## 🚀 Deployment on Vercel

To deploy the project on Vercel, follow these steps:
1. Push your latest code to GitHub.
2. Connect the repository to Vercel.
3. Configure environment variables in Vercel.
4. Deploy the project.

You can also check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More
To learn more about Next.js, visit:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Next.js GitHub](https://github.com/vercel/next.js) - Contribute to the project.

---
**Contributors:** Gayatri Kate

ParthMind is an ongoing project. Feedback and contributions are welcome! 😊

