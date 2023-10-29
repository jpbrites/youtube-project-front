import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { AreaInputs, AreaTitle, ButtonInput, Container, Input, LoginArea } from "./styles"
import Google from '../../assets/logo_google.png'
import { useNavigate } from "react-router-dom"


function Signup() {
    const {handleLogin, createUser} = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpassword, setConfpassword] = useState('')
    const [senhas, setSenhas] = useState(false)
    const navigate = useNavigate();

    function VerificarSenhas(){
        if (password !== confpassword){
            setSenhas(true)
        }
        else{
            setSenhas(false)
            createUser(name, email, password)
        }
    }

  return (
    <Container>
      <LoginArea>
        <img src={Google} style={{width: '100px', paddingTop: '1rem'}}></img>
        <AreaTitle>
          <span style={{fontSize: '28px'}}>Criar Conta</span>
          <span style={{fontSize: '16px', paddingTop: '0.4rem'}}>Prosseguir no Youtube</span>
        </AreaTitle>
        <AreaInputs>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Input style={{width: '140px', marginRight: '10px'}} className="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
            <Input style={{width: '140px', marginLeft: '10px'}}  className="senha" type="password" value={confpassword} onChange={(e) => setConfpassword(e.target.value)} placeholder="Confirmar senha"/>
          </div>
        </AreaInputs>
        {
            senhas ?
            <span style={{marginLeft: '-12rem', marginTop: '-1rem', marginBottom: '2rem', fontSize: '14px',fontWeight: '600', color: 'red'}}>Senhas não coincidem</span>
            :
            null
          }
        <span onClick={() => navigate('/login')} style={{cursor: 'pointer',marginLeft: '-16.4rem', marginTop: '-1rem', fontSize: '14px',fontWeight: '600', color: '#1973E6'}}>Fazer login</span>
        <ButtonInput onClick={VerificarSenhas}>Criar usuário</ButtonInput>
      </LoginArea>
    </Container>
  
  )
}

export default Signup