function ComplexNumber(re,im){
  this.re = re;
  this.im = im;
}

ComplexNumber.prototype.double = function (){
  this.re = 2*this.re;
  this.im = 2*this.im;
}

ComplexNumber.prototype.square = function (){
  const re1 = this.re * this.re - this.im * this.im;
  const im1 = 2 * this.re * this.im;
  this.re = re1;
  this.im = im1;
}

const num = new ComplexNumber(1,2);
num.double();
num.square();


Template.testing.helpers({
  num: function(){return num;}
});



// function squareNegs(list){
//   const negative = _.fliter(list,function(x){return x<0});
//   const square = _.map(negatice,function(x){return x*x});
//   const sort = _.sortBy(square);
//   return sort;
//   )
// }
