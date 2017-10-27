console.log('sanity check')
const key = 'YWU4NWVlMmUtZDZmMS00NDE3LWIzYzEtZGFjNGFlZmEwYWQw'
const request = axios.get(`https://api.napster.com/v2.2/tracks/top?apikey=${key}`)
request.then(result => {
  const tracks = result.data.tracks
  tracks.forEach(track => {
    const list = document.querySelector('.list-group')
    list.innerHTML += `<li class="list-group-item">${track.name} by ${track.artistName}  <a href='${track.previewURL}' class="btn btn-success btn-lg">
      Preview
    </a> </li>`
  })
})






//console.log(request)
