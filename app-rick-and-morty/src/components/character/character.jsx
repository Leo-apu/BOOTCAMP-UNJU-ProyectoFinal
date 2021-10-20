import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


export default function Character(props) {
    
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.imageUrl} />
        <Card.Body>
        <Link to={`/home/character/${props.data.id}`} ><Card.Title>{props.data.name}</Card.Title></Link>
            <Card.Text>{props.data.species}</Card.Text>
        </Card.Body>
        </Card>
        </>
    );
}