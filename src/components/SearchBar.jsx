
export default function SearchBar({ searchImg, setSearchImg }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    // to be finished with function passing searchImg to app
  }

  function handleChange(evt) {
    setSearchImg(evt.target.value);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         placeholder="Search"
         name="searchImg"
         required
         onChange={handleChange}
         value={searchImg}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}