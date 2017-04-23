var app=angular.module('myapp',['ngRoute']);
        app.controller('mc1',function($scope){
        })
        .controller("defaultCtrl", function ($scope) {
                $scope.stu = [
                    { id:1,name: "小王", career: "设计师，博客"},
                    { id:2,name: "张琳", career: "作家，杂志编辑"},
                    { id:3,name: "李小明", career: "艺术总监，电影剪辑"},
                    { id:4,name: "赵大城", career: "音乐家，运动员"}
                ];
            });
app.controller('mc1',function($scope){
$scope.arr=['首页','简介','信息','操作'];
        })
 .config(['$routeProvider', function($provider1){
                $provider1
                        .when('/a',{templateUrl:'view/aa.html'})
                        .when('/b',{templateUrl:'view/bb.html'});
            }]); 
 