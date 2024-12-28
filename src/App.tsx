import Main from './Main'

const Header = () =>
  <header className="flex h-16 items-center bg-purple-950">
    <a href="/" className="ml-4 text-3xl text-purple-100 ">
      Чек-чек
    </a>
  </header>

const App = () => <>
  <Header />
  <Main />
</>

export default App
