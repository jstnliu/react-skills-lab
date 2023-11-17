// import matching CSS file
import './SkillListItem.css'

export default function SkillListItem({ skill, index }) {
  return (
  <div className='SkillListItem'>
    <li>
      { skill.skill }
    </li>
    <li className='level'>
      Level { skill.level }
    </li>
  </div>
  )
}
