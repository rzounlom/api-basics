// Favorites page JavaScript - Simplified functional approach

// Show notification message
function showNotification(message, type) {
  const alertClass = type === "success" ? "alert-success" : "alert-danger";
  const notificationHtml = `
        <div class="alert ${alertClass} alert-dismissible fade show position-fixed" 
             style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", notificationHtml);

  setTimeout(() => {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }, 3000);
}

// Load favorite songs when page loads
async function loadFavorites() {
  try {
    const response = await fetch(API_URL);
    const allSongs = await response.json();
    const favorites = allSongs.filter((song) => song.isFavorite);
    displayFavorites(favorites);
  } catch (error) {
    console.error("Error loading favorites:", error);
    document.getElementById("favoritesGrid").innerHTML =
      '<p class="text-danger">Error loading favorites. Please try again.</p>';
  }
}

// Display favorite songs in the grid
function displayFavorites(favorites) {
  const favoritesGrid = document.getElementById("favoritesGrid");

  if (favorites.length === 0) {
    favoritesGrid.innerHTML =
      '<p class="text-center">No favorite songs found. <a href="songs.html">Add some songs to your favorites!</a></p>';
    return;
  }

  const favoritesHtml = favorites
    .map((song) => createFavoriteCard(song))
    .join("");
  favoritesGrid.innerHTML = favoritesHtml;
}

// Create HTML for a single favorite song card
function createFavoriteCard(song) {
  return `
        <div class="song-card">
            <img src="${song.imgUrl}" alt="${song.title}" class="song-image" onerror="this.src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'">
            <button class="favorite-heart favorite" onclick="toggleFavorite('${song.id}')">
                <i class="fas fa-heart"></i>
            </button>
            <div class="song-content">
                <h3 class="song-title">${song.title}</h3>
                <div class="song-info">
                    <p><strong>Artist:</strong> ${song.artist}</p>
                    <p><strong>Year:</strong> ${song.year}</p>
                    <p><strong>Genre:</strong> ${song.genre}</p>
                </div>
                <div class="song-actions">
                    <button class="edit-btn" onclick="showEditSongModal('${song.id}')">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="delete-btn" onclick="showDeleteConfirmation('${song.id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Show modal for editing a song
async function showEditSongModal(songId) {
  try {
    const response = await fetch(`${API_URL}/${songId}`);
    const song = await response.json();

    const modalHtml = `
            <div class="modal fade" id="editSongModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Song</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <form id="editSongForm" onsubmit="updateSong(event, '${song.id}')">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="editTitle">Title</label>
                                    <input type="text" class="form-control" id="editTitle" name="title" value="${song.title}" required>
                                </div>
                                <div class="form-group">
                                    <label for="editArtist">Artist</label>
                                    <input type="text" class="form-control" id="editArtist" name="artist" value="${song.artist}" required>
                                </div>
                                <div class="form-group">
                                    <label for="editYear">Year</label>
                                    <input type="text" class="form-control" id="editYear" name="year" value="${song.year}" required>
                                </div>
                                <div class="form-group">
                                    <label for="editGenre">Genre</label>
                                    <input type="text" class="form-control" id="editGenre" name="genre" value="${song.genre}" required>
                                </div>
                                <div class="form-group">
                                    <label for="editImgUrl">Image URL</label>
                                    <input type="url" class="form-control" id="editImgUrl" name="imgUrl" value="${song.imgUrl}" required>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary">Update Song</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

    document.body.insertAdjacentHTML("beforeend", modalHtml);
    const modal = new bootstrap.Modal(document.getElementById("editSongModal"));
    modal.show();

    // Remove modal when hidden
    document
      .getElementById("editSongModal")
      .addEventListener("hidden.bs.modal", function () {
        this.remove();
      });
  } catch (error) {
    console.error("Error loading song for edit:", error);
    showNotification("Error loading song details.", "error");
  }
}

// Update a song
async function updateSong(event, songId) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const songData = {
    title: formData.get("title"),
    artist: formData.get("artist"),
    year: formData.get("year"),
    genre: formData.get("genre"),
    imgUrl: formData.get("imgUrl"),
  };

  try {
    const response = await fetch(`${API_URL}/${songId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    });

    if (response.ok) {
      bootstrap.Modal.getInstance(
        document.getElementById("editSongModal")
      ).hide();
      await loadFavorites();
      showNotification("Song updated successfully!", "success");
    } else {
      throw new Error("Failed to update song");
    }
  } catch (error) {
    console.error("Error updating song:", error);
    showNotification("Error updating song. Please try again.", "error");
  }
}

// Show delete confirmation modal
function showDeleteConfirmation(songId) {
  const modalHtml = `
        <div class="modal fade" id="deleteConfirmModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirm Delete</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this song? This action cannot be undone.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" onclick="deleteSong('${songId}')">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
  const modal = new bootstrap.Modal(
    document.getElementById("deleteConfirmModal")
  );
  modal.show();

  // Remove modal when hidden
  document
    .getElementById("deleteConfirmModal")
    .addEventListener("hidden.bs.modal", function () {
      this.remove();
    });
}

// Delete a song
async function deleteSong(songId) {
  try {
    const response = await fetch(`${API_URL}/${songId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      bootstrap.Modal.getInstance(
        document.getElementById("deleteConfirmModal")
      ).hide();
      await loadFavorites();
      showNotification("Song deleted successfully!", "success");
    } else {
      throw new Error("Failed to delete song");
    }
  } catch (error) {
    console.error("Error deleting song:", error);
    showNotification("Error deleting song. Please try again.", "error");
  }
}

// Toggle favorite status of a song
async function toggleFavorite(songId) {
  try {
    const response = await fetch(`${API_URL}/${songId}`);
    const song = await response.json();

    const updatedSong = { ...song, isFavorite: !song.isFavorite };

    const updateResponse = await fetch(`${API_URL}/${songId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: updatedSong.isFavorite }),
    });

    if (updateResponse.ok) {
      await loadFavorites();
      showNotification(
        updatedSong.isFavorite
          ? "Added to favorites!"
          : "Removed from favorites!",
        "success"
      );
    } else {
      throw new Error("Failed to update favorite status");
    }
  } catch (error) {
    console.error("Error toggling favorite:", error);
    showNotification("Error updating favorite status.", "error");
  }
}

// Load favorites when page loads
document.addEventListener("DOMContentLoaded", function () {
  loadFavorites();
});
