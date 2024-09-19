# Welcome to Bookstore 📚

Bookstore is a full-stack web application designed to help you manage and track the unique books in your library. With its robust CRUD (Create, Read, Update, Delete) functionality, Bookstore allows you to efficiently manage your collection by adding new books, viewing details, updating information, and removing books from your library.

## Technologies Used 🛠️

This project leverages a modern stack of technologies to ensure scalability, performance, and a great developer experience:

- **Backend**:
  - **Node.js**: The runtime environment that powers the backend logic.
  - **Express**: A minimalist web framework used to build the RESTful API.
  - **MongoDB**: A NoSQL database used to store the book data.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, enabling schema-based modeling of the application data.
  - **Postman**: Utilized for API testing and interaction during development.

- **Frontend**:
  - **React.js**: A popular JavaScript library for building user interfaces, ensuring a responsive and dynamic user experience.
  - **Vite**: A fast and modern build tool that significantly improves the development workflow by providing instant hot module replacement (HMR) and faster builds.
  - **Axios**: A promise-based HTTP client used to make requests to the backend API.
  - **React Router DOM**: Facilitates navigation between different views of the application, providing a seamless single-page application (SPA) experience.
  - **Tailwind CSS**: A utility-first CSS framework used to style the application with ease, allowing for rapid UI development.

- **Development Tools**:
  - **Storybook**: An open-source tool for building UI components in isolation, enabling developers to create, test, and showcase components independently from the application.

By integrating these technologies, Bookstore ensures a robust, maintainable, and scalable application that can be easily extended with additional features in the future.

## How to Set Up and Demo the Project 🚀

Follow these steps to clone, set up, and run the Bookstore application on your local machine:

### 1. Clone the Repository
Begin by cloning the repository into your desired local directory:

```bash
git clone https://www.github.com/oluwxtope/bookstore
```
 ### 2. Set Up MongoDB

-   Sign up for a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register).
-   After setting up your cluster, obtain your connection URL with the appropriate credentials.
-   Update the connection URL in the `backend/config/sample.config.js` file.
-   Replace the configuration import in `backend/src/index.ts` with `backend/config/sample.config.js`.

### 3. Install Backend Dependencies

-   Navigate to the `backend` folder:

```bash
cd backend
```
-   Install the necessary dependencies:
```bash
pnpm i
```
 ### 4. Start the Backend Server

-   Compile the TypeScript backend and start the server using nodemon:

```bash
pnpm dev
```
-   The backend server will run at `http://localhost:3000` as configured in `backend/config/sample.config.js`.
### 5. Install Frontend Dependencies

-   Open a new terminal session in the project root.
-   Navigate to the `frontend` folder:

```bash
cd frontend
```
-   Install the necessary dependencies:

```bash
pnpm i
```
 ### 6. Start the Frontend Server

-   Start the Vite development server:

```bash
pnpm dev
```

-   The frontend will be available at `http://localhost:3001` as configured in `frontend/vite.config.ts`.
 ### 7. Access the Bookstore Application

-   Visit [http://localhost:3001](http://localhost:3001) in your web browser to view and interact with the Bookstore application.


## Storybook 📖

Storybook provides an interactive environment to view and test individual components used within the project. Follow these steps to launch Storybook:

1. Navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. Start Storybook:

    ```bash
    pnpm run storybook
    ```

3. Open your browser and visit [http://localhost:6006](http://localhost:6006) to explore the components in a sandbox environment.
