(function(){
    var learnDirective = angular.module("learnDirective", []);
    learnDirective.controller("learnDirectiveController", function($scope,$rootScope){
        $scope.name = "Meha";
        $scope.age = 25;
        $scope.randomText = "Hey beautiful";
        $scope.emp = {
            name: "Mayank",
            age: 29
        };
        $rootScope.Company = "GlobalLogic";
        $rootScope.rootScopeText = "Change RootScope here";
    });
    learnDirective.directive("demo1Directive", function() {
        return{
            template: "Name is: {{name}}"
        };
    });
    learnDirective.directive("randomDirective", function() {
        return{
            template: `<input type="text" ng-model="randomText">`
        };
    });
    learnDirective.directive("demo2Directive", function(){
        return {
            template: `Company is: {{Company}}<br><br>
                        This is <b>Root Scope Text</b>: {{rootScopeText}}`
        };
    });
    learnDirective.directive("demo3Directive", function(){
        return {
            template: `Hi there now the following is transcluded text: <br><br>
                        <ng-transclude></ng-transclude> `,
            transclude: "true"
            
        };
    });
    learnDirective.directive("demo4Directive", function(){
        return {
            template: `Using interpolation in transclude: <br><br>
                        Here it is: <b>{{twoWayBindedText}}</b>`,
            transclude: "true",
        }
    });

})();