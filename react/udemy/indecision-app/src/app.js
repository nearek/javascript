console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in hands",
  options: ["One", "Two"]
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  console.log("addOne");
};

const minusOne = () => {
  console.log("minusOne");
};

const reset = () => {
  console.log("reset");
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);
console.log(templateTwo);
//babel src/app.js --out-file=public/script/app.js --presets=env,react --watch
//live-server public
const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
