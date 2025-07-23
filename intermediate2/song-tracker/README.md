# Track My Songs - Advanced Music Collection Manager 🎵

A sophisticated, multi-page music collection management application that demonstrates advanced web development concepts, modern UI/UX design, and complex application architecture. This project showcases how to build a professional-grade application with multiple interconnected pages, advanced state management, and enterprise-level features.

## ✨ Features

### 🎨 **Advanced User Interface**

- **Multi-Page Application** - Separate pages for home, all songs, and favorites
- **Responsive Sidebar Navigation** - Collapsible navigation with smooth animations
- **Dark/Light Theme Toggle** - Persistent theme preference with localStorage
- **Modern Card-Based Design** - Beautiful song cards with hover effects
- **Professional Typography** - Clean, readable fonts with proper hierarchy
- **Loading States** - Smooth loading animations and user feedback

### 🔧 **Sophisticated Functionality**

- **Complete CRUD Operations** - Create, Read, Update, Delete songs with full validation
- **Favorites System** - Toggle and manage favorite songs across pages
- **Image Management** - Song artwork with fallback images
- **Search and Filter** - Find songs by various criteria
- **Persistent Data Storage** - JSON Server backend with full data persistence
- **Real-time Updates** - Instant UI updates without page refresh

### 🏗️ **Professional Architecture**

- **Modular JavaScript** - Separated concerns with common.js, songs.js, and favorites.js
- **Multi-Page Structure** - Organized HTML files for different views
- **Shared Components** - Common functionality across all pages
- **Event Delegation** - Efficient DOM event handling
- **Error Handling** - Comprehensive error management and user feedback

---

## 🎯 Learning Objectives

This project teaches you how to build a **complex, multi-page web application** with:

### **Advanced Frontend Development**

- ✅ Multi-page application architecture
- ✅ Responsive navigation and sidebar design
- ✅ Theme switching with localStorage persistence
- ✅ Advanced CSS animations and transitions
- ✅ Professional card-based layouts
- ✅ Loading states and user feedback

### **Complex State Management**

- ✅ Managing application state across multiple pages
- ✅ Favorites system with real-time updates
- ✅ Theme persistence and synchronization
- ✅ Data flow between different views
- ✅ Shared functionality and utilities

### **Professional Development Practices**

- ✅ Modular code organization
- ✅ Separation of concerns
- ✅ Reusable components and functions
- ✅ Comprehensive error handling
- ✅ Performance optimization
- ✅ Accessibility considerations

---

## 🛠️ Technology Stack

| Technology             | Purpose                                        | Version      |
| ---------------------- | ---------------------------------------------- | ------------ |
| **HTML5**              | Multi-page structure and semantic markup       | Latest       |
| **CSS3**               | Advanced styling with CSS variables and themes | Latest       |
| **JavaScript (ES6+)**  | Application logic and state management         | Modern       |
| **Bootstrap 5.3.7**    | UI framework and responsive components         | 5.3.7        |
| **Font Awesome 6.4.0** | Professional icon library                      | 6.4.0        |
| **jQuery 3.7.1**       | DOM manipulation and AJAX                      | 3.7.1        |
| **JSON Server**        | Mock REST API and database                     | 1.0.0-beta.3 |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Text editor** (VS Code recommended)

### Installation

1. **Clone or download the project**

   ```bash
   git clone <repository-url>
   cd intermediate2/song-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run server
   # or
   npm run dev
   ```

   This starts JSON Server on `http://localhost:3000`

4. **Open the application**
   - Open `index.html` in your web browser
   - Navigate between pages using the sidebar navigation

### Development Server Options

**Option 1: Python (if installed)**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js http-server**

```bash
npx http-server
```

**Option 3: Live Server (VS Code extension)**

- Install Live Server extension
- Right-click `index.html` → "Open with Live Server"

---

## 📁 Project Structure

```
song-tracker/
├── index.html              # Home page with feature overview
├── songs.html              # All songs management page
├── favorites.html          # Favorites collection page
├── js/
│   ├── common.js           # Shared functionality (98 lines)
│   ├── songs.js            # Songs page logic (371 lines)
│   └── favorites.js        # Favorites page logic (277 lines)
├── css/
│   └── styles.css          # Custom styling (615 lines)
├── db.json                 # Database with sample songs
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

### File Descriptions

- **`index.html`** - Landing page with feature overview and navigation
- **`songs.html`** - Main songs management interface
- **`favorites.html`** - Dedicated favorites collection view
- **`js/common.js`** - Shared functionality (theme, navigation, notifications)
- **`js/songs.js`** - Songs CRUD operations and display logic
- **`js/favorites.js`** - Favorites management and filtering
- **`css/styles.css`** - Complete styling with dark/light themes
- **`db.json`** - JSON Server database with sample music data

---

## 🎨 Design Features

### **Multi-Page Architecture**

- **Home Page** - Feature overview and navigation hub
- **Songs Page** - Complete song management interface
- **Favorites Page** - Dedicated favorites collection
- **Consistent Navigation** - Sidebar navigation across all pages

### **Theme System**

- **Light/Dark Mode** - Toggle between themes
- **Persistent Preferences** - Theme saved in localStorage
- **CSS Variables** - Dynamic theming with CSS custom properties
- **Smooth Transitions** - Elegant theme switching animations

### **Responsive Design**

- **Mobile-First Approach** - Optimized for all screen sizes
- **Collapsible Sidebar** - Hamburger menu for mobile devices
- **Flexible Grid Layout** - Adaptive song card grid
- **Touch-Friendly Interface** - Optimized for mobile interaction

---

## 🔧 Core Functionality

### **Song Management**

```javascript
// Add new song
async function addSong(event) {
  const formData = new FormData(event.target);
  const songData = {
    title: formData.get("title"),
    artist: formData.get("artist"),
    year: formData.get("year"),
    genre: formData.get("genre"),
    imgUrl: formData.get("imgUrl"),
    isFavorite: false,
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(songData),
  });
}

