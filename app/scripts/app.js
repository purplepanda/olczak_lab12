var app = angular.module("todoApp", []);
app.controller("listCtrl", function($scope) {

    // This is a list of things I need to do
    $scope.toDos = [
        "laundry",
        "grocery shopping",
        "renew license",
        "create portfolio"
    ];

    // This is a list of things I have finished
    $scope.finished = [];

    // Methods for $scope.toDos
    $scope.addChore = addChore;
    $scope.removeChore = removeChore;
    $scope.moveToFinished = moveToFinished;


    ///////////////////////////////////////////

    // Adds to $scope.toDos
    function addChore() {
        $scope.toDos.push($scope.chore);
        $scope.chore = "";
    }

    // Removes from $scope.toDos
    function removeChore(dummy) {
        $scope.toDos.splice(dummy, 1);
    }

    // Adds a todo to $scope.finished array
    function moveToFinished(index) { //click finished!
        $scope.finished.push($scope.toDos[index]); //push removed chore to finished array
        $scope.removeChore(index); //removeChore fires; do this last
    }


    // FIGURE OUT HOW TO PRESS ENTER WHILE FOCUSING AN INPUT


});
