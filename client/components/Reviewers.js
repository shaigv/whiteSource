import React, { useState, useEffect } from 'react';
import h2Api from '../api/h2'
import { Chart } from 'react-google-charts';



const Reviewers = () => {

    const [food,setFood]= useState([]);

    useEffect(() => {
        getAllFoodStat();
      }, []);

      

      const renderArray=()=>{
          var arr=[];
          arr.push(['Task', 'Hours'])
        food.map(f=>
          arr.push([f.profileName,parseInt(f.count)])
        );
        console.log(arr);
        return arr;
    }

      const getAllFoodStat = async () => {
        const response = await h2Api.get('reviews/reviewstat', {
    
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
    title: 'Top 10 reviewers',
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>

        </div>

    );
}
export default Reviewers;