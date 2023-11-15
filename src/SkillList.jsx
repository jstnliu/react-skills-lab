// import SkillListItem component
import SkillListItem from './SkillListItem'
import './SkillList.css'

const skills = [
    {name: 'Mobility', level: 40},
    {name: 'Resilience', level: 60 },
    {name: 'Recovery', level: 100},
    {name: 'Discipline', level: 70},
    {name: 'Intellect', level: 40},
    {name: 'Strength', level: 50},
  ]  

export default function SkillList() {
    
    const skillListItems = skills.map((skill, idx) => <SkillListItem skill={skill} index={idx} key={idx} />)
    
    return (
        <ul className='padding'>
            {/* Add SkillListItem component */}
            {skillListItems}
        </ul>    
    )
}
