define(['angular', 'text!../../module1/tpl.html', 'banner', 'tabview'], function(angular, tpl) {
    return {
        controller: ['$scope', 'httpService', function($scope, httpService) {
            // 启动轮播图
            $("#banner").Xslider({ trigger: 'click', boxHeight: '452' });
            // $http
            var para1 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {
                        "ParentCategoryNum": "001"
                    }
                },
                para2 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {
                        "PageSize": 9,
                        "PageIndex": 1,
                        "isExcellent": 1
                    }
                };
            $scope.$on('tabview', function(tabview) {
                //render完成后执行的js
                new TabView({
                    dom: '#tabview',
                    activeCls: 'current',
                    triggerEvent: 'click'
                });
            });
            // 封装多次调用的$http
            var getList = function(guid, i) {
                para2.para.CategoryNum = guid;
                httpService.list({
                    url: 'CaseShow_Case_List',
                    data: para2,
                    success: function(response) {
                        var InfoList = response.InfoList;
                        $scope.TotalList[i] = response.Total;
                        if (InfoList) {
                            var info = $.makeArray(InfoList.Info),
                                len = info.length;
                            for (var x = 0; x < len; x++) {
                                info[x].Title = unescape(info[x].Title);
                            }
                            $scope.detailList[i] = info;
                        } else {
                            $scope.detailList[i] = [];
                        }
                    }
                });
            };
            // 获取栏目column
            httpService.list({
                url: 'CaseShow_Category_List',
                data: para1,
                success: function(response) {
                    var columnList = response.InfoList.Info;
                    $scope.columnList = columnList;
                    $scope.detailList = new Array(8);
                    $scope.TotalList = new Array(8);
                    // 通过columnNum参数查询对应栏目内容
                    $.each(columnList, function(i, e) {
                        getList(e.CategoryNum, i);
                    });
                }
            });

        }],
        tpl: tpl
    }
});
