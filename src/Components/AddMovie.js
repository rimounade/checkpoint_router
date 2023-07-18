import { useState } from "react";
import { Modal,Button,Form } from "react-bootstrap";
import Rating from '@mui/material/Rating';
const AddMovie =({moovie,setMoovie})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const [poster,setPoster] = useState('');
    const [rating,setRating] = useState('');

    const handleAdd = () => {
        setMoovie([...moovie,{title,desc,poster,rating,id:Math.random()}])

    }

    return(
        <div>
        <div className="add">
          <Button style={{marginRight : "3%"}} variant="outline-success" onClick={handleShow}>
          +
          </Button>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDesc(e.target.value)} type="text" placeholder="Enter Description" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control onChange={(e)=>setPoster(e.target.value)} type="text" placeholder="Enter Photo" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
       onChange={(e)=>setRating(e.target.value)}
      />
      </Form.Group>



    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleAdd();handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
export default AddMovie