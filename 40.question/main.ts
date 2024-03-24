//q 40
function make_album (artist: string, title: string, tracks?:number){
    const album: {artist: string, title:string, tracks?:number} = {
        artist: artist,
        title: title
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;


}
const album1 =make_album('artist 1','Album title 1')
console.log(album1)
const album2 =make_album('artist 2','Album title 2')
console.log(album2)
const album3 =make_album('artist 3','Album title 3',12);
console.log(album3)
