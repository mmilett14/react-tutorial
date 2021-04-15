import './App.css';
import logo from "./logo.svg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p> We serve the most {props.adjective} food around.</p>
      <img 
        src={logo} 
        height={200} 
        alt="react logo"
      />
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
  <p>Copyright {props.year}</p>
  )
}

const dishes = [
  "Mac n Chz",
  "curry",
  "tofu"
]

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="Meaya" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
