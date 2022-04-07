/* 8 kyu - Pillars

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/




function pillars(num_pill, dist, width) {
  
    var distCM = dist*100
    
    if (num_pill === 1){
      return dist-dist
    } else {
     return   (  ((distCM+width)*num_pill) - distCM-width-width)
    }
  }
