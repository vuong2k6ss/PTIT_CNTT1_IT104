const scores: number[] = [1, 2, 3, 4,5, 6, 7, 8, 9, 10];
const avg = scores.reduce(( sum  ,current) => sum + current, 0) / scores.length; 
console.log(avg);
