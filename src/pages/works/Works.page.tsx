import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import { dataWork } from "./data/dataWorks";
import CardWork from "./components/CardWork";
import ModalWork from "./components/ModalWork";
import { useModal } from "@/hooks/useModal";

const Works = () => {
  const { isOpen, handleOpenModal, handleCloseModal, id } = useModal();
  const dataModal = dataWork?.find((data) => data.id === id);

  return (
    <>
      <Container>
        <Title title="Trabajos Realizados" />
        <div className="md:w-178 md:h-375 md:m-auto md:flex md:justify-evenly md:gap-6 md:flex-wrap lg:w-263.5 lg:grid lg:grid-cols-3">
          {dataWork.map((data) => (
            <CardWork key={data.id} data={data} onClick={handleOpenModal} />
          ))}
        </div>
      </Container>
      {isOpen && dataModal && (
        <ModalWork onClick={handleCloseModal} dataModal={dataModal} />
      )}
    </>
  );
};
export default Works;
