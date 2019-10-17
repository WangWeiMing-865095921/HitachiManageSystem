
/* JavaScript content from app/view/appworkspace/Income/ContractListForIncome.js in folder common */
/*
 * File: app/view/ContractListForIncome.js
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

Ext.define('HelcPAD.view.appworkspace.Income.ContractListForIncome', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
    	id:'ContractListForIncomeId',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '合同资料',
                items: [
                    {
                    	id:'btn_ContractListForIncome_two',
                        xtype: 'button',
                        ui: 'back',
                        text: '返回'
                    }
                ]
            },
            {
            	id:'ContractListForIncomeNews',
                xtype: 'list',
                store:'IncomeStore',
                height: '100%',
                itemTpl: [
//                    '<div> {name} {com} AH1512345(合同编号)    合同类型　客户名称    使用单位</div>'
                
                    '<table border=0 width=100% style="color:#666" class="textf">'+
                    '  <tr>'+
                    '     <td width=90%>1{one}　AH1512345(合同编号)</td>'+
                    '  </tr>'+
                    '  <tr>'+
                    '      <td>合同类型　客户名称    使用单位</td>'+
                    '  </tr>'+
                    '</table>',
                    
                    ],
                onItemDisclosure: true
            }
        ]
    }

});