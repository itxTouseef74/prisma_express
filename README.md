 Express TypeScript Prisma Project

This project is a simple RESTful API built with Express, TypeScript, and Prisma. It allows you to create and manage items in a PostgreSQL database. The project can be run using Docker for easy setup and deployment.

 Table of Contents

- [Features](features)
- [Technologies Used](technologies-used)
- [Getting Started](getting-started)
- [Running with Docker](running-with-docker)
- [API Endpoints](api-endpoints)
- [Contributing](contributing)
- [License](license)

 Features

- Create items with a name and value.
- Simple RESTful API structure.
- TypeScript for type safety.
- Prisma ORM for database interactions.
- Docker support for easy deployment.

 Technologies Used

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Prisma](https://www.prisma.io/) - Next-generation ORM for Node.js and TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Relational database management system
- [Docker](https://www.docker.com/) - Containerization platform

 Getting Started

To get a local copy up and running, follow these steps:

 Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- Install [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/).

 Clone the repository

```bash
https://github.com/itxTouseef74/prisma_express.git
```

 Navigate to the project directory

```bash
cd express-typescript-prisma
```

 Install dependencies

```bash
npm install
```

 Set up your database

You can run the project using Docker, which will automatically set up a PostgreSQL database for you.

 Running with Docker

1. Start the Docker containers:

   ```bash
   docker-compose up -d
   ```

   This command will start the PostgreSQL database in a Docker container. The database will be accessible on port `5433`.

2. Run the migrations:

   After the database is up and running, you need to run the Prisma migrations. You can do this by executing the following command:

   ```bash
   npx prisma migrate dev --name init
   ```

3. Start the server:

   You can start the server using the following command:

   ```bash
   npx ts-node src/index.ts
   ```

4. Access the API:

   The server will be running on `http://localhost:3000`.

 API Endpoints

 Create an Item

- Endpoint: `POST /items`
- Request Body:
  ```json
  {
    "name": "Item Name",
    "value": "Item Value"
  }
  ```
 Endpoint: `GET /items`
 
 Example Request

```bash
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "Sample Item", "value": "Sample Value"}'
```

 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
