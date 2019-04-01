// Todo actions
var AppDispatcher = require('../AppDispatcher');
var Constants = require('../Constants');
var WheatherAPI = require('../utils/WheatherAPI');

module.exports = {

  getWheather: function(city) {
    AppDispatcher.handleViewAction({
      actionType: Constants.GET_WHEATHER,
      city: city
    });

    WheatherAPI.get(city);
  }

};
