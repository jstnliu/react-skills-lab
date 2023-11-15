// import SkillListItem component
import SkillListItem from './SkillListItem'
import './SkillList.css'

export default function SkillList({ skills }) {
    
    const skillListItems = skills.map((skill, idx) => <SkillListItem skill={skill} index={idx} key={idx} />)
    
    return (
        <ul className='padding'>
            {/* Add SkillListItem component */}
            {skillListItems}
        </ul>    
    )
}
