import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectsPage from './projects/ProjectsPage'
import ProjectsPage2 from './projects/ProjectsPage2'
import ProjectsPage3 from './projects/ProjectsPage3'
import ProjectsPage4 from './projects/ProjectsPage4'
import ProjectsPage5 from './projects/ProjectsPage5'
import ProjectsPage6 from './projects/ProjectsPage6'
import ProjectsPage7 from './projects/ProjectsPage7'
import ProjectsPage9 from './projects/ProjectsPage9'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Empleados'>
      <h1>Empleados de SoftwareDev.Inc:</h1>
      <ProjectsPage4/> Edad: 31 años - Educación: CUE AvH - Lugar de Residencia: Medellín, Colombia - Ocupación: Analista
      <ProjectsPage5/> Edad: 29 años - Educación: U de los Andes - Lugar de Residencia: Pereira, Colombia - Ocupación: Desarrollador
      <ProjectsPage6/> Edad: 22 años - Educación: U Haveriana - Lugar de Residencia: Bogotá, Colombia - Ocupación: Programador
      <ProjectsPage7/> Edad: 30 años - Educación: Universidad de Florida - Lugar de Residencia: Florida, USA - Ocupación: Desarrollador
      </div>
      <ProjectsPage9/>
      
      
      
    </>
  )
}

export default App
