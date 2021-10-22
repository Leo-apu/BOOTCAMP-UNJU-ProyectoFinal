import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import cha from './character.module.css';

export default function Character(props) {
    
    return(
        <>
        <Card className={cha.fn} style={{ width: '18rem' }}>
        <Card.Img className={cha.fot} variant="top" src={props.data.imageUrl} />
        <Card.Body>
        <Link className={cha.ik} to={`/home/character/${props.data.id}`} ><Card.Title className={cha.titul}>{props.data.name}</Card.Title></Link>
            <Card.Text>
                <p>{props.data.species}</p>
                <p>{props.data.status}</p>
            </Card.Text>
        </Card.Body>
        </Card>
        </>
    );
}