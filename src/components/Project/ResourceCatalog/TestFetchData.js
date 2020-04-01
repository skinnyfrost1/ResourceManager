import React, { useState, useEffect, setState } from 'react';
import axios from 'axios';

function TestFetchData() {
    const [data, setData] = useState({ hits: [] });
    const [tableHeads, setTableHeads] = useState({heads:[]})

    // const respnse = await fetch(url)
    // const data = await respnse.json()
    // const tableHeads = [];
    // for( var k in data[0]) {
    //     tableHeads.push(k)
    // }
    // this.setState({tableData: data, tableHeads:tableHeads})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                // 'https://jsonplaceholder.typicode.com/posts',
                'http://hn.algolia.com/api/v1/search?query=redux',
            );

            setData(result.data);

            for(var k in result.data[0]){
                tableHeads.push(k)
            }
            setTableHeads(result.tableHeads)
        };

        fetchData();
    }, []);

  

    return (
        <ul>
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default TestFetchData;
