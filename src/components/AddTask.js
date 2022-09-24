import { useCustomizationSettings } from '@fluentui/react'
import React from 'react'
import { useState } from 'react'


const AddTask = ({onAdd}) => {
    const [text, setText] =useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a test')
            return
        }

        onAdd({text, day, reminder})
        
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Task</label>    
        <input type='text' placeholder='Add Task' value={text}
         onchange={(e)=>setText(e.target.value)}/>
        </div> 
        <div className='form-control'>
        <label>Day & Time</label>    
        <input type='text' placeholder='Add Day & Time'
         value={day}
         onchange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className='form-control' form-control-check>
        <label>Set Reminder</label>    
        <input type='checkbox' checked={reminder} value={reminder}
         onchange={(e)=>setReminder(e.target.currentTarget.checked)}/>
        </div>
        <input type='submit' value ='Save Task' 
        className='btn btn-block'/>
    </form> 
  )
}
 
export default AddTask
