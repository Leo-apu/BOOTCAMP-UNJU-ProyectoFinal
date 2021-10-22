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
        gender:"",
        page: 1
        })
    const [chars,setChars] = useState([]);
    const   [api,setApi] = useState("https://rickandmortyapi.com/api/character/?")
    const [orden,setOrden] = useState(1);
    const [err,setE] = useState();
    useEffect(()=>{
            updateApi();
            console.log(err);
            
            console.log(api);
            console.log(filter);
            fetch(api)
                .then(response =>{
                    if (!response.ok)throw Error(response.status);
                        return response;
                    
                })
            .then((response) => response.json())
            .then((data) => {
                updateError(false);
                console.log(data);
                setInfo(data.info);
                if (data.results !== []) {
     

                    if (orden === 1) {
                        data.results.sort((a, b) => (a.name > b.name ? 1 : -1))
                    }else{
                        data.results.sort((a, b) => (b.name > a.name  ? 1 : -1))
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
                    updateError(true);
                }
            
            })
       
        
    },[orden,api,filter])

    useEffect(()=>{updateFilter("name",props.name)},[props])

    const updateError = (val) => setE(()=>{
        return val;
    })

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
        let page = false

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
        if (filter.page >= 0) {
            if (first) {
                first=false;
                aux=aux +"page="+ filter.page;
            }else{
                aux=aux +"&page="+filter.page;
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
                    <button type="button" disabled={filter.page ===1?true:false}  className="btn btn-success" onClick={() => updateFilter("page",filter.page -1)} >prev</button>
                    <button type="button"  className="btn btn-success" onClick={() => updateFilter("page",filter.page +1)} >next</button>
                </div>
                </Col>
                {err?(<Col><Row><img src={"/img/notFound.png"} alt="" /></Row></Col>):( <Col xs={10} id="page-content-wrapper">
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