import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "./NoteCard";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";

function SortableNoteCard({ note }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: note.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      layout
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <NoteCard note={note} />
    </motion.div>
  );
}

function NotesGrid() {
  const { notes, setNotes, searchQuery } = useContext(NotesContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sensors = useSensors(useSensor(PointerSensor));

  const filteredNotes = notes.filter(
    (note) =>
      (selectedCategory === "All" || note.category === selectedCategory) &&
      (note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedNotes = filteredNotes.sort(
    (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = notes.findIndex((n) => n.id === active.id);
      const newIndex = notes.findIndex((n) => n.id === over.id);
      setNotes((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sortedNotes.map((n) => n.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="mb-4 flex gap-2 items-center text-black dark:text-white">
          <label>Filter by:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option value="All">All</option>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Ideas">Ideas</option>
            <option value="Personal">Personal</option>
            <option value="Tasks">Tasks</option>
          </select>
        </div>

        <motion.div
          layout
          className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
        >
          {sortedNotes.map((note) => (
            <SortableNoteCard key={note.id} note={note} />
          ))}
        </motion.div>
      </SortableContext>
    </DndContext>
  );
}

export default NotesGrid;
