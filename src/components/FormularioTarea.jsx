import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");

  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);
  useEffect(() => {
    //todas la lineas se ejecutan automaticamente en montaje y actualizacion
    console.log("desde use effect");

    localStorage.setItem("listaTareas", JSON.stringify(tareas));
    //para que no se ejecute en actualizacion }, [])
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // tomar tarea de state y guardar en state tareas (array)
    //... operado expred, copia los elementos de array tareas y al final le agrego la ultima tarea que agrego el usr
    setTareas([...tareas, tarea]);

    //limpiar formulario
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const indice = tareas.findIndex((item) => item === nombreTarea);
    //actualizar estado tareas
    if (indice !== -1) {
      //copio el array original
      const nuevasTareas = [...tareas];
      //elimino con splice y actualizo
      nuevasTareas.splice(indice, 1);
      setTareas(nuevasTareas);
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button type="submit" variant="primary" className="ms-3">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareaProps={tareas} borrarTareaProps={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;
