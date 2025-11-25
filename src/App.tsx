import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './contexts/ProgressContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import BeginnerGuide from './pages/BeginnerGuide'
import Installation from './pages/Installation'
import CursorAgent from './pages/CursorAgent'
import IDEBasics from './pages/IDEBasics'
import TerminalBasics from './pages/TerminalBasics'
import GitBasics from './pages/GitBasics'
import Troubleshooting from './pages/Troubleshooting'
import Tutorials from './pages/Tutorials'
import Training from './pages/Training'
import Games from './pages/Games'
import BestPractices from './pages/BestPractices'
import Configuration from './pages/Configuration'
import SpecsSharing from './pages/SpecsSharing'
import Progress from './pages/Progress'
import DesignToPrototype from './pages/DesignToPrototype'
import DesignSystems from './pages/DesignSystems'
import DesignHandoff from './pages/DesignHandoff'
import Animations from './pages/Animations'
import Collaboration from './pages/Collaboration'

function App() {
  return (
    <ProgressProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beginner-guide" element={<BeginnerGuide />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/cursor-agent" element={<CursorAgent />} />
            <Route path="/ide-basics" element={<IDEBasics />} />
            <Route path="/terminal-basics" element={<TerminalBasics />} />
            <Route path="/git-basics" element={<GitBasics />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/training" element={<Training />} />
            <Route path="/games" element={<Games />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/specs-sharing" element={<SpecsSharing />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/design-to-prototype" element={<DesignToPrototype />} />
            <Route path="/design-systems" element={<DesignSystems />} />
            <Route path="/design-handoff" element={<DesignHandoff />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/collaboration" element={<Collaboration />} />
          </Routes>
        </Layout>
      </Router>
    </ProgressProvider>
  )
}

export default App

