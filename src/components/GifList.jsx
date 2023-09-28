import GifListItem from './GifListItem';

export default function GifList({ gifs }) {
  
  if (!gifs.length) { 
    return(
      <h2>No gifs found</h2>
    )};
  
  return(
    <div>
      <GifListItem gifs={gifs}/>
    </div>
  )
}