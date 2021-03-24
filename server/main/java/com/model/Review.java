package com.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Review {
	
@Id
@Column
private String Id;
@Column
private String productId;  
@Column
private String ProfileName;
@Column
private String helpfulnessNumerator;//Likes
@Column
private String helpfulnessDenominator;//dislikes
@Column
private String score;
@Column
private String summary;
@Column
private String text;


}



