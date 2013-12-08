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

  $scope.removeMonkey = function(name) {
    _.remove($scope.monkeys, function(v) {
      return v.name === name;
    });
  }
}