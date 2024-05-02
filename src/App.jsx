import React from 'react';
import Card from './Components/Cards/Card';


const App = () => {
  const data = [{
    title:"FREE",
    amount:0,
    users:"Single User"
},
{
title:"PLUS",
amount:9,
users:"5 Users"
},{
title:"PRO",
amount:49,
users:"Unlimited Users"
}]
  return (
  <div class="container-fluid d-flex justify-content-center m-auto app ">
  <div class="container  row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 h-100 align-items-center">
  <Card data={data}/>
  </div>
  </div>
  );
};

export default App;