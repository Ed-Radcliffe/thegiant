# The Giant Band Website

This is a band website project built with a React frontend and a Spring Boot backend.  
It is designed to showcase band news, images, and links, with an admin panel planned for managing news posts.

> **Note:** This project is a work in progress.

---

## How to Run Locally

### Backend (Spring Boot)

1. Navigate to the backend folder:
   cd backend

2. Run the backend server using Maven Wrapper:

./mvnw spring-boot:run

3. The backend will start on http://localhost:8080.

### Frontend (React)
1. Navigate to the frontend folder:

cd frontend

2. Install dependencies (only needed once):

npm install

3. Run the frontend development server:

npm start

4. The frontend will be available at http://localhost:3000.


## Frontend Setup and Dependencies

### React Router DOM

We use [React Router DOM](https://reactrouter.com/en/main) to enable multiple pages (routing) in the frontend React app.

To install React Router DOM, run this command in the `frontend` directory:

```bash
npm install react-router-dom


## Project Overview
This project aims to create an interactive website for the band "The Giant," including:

Display of news and updates

Image galleries and media hosting (planned)

Links to social media profiles

Admin panel for non-technical users to add news stories (planned)


## 🚀 Deployment

This project is deployed on **GitHub Pages** at:

👉 [https://ed-radcliffe.github.io/thegiant](https://ed-radcliffe.github.io/thegiant)

To update the deployed site:

1. Make sure your changes are committed and pushed to the `main` branch:

   ```bash
   git add .
   git commit -m "Update site"
   git push

2. npm run deploy

# Future Work
Deployment setup

Admin authentication and news management panel

Media hosting and streaming support

Styling and responsive design improvements

Feel free to contribute or raise issues!