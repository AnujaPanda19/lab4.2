


import React, { useState } from 'react';
import BookList from './booklist.json';
function App() {
  const[search, setSearch] = useState("");
  return (
    <div className="container">
      
  <input type ="text" 
    placeholder="Search.." 
  
    onChange={(e)=>{
    setSearch(e.target.value);
    }}></input>
   
      <div className="table">
        {    BookList.length>0 ?(

              <div>
               

                <table className="table table-bordered">
                  <thead>
                    <th>Book Id</th>
                    <th>Book Title</th>
                    <th>Book Author</th>
                    <th>Book Year of publish</th>

                  </thead>
                  <tbody>
                         {
                           BookList.filter((val)=>{
                             if(search==""){
                               return val
                             }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                                         return val
                             }else if(val.id.toString().includes(search.toString())){
                               return val
                             }else if(val.author.toLowerCase().includes(search.toLowerCase())){
                              return val
                            }else if(val.year.toString().includes(search.toString())){
                              return val
                            }
                           }).map((val,key)=>{
                             return(
                              <tr>
                              <td>{val.id}</td>
                              <td>{val.title}</td>
                              <td>{val.author}</td>
                              <td>{val.year}</td>
                              </tr>
                             )
                           })
                         }
                   
                  </tbody>

                </table>
              </div>

           
      
        ): null
         }
      </div>
    </div>
  );
}

export default App;