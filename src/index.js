module.exports = function solveEquation(equation) {

  var eq=equation.split(' ');
var a=+eq[0], b=+(eq[3]+eq[4]),c=+(eq[7]+eq[8]);
var D=Math.pow(b,2) - 4*a*c;
var result=[Math.round(((-1)*b+Math.sqrt(D))/(2*a)),Math.round(((-1)*b-Math.sqrt(D))/(2*a))];

return result.sort(function(l,r){return l-r;});
}
