import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTareaProps, posicion }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {posicion+1}-{nombreTarea} <Button variant="danger" onClick={()=> borrarTareaProps(nombreTarea)}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
