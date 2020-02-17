function BoardMember (name, homeState, training){
  this.name = name 
  this.homeState = homeState
  this.training = training
}
BoardMember.prototype.veto = function(){
  return `No, I must disagree`
}

BoardMember.prototype.doCharity = function(){
  return `I like to help people.`
}
BoardMember.prototype.releasePressStatement = function(){
  return `You will see great things from Scuber.`
}
BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homestat}, and I was trained in ${this.training}`
}