import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from "./components/MiApi";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Buscar from './components/Buscar';
import SimpsonsImg from '/simpsons_brand.png'

function App() {

  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="landing">
      
      <Navbar>
        <Container>
          <img src={SimpsonsImg} alt="simpsons" className="logo-img"/>
        </Container>
      </Navbar>

      <Buscar setSearchTerm={setSearchTerm}/>
      
      <MiApi 
      searchTerm={searchTerm} 
      filteredData={filteredData} 
      apiData={apiData} 
      setApiData={setApiData} 
      setFilteredData={setFilteredData}/>
    
    </div>
  );
}

export default App;