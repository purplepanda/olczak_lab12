var app = angular.module("todoApp", []);
app.controller("listCtrl", function($scope) {
    $scope.toDos = ["laundry", "grocery shopping",
        "renew license", "create portfolio"
    ];
    $scope.addChore = function() {
        $scope.toDos.push($scope.chore)
        $scope.chore = "";
    };
});
