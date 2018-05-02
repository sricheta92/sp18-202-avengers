/*
 * @author: Huy Vo
 * @description: Singleton Design Patern 
 */
function QuestionsSingleton(){
  // Instance stores a reference to the Singleton
  var instance;

  // Singleton
  QuestionsSingleton = function() {
    return instance;
  };

  // carry over the prototype
  QuestionsSingleton.prototype = this;

  // the instance
  instance = new QuestionsSingleton();

  // reset the constructor pointer
  instance.constructor = QuestionsSingleton; 
 
  // function
  instance.get = function (idx) { 
    if(idx === 0){
        return ['What is the design pattern that is used when creation of object directly is costly?',  'prototype'];
    }
    
    if(idx === 1){
        return ['Define a family of algorithms, encapsulate each one, and make them interchangeable. It lets the algorithm vary independently from clients that use it.', 'strategy'];
    }
    
    if(idx === 2){
        return ['Encapsulate a request as an object, there by letting you parametrize clients with different requests, queue or log requests, and support undoable operation.', 'command'];
     
    }
    
    
    return ['Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.', 'iterator'];
    
  };

  return instance;
}; 
 
