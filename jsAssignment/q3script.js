const students = [ { name: "John", score: 85 }, 
    { name: "Bill", score: 92 }, { name: "Natalie", score: 78 }, 
    { name: "David", score: 90 } ];
  
  students.sort(function(a, b){
    return a.score - b.score;
  
  });

  console.log(students);

  