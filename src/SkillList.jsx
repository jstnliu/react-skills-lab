import React from 'react'
// import SkillListItem component
import SkillListItem from './SkillListItem'
import NewSkillForm from './NewSkillForm'

export default function SkillList() {
  return (
    // Add SkillListItem component
<>
    <ul>
        <SkillListItem />
        <SkillListItem />
        <SkillListItem />
    </ul>

    <NewSkillForm />
</>
  )
}
