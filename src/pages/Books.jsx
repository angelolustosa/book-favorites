import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next'

const colunas = [
    {
        dataField: 'id',
        text: 'ID'
    }, {
        dataField: 'title',
        text: 'Nome do Livro'
    },
    {
        dataField: 'authors',
        text: 'Autores'
    }];

export default function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
    }, [])

    async function getBooks() {
        try {
            const response = await axios({
                method: "get",
                url: "https://books.ronier.me",
            
            })

            setBooks(response.data.content);
            
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h1>Books</h1>
            <BootstrapTable keyField="id" data={books} columns={colunas} />
        </div>
    )
}
