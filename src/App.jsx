import './App.css'
import SkillList from './SkillList'
// import new Skill Form component
import NewSkillForm from './NewSkillForm'
import { useState } from 'react'

const initialSkills = [
  {skill: 'Mobility', level: 40},
  {skill: 'Resilience', level: 60 },
  {skill: 'Recovery', level: 100},
  {skill: 'Discipline', level: 70},
  {skill: 'Intellect', level: 40},
  {skill: 'Strength', level: 50},
]  

function App() {

  const [skills, setSkills] = useState(initialSkills)

  function addSkill(skill) {
    setSkills([...skills, skill])
  }

  return (
    <div className='App thistle-text'>
     <h1>Dev Skills</h1>
     <SkillList skills={skills} />
     <hr></hr>
     {/* Add NewSkillForm component */}
     <NewSkillForm addSkill={ addSkill }/>
    </div>
  )
}

export default App
