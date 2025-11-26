import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
// Advanced Pages
import CursorRules from './pages/CursorRules'
import AgentTeams from './pages/AgentTeams'
import ResearchDiscovery from './pages/ResearchDiscovery'
import ComplexSystems from './pages/ComplexSystems'
// New Pages
import QuickStart from './pages/QuickStart'
import CheatSheet from './pages/CheatSheet'
import AIModels from './pages/AIModels'
import RealWorldProjects from './pages/RealWorldProjects'
import ContextMastery from './pages/ContextMastery'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Quick Start & References */}
            <Route path="/quick-start" element={<QuickStart />} />
            <Route path="/cheatsheet" element={<CheatSheet />} />
            <Route path="/ai-models" element={<AIModels />} />
            <Route path="/projects" element={<RealWorldProjects />} />
            <Route path="/context-mastery" element={<ContextMastery />} />
            {/* Learning Path */}
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
            {/* Designer Workflows */}
            <Route path="/design-to-prototype" element={<DesignToPrototype />} />
            <Route path="/design-systems" element={<DesignSystems />} />
            <Route path="/design-handoff" element={<DesignHandoff />} />
            <Route path="/animations" element={<Animations />} />
            <Route path="/collaboration" element={<Collaboration />} />
            {/* Advanced Topics */}
            <Route path="/cursor-rules" element={<CursorRules />} />
            <Route path="/agent-teams" element={<AgentTeams />} />
            <Route path="/research-discovery" element={<ResearchDiscovery />} />
            <Route path="/complex-systems" element={<ComplexSystems />} />
          </Routes>
        </Layout>
    </>
  )
}

function App() {
  return (
    <ProgressProvider>
      <Router>
        <AppContent />
      </Router>
    </ProgressProvider>
  )
}

export default App

