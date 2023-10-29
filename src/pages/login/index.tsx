import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { AreaInputs, AreaTitle, ButtonInput, Container, Input, LoginArea } from "./styles"
import Google from '../../assets/logo_google.png'
import { useNavigate } from "react-router-dom"

function Login() {
    const {handleLogin} = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
      e.preventDefault(); // Evite o envio padrão do formulário
      handleLogin(email, password, navigate);
      
    }

  return (
    <Container>
      <LoginArea onSubmit={handleSubmit}>
        <img src={Google} style={{width: '100px', paddingTop: '1rem'}}></img>
        <AreaTitle>
          <span style={{fontSize: '28px'}}>Fazer login</span>
          <span style={{fontSize: '16px', paddingTop: '0.4rem'}}>Prosseguir no Youtube</span>
        </AreaTitle>
        <AreaInputs>
          <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <Input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
        </AreaInputs>
        <span onClick={() => navigate('/sign-up')} style={{cursor: 'pointer',marginLeft: '-16rem', marginTop: '-1rem', fontSize: '14px',fontWeight: '600', color: '#1973E6'}}>Criar conta</span>
        <ButtonInput type="submit">Login</ButtonInput>
      </LoginArea>
    </Container>
  
  )
}

export default Login