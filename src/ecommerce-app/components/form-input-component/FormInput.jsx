import React,{useRef} from 'react'
import "./form-input.scss"
const FormInput = ({handleChange,label,...otherProps}) => {
    const newRef = useRef(null)
    
    return (
        <div className='group'>
            <input ref={newRef}  value='' autoComplete="new-password" className='form-input' onChange={handleChange} {...otherProps}></input>
            {
                label ? 
                (<label className={`${otherProps.value.length ? 'shrink form-input-label':'form-input-label'} `}>
                    {label}
                </label>)
            : null
            }
        </div>
    )
}

export default FormInput
