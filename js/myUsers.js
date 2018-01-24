var module = angular.module('myApp', []);
module.controller('userCtrl', function($scope,$http) {
    // $scope.users = [
    //     {
    //         "name": "Hege",
    //         "type": "21",
    //         "photo": "http://i4.bvimg.com/629651/a508279ca2eac902.png"
    //     },
    //     {
    //         "name": "Kim",
    //         "type": "21"
    //     },
    //     {
    //         "name": "Sal",
    //         "type": "21"
    //     },
    //     {
    //         "name": "Jack",
    //         "type": "21"
    //     },
    //     {
    //         "name": "John",
    //         "type": "21"
    //     },
    //     {
    //         "name": "Peter",
    //         "type": "21"
    //     }
    // ];
    $http.get('data.json').then(function (data) {
        console.log(data);
        $scope.users = data;
    });


    $scope.saveUser = function(id) {
        $scope.users.push({id:7, name:'yin',type:"12" });
    };
    $scope.download = function(id) {
        var file = new File([angular.toJson($scope.users)], { type: "application/json;charset=utf-8" });
        saveAs(file,"songsData.htm");
    };
    $scope.getUp = function(index) {
        if(index <= 0) return;
        $scope.users.splice(index-1,2,$scope.users[index],$scope.users[index-1]);
    };
    $scope.getDown = function(index) {
        if(index >= $scope.users.length-1) return;
        $scope.users.splice(index,2,$scope.users[index + 1],$scope.users[index]);
    };



    $scope.toEdit = function(index,prop,e){
        //你的业务代码
        if(!$scope.users[index].edit){
            $scope.users[index].edit = [];
        }
        $scope.users[index].edit[prop] = true;    //我猜你是这样写的，在这里后边加一句
        document.getElementById(prop+"_" + index).focus();
        setTimeout(function(){document.getElementById(prop+"_" + index).focus();},10);
    }
});
