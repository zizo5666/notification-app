package com.app.springboot.controller;
import java.util.Arrays;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.app.springboot.model.NotificationModel;
import com.app.springboot.model.SupervisorModel;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class NotificationController {
	
	@Autowired
	RestTemplate restTemplate;
	
	private String supervisorUrl = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers";
	
	@PostMapping(value="/submit", consumes = "application/json", produces = "application/json")
	public ResponseEntity<NotificationModel> notificationModel(
			@Valid @RequestBody NotificationModel notificationReq) throws JsonProcessingException {
		
		ObjectMapper mapper = new ObjectMapper();
		System.out.println("POST data");
		System.out.println(mapper.writeValueAsString(notificationReq));
		
		return new ResponseEntity<NotificationModel>(notificationReq,HttpStatus.OK);		
	}
	
	@GetMapping(value="/supervisors",produces = "application/json")
	public ResponseEntity<SupervisorModel[]> getSupervisors() {
				
		HttpHeaders headers = new HttpHeaders();
	    headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	    HttpEntity <String> params = new HttpEntity<String>(headers);
	    
	    return restTemplate.getForEntity(supervisorUrl, SupervisorModel[].class, params);
	}

}	