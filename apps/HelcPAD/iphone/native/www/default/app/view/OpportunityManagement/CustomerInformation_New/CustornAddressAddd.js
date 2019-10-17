
/* JavaScript content from app/view/OpportunityManagement/CustomerInformation_New/CustornAddressAddd.js in folder common */
/*
 * File: app/view/CustomSearch.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPAD.view.OpportunityManagement.CustomerInformation_New.CustornAddressAddd', {
    extend: 'Ext.form.Panel',
    id:'custornAddressAddd_new_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '新建客户地址',
                cls:'textf',
                items: [
                    {
                        xtype: 'button',
                        id:'custornAddressAddd_new_id_FH',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: '保存',
                        id:'custornAddressAddd_new_id_BC',
                    }
                ]
            },
            {
                xtype: 'fieldset',
                //instructions: '所有可输入的查询条件均支持模糊查询',
                //title: '查询条件',
                items: [
                    {
                    	id:'custornAddressAddd_new_id_Country',
                        xtype: 'textfield',
                        labelWidth: '40%',
                        label: '国家地区',
                        cls:'textf',
                        value:'中国',
                    },
                    {
                    	id:'custornAddressAddd_new_id_Province',
                        xtype: 'selectfield',
                        labelWidth: '40%',
                        label: '省/(直辖)市',
                        cls:'textf',
                    },
                    {
                    	id:'custornAddressAddd_new_id_City',
                        xtype: 'selectfield',
                        labelWidth: '40%',
                        label: '城市',
                        cls:'textf',
                        required:true,
                    },
                    {
                    	id:'custornAddressAddd_new_id_County',
                        xtype: 'selectfield',
                        labelWidth: '40%',
                        label: '县/区',
                        cls:'textf',
                    },
                    {
                    	id:'custornAddressAddd_new_id_PostalCode',
                        xtype: 'textfield',
                        labelWidth: '40%',
                        label: '邮政编码',
                        cls:'textf',
                    },
                    {
                    	id:'custornAddressAddd_new_id_StreetAddress',
                        xtype: 'textfield',
                        labelWidth: '40%',
                        label: '详细地址',
                        cls:'textf',
                        required:true,
                    },
                    {
                    	id:'custornAddressAddd_new_id_StartDate',
                        xtype: 'textfield',
                        labelWidth: '40%',
                        label: '开始日期',
                        cls:'textf',
                        listeners:{
                        	focus:function(){
                        		var ff=Ext.getCmp('custornAddressAddd_new_id_StartDate').getReadOnly();
                        		if(!ff){
                        			initDate1('custornAddressAddd_new_id_StartDate','开始日期');
                        		};
                        	}
                        },
                    },
                    {
                    	id:'custornAddressAddd_new_id_EndDate',
                        xtype: 'textfield',
                        labelWidth: '40%',
                        label: '结束日期',
                        cls:'textf',
                        listeners:{
                        	focus:function(){
                        		var ff=Ext.getCmp('custornAddressAddd_new_id_EndDate').getReadOnly();
                        		if(!ff){
                        			initDate1('custornAddressAddd_new_id_EndDate','结束日期');
                        		};
                        	}
                        },
                    }
                ]
            }
        ]
    }

});