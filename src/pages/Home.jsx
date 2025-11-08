import SearchBar from "../components/SearchBar";
import NoteForm from "../components/NoteForm";
import NotesGrid from "../components/NotesGrid";

function Home() {
  return (
    <div className="p-6">
      <SearchBar />
      <NoteForm />
      <NotesGrid />
    </div>
  );
}

export default Home;
