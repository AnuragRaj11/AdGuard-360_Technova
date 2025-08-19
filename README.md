<div align="center">
  <img src="https://placehold.co/1280x400/0d1117/22d3ee?text=AdGuard%20360" alt="AdGuard 360 Banner">
  <h1 align="center">AdGuard 360: A Tech-Enabled Framework for Billboard Compliance</h1>
  <p align="center">
    A technology-driven solution to combat unauthorized billboards in urban landscapes, developed for the <strong>Technova Season 2 Hackathon</strong>.
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

## 🎯 Project Overview & Problem Statement

Unauthorized billboards are a growing menace in Indian cities, contributing to accidents, diminishing aesthetic appeal, and spreading misinformation. Despite existing regulations, enforcement is challenging due to manual processes and a lack of public reporting mechanisms.

This project, **AdGuard 360**, directly answers the Technova Season 2 challenge: *"How can we develop a smart, scalable, mobility-based detection application that identifies unauthorized or non-compliant billboards just by clicking a picture or a live video?"*

Our solution provides a tech-enabled framework that empowers citizens and equips authorities to efficiently enforce outdoor advertising policies.

---

## ✨ Key Features & Challenge Objectives

AdGuard 360 is designed to meet all the core objectives of the hackathon challenge:

* **📸 Smart Detection:** Users can report billboards by uploading an image. The system is designed to integrate AI/computer vision to analyze submissions for potential violations.
* **✅ Violation Identification:** The platform checks for key non-compliance issues as specified in the problem statement:
    * **Incorrect Dimensions & Poor Placement:** Is the billboard too large or located in a hazardous zone?
    * **Structural Hazards:** Does the structure appear old, rusted, or unsafe?
    * **Content Violations:** Does the content include obscenities or misinformation?
    * **Regulatory Compliance:** Cross-referencing with a database of permitted billboards (conceptual).
* **🤝 Citizen Engagement:** An intuitive, mobile-first web app allows any citizen to become a stakeholder in maintaining their city's landscape.
* **📊 Centralized Reporting Portal:** A dedicated dashboard for municipal authorities to view, verify, and manage all submitted reports in real-time.
* **🏆 Gamification:** A leaderboard is included to incentivize citizen reporting, fulfilling one of the optional bonus objectives.

---

## 🏗️ System Architecture Overview

The application is designed with a modern, distributed architecture to handle citizen reporting, data processing, and administrative oversight efficiently.


┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Mobile App    │    │  Web Dashboard  │    │    AI Service   │
│ (React Native)  │    │     (React)     │    │    (Python)     │
│                 │    │                 │    │                 │
│ • Camera        │    │ • Analytics     │    │ • Computer      │
│ • GPS           │    │ • Maps          │    │   Vision        │
│ • Reporting     │    │ • Management    │    │ • Detection     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
│                    │                    │
└────────────┼────────────────────┘
│
┌─────────────────┐
│   Backend API   │
│    (Node.js)    │
│                 │
│ • Authentication│
│ • Report Mgmt   │
│ • Real-time     │
│ • File Upload   │
└─────────────────┘
│
┌─────────────────┐
│    Database     │
│   (MongoDB)     │
│   + Redis       │
└─────────────────┘


1.  **Mobile App (React Native):** The primary tool for citizens to capture and report billboards using their phone's camera and GPS.
2.  **Web Dashboard (React):** The administrative portal for authorities to view analytics, manage incoming reports, and visualize data on maps.
3.  **AI Service (Python):** A dedicated microservice for handling computer vision tasks, such as analyzing images for compliance violations.
4.  **Backend API (Node.js):** The central service that manages authentication, report processing, real-time updates, and communication between all other components.
5.  **Database (MongoDB + Redis):** A NoSQL database for flexible data storage, paired with Redis for caching and real-time messaging.

---

## 🛠️ Tech Stack

* **Frontend:**
    * [React Native](https://reactnative.dev/) - Mobile App Framework
    * [Next.js](https://nextjs.org/) / [React](https://reactjs.org/) - Web Dashboard Framework
    * [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
* **Backend:**
    * [Node.js](https://nodejs.org/) - JavaScript Runtime
    * [Express.js](https://expressjs.com/) - Web Framework
* **AI / Machine Learning:**
    * [Python](https://www.python.org/) - For Computer Vision and AI Services
* **Database:**
    * [MongoDB](https://www.mongodb.com/) - NoSQL Database
    * [Redis](https://redis.io/) - In-Memory Data Store / Cache

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v16 or later)
* npm

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
## ⚖️ Data Ethics & Privacy

In line with the hackathon's constraints, this project prioritizes ethical data handling:
* The application logic is built from the ground up, with no use of existing public codebases.
* The system is designed to avoid any facial detection or public surveillance.
* A privacy disclaimer is conceptually included to inform users about data usage before they submit a report.

---

## 🙏 Acknowledgments

* This project is a proud submission for the **Technova Season 2 Hackathon**.
* Special thanks to **ESSPL** for organizing this insightful and challenging event.
