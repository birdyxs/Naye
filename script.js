const playlist = [
        { url: 'https://www.dropbox.com/scl/fi/0jcky6ujxhog4912524cd/bd-nashe.mp3?rlkey=ekh7mulc9141e5j8ljzsdsraq&st=9lzk4c2b&dl=1', name: 'Blue Dream - Jhené Aiko' },
        { url: 'https://www.dropbox.com/scl/fi/334vj6eeseougycenmi3m/daylightts-nashe.mp3?rlkey=w7qyvl802h19kvf3cu6rx8uvo&st=erqhpesx&dl=1', name: 'Daylight - Taylor Swift' },
        { url: 'https://www.dropbox.com/scl/fi/lau44olzxn5uqacd9b26f/dmd-nashe.mp3?rlkey=zb7zm840249e8hc9k1b7xjibt&st=k0lfl9jx&dl=1', name: 'Diet Mountain Dew - Lana Del Rey' },
        { url: 'https://www.dropbox.com/scl/fi/5242uw1nfip8tv3c75715/ah-nashe.mp3?rlkey=u592lcwx9zn4cnrp0d7xyh3lg&st=6qa2kh14&dl=1', name: 'Agora Hills - Doja Cat' }
    ];

    let currentTrackIndex = 0;
    const audio = document.getElementById('main-audio-player');
    const trackDisplay = document.getElementById('track-name');

    function loadSong(index) {
        const song = playlist[index];
        audio.src = song.url;
        trackDisplay.innerHTML = song.name;
        audio.play().catch(e => console.log("Interacción requerida para audio"));
    }

    function nextSong() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadSong(currentTrackIndex);
    }

    window.onload = () => loadSong(currentTrackIndex);
    audio.onended = nextSong;