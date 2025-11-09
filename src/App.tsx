import myPhoto from "./assets/me.jpg";

// App component: Main component of the application
function App() {
  return (
    <div className="text-center p-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-500">
        Hello, I am Sonu Jaiswal
      </h1>

      {/* Short welcome message */}
      <p className="mt-3 text-lg">
        Welcome to my first React + Tailwind Webpage 🎉
      </p>

      {/* Additional introduction */}
      <p className="mt-3 text-lg">
        I am a student of Web System in KCGI College. I am studying Web Programming under Michal Macinka Sir.
      </p>

      {/* List of personal info */}
      <ul className="mt-4 list-disc mx-auto w-fit text-left">
        <li>
          My favorite food: momos, pizza, ramen
        </li>
        <li>
          My hobby: reading, traveling, cooking
        </li>
        <li>
          My favorite color: red, blue
        </li>
      </ul>

      {/* Display personal image */}
      <img
        src={myPhoto}
        alt="My personal photo"
        className="w-40 h-40 rounded-lg object-cover mt-4"
      />
    </div>
  );
}

export default App;
