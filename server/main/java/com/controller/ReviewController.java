package com.controller;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Review;
import com.model.ReviewStat;
import com.model.FoodStat;
import com.service.ReviewService;


@CrossOrigin("*")
@RestController
public class ReviewController 
{
	public static List<Review> readReviewsFromCSV(String fileName) {
		List<Review> reviews = new ArrayList<>();
		String pathToFile = Paths.get(fileName).toString(); // create an instance of BufferedReader // using try with resource, Java 7 feature to close resources 
		try
		

		
		(BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(pathToFile),"utf-8"))){		
		
		
		
			// read the first line from the text file
			String line = br.readLine(); // loop until all lines are read 
			while (line != null) { // use string.split to load a string array with the values from // each line of // the file, using a comma as the delimiter 
				String[] attributes = line.split(","); 
				if(attributes.length ==0) {
					continue;
				}
				Review review = createReview(attributes);
				// adding book into ArrayList
				reviews.add(review); // read next line before looping // if end of file reached, line would be null 
				line = br.readLine(); } }
		catch (IOException ioe) { ioe.printStackTrace(); } 
		
		return reviews; 
		}
		

	
	
public static Review createReview(String[] attributes) 
{
	Review review = null;
	try {
	review = new Review(attributes[0],attributes[1],attributes[3],attributes[4],attributes[5],attributes[6],attributes[8],attributes[9]);
	return review;
	}
	catch (ArrayIndexOutOfBoundsException e) {
		// TODO: handle exception
		for (String string : attributes) {
			System.out.println(string);
			return null;
		}
		
	}
	return review;
	
		
	

	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@Autowired
	ReviewService reviewService;

	
	@PostMapping("/insert")
	private void insert(@RequestBody Review review) 
	{
		reviewService.insertOne(review);
	}
	
	@GetMapping("/init")
	private List<Review> init() 
	{
		int i=0;

		List<Review> reviews = readReviewsFromCSV("C:\\Users\\shaig\\react projects\\whitesource\\r300.csv");
		for (Review review : reviews) {
			reviewService.insertOne(review);
			System.out.println("insert" +i++);
		}
		return reviews;
		
	}

	
	@GetMapping("/reviews")
	private List<Review> getAllReview() 
	{
		return reviewService.getAllReview();
	}
	@GetMapping("/reviews/foodstat")
	//private List<Review> getFoodStat()
	private List<FoodStat> getFoodStat()
	{
		return reviewService.getFoodStat();
	}
	@GetMapping("/reviews/reviewstat")
	//private List<Review> getFoodStat()
	private List<ReviewStat> getReviewStat()
	{
		return reviewService.getReviewStat();
	}
	
	@GetMapping("/reviews/page/{from}/{to}")
	private List<Review> getAllReviewByPage(@PathVariable("from") int from,@PathVariable("to") int to) 
	{
		return reviewService.getAllReviewByPage(from,to);
	}
	@GetMapping("/reviews/page/score/{score}/{from}/{to}")
	private List<Review> getAllReviewByPage(@PathVariable("score") String score,@PathVariable("from") int from,@PathVariable("to") int to) 
	{
		return reviewService.getPageFilter(score,from,to);
	}
	//creating a get mapping that retrieves the detail of a specific review
	@GetMapping("/review/{id}")
	private Review getReview(@PathVariable("id") String id) 
	{
		return reviewService.getReviewById(id);
	}
	@GetMapping("/review/product/{pid}")
	private Review getReviewByProductId(@PathVariable("pid") String id) 
	{
		return reviewService.getReviewByPid(id);
	}
}
