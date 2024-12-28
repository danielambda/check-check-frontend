import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import ItemsSelectionPage from './pages/item-selection-page/ItemsSelectionPage'
import QrReaderPage from './pages/qr-reader-page/QrReaderPage'

const Main = () => <Routes>
  <Route path="/" Component={HomePage} />
  <Route path="/qr-reader/" Component={QrReaderPage} />
  <Route path="/items-selection/:qr" Component={ItemsSelectionPage} />
</Routes>

export default Main
