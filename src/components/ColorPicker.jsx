function ColorPicker({ note, setNote }) {
  const colors = ["#ffffff", "#FFF9C4", "#BBDEFB", "#C8E6C9", "#F8BBD0"];

  return (
    <div className="flex gap-1">
      {colors.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setNote({ ...note, color: c })}
          style={{ background: c }}
          className={`w-6 h-6 rounded-full border ${
            note.color === c ? "ring-2 ring-blue-500" : ""
          }`}
        ></button>
      ))}
    </div>
  );
}

export default ColorPicker;
