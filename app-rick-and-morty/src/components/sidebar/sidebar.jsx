import React, { useState } from "react";
import {Nav,Row,Form,ToggleButtonGroup,ToggleButton} from "react-bootstrap";
import species from '../data/species.json';
import SidMod from './sidebar.module.css';

export default function SideBar(props) {
    const [values,setValues] = useState("");

    const handleClick = () =>{
        console.log("holaaa");
    }

    return (
        <div>
            <Nav className="col-md-12 d-none d-md-block  sidebar mt-4"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                <div className="sidebar-sticky border-danger"></div>
            <h2 className={SidMod.titfilt}>FILTERS</h2>
            <Nav.Item className={SidMod.ord}>
            <ToggleButtonGroup  type="checkbox" >
                <ToggleButton className={SidMod.ordbtn} id="tbg-btn-1" value={1} onClick={(s) => props.sortChars(1)}>
                    UP
                </ToggleButton>
                <ToggleButton className={SidMod.ordbtn} id="tbg-btn-2" value={2} onClick={() => props.sortChars(2)}>
                    DOWN
                </ToggleButton>
            </ToggleButtonGroup>
            </Nav.Item>
            <Nav.Item >
                <Row>
                    <Form.Select className={SidMod.sel} onChange={(s) => props.updateFilter("specie",s.target.value,1)}>
                        <option value="">Select Specie</option>
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
                    <Form.Select className={SidMod.sel}  onChange={(s) => props.updateFilter("status",s.target.value,1)}>
                        <option value="">Select Status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </Form.Select>
                </Row>
            </Nav.Item>
            <Nav.Item>
                <Row>
                    <Form.Select className={SidMod.sel}  onChange={(s) => props.updateFilter("gender",s.target.value,1)}>
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </Form.Select>
                </Row>
            </Nav.Item>
            <Nav.Item>
                <Row>
                <button type="button" onClick={props.clearFilters}  className={SidMod.limfil}>Clean Filters</button>
                </Row>
            </Nav.Item>
            
            </Nav>          
        </div>
        );
  };
