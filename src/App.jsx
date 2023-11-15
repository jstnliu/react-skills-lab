import './App.css'
import SkillList from './SkillList'
// import new Skill Form component
import NewSkillForm from './NewSkillForm'
import { useState } from 'react'

const initialSkills = [
  {name: 'Mobility', level: 40},
  {name: 'Resilience', level: 60 },
  {name: 'Recovery', level: 100},
  {name: 'Discipline', level: 70},
  {name: 'Intellect', level: 40},
  {name: 'Strength', level: 50},
]  

function App() {

  const [skills, setSkills] = useState(initialSkills)

  return (
    <div className='App thistle-text'>
     <h1>Dev Skills</h1>
     <SkillList skills={skills} />
     <hr></hr>
     {/* Add NewSkillForm component */}
     <NewSkillForm skills={skills} />
    </div>
  )
}

export default App
