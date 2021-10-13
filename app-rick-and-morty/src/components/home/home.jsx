import {useEffect,useState} from 'react';
import Character from '../character/character.jsx';
import CompNavBar from '../navbar/navbar.jsx';
import {Container,Row,Card, Col} from 'react-bootstrap';
import SideBar from '../sidebar/sidebar.jsx';


export default function Home() {
    
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
    useEffect(()=>{
            updateApi();
            console.log(api);
            console.log(filter);
            fetch(api)
            .catch(() => {
                console.log("error");
            })
            .then((response) => response.json())
            .then((data) => {
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
                
            });
       
        
    },[api,filter,orden])
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

    const filtersAplication = (t,value)=>setApi(()=> {
        let aux = url;
        let first = true;
        setFilter(()=>({
            ...filter,
                [t]: value
        }))
        console.log(filter);
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
        <Container fluid>
        <CompNavBar updateFilter={updateFilter}/>
            <Row>
                <Col xs={2} id="sidebar-wrapper">
                <SideBar filtersAplication={filtersAplication} sortChars={sortChars}/>
                </Col>
                <Col xs={10} id="page-content-wrapper">
                    <Row className="mt-4 text-center" >
                        {chars.map((data) => {
                                return (
                                    <Character data={data}/>
                                );
                            })
                        }
                    </Row>
                </Col>

            </Row>
            <button onClick={() => nextPage()} >next</button>
            <button onClick={() => prevPage()} >prev</button>
            <button onClick={() => species()} >species</button>
        </Container>
         
       
                    
                   
                        
        </>
        
    );
}