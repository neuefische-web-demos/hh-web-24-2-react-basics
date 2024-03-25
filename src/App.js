export default function App() {
  return (<div>
      <Button />
      <Button />
      <Button />
    </div>);
}

function Button() {
  return (<button className="red" onClick={() => console.log("Hello World from React")}>Click here!</button>);
}