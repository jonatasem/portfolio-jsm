//pages
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ProjectsPage from './pages/projectsPage'
import SkillsPage from './pages/skillsPage'

//components
import FooterComponent from './components'

export default function App() {
  return (
    <main className='container-app'>
      <HomePage />
      <ProjectsPage />
      <AboutPage />
      <SkillsPage />
      <FooterComponent />
    </main>
  )
}