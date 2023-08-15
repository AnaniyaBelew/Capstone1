import '../form/formInput.style.scss'
const FormInput =({label,...otherProps})=>
{
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/ >
            { label && (<label className={`${otherProps.value.length ? 'Shirink':''} form-input-label`}>{label}</label>)}
        </div>
    )

}
export default FormInput