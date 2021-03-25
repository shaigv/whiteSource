package com.repository;

import java.util.List;

import org.hibernate.annotations.Type;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.model.FoodStat;
import com.model.ReviewStat;

public interface ReviewRepositorystatR extends CrudRepository<ReviewStat, String>
	{
		
	
		
//		@Query(value ="select *  from review group by PRODUCT_ID order by count(PRODUCT_ID) ",nativeQuery = true)
		
//		@Query(value ="SELECT new com.model.FoodStat(r.PRODUCT_ID,count(r.PRODUCT_ID))"  +
//					 " FROM REVIEW r "+
//					 "GROUP BY r.PRODUCT_ID "
//					+ "ORDER BY COUNT(r.PRODUCT_ID ) DESC "
//					+ "limit 10 ",nativeQuery = true)
	//	
		@Query(value ="SELECT PROFILE_NAME,count(PROFILE_NAME) as count FROM REVIEW group by PROFILE_NAME  order by count(PROFILE_NAME ) limit 10 ",nativeQuery = true)
		public  List<ReviewStat> findReviewStat();
		//public List<Review> findFoodStat();
		//SELECT count(productId) FROM REVIEW GROUP BY productId ORDER BY COUNT(productId) DESC
		//GROUP BY productId 
	}

	// 


