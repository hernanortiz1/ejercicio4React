import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareaProps }) => {
  return (
    <ListGroup>
      {
        //dibuja item tarea por cada elem del array
        tareaProps.map((item, indice) => (
          <ItemTarea key={indice}  nombreTarea={item}/>
        ))
      }
    </ListGroup>
  );
};

export default ListaTareas;
