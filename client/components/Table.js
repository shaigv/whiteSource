import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import Search from './Search'
import View from './View'
import h2Api from '../api/h2'
import _ from 'lodash';
import '../App.css';
import Page from './paging'


const Table = () => {
  const [view, setView] = useState(false);
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [allData, setAllData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page,setPage]=useState(0);


  const getAllReviewsFilter = async (score) => {
    const response = await h2Api.get(`/reviews/page/score/${score}/${page}/10`, {

    });
    setReviews(response.data);
    setLoading(false);

  };


  const handelFilter = (score) => {
    if (score === -1) return;
    if (score === 0) getAllReviews();//setReviews(allData);
    else
      //setReviews(allData.filter(review => parseInt(review.score) === score));
      getAllReviewsFilter(score);
  }


  useEffect(() => {
    getAllReviews();
  }, [page]);

  const getAllReviews = async (page_) => {
    const response = await h2Api.get(`/reviews/page/${page}/3`, {
      ///reviews/page/{from}/{to}

    });
    setReviews(response.data);
    setAllData(response.data);
    setLoading(false);

  };
  const getReviewByProductId = async (value) => {
    const response = await h2Api.get(`/review/product/${value}`, {
      
    });
    var arr = [];
    arr.push(response.data);
    setReviews(arr);
  };

  const onPageChange=(page)=>{
      //getAllReviews(page);
      setPage(page-1);
  }


  const onValueChange = (value) => {
    if(value !== "")
      getReviewByProductId(value);
    else
      setReviews(allData);
  };


const handelClose = () => {
  setView(false)
}
const handelOpen = () => {
  setView(true)
}
const onClickHandler = (val) => {
  setReview(val)
  setView(true)

}

const renderModal = () => {
  if (view) {
    return <View open={view} onClose={handelClose} onOpen={handelOpen} data={review} />
  }
  else {
    return <div></div>
  }

}



const renderRows = () => {
  if (reviews) {
    return (
      reviews.map(val => {
        return (
          <tr key={val.id} >
            <td data-label="Id">{val.id}</td>
            <td data-label="Product">{val.productId}</td>
            <td data-label="Reviwer">{val.profileName}</td>
            <td data-label="Score">{val.score}</td>
            <td data-label="Summary">{val.summary}</td>
            <td data-label="view">
              <i onClick={() => onClickHandler(val)} className="eye icon"></i>
            </td>
          </tr>
        );
      })
    );
  }
  else {
    return null;
  }
}

if (!loading) {
  setTimeout(() => {

  }, 1500);
}

return (
  <div>
    <div className="container">
      <Dropdown className="child width2" onFilterSelected={handelFilter}></Dropdown>
      <Search className="child" onValueChange={onValueChange} />
    </div>
    <br></br>
    <div>
      <table className="ui celled table" style={{tableLayout:"fixed"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product id</th>
            <th>Reviwer</th>
            <th>Score</th>
            <th>Summary</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>

    <div>
      {renderModal()}
    </div>
    <div style={{position:'absolute',top:'90%',left:'38%'}}>
    <Page  onPageChange={onPageChange} ></Page>
    </div>
  </div>
);
}


export default Table;
