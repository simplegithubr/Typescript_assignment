function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('artist 1', 'Album title 1');
console.log(album1);
var album2 = make_album('artist 2', 'Album title 2');
console.log(album2);
var album3 = make_album('artist 3', 'Album title 3', 12);
console.log(album3);
