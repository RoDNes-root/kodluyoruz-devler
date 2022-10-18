<?php
$planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "", "", NULL];

function planet($array, $value) {
  $filterplanet = array_filter($array);
  $randomplanet = array_rand($filterplanet, $value);
  $result = array_map(function ($item) use ($filterplanet){
      return $filterplanet[$item];
    }, $randomplanet);
  return $result;
}

print_r(planet($planets, 3));