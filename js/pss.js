/*
 *Power-Slide-Show Version 1.0.0
 *https://github.com/v4iv/Power-Slide-Show
 *Copyright 2015 Vaibhav Sharma
 *
 *Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 *You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *Unless required by applicable law or agreed to in writing, software
 *distributed under the License is distributed on an "AS IS" BASIS,
 *WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *See the License for the specific language governing permissions and
 *limitations under the License.
 */
$(document).ready(function(){
var curPos = 0;
var slideWidth = 1124;
var slides = $('.slide');
var numberOfSlides = slides.length;
$('.slidesContainer').css('overflow', 'hidden');
slides
  .wrapAll('<div class="slideWrapper"></div>')
.css({
    'float' : 'left',
    'width' : slideWidth
  });
$('.slideWrapper').css('width', slideWidth * numberOfSlides);
$('.powerslideshow')
  .prepend('<span class="control" id="leftToggle">Previous</span>')
  .append('<span class="control" id="rightToggle">Next</span>');
showhideControls(curPos);
$('.control')
  .bind('click', function(){
curPos = ($(this).attr('id')=='rightToggle') ? curPos+1 : curPos-1;

  showhideControls(curPos);
  $('.slideWrapper').animate({
    'marginLeft' : slideWidth*(-curPos)
  });
});

function showhideControls(position){
if(position==0){ $('#leftToggle').hide() } else{ $('#leftToggle').show() }
  if(position==numberOfSlides-1){ $('#rightToggle').hide() } else{ $('#rightToggle').show() }
}
});
