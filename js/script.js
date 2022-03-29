// Created by: Katie
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculateAreaPer() {
  // input grabber :)
  let length = parseInt(document.getElementById('given-length').value);
  let width = parseInt(document.getElementById('given-width').value);

  // calculation go brrrrrr
  let area = length * width;
  let perimeter = 2 * (length + width);

  // output dropper :)
  document.getElementById('area').innerHTML = 'CHESS has determined that the area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'CHESS has also determined that the perimeter is ' + perimeter + ' cm'
}