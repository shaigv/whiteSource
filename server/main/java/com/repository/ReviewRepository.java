package com.repository;

import java.util.List;

import org.hibernate.annotations.Type;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.model.Review;
public interface ReviewRepository extends CrudRepository<Review, String>
{
	
	public Review findByProductId(String Pid);
	
//	@Query(value ="select *  from review group by PRODUCT_ID order by count(PRODUCT_ID) ",nativeQuery = true)
	
//	@Query(value ="SELECT new com.model.FoodStat(r.PRODUCT_ID,count(r.PRODUCT_ID))"  +
//				 " FROM REVIEW r "+
//				 "GROUP BY r.PRODUCT_ID "
//				+ "ORDER BY COUNT(r.PRODUCT_ID ) DESC "
//				+ "limit 10 ",nativeQuery = true)
//	
	@Type(type="uuid-char")
	@Query(value ="SELECT r FROM REVIEW  r group by r.PRODUCT_ID order by count(r.PRODUCT_ID) ",nativeQuery = true)
	public  List<Review> findFoodStat();
	//public List<Review> findFoodStat();
	//SELECT count(productId) FROM REVIEW GROUP BY productId ORDER BY COUNT(productId) DESC
	//GROUP BY productId 
}

// 
