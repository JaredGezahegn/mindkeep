import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(NotesContext);

  return (
    <div className="flex justify-center mb-4">
      <input
      type="text"
      placeholder="Search notes..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
       className="
          p-2 
          pl-4
          border 
          rounded-full 
          shadow-sm 
          w-full 
          max-w-md
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400
          bg-white 
          dark:bg-gray-700 
          text-gray-900 
          dark:text-gray-100
          placeholder-gray-400
          dark:placeholder-gray-300
          transition-all
        "
    /></div>
  );
}

export default SearchBar;
