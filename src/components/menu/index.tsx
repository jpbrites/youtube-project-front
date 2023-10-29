import { useContext} from 'react'
import { ButtonIcon, ButtonLogin, Container, Divisoria, MenuItem } from './styles'
import Shorts from '../../assets/shorts.png'
import Home from '../../assets/casa.png'
import Biblioteca from '../../assets/biblioteca.png'
import Inscricoes from '../../assets/inscricoes.png'
import Historico from '../../assets/historico.png'
import Alta from '../../assets/alta.png'
import Sacola from '../../assets/sacola.png'
import Nota from '../../assets/nota.png'
import Claquete from '../../assets/claquete.png'
import Aovivo from '../../assets/aovivo.png'
import Game from '../../assets/game.png'
import Folha from '../../assets/folha.png'
import Trofeu from '../../assets/trofeu.png'
import Lampada from '../../assets/lampada.png'
import Mais from '../../assets/mais.png'
import Premium from '../../assets/premium.png'
import Kids from '../../assets/kids.png'
import Music from '../../assets/music.png'
import Bandeira from '../../assets/bandeira.png'
import Configuracoes from '../../assets/configuracoes.png'
import Interrogacao from '../../assets/interrogacao.png'
import Exclamacao from '../../assets/exclamacao.png'
import { MenuContext } from '../../isOpenMenu'
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

  const items = [
    { icon: Home, name: 'Início', link: '/' },
    { icon: Shorts, name: 'Shorts', link: '/shorts' },
    {icon: Inscricoes, name: 'Inscrições', link: '/inscricoes'}
  ];
  const items2 = [
    { icon: Biblioteca, name: 'Biblioteca', link: '/library' },
    { icon: Historico, name: 'Histórico', link: '/history' }
  ];
  const items3 = [
    { icon: Alta, name: 'Em alta' },
    { icon: Sacola, name: 'Shopping' },
    { icon: Nota, name: 'Música' },
    { icon: Claquete, name: 'Filmes' },
    { icon: Aovivo, name: 'Ao vivo' },
    { icon: Game, name: 'Jogos' },
    { icon: Folha, name: 'Notícias' },
    { icon: Trofeu, name: 'Esportes' },
    { icon: Lampada, name: 'Aprender' },
  ];

  const items4 = [
    { icon: Premium, name: 'Youtube Premium' },
    { icon: Music, name: 'Youtube Music' },
    {icon: Kids, name: 'Youtube Kids'}
  ];
  const items5 = [
    { icon: Configuracoes, name: 'Configurações' },
    { icon: Bandeira, name: 'Histórico de denúncias' },
    {icon: Interrogacao, name: 'Ajuda'},
    {icon: Exclamacao, name: 'Enviar Feedback'}
  ];
function Menu() {
  const {openMenu} = useContext(MenuContext)
  const {login} = useContext(UserContext)
  const navigate = useNavigate();
  return (
    <Container openMenu={openMenu}>
        {items.map((item,index) => (
            <MenuItem openMenu={openMenu}  className="hover-effect" onClick={() => navigate(item.link)}>
                <ButtonIcon alt='' src={item.icon}/>
                <span>{item.name}</span>
            </MenuItem>
        ))}
        <Divisoria openMenu={openMenu}/>
        {items2.map((item,index) => (
            <MenuItem  style={{display: openMenu ? 'flex' : 'none'}} openMenu={openMenu}  className="hover-effect" onClick={() => navigate(item.link)}>
                <ButtonIcon alt='' src={item.icon}/>
                <span>{item.name}</span>
            </MenuItem>
        ))}
        <Divisoria openMenu={openMenu}/>
        { 
          login ?
          <span>Inscricoes</span>
          :
          <>
            <span style={{display: openMenu ? 'flex' : 'none', width: '80%', fontSize: '16px'}}>Faça login para curtir vídeos, comentar e se inscrever</span>
            <ButtonLogin onClick={() => navigate('/login')} style={{display: openMenu ? 'flex' : 'none'}}>
              <BiUserCircle style={{paddingRight: '8px'}} size={23}/>
              Fazer login
            </ButtonLogin>
          </>
        }
        <Divisoria openMenu={openMenu}/>
        <span style={{display: openMenu ? 'flex' : 'none', marginRight: '8rem',marginBottom: '1rem', fontSize: '19px'}}>Explorar</span>
        {items3.map((item,index) => (
            <MenuItem  style={{display: openMenu ? 'flex' : 'none'}} openMenu={openMenu}  className="hover-effect">
                <ButtonIcon alt='' src={item.icon}/>
                <span>{item.name}</span>
            </MenuItem>
        ))}
        <Divisoria openMenu={openMenu}/>
        <MenuItem  style={{display: openMenu ? 'flex' : 'none'}} openMenu={openMenu}  className="hover-effect">
                <ButtonIcon alt='' src={Mais}/>
                <span>Procurar canais</span>
        </MenuItem>
        <Divisoria openMenu={openMenu}/>
        <span style={{display: openMenu ? 'flex' : 'none', marginRight: '3.7rem',marginBottom: '1rem', fontSize: '19px'}}>Mais do Youtube</span>
        {items4.map((item,index) => (
            <MenuItem  style={{display: openMenu ? 'flex' : 'none'}} openMenu={openMenu}  className="hover-effect">
                <ButtonIcon alt='' src={item.icon}/>
                <span>{item.name}</span>
            </MenuItem>
        ))}
        <Divisoria openMenu={openMenu}/>
        {items5.map((item,index) => (
            <MenuItem  style={{display: openMenu ? 'flex' : 'none'}} openMenu={openMenu}  className="hover-effect">
                <ButtonIcon alt='' src={item.icon}/>
                <span>{item.name}</span>
            </MenuItem>
        ))}
        <Divisoria openMenu={openMenu}/>
        <div style={{display: openMenu ? 'flex':'none',flexDirection: 'column', paddingRight: '0.5rem', fontSize: '14px'}}>
          <div><a>Sobre</a> <a style={{paddingLeft: '15px'}}>Imprensa</a></div>
          <a>Direitos autorais<br/></a>
          <a>Entre em contato<br/></a>
          <a>Criadores de conteúdo</a>
          <div><a>Publicidade</a> <a style={{paddingLeft: '15px'}}>Desenvolvedores</a></div>
        </div>

        <div style={{display: openMenu ? 'flex':'none',flexDirection: 'column',paddingTop: '1.5rem',paddingRight: '2.7rem', fontSize: '14px'}}>
          <div><a>Termos</a> <a style={{paddingLeft: '15px'}}>Privacidade</a></div>
          <a>Política e segurança<br/></a>
          <a>Como funciona o Youtube<br/></a>
          <a>Testar os novos recursos</a>
        </div>

        <span style={{display: openMenu ? 'flex':'none', fontSize: '12px',paddingTop: '1rem',paddingRight: '6.4rem'}}>© 2023 Google LLC</span>
    </Container>
  )
}

export default Menu