# About This Project

This project is a modern, full-stack password manager web application. It enables users to securely store, view, copy, edit, and delete their passwords for various websites and services. The application is designed for privacy, ease of use, and flexibility, supporting both local (browser-based) and server-side (database) storage.

---

## Branches
- **main:** Contains the version of the app that uses only localStorage for password management. All data stays in the browser and no backend server is required.
- **backend:** Contains the version of the app with full backend/database support (Express + MongoDB). This version enables persistent, cross-device storage via a server.

---

## Architecture Overview

- **Frontend:** Built with React and Vite, providing a fast, responsive, and user-friendly interface. By default, all data is stored locally in the browser using `localStorage`, ensuring privacy and offline access.
- **Backend:** Node.js/Express server with MongoDB for persistent storage. The backend exposes RESTful API endpoints for storing, retrieving, and deleting password entries, allowing users to sync their data across devices if desired.

---

## Features
- Add, edit, and delete password entries
- Copy usernames, URLs, and passwords to clipboard with one click
- Toggle password visibility for easy viewing
- Responsive and modern UI (Tailwind CSS)
- Data stored securely in your browser (no server or cloud storage by default)
- Optional backend for persistent, cross-device storage

---

## Data Model
Each password entry contains:
- `id`: Unique identifier (UUID)
- `name`: Username or account name
- `url`: Website or service URL
- `password`: The password (stored as plain text; see Security Notes)

---

## Backend API Endpoints
- `POST /` — Add a new password entry
- `GET /` — Retrieve all password entries
- `DELETE /` — Delete a password entry by ID

The backend uses CORS to allow requests from the frontend (localhost by default).

---

## Technologies Used
- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - React Hook Form
  - React Toastify
  - UUID
- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - CORS

---

## Security Notes
- **Local Storage:** All data is stored in the browser by default, never leaving the user's device.
- **Backend Storage:** If using the backend, passwords are stored in MongoDB as plain text. **For production use, it is strongly recommended to implement encryption and authentication.**
- **No Cloud Sync by Default:** The app is ideal for users who want a lightweight, private password manager that runs entirely in their browser, but can be extended for server-based storage.

---

## Ideal Use Case
This project is perfect for users who want a simple, private password manager with the option to enable persistent, cross-device storage via a backend server. It is also a great starting point for developers interested in building secure, full-stack web applications. 
