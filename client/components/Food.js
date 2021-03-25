import React, { useState, useEffect } from 'react';
import h2Api from '../api/h2'
import { Chart } from 'react-google-charts';



const Food = () => {

    const [food,setFood]= useState([]);

    useEffect(() => {
        getAllFoodStat();
      }, []);

      

      const renderArray=()=>{
          var arr=[];
          arr.push(['Task', 'Hours'])
        food.map(f=>
          arr.push([f.productId,parseInt(f.count)])
        );
        console.log(arr);
        return arr;
    }

      const getAllFoodStat = async () => {
        const response = await h2Api.get('reviews/foodstat', {
    
        });

        setFood(response.data);
        
    
      };

    return (

        <div>

<Chart
  width={'800px'}
  height={'500px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={renderArray()}


  options={{
    title: 'Top 10 reviewed foods',
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>

        </div>

    );
}
export default Food;