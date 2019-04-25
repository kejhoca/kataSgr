import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { timeout } from 'q';

const sgrService = axios.create({baseURL: process.env.REACT_APP_BASE_URL,timeout:10000});
const  CancelToken = axios.CancelToken;
const source = CancelToken.source();


function App() {
  const[proveedores,setProveedores] = useState([]);//manejo de estados.
  
  useEffect(()=> {
    sgrService
      .get('/proveedores/listar',{cancelToken: source.token})
      .then(({data}) => {
                        console.log(data);
                      }
      );
      
  });

  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
