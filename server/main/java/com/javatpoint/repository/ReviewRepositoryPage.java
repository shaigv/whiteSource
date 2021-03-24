package com.javatpoint.repository;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.javatpoint.model.Review;

public interface ReviewRepositoryPage extends PagingAndSortingRepository<Review, String> {

	public List<Review> findByScore(String score,Pageable page);
	
	

}
