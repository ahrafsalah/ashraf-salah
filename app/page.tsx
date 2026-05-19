import Projects from '@/components/projects/Projects'
import Landing from '../components/Landing'
import Skils from '../components/Skils'
import Services from '../components/Services'


const HomePage = () => {
  return (
    <div>
      <Landing/>
      <Skils/>
      <Services/>
      <Projects/>
   
    </div>
  )
}

export default HomePage