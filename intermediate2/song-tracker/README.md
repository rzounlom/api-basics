# Track My Songs - Music Collection Manager

A beginner-friendly 3-page songs tracker CRUD application built with HTML, CSS, Bootstrap, and vanilla JavaScript. Each page is a separate HTML file with its own JavaScript, making it easy to understand and modify.

## Features

- 🎵 **Song Management**: Add, edit, and delete songs with a beautiful card-based interface
- ❤️ **Favorites System**: Toggle favorite songs with heart icons
- 🌙 **Dark Mode**: Switch between light and dark themes
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🍔 **Collapsible Navigation**: Hamburger menu that transforms into a sidebar
- 🎨 **Modern UI**: Beautiful gradients, animations, and hover effects

## Pages

1. **Home Page** (`/`) - Landing page with app description and features
2. **Songs Page** (`/songs`) - View all songs with CRUD operations
3. **Favorites Page** (`/favorites`) - View only favorite songs

## Song Data Structure

Each song follows this JSON structure:

```json
{
  "id": "string",
  "title": "string",
  "year": "string",
  "imgUrl": "string",
  "artist": "string",
  "genre": "string",
  "isFavorite": boolean,
  "createdAt": "string"
}
```

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**

   ```bash
   git clone <repository-url>
   cd trackmysongs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the JSON server**

   ```bash
   npm run server
   ```

   or

   ```bash
   npm run dev
   ```

4. **Open the application**
   - Open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

## Usage

### Starting the Application

1. **Start the backend server:**

   ```bash
   npm run server
   ```

   This will start json-server on `http://localhost:3000`

2. **Open the frontend:**
   - Open `index.html` in your browser
   - The app will be available at the file location

### Using the Application

1. **Navigation:**

   - Click the hamburger menu (☰) to open the sidebar
   - Use the navigation links to switch between pages
   - Each page is a separate HTML file for easy understanding
   - Click outside the sidebar or the hamburger menu to close it

2. **Managing Songs:**

   - **View Songs**: Navigate to the "All Songs" page
   - **Add Song**: Click "Add New Song" button and fill out the form
   - **Edit Song**: Click the "Edit" button on any song card
   - **Delete Song**: Click the "Delete" button and confirm
   - **Toggle Favorite**: Click the heart icon on any song card

3. **Favorites:**

   - Navigate to the "Favorites" page to see only favorite songs
   - Toggle the heart icon to add/remove songs from favorites

4. **Dark Mode:**
   - Click the theme toggle button in the sidebar
   - Your preference will be saved for future visits

## File Structure

```
trackmysongs/
├── index.html          # Home page
├── songs.html          # Songs page with CRUD operations
├── favorites.html      # Favorites page
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   ├── common.js       # Common functions (navigation, theme)
│   ├── songs.js        # Songs page functionality
│   └── favorites.js    # Favorites page functionality
├── assets/
│   └── img/            # Image assets (if any)
├── db.json             # JSON database for json-server
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## API Endpoints

The application uses json-server which provides RESTful API endpoints:

- `GET /songs` - Get all songs
- `GET /songs/:id` - Get a specific song
- `POST /songs` - Create a new song
- `PATCH /songs/:id` - Update a song
- `DELETE /songs/:id` - Delete a song

## Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling with CSS custom properties and animations
- **Bootstrap 5** - UI framework for responsive design
- **Vanilla JavaScript** - DOM manipulation and AJAX requests
- **json-server** - Mock REST API for development
- **Font Awesome** - Icons

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### Common Issues

1. **Server not starting:**

   - Make sure port 3000 is not in use
   - Try running `npm install` again
   - Check if Node.js is properly installed

2. **CORS errors:**

   - Make sure json-server is running on `http://localhost:3000`
   - Check browser console for error messages

3. **Images not loading:**
   - The app uses placeholder images from Unsplash
   - Check your internet connection
   - Images will fallback to a default if loading fails

### Getting Help

If you encounter any issues:

1. Check the browser console for error messages
2. Ensure json-server is running (`npm run server`)
3. Verify all files are in the correct locations
4. Make sure all dependencies are installed

## Contributing

This is a beginner-friendly project. Feel free to:

- Add new features
- Improve the UI/UX
- Fix bugs
- Add more sample data
- Improve documentation

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎵**
