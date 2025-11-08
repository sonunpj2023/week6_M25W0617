function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold text-blue-500">Hello, I am sonu jaiswal</h1>

      <p className="mt-3 text-lg">Welcome to my first React + Tailwind Webpage 🎉 
        </p>
        <p className="mt-3 text-lg">I am a student of Web System in KCGI College, I am studying Web Programming from Michal Macinka Sir. 
        </p>
      <ul className="mt-4 list-disc mx-auto w-fit text-left">
        <li>My favorite food</li> momos,pizza,ramen
        <li>My hobby</li>reading,traveling,cooking
        <li>My favorite color</li>red,blue
      </ul>

      <img
        className="mt-5 w-40 rounded-lg border"
        src="https://picsum.photos/200"
        alt="Random"
      />
    </div>
  );
}

export default App;
