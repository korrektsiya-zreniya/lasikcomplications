$().ready(function(){ 
       // validate the comment form when it is submitted
       $("#contactus-form").validate({
	 rules: {
		first_name: {
			required: true,
			minWords: 1,
                        maxWords: 2
		},
		last_name: {
			required: true,
			minWords: 1,
                        maxWords: 2
		},
		email: {
			required: true,
			email: true
		},
                telephone: {
                   phoneUS: true
                },
                comments: {
                  required: true,
                  minWords: 5
                }  
	},
	messages: {
		first_name: {
			required: "Please enter a first name",
			minWords: "Enter a last your first name",
                        maxWords: "Enter no more than two first names"
		},
                last_name: {
			required: "Please enter a last name",
			minWords: "Enter a last your last name",
                        maxWords: "Enter no more than two parts of your last names"
		},
		email: {
			required: "Please provide an email",
			email: "Please enter a valid email",
		},
		telephone: {
			phoneUS: "Please provide a valid US phone number",
		},
		comments: {
			required: "Comments are required",
                        minWords: "Comments must include at least 5 words"
		}
	}
       });
   }); 
