export const getNotes = () => {
  const data = localStorage.getItem("notes");
  return data ? JSON.parse(data) : [];
};

export const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
