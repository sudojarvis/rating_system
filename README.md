
# Audiobook Application

This project is a full-stack audiobook application built with Node.js, Express, MongoDB, and React.

The aplication is deployed on render and can be accessed at [Audiobook Application](https://rating-system-1.onrender.com/).

URL access might be slow as the application is hosted on a free tier.
Or
You can run the application locally by following the instructions below.


## Backend Setup

### Prerequisites

- Node.js installed on your local machine
- MongoDB installed and running locally or accessible MongoDB Atlas account (for cloud-based MongoDB)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
    npm install
    npm install cors
    npm install dotenv
    npm install mongoose
    npm install body-parser
    npm install express
   ```

4. Create a `.env` file in the `backend` directory and add the following:

   ```plaintext
   MONGODB_URI=<your_mongodb_uri>
   ```

   Replace `<your_mongodb_uri>` with your MongoDB connection string.

5. Run the server:

   ```bash
   npm start
   ```

   This will start the backend server at `http://localhost:3000`.


First start the backend server and then start the frontend server.

## Frontend Setup

### Prerequisites

- Node.js installed on your local machine

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ``` 

2. Install dependencies:

   ```bash
   npm install
   npm install react-router-dom
   ```

3. Run the application:

   Update the BaseUrl in the frontend/src/baseUrl.js file to the backend server URL(`http://localhost:3000/api`).

   ```bash
   npm start
   ```

   This will start the React development server and open the application in your default web browser at `http://localhost:3001`.



## Endpoints

### Get All Audiobooks

- **URL:** `/api/audiobooks`
- **Method:** `GET`
- **Response:**
  - **Success:** 200 OK
  - **Failure:** 404 Not Found, 500 Internal Server Error
- **Description:** Retrieves a list of audiobooks, optionally filtered by genre, author, and minimum rating.

### Get Audiobook by ID

- **URL:** `/api/audiobooks/:id`
- **Method:** `GET`
- **Response:**
  - **Success:** 200 OK
  - **Failure:** 500 Internal Server Error
- **Description:** Retrieves a specific audiobook by its ID.

### Add Review to Audiobook

- **URL:** `/api/audiobooks/:id/reviews`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "User Name",
    "rating": 4.5,
    "comment": "Review comment"
  }
  ```
- **Response:**
  - **Success:** 201 Created
  - **Failure:** 404 Not Found, 500 Internal Server Error
- **Description:** Adds a review to a specific audiobook by its ID.


## Application Overview

The audiobook application consists of two main parts:

- **Backend**: Provides RESTful APIs for managing audiobook data and user reviews.
- **Frontend**: React-based user interface for browsing audiobooks, viewing details, and submitting reviews.

## Backend Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **cors**: Express middleware to enable CORS (Cross-Origin Resource Sharing).

## Frontend Dependencies

- **React**: A JavaScript library for building user interfaces.
- **react-router-dom**: Declarative routing for React.

### Libraries Used

- **Backend:**
  - Express.js
  - Mongoose
  - Body-parser
  - dotenv
  - cors

- **Frontend:**
  - React
  - react-router-dom


### Folder Structure

- **backend/**: Contains the Node.js backend server.
- **frontend/**: Contains the React frontend application.


