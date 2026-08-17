import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { WalkthroughPage } from './pages/WalkthroughPage'
import { AchievementsPage } from './pages/AchievementsPage'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/walkthrough" element={<WalkthroughPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