// Toggle favorite status
async function toggleFavorite(songId) {
  const song = await fetchSong(songId);
  const updatedSong = { ...song, isFavorite: !song.isFavorite };

  await fetch(`${API_URL}/${songId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedSong),
  });
}
```

### **Theme Management**

```javascript
// Toggle theme with persistence
function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateThemeButton(newTheme);
}
```

### **Navigation System**

```javascript
// Responsive sidebar navigation
function toggleSidebar() {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");

  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}
```

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

### **Desktop (1200px+)**

- Full sidebar navigation always visible
- Multi-column song grid layout
- Hover effects and animations
- Optimal spacing and typography

### **Tablet (768px - 1199px)**

- Collapsible sidebar navigation
- Adjusted grid layout
- Touch-optimized controls
- Maintained functionality

### **Mobile (320px - 767px)**

- Hamburger menu navigation
- Single-column layout
- Touch-friendly buttons
- Simplified interface elements

---

## 🎓 Advanced Concepts Demonstrated

### **Multi-Page Application**

- **Page Routing** - Navigation between different views
- **Shared State** - Common functionality across pages
- **Consistent UI** - Unified design language
- **Modular Architecture** - Separated concerns and reusable code

### **State Management**

- **Local Storage** - Persistent theme preferences
- **Favorites System** - Cross-page favorite management
- **Real-time Updates** - Instant UI synchronization
- **Data Flow** - Efficient state propagation

### **Professional Development**

- **Code Organization** - Modular file structure
- **Error Handling** - Comprehensive error management
- **Performance** - Optimized loading and rendering
- **Accessibility** - Inclusive design practices
- **User Experience** - Intuitive navigation and feedback

---

## 🔍 API Endpoints

The application uses JSON Server with the following endpoints:

| Method   | Endpoint     | Description                       |
| -------- | ------------ | --------------------------------- |
| `GET`    | `/songs`     | Retrieve all songs                |
| `GET`    | `/songs/:id` | Retrieve specific song            |
| `POST`   | `/songs`     | Create new song                   |
| `PATCH`  | `/songs/:id` | Update song (including favorites) |
| `DELETE` | `/songs/:id` | Delete song                       |

---

## 🚀 Deployment

### **Local Development**

```bash
npm run server  # Starts JSON Server on port 3000
```

### **Production Deployment**

1. Replace JSON Server with a real backend API
2. Update `API_URL` in `js/common.js`
3. Deploy to web server (Netlify, Vercel, etc.)
4. Configure CORS if needed
5. Set up proper database and hosting

---

## 🎯 Learning Path

This project is perfect for developers who want to:

1. **Build Complex Applications** - Learn multi-page application architecture
2. **Master State Management** - Understand cross-page data flow
3. **Create Professional UIs** - Develop sophisticated user interfaces
4. **Handle Advanced Scenarios** - Manage complex user interactions
5. **Prepare for Frameworks** - Understand concepts used in React, Vue, etc.

---

## 💡 Pro Tips

### **For Students:**

- Study the multi-page architecture and navigation
- Understand how state is shared between pages
- Practice modifying the theme system
- Experiment with adding new features
- Learn from the modular code organization

### **For Developers:**

- Use this as a template for similar applications
- Extend with additional features (playlists, search, etc.)
- Integrate with real music APIs (Spotify, Last.fm)
- Add user authentication and personal collections
- Implement real-time features with WebSockets

---

## 🔮 Future Enhancements

Potential improvements and extensions:

- **User Authentication** - Personal accounts and collections
- **Music API Integration** - Spotify, Apple Music, or Last.fm
- **Playlist Management** - Create and manage custom playlists
- **Advanced Search** - Filter by genre, year, artist, etc.
- **Music Player** - Embedded audio playback
- **Social Features** - Share playlists and recommendations
- **Offline Support** - Service worker for offline functionality
- **Data Import/Export** - Backup and restore collections
- **Advanced Analytics** - Listening statistics and insights
- **Mobile App** - Progressive Web App capabilities

---

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- **Report Issues** - Help improve the application
- **Suggest Features** - Propose new functionality
- **Improve Documentation** - Enhance the learning experience
- **Share Your Projects** - Show how you've built upon these concepts

---

## 📚 Additional Resources

- **Multi-Page Applications** - Learn about SPA vs MPA architecture
- **CSS Custom Properties** - Master CSS variables and theming
- **Local Storage API** - Understand client-side data persistence
- **JSON Server** - Learn about mock API development
- **Responsive Design** - Master mobile-first development
- **JavaScript Modules** - Understand code organization patterns

---

## 🏆 What You'll Achieve

After completing this project, you'll have:

- ✅ Built a complex, multi-page web application
- ✅ Mastered advanced state management techniques
- ✅ Created sophisticated user interfaces
- ✅ Implemented professional navigation systems
- ✅ Managed cross-page data flow effectively
- ✅ Developed responsive, theme-aware applications
- ✅ Understood modern application architecture

---

**Ready to build something extraordinary? Let's get started! 🚀**

This project represents the pinnacle of intermediate web development, combining multiple advanced concepts into a cohesive, professional application. Take your time to understand each component, experiment with the features, and use this as a foundation for building even more complex applications!

Remember: This level of complexity is what separates intermediate developers from beginners. You're building real-world applications that could be used by actual users. Embrace the challenge and enjoy the journey! 🎵
