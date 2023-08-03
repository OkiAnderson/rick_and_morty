import { useState } from "react";
import validation from "../Validation/validation";

const Form = () => {
    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email:'',
        password:''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })

        const validateErrors = validation({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validateErrors)
    }

    return(
        <form>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <hr />
            <button>Submit</button>
        </form>
    )
}

export default Form;