import React from "react";
import {Nav,Row,Form,ToggleButtonGroup,ToggleButton} from "react-bootstrap";
import species from '../data/species.json';
export default function SideBar(props) {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
            <ToggleButtonGroup type="checkbox" >
                <ToggleButton id="tbg-btn-1" value={1} onClick={(s) => props.sortChars(1)}>
                    Option 1
                </ToggleButton>
                <ToggleButton id="tbg-btn-2" value={2} onClick={() => props.sortChars(2)}>
                    Option 2
                </ToggleButton>
            </ToggleButtonGroup>
            </Nav.Item>
            <Nav.Item>
                <Row>
                    <Form.Select  onChange={(s) => props.filtersAplication("specie",s.target.value)}>
                        <option value="">Nothing</option>
                        {species.map((data) => {
                            return (
                                <option key={data} 
                                    value={data}>{data}
                                </option>
                                
                            );
                        })
                        }
                    </Form.Select>
                </Row>
            </Nav.Item>
            <Nav.Item>
                <Row>
                    <Form.Select  onChange={(s) => props.filtersAplication("status",s.target.value)}>
                        <option value="">Nothing</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </Form.Select>
                </Row>
            </Nav.Item>
            <Nav.Item>
            <Row>
                    <Form.Select  onChange={(s) => props.filtersAplication("gender",s.target.value)}>
                        <option value="">Nothing</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </Form.Select>
                </Row>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
