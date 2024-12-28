import Main from './Main'

const Header = () =>
  <header className="flex h-16 items-center bg-purple-950">
    <h1 className="ml-4 text-3xl text-purple-100 ">
      Чек-чек
    </h1>
  </header>

const App = () => {
  return <>
    <Header />

    <Main />
  </>
}

export default App
