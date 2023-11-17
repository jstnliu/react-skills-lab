import './NewSkillForm.css'
import { useState } from 'react'


export default function NewSkillForm({ addSkill }) {
  
  const [skillData, setSkillData] = useState({
    skill: '',
    level: 30
  })

  function handleChange(event) {
    const newSkillData = { ...skillData, [event.target.name]: event.target.value }
    setSkillData(newSkillData)
  }

  function handleAddSkill(event) {
    event.preventDefault();
    addSkill(skillData);
    setSkillData({
      skill: '', 
      level: 30
    })
  }

  return (
    <>
    <form 
      className='NewSkillForm' 
      onSubmit={ handleAddSkill }
    >
        <label>
            Skill 
        </label>
            <input
              name='skill'
              onChange={ handleChange }
              value={ skillData.skill }
            />
        <label>
            Level
        </label>
            <select
              name='level'
              onChange={ handleChange }
              value={ skillData.level }
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
                <option value={60}>60</option>
                <option value={70}>70</option>
                <option value={80}>80</option>
                <option value={90}>90</option>
                <option value={100}>100</option>
            </select>
        <button type='submit'>ADD SKILL</button>
    </form>
    </>
  )
}
