define(['angular', 'text!../../module2/tpl.html'], function(angular, tpl) {
    return {
        controller: ['$scope', 'httpService', function($scope, httpService) {

            // 请求参数
            var para1 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {
                        "ParentCategoryNum": "001"
                    }
                },
                para2 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {
                        "CategoryNum": "001"
                    }
                },
                para3 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {
                        "CodeName": "案例库-色调"
                    }
                },
                para4 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {
                        "CodeName": "案例库-成果"
                    }
                },
                para5 = {
                    "ValidateData": "Epoint_WebSerivce_**##0601",
                    "para": {}
                };

            $scope.fliterDirect = function(type) {
                getHttp({
                    "url": "getCaseFangXiangByCategoryNumOrType",
                    "para": {
                        "ValidateData": "Epoint_WebSerivce_**##0601",
                        "para": {
                            "CaseType": type
                        }
                    },
                    "func": function(response) {
                        $scope.directionList = response.CaseFangXiangInfo.Info;
                    }
                });
            };
            // $http
            var getHttp = function(opt) {
                httpService.list({
                    url: opt.url,
                    data: opt.para,
                    success: opt.func
                });
            };
            // 获取业务类型
            getHttp({
                "url": "CaseShow_Category_List",
                "para": para1,
                "func": function(response) {
                    $scope.itemList = response.InfoList.Info;
                }
            });

            // 获取类型方向类型
            getHttp({
                "url": "getCaseTypeAndFangXiangByCategoryNum",
                "para": para2,
                "func": function(response) {
                    $scope.typeList = response.CaseTypeInfo.Info;
                    $scope.directionList = response.CaseFangXiangInfo.Info;
                }
            });
            // 获取色调类型
            getHttp({
                "url": "Frame_Code_Item_List",
                "para": para3,
                "func": function(response) {
                    $scope.colorList = response.InfoList.Info;
                }
            });
            // 获取成果类型
            getHttp({
                "url": "Frame_Code_Item_List",
                "para": para4,
                "func": function(response) {
                    $scope.achievementList = response.InfoList.Info;
                }
            });
            // 获取查询列表
            getHttp({
                "url": "CaseShow_Case_List",
                "para": para5,
                "func": function(response) {
                    var info = $.makeArray(response.InfoList.Info),
                        len = info.length;
                    for (var x = 0; x < len; x++) {
                        info[x].Title = unescape(info[x].Title);
                    }
                    $scope.detailList = info;
                }
            });

        }],
        tpl: tpl
    }
});
