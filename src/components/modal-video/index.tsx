
import { useEffect, useRef, useState, useContext } from "react";
import {ButtonClose, ButtonInput, Input, Modal, ModalContent } from "./styles"
import { UserContext } from "../../context/userContext"

interface ModalVideoProps {
    isOpen: boolean;
    onClose: () => void;
  }

function ModalVideo({ isOpen, onClose }: ModalVideoProps) {
    const {user, createVideo} = useContext(UserContext)
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [user_id, setUser_id] = useState(user.id)
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  if (!isOpen) return null;

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Evite o envio padrão do formulário
    createVideo(title, description, user_id)
    setTitle('')
    setdescription('')
    
    
  }
  

  return (
    <Modal>
      <ModalContent ref={modalRef}>
        <ButtonClose onClick={onClose}>
                X
        </ButtonClose>
        <h1>Enviar Novo Vídeo</h1>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
           <Input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título do vídeo"/>
           <Input required type="text" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Descrição do vídeo"/>
           <ButtonInput type="submit" >Enviar</ButtonInput>
        </form>
      </ModalContent>
    </Modal>
  
  )
}

export default ModalVideo