$("#button1").on("click",function(){
             $.ajax({
               url:"https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com",
               success: function(data){
                 console.log(data)
                 $("#logo").attr("src","logo.png");
                 $("#user-id").text(data.ID);
                 $("#name").text("My name is: "+ data.name);
                 $("#user-name").text(data.name);
                 $("#user-description").text(data.description);
                 $("#user-url").text(data.URL);
                 $("#user-subscriber").text(data.subscribers_count);
               },
               error: function(){
                 $("#logo").attr("src","no-user.png");
                 $("#user-name").text("User not found");
               }

             })
           })
         
