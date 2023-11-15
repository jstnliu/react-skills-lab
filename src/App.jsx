import './App.css'
import SkillList from './SkillList'
// import new Skill Form component
import NewSkillForm from './NewSkillForm'

function App() {

  return (
    <div className='App thistle-text'>
     <h1>Dev Skills</h1>
     <SkillList />
     <hr></hr>
     {/* Add NewSkillForm component */}
     <NewSkillForm />
    </div>
  )
}

export default App
