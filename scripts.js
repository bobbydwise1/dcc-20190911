/*
 This problem was asked by Google.

Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.
*/

//Googled this: https://en.wikipedia.org/wiki/Exponentiation_by_squaring
const exper = (x,n) => {
  if (n < 0) {
    return exper(1/x,-n) 
  } else if (n == 0) {
    return 1
  } else if (n == 1) {
    return x
  } else if (n % 2 == 0) {
    return exper(x*x, n/2);
  } else {
    return x*exper(x*x, (n-1)/2)
  }
}

console.log(exper(2,10))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = parseInt(input1)
    input2 = $('#input-2').val()
    input2 = parseInt(input2)
    console.log(input1, input2)
    $('#output-1').text(exper(input1,input2))
  })

});
