import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import ColorPicker from "./ColorPicker";


function NoteForm() {
  const { setNotes } = useContext(NotesContext);
  const [note, setNote] = useState({ title: "", content: "", color: "#ffffff", category: "General", });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title && !note.content) return;
    setNotes((prev) => [...prev, { ...note, id: Date.now() }]);
    setNote({ title: "", content: "", color: "#ffffff" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 items-center mb-4"
    >
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        className="p-2 border rounded w-full sm:w-1/4
         bg-white text-black border-gray-300"
      />
      <input
        type="text"
        placeholder="Take a note..."
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        className="p-2 border rounded flex-1 
        bg-white text-black border-gray-300"
      />
      <ColorPicker note={note} setNote={setNote} />

      <select
        value={note.category}
        onChange={(e) => setNote({ ...note, category: e.target.value })}
        className="p-2 border rounded *:bg-white text-black border-gray-300"
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Ideas">Ideas</option>
        <option value="Personal">Personal</option>
        <option value="Tasks">Tasks</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default NoteForm;
