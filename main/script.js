// Sample movie database
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions.",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg"
    },
    {
        id: 3,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
    },
    {
        id: 4,
        title: "Parasite",
        genre: "Drama",
        year: 2019,
        rating: 8.6,
        description: "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkBhboONTc.jpg"
    },
    {
        id: 5,
        title: "Spider-Man: Into the Spider-Verse",
        genre: "Adventure",
        year: 2018,
        rating: 8.4,
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions.",
        poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6cKErPmTLEGaLkOKNQhSPBrMo2c.jpg"
    },
    {
        id: 6,
        title: "Get Out",
        genre: "Horror",
        year: 2017,
        rating: 7.7,
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness becomes a nightmare.",
        poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBph3.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6VSJQ1dtGnPLG6gSG95ilGaJQS9.jpg"
    },
    {
        id: 7,
        title: "La La Land",
        genre: "Romance",
        year: 2016,
        rating: 8.0,
        description: "A jazz musician and an aspiring actress meet and fall in love in Los Angeles while pursuing their dreams.",
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/fp6X5TH11qsIRq8XDjbqv4T3Ifp.jpg"
    },
    {
        id: 8,
        title: "Mad Max: Fury Road",
        genre: "Action",
        year: 2015,
        rating: 8.1,
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/tbhdm8UJAb4ViCTsulYFL3lxMCd.jpg"
    },
    {
        id: 9,
        title: "The Grand Budapest Hotel",
        genre: "Comedy",
        year: 2014,
        rating: 8.1,
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy.",
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/nP95hjOh0y2vLKggnYJh1TfpyBi.jpg"
    },
    {
        id: 10,
        title: "Joker",
        genre: "Drama",
        year: 2019,
        rating: 8.4,
        description: "A mentally troubled comedian is disregarded by society, embarking on a downward spiral that brings forth the birth of a criminal mastermind.",
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');
const moviesGrid = document.getElementById('moviesGrid');
const movieDetails = document.getElementById('movieDetails');

let filteredMovies = [...movies];
let selectedMovie = null;

// Initialize the app
function init() {
    displayMovies(movies);
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    genreFilter.addEventListener('change', handleFilter);
    yearFilter.addEventListener('change', handleFilter);
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredMovies = [...movies];
    } else {
        filteredMovies = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm)
        );
    }
    
    applyFilters();
    displayMovies(filteredMovies);
}

// Handle filter functionality
function handleFilter() {
    const selectedGenre = genreFilter.value;
    const selectedYear = yearFilter.value;
    
    filteredMovies = movies.filter(movie => {
        const genreMatch = selectedGenre === '' || movie.genre === selectedGenre;
        const yearMatch = selectedYear === '' || movie.year.toString() === selectedYear;
        return genreMatch && yearMatch;
    });
    
    displayMovies(filteredMovies);
}

// Apply current filters to the filtered movies
function applyFilters() {
    const selectedGenre = genreFilter.value;
    const selectedYear = yearFilter.value;
    
    filteredMovies = filteredMovies.filter(movie => {
        const genreMatch = selectedGenre === '' || movie.genre === selectedGenre;
        const yearMatch = selectedYear === '' || movie.year.toString() === selectedYear;
        return genreMatch && yearMatch;
    });
}

// Display movies in the grid
function displayMovies(moviesToShow) {
    moviesGrid.innerHTML = '';
    
    if (moviesToShow.length === 0) {
        moviesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: white; font-size: 18px; padding: 40px;">
                No movies found. Try adjusting your search or filters.
            </div>
        `;
        return;
    }
    
    moviesToShow.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// Create a movie card element
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.onclick = () => selectMovie(movie);
    
    movieCard.innerHTML = `
        <div class="movie-poster" style="background-image: url('${movie.poster}')">
            ${movie.poster ? '' : '🎬'}
        </div>
        <div class="movie-title">${movie.title}</div>
        <div class="movie-info">${movie.genre} • ${movie.year} • ⭐ ${movie.rating}</div>
    `;
    
    return movieCard;
}

// Select a movie and change background
function selectMovie(movie) {
    selectedMovie = movie;
    
    // Remove previous selection
    document.querySelectorAll('.movie-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked card
    event.currentTarget.classList.add('selected');
    
    // Change background
    changeBackground(movie.backdrop);
    
    // Show movie details
    showMovieDetails(movie);
}

// Change the background image
function changeBackground(backdropUrl) {
    if (backdropUrl) {
        document.body.style.backgroundImage = `url('${backdropUrl}')`;
    }
}

// Show detailed information about the selected movie
function showMovieDetails(movie) {
    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Description:</strong> ${movie.description}</p>
        <span class="movie-rating">⭐ ${movie.rating}/10</span>
    `;
    
    movieDetails.classList.add('show');
    
    // Scroll to details
    movieDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
