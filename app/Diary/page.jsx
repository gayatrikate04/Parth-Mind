"use client";
import { useState, useEffect, useRef } from "react";
import { db } from "../../lib/firebase";  // Import db from firebase.js
import { ref, set, get, remove } from "firebase/database";  // Functions to interact with the Realtime Database

const DiaryPage = () => {
  const [notes, setNotes] = useState([]);
  const headingRef = useRef(null);
  const entryRef = useRef(null);

  // Fetch notes from Firebase Realtime Database when the component mounts
  useEffect(() => {
    const notesRef = ref(db, "notes"); // Reference to the 'notes' node in the database
    get(notesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const notesData = snapshot.val();
        // Map notesData to include the Firebase key
        const notesList = Object.keys(notesData).map(key => ({
          id: key, // Use the Firebase key as the unique ID
          ...notesData[key],
        }));
        setNotes(notesList); // Convert object to array and update state
      } else {
        console.log("No data available");
      }
    });
  }, []);

  // Save a new note to Firebase Realtime Database
  const saveNote = () => {
    const heading = headingRef.current.value;
    const entry = entryRef.current.value;
    const date = new Date().toLocaleDateString();

    if (heading && entry) {
      const newNote = { heading, entry, date };
      const newNoteRef = ref(db, "notes/" + Date.now()); // Use timestamp as unique ID for each note
      set(newNoteRef, newNote).then(() => {
        // Update the state with the new note after saving
        const noteWithId = { id: Date.now().toString(), ...newNote };  // Make sure `id` is consistent with Firebase key
        setNotes((prevNotes) => [...prevNotes, noteWithId]); // Add to state with unique ID
      });
    }
  };

  // Delete a note from both frontend and database
  const deleteNote = (noteId) => {
    console.log("Attempting to delete note with ID:", noteId); // Log the note ID to debug
    
    // Build the reference to the note in Firebase using the Firebase key (noteId)
    const noteRef = ref(db, "notes/" + noteId);
    
    // Remove the note from Firebase Realtime Database
    remove(noteRef)
      .then(() => {
        // After deletion, filter out the note from the state
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
        console.log("Note deleted successfully.");
      })
      .catch((error) => {
        // Log any errors that occur during deletion
        console.error("Error deleting note from Firebase:", error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#A5D6A7] via-[#DCE775] to-[#F4FFC4]">
      {/* ParthDiary as Navbar */}
      <div className=" text-teal-500 p-4">
        <h2 className="text-5xl font-bold text-center">ParthDiary</h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-grow p-4">
        {/* Left Side: Display Notes */}
        <div className="flex-1 p-4 sm:w-1/3">
          <h3 className="text-2xl text-teal-900 font-bold mb-4">Your Notes</h3>
          <div className="space-y-4">
            {notes.length === 0 ? (
              <p className="text-center text-gray-600">No notes available yet. Start writing your thoughts!</p>
            ) : (
              notes.map((note) => (
                <div key={note.id} className="p-4 bg-white border border-green-300 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-teal-600">{note.heading}</h4>
                  <p className="mt-2 text-gray-800">{note.entry}</p>
                  <span className="block mt-2 text-sm text-gray-500">{note.date}</span>

                  {/* Delete button */}
                  <button
                    onClick={() => deleteNote(note.id)} // Pass note's Firebase key to delete function
                    className="mt-4 text-red-500 hover:text-red-700"
                  >
                    Delete Note
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side: Note Creation Section */}
        <div className="w-full sm:w-2/3 p-4  mr-4 mb-4 bg-gradient-to-r from-teal-200 to-lime-400 border-green-400 rounded-lg shadow-2xl">
          <p className="text-green-500 mt-2 font-semibold text-xl text-center mb-4">
            Your personal space to reflect and write ✨
          </p>

          <input
            type="date"
            className="w-[200px] p-2 mb-4 border border-green-500 rounded-lg focus:ring-2 focus:ring-green-400"
          />

          <textarea
            ref={headingRef}
            className="w-full p-4 border border-green-500 rounded-lg bg-[#F9FFF5] focus:ring-2 focus:ring-green-400 placeholder-gray-600 resize-none overflow-hidden transition-shadow duration-300 hover:shadow-md"
            rows="1"
            placeholder="Add Heading"
          />

          <textarea
            ref={entryRef}
            className="w-full p-4 mt-4 border border-green-500 rounded-lg bg-[#F9FFF5] focus:ring-2 focus:ring-green-400 placeholder-gray-600 resize-none overflow-hidden transition-shadow duration-300 hover:shadow-md"
            rows="8"
            placeholder="Write your thoughts here..."
          />

          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={saveNote}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md px-6 py-3 shadow-md"
            >
              Save Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;