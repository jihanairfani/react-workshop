import { useEffect, useState } from 'react'
import './App.css'
import { ContributorT } from './types';
import Contributors from './Contributors'
import React, { FC } from 'react';
import { Card, Input, Skeleton, BackTop } from 'antd';
import 'antd/dist/antd.css';
import { Header } from 'antd/lib/layout/layout';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import Contributor from './Contributor';

function App() {
  let [contributors, setContributors] = useState<ContributorT[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  const { Search } = Input;
  const [search, setSearch] = useState("");
  

  async function getData() {
    try{
      const res = await fetch(`https://randomuser.me/api/?results=10`)
      const data = await res.json();
      
      setContributors(data.results);
      setDataLoaded(true);
      //console.log(data.results);

    }catch(error) {
      console.error(error);
    }
  }
  
  // @ts-ignore
  function onSearch(e){
    setSearch(e.target.value);
    
  }

  const filtered = !search ? contributors
                  : contributors.filter((contributor) => 
                  contributor.name.first.toLowerCase().includes(search.toLocaleLowerCase()));

  useEffect(function(){
    console.log("getting data..");
    getData();
    
    
    return function(){
      setDataLoaded(false);
    }
  }, [])


  return (
    <div className="container">
      <header>All contributors</header>

      <Search 
        className='input-search'
        placeholder="Search name" 
        allowClear onChange={onSearch} 
        value={search}
        style={{ width: 200 }} 
      />

      {dataLoaded == true ?(
        <div className=''>
          <Contributors 
          contributors = {filtered}
        />
        </div>
      ) : <Skeleton active />}
      
      <BackTop />

    </div>
    
  )
}

export default App
