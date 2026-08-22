import { HashRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'
import { WalkthroughPage } from './pages/WalkthroughPage'
import { AchievementsPage } from './pages/AchievementsPage'
import { BestiaryPage } from './pages/BestiaryPage'
import { AugmentsPage } from './pages/AugmentsPage'
import { TreasureHunterPage } from './pages/TreasureHunterPage'
import { ToastProvider } from './context/ToastContext'
import { ToastContainer } from './components/ToastContainer'
import { AchievementUnlockWatcher } from './components/AchievementUnlockWatcher'
import { BackToTopButton } from './components/BackToTopButton'

function App() {
  return (
    <ToastProvider>
      <HashRouter>
        <div className="min-h-screen">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/walkthrough" element={<WalkthroughPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/bestiary" element={<BestiaryPage />} />
            <Route path="/augments" element={<AugmentsPage />} />
            <Route path="/treasure-hunter" element={<TreasureHunterPage />} />
          </Routes>
        </div>
      </HashRouter>
      <AchievementUnlockWatcher />
      <ToastContainer />
      <BackToTopButton />
    </ToastProvider>
  )
}

export default App
