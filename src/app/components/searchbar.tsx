import React from "react";

// Define the prop types for SearchBar
interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Type the onSearch prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle search when user submits
  const handleSearch = () => {
    onSearch(searchTerm); // Call the onSearch prop with the search term
  };

  return (
    <div className="flex justify-center items-center mt-10">
  <input 
    className="border border-gray-600 rounded-md px-3 py-1 mr-4"
    type="text" 
    value={searchTerm} 
    onChange={handleChange} 
    placeholder="Search Our Arcticals"
  />
  <button 
    onClick={handleSearch} 
    className="border-gray-600 border rounded-md px-3 py-1"
  >
    Search
  </button>
</div>

  );
};

export default SearchBar;