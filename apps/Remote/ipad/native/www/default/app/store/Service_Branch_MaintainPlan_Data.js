
/* JavaScript content from app/store/Service_Branch_MaintainPlan_Data.js in folder common */
/*
 * File: app/store/Service_Branch_MaintainPlan_Data.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcRemote.store.Service_Branch_MaintainPlan_Data', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Service_Branch_MaintainPlan_Data',
        proxy: {
            type: 'jsonp',
            callbackKey: 'jsonpCallback',
            reader: {
                type: 'json',
                idProperty: 'workplanId',
                rootProperty: 'data'
            }
        },
        listeners: [
            {
                fn: 'onJsonpstoreBeforeLoad',
                event: 'beforeload'
            }
        ],
        fields: [
            {
                name: 'workplanId'
            },
            {
                name: 'workplanNo'
            },
            {
                name: 'elevatorCode'
            },
            {
                convert: function(v, rec) {
                    return v=='1'? 'Y':'N';
                },
                name: 'isremoteMonitor'
            },
            {
                name: 'building'
            },
            {
                name: 'planTime'
            },
            {
                name: 'areaId'
            },
            {
                name: 'worker'
            },
            {
                name: 'workTime'
            },
            {
                name: 'state'
            },
            {
                name: 'belongStation'
            },
            {
                name: 'cityCode'
            },
            {
                name: 'accntname'
            },
            {
                name: 'elevatorType'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url;
        switch(this.parm) {
            // 按区域
            case 'huadong':
            case 'huanan':
            case 'huaxi':
            case 'huabei':
                url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/workplan/getWorkPlanByAreaCode.do?areaCode=' + this.parm;
                break;

            // 按分公司代码
            default:
                url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/workplan/getMaintainDataByCompany.do';
                if(this.parm!=='') {
                    url = url + '?day=0&companyCode=' + this.parm;
                }
                break;
        }


        store.getProxy().setUrl(url);
    },

    loadDat: function(onSuccess, onFailure, parm) {
        // 售后->区域地图->区域地图->保养计划
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            this.setData([
                {
                "workplanId":16013,
                "workplanNo":"BA01_AG14_000175",
                "elevatorCode":"10G015136",
                "isremoteMonitor":"1",
                "building":"合生帝景",
                "planTime":"2016-05-08",
                "homeWorkTime":"2016-05-08",
                "areaId":4,
                "worker":"余绍恒,李梓恒,",
                "workTime":45,
                "state":"已完成",
                "belongStation":"江燕站",
                "cityCode":"guangzhou",
                "accntname":"广东康景物业服务有限公司",
                "elevatorType":"0"
                },
                {
                "workplanId":16035,
                "workplanNo":"AH1505983",
                "elevatorCode":"15G053804",
                "isremoteMonitor":"0",
                "building":"广州市朋安电梯有限公司",
                "planTime":"2016-05-08",
                "homeWorkTime":"2016-05-08",
                "areaId":4,
                "worker":"杜智盛,欧立鹏,",
                "workTime":20,
                "state":"已完成",
                "belongStation":"东山站",
                "cityCode":"guangzhou",
                "accntname":"广州市朋安电梯有限公司",
                "elevatorType":"0"
                },
                {
                "workplanId":12213,
                "workplanNo":"AH1306139",
                "elevatorCode":"13G059752",
                "isremoteMonitor":"0",
                "building":"广州市东湖洲房地产开发有限公司",
                "planTime":"2016-05-10",
                "homeWorkTime":"2016-05-10",
                "areaId":4,
                "worker":"梁伟贤,陈志文,",
                "workTime":60,
                "state":"已计划",
                "belongStation":"市桥站",
                "cityCode":"guangzhou",
                "accntname":"广州市东湖洲房地产开发有限公司",
                "elevatorType":"0"
                },
                {
                "workplanId":16409,
                "workplanNo":"BA01_AG15_001718",
                "elevatorCode":"09G000744",
                "isremoteMonitor":"0",
                "building":"威立大厦",
                "planTime":"2016-05-08",
                "homeWorkTime":"2016-05-08",
                "areaId":4,
                "worker":"钟满锋,黄淦光,",
                "workTime":67,
                "state":"已完成",
                "belongStation":"天河站",
                "cityCode":"guangzhou",
                "accntname":"广州市合家物业管理有限公司",
                "elevatorType":"0"
                },
                {
                "workplanId":14584,
                "workplanNo":"BA01_AG14_000175",
                "elevatorCode":"10G015141",
                "isremoteMonitor":"1",
                "building":"合生帝景",
                "planTime":"2016-05-08",
                "homeWorkTime":"2016-05-08",
                "areaId":4,
                "worker":"余绍恒,李梓恒,",
                "workTime":45,
                "state":"已完成",
                "belongStation":"江燕站",
                "cityCode":"guangzhou",
                "accntname":"广东康景物业服务有限公司",
                "elevatorType":"0"
                }
            ]);

            onSuccess();
        }
    },

    filteDat: function(parm) {

    }

});