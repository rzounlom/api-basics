# Todo List Application

A simple, interactive todo list application built with HTML, CSS, and JavaScript. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, and responsive design using Bootstrap.

## Features

- **Add New Todos**: Add new tasks to your todo list
- **Edit Todos**: Modify existing todo items inline
- **Toggle Completion**: Mark todos as complete or incomplete with visual feedback
- **Delete Todos**: Remove unwanted items from the list
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Visual Feedback**: Completed todos are visually distinguished with strikethrough text

## Screenshots

The application features a clean, modern interface with:

- Bootstrap-styled components for a professional look
- Color-coded buttons for different actions
- Responsive layout that adapts to different screen sizes

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system
- A modern web browser

### Installation

1. **Clone or download the project** to your local machine

2. **Install dependencies**:

   ```bash
   npm install
   ```

   This will install Bootstrap and jQuery from the package.json file.

3. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or serve it using a local development server

### Running the Application

Since this is a client-side only application, you can run it in several ways:

**Option 1: Direct file opening**

- Double-click `index.html` to open it in your default browser

**Option 2: Using a local server (recommended)**

- Use a simple HTTP server like Python's built-in server:

  ```bash
  # Python 3
  python -m http.server 8000

  # Python 2
  python -m SimpleHTTPServer 8000
  ```

- Or use Node.js http-server:
  ```bash
  npx http-server
  ```
- Then navigate to `http://localhost:8000` in your browser

## How It Works

### Core Functionality

1. **Data Storage**: Todos are stored in memory using a JavaScript array
2. **DOM Manipulation**: The application dynamically updates the HTML DOM to reflect changes
3. **Event Handling**: User interactions are captured and processed using jQuery event handlers

### Key Components

- **HTML Structure**: Clean, semantic HTML with Bootstrap classes for styling
- **CSS Styling**: Custom styles for completed todos (strikethrough effect)
- **JavaScript Logic**: jQuery-based DOM manipulation and event handling

### Code Structure

```javascript
// Main functionality includes:
- Default todos array with sample data
- render() function to display todos
- Form submission handler for adding new todos
- Click handlers for edit, toggle, and delete operations
```

## Usage Guide

### Adding a Todo

1. Type your todo text in the input field
2. Click "Add" or press Enter
3. The new todo will appear in the list

### Editing a Todo

1. Click the "Edit" button next to any todo
2. A prompt will appear with the current text
3. Modify the text and click OK to save changes

### Completing a Todo

1. Click the "Complete" button next to any todo
2. The todo will be marked as completed with strikethrough text
3. Click "Incomplete" to reverse the completion status

### Deleting a Todo

1. Click the "Delete" button next to any todo
2. The todo will be immediately removed from the list

## Technical Details

### Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling and Bootstrap integration
- **JavaScript (ES5)**: Core application logic
- **jQuery**: DOM manipulation and event handling
- **Bootstrap 5.3.0**: UI framework for responsive design

### Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

### File Structure

```
todo-list/
├── index.html          # Main HTML file
├── index.js            # JavaScript application logic
├── styles.css          # Custom CSS styles
├── package.json        # Node.js dependencies
├── package-lock.json   # Dependency lock file
└── node_modules/       # Installed dependencies
```

## Learning Objectives

This project demonstrates several important web development concepts:

- **DOM Manipulation**: Adding, removing, and modifying HTML elements
- **Event Handling**: Responding to user interactions
- **Form Processing**: Handling form submissions and input validation
- **CSS Integration**: Combining custom styles with a CSS framework
- **Responsive Design**: Creating layouts that work on multiple devices

## Limitations

- **No Persistence**: Todos are lost when the page is refreshed
- **Client-side Only**: No backend storage or user accounts
- **Single User**: Designed for individual use

## Future Enhancements

Potential improvements for this project:

- Add local storage for persistence
- Implement drag-and-drop reordering
- Add categories or tags for todos
- Include due dates and reminders
- Add search and filter functionality
- Implement user accounts and cloud storage

## Contributing

This is a learning project, but suggestions and improvements are welcome!

## License

This project is open source and available under the ISC License.
