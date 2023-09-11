import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from './Card';
import Button from 'react-bootstrap/Button';

const MiApi = ({ filteredData, setApiData, apiData, searchTerm, setFilteredData }) => {
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(false);
    const [previousPage, setPreviousPage] = useState(false);

    useEffect(() => {
        consultApi();
    }, []);

    useEffect(() => {
        if (searchTerm !== "") {
            const apiFilter = apiData.filter(item => item.Nombre.toLowerCase().includes(searchTerm.toLowerCase())).sort((a, b) => {
                if (a.Nombre < b.Nombre) return -1
                return 0
            });
            setFilteredData(apiFilter);
        } else {
            setFilteredData(apiData);
        }
    }, [searchTerm]);

    const consultApi = async () => {
        const url = "https://apisimpsons.fly.dev/api/personajes?limit=650";
        try {
            const response = await fetch(url);
            const result = await response.json();
            setApiData(result.docs);
        } catch (error) {
            console.log("Error fetching the API data:", error);
        }
    }

    const startIndex = (page - 1) * 20;
    const endIndex = startIndex + 20;
    const displayedData = searchTerm !== "" ? filteredData : apiData.slice(startIndex, endIndex);

    useEffect(() => {
        setPreviousPage(page > 1);
        setNextPage(endIndex < apiData.length);
    }, [page, searchTerm, apiData]);

    return (
        <div>
            <Container>
                <div className="row">
                    {displayedData.length > 0 ? (
                        displayedData.map((item, index) => (
                            <div key={index} className="col-md-3 container-gap">
                                <Card
                                    name={item.Nombre}
                                    image={item.Imagen}
                                    gender={item.Genero}
                                    occupation={item.Ocupacion}
                                    biography={item.Historia} />
                            </div>
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
                <div className="d-flex justify-content-between mt-3">
                <Button onClick={() => setPage(page - 1)} disabled={!previousPage || searchTerm !== ""}>Previous</Button>
                <Button onClick={() => setPage(page + 1)} disabled={!nextPage || searchTerm !== ""}>Next</Button>

                </div>
            </Container>
        </div>
    );
}

export default MiApi;