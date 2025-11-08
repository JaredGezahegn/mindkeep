import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { AiOutlineDelete, AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";

function NoteCard({ note }) {
  const { setNotes } = useContext(NotesContext);

  const handleDelete = () => {
    setNotes((prev) => prev.filter((n) => n.id !== note.id));
  };

  const togglePin = () => {
    setNotes((prev) =>
      prev.map((n) => (n.id === note.id ? { ...n, pinned: !n.pinned } : n))
    );
  };

  return (
    <div
      className="p-3 rounded shadow relative text-black"
      style={{ background: note.color }}
    >
      {/* Top row: title, category, buttons */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold">{note.title}</h2>
          <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded">
            {note.category}
          </span>
        </div>

        {/* Pin + Delete buttons */}
        <div className="flex gap-2">
          <button
            onClick={togglePin}
            className="text-yellow-500 hover:text-yellow-700 text-xl pointer-events-auto"
          >
            {note.pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-xl pointer-events-auto"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>

      {/* Note content */}
      <p>{note.content}</p>
    </div>
  );
}

export default NoteCard;
