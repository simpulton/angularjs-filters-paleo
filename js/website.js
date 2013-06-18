angular.module('website', [])
    .controller('MainCtrl', ['$scope', 'PaleoService', function ($scope, PaleoService) {
        $scope.paleoFoods = PaleoService.getPaleoFoods();
        $scope.paleoGroups = PaleoService.getPaleoGroups();

        $scope.isSelected = function (group) {
            if(typeof $scope.myGroup === 'undefined') {
                return;
            }

            return $scope.myGroup.data === group;
        };
    }])
    .factory('PaleoService', function () {
        var groups = [{data:'meats', label:'Meats'},
            {data:'vegetables', label:'Vegetables'},
            {data:'fats', label:'Fats'},
            {data:'nuts', label:'Nuts'},
            {data:'fruits', label:'Fruits'}];

        var foods = [{group:'meats', label:'Steak'},
            {group:'meats', label:'Chicken Breast'},
            {group:'meats', label:'Grass Fed Beef'},
            {group:'meats', label:'Bacon'},
            {group:'meats', label:'Eggs'},
            {group:'vegetables', label:'Asparagus'},
            {group:'vegetables', label:'Avocado'},
            {group:'vegetables', label:'Carrots'},
            {group:'vegetables', label:'Broccoli'},
            {group:'vegetables', label:'Peppers'},
            {group:'fats', label:'Coconut oil'},
            {group:'fats', label:'Olive oil'},
            {group:'fats', label:'Macadamia Oil'},
            {group:'fats', label:'Avocado Oil'},
            {group:'fats', label:'Grass fed Butter'},
            {group:'nuts', label:'Almonds'},
            {group:'nuts', label:'Cashews'},
            {group:'nuts', label:'Hazelnuts'},
            {group:'nuts', label:'Macadamia Nutts'},
            {group:'nuts', label:'Pecans'},
            {group:'fruits', label:'Apple'},
            {group:'fruits', label:'Avocado'},
            {group:'fruits', label:'Blackberries'},
            {group:'fruits', label:'Papaya'},
            {group:'fruits', label:'Mango'}];

        var getPaleoGroups = function() {
           return groups;
        };

        var getPaleoFoods = function() {
            return foods;
        };

        return {
            getPaleoGroups: getPaleoGroups,
            getPaleoFoods: getPaleoFoods
        }
    });