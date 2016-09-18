(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.checkLunchMenu = function () {
    $scope.stateClass = '';
    if (!$scope.lunchMenu || $scope.lunchMenu.length === 0) {

      $scope.message    = 'Please enter data first';
      $scope.stateClass = 'alert-danger';
    } else {

      var numOfItems = countItemInMenu($scope.lunchMenu);
      if (numOfItems > 3) {
        $scope.message    = 'Too much!';
        $scope.stateClass = 'alert-success';
      } else if (numOfItems > 0 && numOfItems <= 3) {
        $scope.message    = 'Enjoy!';
        $scope.stateClass = 'alert-success';
      } else {
        // The input value might consists of only commas.
        $scope.message    = 'Please enter data first';
        $scope.stateClass = 'alert-danger';
      }
    }
  };
}

/*
  Return the number of items in the menu string.
*/
function countItemInMenu(menuString) {
  var menuItems  = menuString.split(',');
  var itemLength = menuItems.length;
  var count      = 0;
  for (var i = 0; i < itemLength; i++) {
    /**
     * Implement this case item 1, item2,,item3 or this case item 1, item2, ,item3
     * as not counting an 'empty' item towards the count of how many items there are in the list.
     */
    if (menuItems[i].trim().length > 0) {
      count++;
    }
  }

  return count;
}

})();
