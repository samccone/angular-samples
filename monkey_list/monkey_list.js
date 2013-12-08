function MonkeyList($scope) {
  $scope.monkeys = [
    {name: "tim"},
    {name: "bob"},
    {name: "jones"},
  ];

  $scope.addMonkey = function() {
    $scope.monkeys.push({
      name: $scope.monkey.text
    });

    $scope.monkey.text = '';
  }
}