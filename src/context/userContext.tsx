import {createContext, useEffect, useState} from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext({} as any);

export const UserStorage = ({children}: any) => {
    const [login, setlogin] = useState(false); //Se o usuário está logado ou não
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    

    //REQUISIÇÃO PARA PEGAR OS DADOS DE UM USUÁRIO
    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({data}) => {
            setUser(data.user)
            setlogin(true);
        }).catch((error) => {
            console.log("usuário não autenticado", error)
        })
    }

    const createUser = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(({data}) => {
            
        }).catch((error) => {
            console.log("Erro ao criar usuário", error)
        })
    }

    const createVideo = (title: string, description: string, user_id: string) => {
        console.log(title, description, user_id )
        api.post('/videos/create-video', {title, description, user_id}, { headers: { Authorization: token } }).then(({data}) => {
            
        }).catch((error) => {
            console.log("Erro ao criar vídeo", error)
        })
    }

    useEffect(() =>{
        getUser(token); //Caso o usuário recarregar a página e o token ainda for válido, vai pegar os dados e ele não precisa fazer o login novamente
    }, [token])

    //REQUISIÇÃO DO LOGIIN - ARMAZENA O TOKEN NO LOCAL STORAGE
    const handleLogin = (email: string, password: string, navigate: any) => {
        api.post('/user/sign-in', {email, password}).then(({data}) => {
            setlogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            navigate('/')
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error)
        })
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setlogin(false)
        setUser({})
    }

    return(
        <UserContext.Provider value={{
            login,
            user,
            handleLogin,
            logOut,
            createUser,
            createVideo
        }}>
            {children}
        </UserContext.Provider>
    )
}