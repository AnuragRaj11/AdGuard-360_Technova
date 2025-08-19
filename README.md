<div align="center">
  <img src="https://placehold.co/1280x400/0d1117/22d3ee?text=AdGuard%20360" alt="AdGuard 360 Banner">
  <h1 align="center">AdGuard 360 - Billboard Reporting System</h1>
  <p align="center">
    A community-driven web application to detect, report, and manage unauthorized billboards, built for the Technova Season 2 Hackathon.
  </p>
  
  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/github/license/AnuragRaj11/AdGuard-360?style=for-the-badge" alt="License">
  </p>
</div>

---

## 📋 About The Project

**AdGuard 360** is a technology-driven solution designed to tackle the growing problem of unauthorized billboards in urban areas. This project was developed as a submission for the **Technova Season 2 "Flag the Unauthorized Billboards"** challenge, powered by ESSPL.

The application empowers citizens to report non-compliant billboards through a simple web interface. It provides a centralized dashboard for authorities to review these reports, enabling efficient monitoring and enforcement of outdoor advertising regulations. The goal is to improve urban aesthetics, enhance public safety, and create a transparent system for managing public advertising spaces.

### ✨ Key Features

* **Citizen Reporting:** An intuitive form for users to upload images of billboards, add location details, and submit reports.
* **Admin Dashboard:** A centralized portal for authorities to view, manage, and track all submitted reports in a clean, tabular format.
* **Gamification:** A public leaderboard to incentivize and reward active citizen reporters based on their contributions.
* **Modern UI/UX:** A sleek, responsive, and dark-themed interface built with Tailwind CSS for a great user experience.
* **Scalable Architecture:** Built with Next.js for a fast, server-rendered React application.

---

## 🏗️ System Architecture Overview

The application is designed with a modern client-server architecture, separating the user interface from the business logic for scalability and maintainability.


+-----------------+      +---------------------+      +------------------+
|                 |      |                     |      |                  |
|   Frontend      |----->|     Backend API     |----->|    Database      |
|  (Next.js)      |      | (Node.js / Express) |      |   (PostgreSQL)   |
|                 |      |                     |      |                  |
+-----------------+      +---------------------+      +------------------+
^                         |
|                         |
|                         v
|               +------------------+
|               |                  |
+---------------|    AI Service    |
| (Gemini Vision)  |
|                  |
+------------------+


1.  **Frontend (Next.js & React):** The user-facing application that citizens and administrators interact with. It's responsible for rendering the UI, capturing report data (images, location), and communicating with the backend API.

2.  **Backend API (Simulated with Node.js/Express):** The central hub that handles business logic. It would receive data from the frontend, process it, interact with the database, and call external services like the AI model for image analysis.

3.  **Database (PostgreSQL - Conceptual):** A relational database to persistently store all application data, including user reports, billboard information, violation records, and leaderboard scores.

4.  **AI Service (Google Gemini - Conceptual):** An external AI model would be used to perform computer vision analysis on the uploaded billboard images to automatically detect potential violations based on content, placement, and structural integrity.

---

## 🛠️ Tech Stack

This project is built with modern web technologies to ensure performance, scalability, and a great developer experience.

* **Frontend:**
    * [Next.js](https://nextjs.org/) - React Framework for Server-Side Rendering
    * [React](https://reactjs.org/) - JavaScript Library for UI
    * [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
* **Backend (Simulated):**
    * [Node.js](https://nodejs.org/) - JavaScript Runtime
    * [Express.js](https://expressjs.com/) - Web Framework for Node.js (for a potential backend)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* **npm**
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/AnuragRaj11/AdGuard-360.git](https://github.com/AnuragRaj11/AdGuard-360.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd AdGuard-360
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure


AdGuard-360/
├── components/
│   └── Layout.js         # Main layout component (header, footer)
├── pages/
│   ├── _app.js           # Global App component
│   ├── index.js          # Home Page
│   ├── report.js         # Report Submission Page
│   ├── dashboard.js      # Admin Dashboard Page
│   └── leaderboard.js    # Leaderboard Page
├── public/               # Static assets (images, fonts)
├── styles/
│   └── globals.css       # Global styles and Tailwind directives
└── package.json          # Project dependencies and scripts


---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Contact

Anurag Raj 

Project Link: [https://github.com/AnuragRaj11/AdGuard-360](https://github.com/AnuragRaj11/AdGuard-360)

---

## 🙏 Acknowledgments

* This project is a submission for the **Technova Season 2 Hackathon**.
* Special thanks to **ESSPL** for organizing this insightful and challenging event.
