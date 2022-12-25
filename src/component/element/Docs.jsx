import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Docs() {
    const [data,setData]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((d) => setData(d));
    },[]);
  return (
    <div>
        <div className="container text-white">
            <div className="row">
                <div className="col-md-12">
                <table className="table text-white">
  <thead>
    <tr>
      <th scope="col">txn Hash</th>
      <th scope="col">Method</th>
      <th scope="col">Block</th>
      <th scope="col">Age</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Value</th>
      <th scope="col">Txn Free</th>


    </tr>
  </thead>
  {data &&
  data.map((v)=>(
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{v.userId}</td>
      <td>{v.title}</td>
      <td>@mdo</td>
    </tr>
   

    
  </tbody>
   ))}
</table>

                </div>
            </div>
        </div>
      
    </div>
  )
}
