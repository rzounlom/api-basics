# Todo List API

A simple todo list application that uses json-server as a backend API with fetch and async/await for CRUD operations.

## Features

- Add new todos
- Edit existing todos
- Toggle todo completion status
- Delete todos
- Persistent data storage using json-server

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the json-server (in one terminal):

   ```bash
   npm run server
   ```

   This will start the server on http://localhost:3000

3. Open `index.html` in your browser or serve it using a local server.

## API Endpoints

The application uses the following json-server endpoints:

- `GET /todos` - Get all todos
- `POST /todos` - Create a new todo
- `PATCH /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## Data Structure

Each todo item has the following structure:

```json
{
  "id": 1,
  "text": "Buy groceries",
  "completed": false
}
```

## Technologies Used

- HTML5
- CSS3 (Bootstrap)
- JavaScript (jQuery)
- Fetch API with async/await
- json-server for backend API
