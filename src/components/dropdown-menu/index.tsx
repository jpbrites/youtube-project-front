import { useContext, useState, useEffect } from "react"
import {Container, Divisoria, ItensArea, MenuItem, UserArea, UserNames } from "./styles"
import { UserContext } from '../../context/userContext'
import { AiOutlineGoogle } from 'react-icons/ai';
import { BiSolidUserAccount, BiHelpCircle } from 'react-icons/bi';
import { IoMdExit } from 'react-icons/io';
import { IoLanguageOutline } from 'react-icons/io5';
import { SiGradleplaypublisher } from 'react-icons/si';
import { RiMoneyDollarCircleLine, RiFeedbackLine } from 'react-icons/ri';
import { TbUserHexagon, TbWorld } from 'react-icons/tb';
import { BsMoon, BsFillKeyboardFill, BsGear } from 'react-icons/bs';
import { FaUserShield } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";



function DropdownMenu() {
    const {user, logOut} = useContext(UserContext)
    const navigate = useNavigate();
  
    const items = [
      { icon: AiOutlineGoogle, name: 'Conta do Google', link: '/conta' },
      { icon: BiSolidUserAccount, name: 'Alternar conta', link: '/alternar' },
      {icon: IoMdExit, name: 'Sair', link: '/sair'},
      {icon: SiGradleplaypublisher, name: 'Youtube Studio', link: '/studio' },
      {icon: RiMoneyDollarCircleLine, name: 'Compras e assinaturas', link: '/compras'},
      {icon: TbUserHexagon, name: 'Seus dados no Youtube', link: '/dados'},
      {icon: BsMoon, name: 'Aparência: Tema do dispositivo', link: '/tema'},
      {icon: IoLanguageOutline, name: 'Idioma: Português', link: '/idioma'},
      {icon: FaUserShield, name: 'Modo restrito: Desativado', link: '/restrito'},
      {icon: TbWorld, name: 'Local: Brasil', link: '/local'},
      {icon: BsFillKeyboardFill, name: 'Atalhos do teclado', link: '/atalhos'},
      {icon: BsGear, name: 'Configurações', link: '/configuracoes'},
      {icon: BiHelpCircle, name: 'Ajuda', link: '/ajuda'},
      {icon: RiFeedbackLine, name: 'Enviar feedback', link: '/feedback'},
      
    ];

    const handleItemClick = (item: any) => {
      if (item.link === '/sair') {
          logOut(); // Chame a função logOut ao clicar em "Sair"
      }
      // Lógica para lidar com outros itens do menu
  };
  
  return (
    <Container>
        <UserArea>
            <div style={{borderRadius: '50%', background: 'rgb(160, 160, 160, 0.4)', width: '40px', height: '40px', marginTop: '6px'}}></div>
            <UserNames>
                <span style={{fontSize: '18px'}}>{user.nome}</span>
                <span style={{fontSize: '16px'}}>@{user.nome}</span>
                <span onClick={() => navigate('/new-video')} style={{fontSize: '14px',cursor: 'pointer', color: '#1973E6', paddingTop: '10px', fontWeight: '400'}}>Acessar seu canal</span>
            </UserNames>
        </UserArea>
        <Divisoria/>
        <ItensArea>
            {items.map((item, index) => (
              <>
              <MenuItem className="hover-effect" onClick={() => handleItemClick(item)}>
                <item.icon size={25} style={{paddingRight: '10px'}}/>
                <span>{item.name}</span>
              </MenuItem>
              {(index === 2 || index === 4 || index === 11) && <Divisoria />}
              </>
            ))}
        </ItensArea>
        
    </Container>
  )
}

export default DropdownMenu