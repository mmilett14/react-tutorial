import './App.css';

function Header() {
  return (
    <header>
      <h1>Mike's Kichen</h1>
    </header>
  )
}

function Footer() {
  <p>It's true!</p>
}

function Main() {
  return (
    <section>
      <p> We serve the most delicious food around.</p>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
