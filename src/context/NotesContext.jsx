// src/context/NotesContext.jsx
import { createContext, useState, useEffect } from "react";
import { getNotes, saveNotes } from "../utils/storage";

// Create the context
export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(getNotes());
  const [searchQuery, setSearchQuery] = useState(""); // for search/filter

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes, searchQuery, setSearchQuery }}>
      {children}
    </NotesContext.Provider>
  );
};
