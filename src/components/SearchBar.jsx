
export default function SearchBar({ searchImgs, setSearchImgs, getGifs }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    getGifs(searchImgs);
  }

  function handleChange(evt) {
    setSearchImgs(evt.target.value);
  }

  return(
    <div>
      <form onSubmit={handleSubmit} className="form-horizontal">
        <input
         type="text"
         placeholder="Search"
         name="searchImgs"
         required
         onChange={handleChange}
         value={searchImgs}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}