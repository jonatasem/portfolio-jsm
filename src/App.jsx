//pages
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ProjectsPage from './pages/projectsPage'
import SkillsPage from './pages/skillsPage'
import ContactPage from './pages/contactPage'

//components
import FooterComponent from './components/footer'
import LetsTogether from './components/letsTogether'
import LogoCompany from './components/logoCompany'

export default function App() {
  return (
    <main className='container-app'>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <LetsTogether />
      <SkillsPage />
      <ContactPage />
      <LogoCompany />
      <FooterComponent />
    </main>
  )
}