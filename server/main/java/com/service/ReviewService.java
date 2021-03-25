package com.service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import com.model.Review;
import com.model.ReviewStat;
import com.model.FoodStat;
import com.repository.ReviewRepository;
import com.repository.ReviewRepositoryPage;
import com.repository.ReviewRepositorystat;
import com.repository.ReviewRepositorystatR;
//defining the business logic
@Service
public class ReviewService 
{
	@Autowired
	ReviewRepository reviewRepository;
	@Autowired
	ReviewRepositoryPage reviewRepositoryPage;
	@Autowired
	ReviewRepositorystat reviewRepositorystat;
	@Autowired
	ReviewRepositorystatR reviewRepositorystatR;
	//getting all review records
	public List<Review> getAllReview() 
	{
		List<Review> reviews = new ArrayList<Review>();
		reviewRepository.findAll().forEach(review -> reviews.add(review));
		return reviews;
	}
	//getting a specific record
	public Review getReviewById(String id) 
	{
		return reviewRepository.findById(id).get();
	}
	public void insertOne(Review review)
	{
		reviewRepository.save(review);
	}
	public Review getReviewByPid(String id) {
		return reviewRepository.findByProductId(id);
	}
	public List<Review> getAllReviewByPage(int from,int to) {
        Pageable paging = PageRequest.of(from,to);

		return reviewRepositoryPage.findAll(paging).getContent() ;
	}
	public List<Review> getPageFilter(String score, int from, int to) {
		Pageable paging = PageRequest.of(from,to);

		return reviewRepositoryPage.findByScore(score, paging) ;		
	}
	//public List<Review> getFoodStat() {
		public List<FoodStat> getFoodStat() {
		// TODO Auto-generated method stub
		   return reviewRepositorystat.findFoodStat();
		   
	}
		public List<ReviewStat> getReviewStat() {
			// TODO Auto-generated method stub
			return reviewRepositorystatR.findReviewStat();
		}
	



}