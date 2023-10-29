import {Container, ButtonContainer, ButtonIcon, LogoContainer, SearchContainer, SearchInputContainer, SearchInput, ButtonSearchContainer, ButtonsAuxContainer, ButtonLogin } from './styles'
import MenuIcon from '../../assets/menu.png'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone.png'
import CamIcon from '../../assets/camera.png'
import SinoIcon from '../../assets/sino.png'
import { useContext, useState, useRef, useEffect, RefObject} from 'react'
import { MenuContext } from '../../isOpenMenu'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import DropdownMenu from '../dropdown-menu'

function Header() {
    const {openMenu, setOpenMenu} = useContext(MenuContext)
    const toggleMenu = () => {
        setOpenMenu(!openMenu); // Usando uma função para definir o estado
      };
      const navigate = useNavigate();
      const {login, logOut, user} = useContext(UserContext)

      const [dropMenu, setDropMenu] = useState(false); 

  return (
    <Container>
        <LogoContainer>
            <ButtonContainer onClick={toggleMenu}  className="hover-effect">
                <ButtonIcon alt='' src={MenuIcon}/>
            </ButtonContainer>
            <img onClick={() => navigate('/')} style={{cursor: 'pointer', width: '100px'}} alt='' src={Logo}/>
        </LogoContainer>

        <SearchContainer>
            <SearchInputContainer>
                <SearchInput placeholder='Pesquisar'/>
            </SearchInputContainer>
            <ButtonSearchContainer>
                <img style={{width: '18px'}} alt='' src={SearchIcon}/>
            </ButtonSearchContainer>
            <ButtonContainer style={{marginLeft: '10px'}} className="hover-effect">
                <ButtonIcon alt='' src={MicIcon}/>
            </ButtonContainer>
        </SearchContainer>
        
        <ButtonsAuxContainer>
            <ButtonContainer className="hover-effect">
                <ButtonIcon alt='' src={CamIcon}/>
            </ButtonContainer>
            <ButtonContainer className="hover-effect">
                <ButtonIcon alt='' src={SinoIcon}/>
            </ButtonContainer>
            {login ? 
                <>
                    {user ? (
                        <>
                        {user.nome ? (
                            <ButtonContainer onClick={() => setDropMenu(!dropMenu)} className="hover-effect">
                                {user.nome[0]}
                            </ButtonContainer>
                        ) : null}
                    </>
        ) : null}
                </>
            :
                <ButtonLogin onClick={() => navigate('/login')}>Fazer Login</ButtonLogin>
        }
        </ButtonsAuxContainer>
        {
        dropMenu && login ? 
            <DropdownMenu/>
           : null
    }
    </Container>
  )
}

export default Header