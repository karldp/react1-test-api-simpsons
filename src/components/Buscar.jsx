import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

const Buscar = ({ setSearchTerm }) => {

    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearchTerm(search);
    }, [search])

    return (
        <>
            <Container>
                <div className="w-2 my-3 input-container">
                    <input className="w-50 ms-auto search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search by name" />
                </div>
            </Container>
        </>
    )
}

export default Buscar;