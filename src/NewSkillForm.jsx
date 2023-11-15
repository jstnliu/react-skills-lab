import './NewSkillForm.css'

export default function NewSkillForm() {
  return (
    <form className='NewSkillForm'>
        <label>
            Skill <input></input>
        </label>
        <label>
            Level
            <select>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
                <option>60</option>
                <option>70</option>
                <option>80</option>
                <option>90</option>
                <option>100</option>
            </select>
        </label>
        <button>ADD SKILL</button>
    </form>
  )
}
