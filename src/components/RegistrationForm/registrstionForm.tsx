import {useState} from 'react'
import './registration.css'

 function RegistrationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
     
    const handleSubmit = (event:any) => {
        event.preventDefault();

        console.log("Username:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);

    
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
                <br />
            <label>
                
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
            </label>
            <br />
            <button onClick={handleSubmit} type="submit" >Register now</button>
        </form>
    )
}

export default RegistrationForm
