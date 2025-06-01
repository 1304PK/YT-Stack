function extractVideoId(url) {
    // Handles various YouTube URL formats
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// document.getElementById('videoForm').addEventListener('submit', function (e) {
// e.preventDefault();
// const links = document.getElementById('links').value.split('\n').map(l => l.trim()).filter(l => l);
// const videosDiv = document.getElementById('videos');
// videosDiv.innerHTML = '';
// links.forEach(link => {
//     const vid = extractVideoId(link);
//     if (vid) {
//     const iframe = document.createElement('iframe');
//     iframe.className = 'video-frame';
//     iframe.width = "400";
//     iframe.height = "225";
//     iframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1&mute=0`;
//     iframe.frameBorder = "0";
//     iframe.allow = "autoplay; encrypted-media";
//     iframe.allowFullscreen = true;
//     videosDiv.appendChild(iframe);
//     } else {
//     const err = document.createElement('div');
//     err.textContent = `Invalid YouTube link: ${link}`;
//     videosDiv.appendChild(err);
//     }
// });
// });

const videoUrl = document.getElementById('url-input')
const addBtn = document.getElementById('add-button')
const videoGrid = document.getElementById('video-grid')


addBtn.addEventListener('click', () => {
    const vid = extractVideoId(videoUrl.value)
    const iframe = document.createElement('iframe')
    iframe.className = 'video-frame'
    iframe.width = "400"
    iframe.height = "225"
    iframe.src = `https://www.youtube.com/embed/${vid}?autoplay=0&mute=0`
    iframe.frameBorder = 0
    iframe.allowFullscreen = true
    videoGrid.append(iframe)

})