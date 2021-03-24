package com.repository;

import java.util.List;

import org.hibernate.annotations.Type;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.model.Statics;

public interface ReviewRepositorystat extends CrudRepository<Statics, String>
	{
		
	
		
//		@Query(value ="select *  from review group by PRODUCT_ID order by count(PRODUCT_ID) ",nativeQuery = true)
		
//		@Query(value ="SELECT new com.model.Statics(r.PRODUCT_ID,count(r.PRODUCT_ID))"  +
//					 " FROM REVIEW r "+
//					 "GROUP BY r.PRODUCT_ID "
//					+ "ORDER BY COUNT(r.PRODUCT_ID ) DESC "
//					+ "limit 10 ",nativeQuery = true)
	//	
		@Query(value ="SELECT PRODUCT_ID,count(PRODUCT_ID) as count FROM REVIEW group by PRODUCT_ID order by count(PRODUCT_ID) ",nativeQuery = true)
		public  List<Statics> findFoodStat();
		//public List<Review> findFoodStat();
		//SELECT count(productId) FROM REVIEW GROUP BY productId ORDER BY COUNT(productId) DESC
		//GROUP BY productId 
	}

	// 


