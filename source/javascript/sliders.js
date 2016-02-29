window.onload = function(){
  // This is to initiate sliders to display first image.
  var imageNode  = document.getElementById("image_1");
  imageNode.style.display = "block";
  Slides.sliders = document.getElementById("images_slides").children;
}


/*********** Image interval display function ********************/
var image_length = 6 ;
var flag = 1;
var highlighted_image = "image_" + flag;

var initInterval = setInterval(function(){ changesSliders() }, 3000);


function changesSliders() {
     if (flag <= 6 ){
        highlighted_image = "image_" + flag;
        flag++;
     } else {
        highlighted_image = "image_1";
        flag = 1;
     }

    for (i=1 ; i <= 6 ; i++) {
       var image_id = "image_" + i;
       if(image_id == highlighted_image ){
          document.getElementById(image_id).style.display = "block";
       } else {
          document.getElementById(image_id).style.display = "none";
       }
    } // End of for loop functon
} // End of changesSlider() function

/*********** Image interval display function ********************/

/************* Sliders Control functions ***********************/

function stopSliders(){
  clearInterval(initInterval);
  console.log("insider of stopSliders");
  console.log(initInterval);
} // End of stopSliders() function

function startSliders(){
  clearInterval(initInterval);
  initInterval = setInterval(function(){ changesSliders() }, 3000);
  console.log("inside of startSliders");
  console.log(initInterval);
} // End of startSliders() function

var Slides = {
              nextImage: function(){
                            var display_attribute, next_image_id;
                            for(i=0; i < 6; i++){
                                display_attribute = this.sliders[i].style.display;
                           
                             if (display_attribute == "block"){
                                if (i == 5){
                                  this.sliders[0].style.display = "block";
                                } else {
                                  next_image_id = i + 1;
                                }
                              } // end of if conditional statement

                             if(i === next_image_id){
                                this.sliders[i].style.display = "block";
                              } else {
                                this.sliders[i].style.display = "none";
                              }
                            } // End of for loop block
                        }, // End of  nextImage function
                prevImage: function(){
                            var display_attribute, prev_image_id;
                            for(i=5; i >= 0; i--){
                                display_attribute = this.sliders[i].style.display;
                             if (display_attribute == "block"){
                                if (i == 0){
                                  this.sliders[5].style.display = "block";
                                } else {
                                  prev_image_id = i - 1;
                                }
                              } // end of if conditional statement

                             if(i === prev_image_id){
                                this.sliders[i].style.display = "block";
                              } else {
                                this.sliders[i].style.display = "none";
                              }
                            } // End of for loop block
                         } // End of prevImage() function
              } // End of Slides object

/************* End of Sliders Control functions ***********************/
