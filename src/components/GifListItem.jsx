
export default function GifListItem({ gifs }) {
  return (
    <div className="gallery">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif">
          <img src={gif.images.downsized_large.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
}
