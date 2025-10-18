const baseUrl = window.location.origin.includes('localhost')
? 'http://localhost:8888/api'
: 'https://shpvideo.netlify.app/api'; //change this to your server URL




export { baseUrl }
