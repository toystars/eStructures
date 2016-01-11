  
/**
  * Creates an eException.
  * @class An exception (or exceptional event) is a problem that arises during the execution of a program.
  * When an Exception occurs the normal flow of the program is disrupted,
  * and the program/Application terminates abnormally, which is not recommended, 
  * therefore these exceptions are to be handled.
  * @constructor
  */

var eException = function (status, reason, errorCode) {
  return {
    getType: function() {
      return 'eException';
    },
    status: status || null, // successful or failed
    reason: reason || null, // description of the error
    errorCode: errorCode || null // different code for different exceptions based on implementation
  };
};

var eCompare = function (firstData, secondData) {
  return firstData === secondData;
};