import {useEffect,useState} from 'react';
import Character from '../character/character.jsx';
import CompNavBar from '../navbar/navbar.jsx';
import {Container,Row,Card, Col, ButtonGroup} from 'react-bootstrap';
import SideBar from '../sidebar/sidebar.jsx';
import hmm from './home.module.css';

export default function Home(props) {
    
    const url = "https://rickandmortyapi.com/api/character/?"
    const [info,setInfo] = useState(null);
    const [filter,setFilter] =useState({
        name:"",
        specie:"",
        status:"",
        gender:""
        })
    const [chars,setChars] = useState([]);
    const   [api,setApi] = useState("https://rickandmortyapi.com/api/character/?")
    const [orden,setOrden] = useState(1);
    const [e,setE] = useState(false);
    useEffect(()=>{
        
            console.log(e);
            updateApi();
            console.log(api);
            console.log(filter);
            fetch(api)
                .then(response =>{
                    if (!response.ok)throw Error(response.status);
                        return response;
                    
                })
            .then((response) => response.json())
            .then((data) => {
                setE(false);
                console.log(data);
                setInfo(data.info);
                if (data.results !== []) {
                    if (orden === 1) {
                        data.results.sort((a, b) => (a.id - b.id));
                    }else{
                        data.results.sort((a, b) => (b.id - a.id));
                    }
                    setChars(
                        data.results
                        .map((character) => {
                            return {
                                id: character.id,
                                imageUrl: character.image,
                                name: character.name,
                                species: character.species,
                                origin: character.origin,
                                status: character.status,
                                episodes: character.episode,
                            };
                        }))  
                }
                
            })
            .catch(error => {
                console.log(typeof error.message);
                console.log(error.message);
                if (error.message === "404") {
                    setE(true);
                }
            
            })
       
        
    },[api,filter,orden])

    useEffect(()=>{updateFilter("name",props.name)},[props])
    function nextPage() {
        setApi(info.next);
        console.log(api);
    }
    function prevPage() {
        setApi(info.prev);
        console.log(api);
    }
    function species(){
        setApi(url+"name="+"&"+"specie="+"human")
        console.log(api);
    }

    const sortChars = (v)=> setOrden(()=>{
        return v;
        
    })

    const updateFilter = (t,value) => setFilter(()=>({
        ...filter,
            [t]: value
    }))
    const updateApi = ()=> setApi(()=>{
        let aux = url;
        let first = true;
        if (filter.name !== "") {
            if (first) {
                first = false;
                aux=aux +"name="+ filter.name;  
            }else{
                aux=aux +"&name="+ filter.name; 
            }
        }
        if (filter.specie !== "") {
            if (first) {
                aux=aux +"species="+ filter.specie;
                first = false;
            }else{
                aux=aux +"&species="+filter.specie;
            }
        }
        if (filter.status !== "") {
            if (first) {
                first=false;
                aux=aux +"status="+ filter.status;
            }else{
                aux=aux +"&status="+filter.status;
            }
        }
        if (filter.gender !== "") {
            if (first) {
                first=false;
                aux=aux +"gender="+ filter.gender;
            }else{
                aux=aux +"&gender="+filter.gender;
            }
        }
      return aux;
    })

    return(
        <>
        <Container className={hmm.fondohome} fluid>
        
            <Row>
                <Col xs={2} id="sidebar-wrapper">
                <SideBar updateFilter={updateFilter} sortChars={sortChars}/>
                <div className="btn-group justify-content-center mt-3 fs-1" >
                    <button type="button" className="btn btn-success" onClick={() => prevPage()} >prev</button>
                    <button type="button" className="btn btn-success" onClick={() => species()} >------</button>
                    <button type="button" className="btn btn-success" onClick={() => nextPage()} >next</button>
                </div>
                </Col>
                {e?(<Col><Row><h1>F</h1></Row></Col>):( <Col xs={10} id="page-content-wrapper">
                    <Row className="mt-4 text-center justify-content-around" >
                        {chars.map((data) => {
                                return (
                                    <Character data={data}/>
                                );
                            })
                        }
                    </Row>
                    
                </Col>)}
            </Row>
        </Container>        
        </>
    );
}