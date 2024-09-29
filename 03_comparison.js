console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// The reason is that an equality check == and comparisons < > <= >= work differently:
// comparisoms convert null to a number ,treating it as 0 .That's why null >=0 is true and null>0 is false. 

// === strict check (data conversion ny thay)

console.log("2" === 2);
// javaScript ma conversion ane equality check bnne alg vastu chhe