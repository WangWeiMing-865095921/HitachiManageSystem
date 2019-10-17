/*
 * File: app/store/Lifecycle_Query_List.js
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

Ext.define('HelcRemote.store.Lifecycle_Query_List', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        storeId: 'Lifecycle_Query_List',
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
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
                name: 'elevator_code'
            },
            {
                name: 'building_name'
            },
            {
                name: 'address'
            },
            {
                name: 'customer_name'
            }
        ]
    },

    onJsonpstoreBeforeLoad: function(store, operation, eOpts) {
        var url = 'http://' + remote.getCmsIP() + '/YL_SCDG/hitachi/rmonitor/getLifeCycleElevatorListByQuery.do';
        if(this.parm!=='') {
            url = url + '?query=' + this.parm;
        }
        store.getProxy().setUrl(url);
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        // 生命周期->搜索工号
        var me = this;

        if(global.isWorklight()) {
            me.parm = parm;
            me.load();
        } else {
            this.setData([
                {
                    elevator_code:'11G027404',
                    building_name:'广东省质监局大楼',
                    address:'广东省广州市天河区黄埔大道西363号',
                    customer_name:'广东省质监局'
                },
                {
                    elevator_code:'11G027405',
                    building_name:'广东省质监局大楼',
                    address:'广州黄埔大道西363号',
                    customer_name:'广东省质监局'
                },
                {
                    elevator_code:'11G027406',
                    building_name:'广东省质监局大楼',
                    address:'广州黄埔大道西363号',
                    customer_name:'广东省质监局'
                },
                {
                    elevator_code:'11G027407',
                    building_name:'广东省质监局大楼',
                    address:'广州黄埔大道西363号',
                    customer_name:'广东省质监局'
                },
            ]);
            onSuccess();
        }
    }

});