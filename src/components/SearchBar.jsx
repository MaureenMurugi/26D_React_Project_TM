import { Input } from "./ui/input"

function SearchBar( {value, onChange}) {
  return (
    <div>
     <input
      placeholder="Search for a product..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="max-w-md" />
    
    </div>
  )
}

export default SearchBar
