import "./inputField.css";

const InputField = () =>{
    return(
        <form className="input">
            <input type="input" className="input__box" placeholder="Enter a task"/>
            <button type="submit" className="input_submit">Go</button>
        </form>
    );
}

export default InputField;