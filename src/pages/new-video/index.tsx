import { useContext, useState } from "react"
import { UserContext } from "../../context/userContext"
import { AreaNewVideo, Container, NewVideoButton } from "./styles"
import ModalVideo from "../../components/modal-video";

function NewVideo() {
  const {user} = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <AreaNewVideo>
        <h1>{user.nome}</h1>
        <NewVideoButton onClick={openModal}>New Video</NewVideoButton>
        <ModalVideo isOpen={isModalOpen} onClose={closeModal}></ModalVideo>
      </AreaNewVideo>
    </Container>
  
  )
}

export default NewVideo