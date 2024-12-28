import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import QrReaderPage from './pages/qr-reader-page/QrReaderPage'

const Main = () =>
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/qr-reader/" Component={QrReaderPage} />
  </Routes>

export default Main
