import RegistrationForm from './components/RegistrationForm/registrstionForm'
import './App.css'

function App(props:{title:string}) {
  const {title} = props
  return (
    <>
      <h1>{title}</h1>      
    
    <div>
    <h2>Registration Form</h2>
    <RegistrationForm />
  </div>
  </>
  )
}


export default App


