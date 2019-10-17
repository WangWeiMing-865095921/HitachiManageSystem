
/* JavaScript content from app/view/OpportunityManagement/Director/ClueProjectList.js in folder common */
/*
 * File: app/view/Director/ClueProjectList.js
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

Ext.define('HelcPAD.view.OpportunityManagement.Director.ClueProjectList', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'clueProjectList',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '关联商机',
                cls:'textf',
                items: [
                    /*{
                        xtype: 'button',
                        ui: 'back',
                        text: '',
                        id:'clueProjectList_FH',
                        text: '返回',
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: '搜索',
                        id:'clueProjectList_CX',
                    },*/
                    {
                    	//判断谁在使用
                        id:'clueProjectList_hidden',
                        xtype:'hiddenfield',
                    },
                    {
                    	//查询的条件
                        id:'clueProjectList_hidden_TJ',
                        xtype:'hiddenfield',
                    }
                ]
            },
            {
            	id:'clueProjectList_toolbar',
                xtype: 'toolbar',
                docked: 'top',
                layout: 'hbox',
                style: 'background:#EDEBF1;',
            },
            {
            	id:'clueProjectList_list',
                xtype: 'list',
                height: '100%',
                store:'ClueProjectListStore',   
                cls:'textf',
                itemTpl: [
                    /*'<table border=0 width=100%>',
                    '    <tr><td width=33%>项目名称</td><td width=33%>商机状态</td><td width=33%>建筑层数</td></tr>',
                    '    <tr><td width=33%>客户</td><td width=33%>商机创建时间</td><td width=33%>计划直梯台数</td></tr>',
                    '    <tr><td width=33%>使用单位</td><td width=33%>商机跟踪人</td><td width=33%>计划扶梯台数</td></tr>',
                    '    <tr><td width=33%>项目地址</td><td width=33%></td><td width=33%>大客户名称</td></tr>',
                    '</table>'*/

                    /*'<table border=0 width=100% class="pad_list_FS">',
                    '    <tr><td width=60%>{Name}</td><td width=20%>{OpptyStatus}</td><td width=20%>{BuildingLayer}</td></tr>',
                    '    <tr><td width=60%>{Account}</td><td width=20%>{Created}</td><td width=20%>{EvaluateElevatorQuantity}</td></tr>',
                    '    <tr><td width=60%>{OpptyFinalUser}</td><td width=20%>{SalesRep}</td><td width=20%>{EvaluateEscalatorQuantity}</td></tr>',
                    '    <tr><td width=60%>{OpptyInstallSite}</td><td width=20%></td><td width=20%>{BigCustomer}</td></tr>',
                    '</table>',*/
                    
                    '<table border=0 width=100% style="color:#666" class="textf">'+
					'  <tr>'+
					'     <td width=10%>'+
					'        <div name="groupkung_clueProjectList" class="p_judge_box2" id="conkung_clueProjectList">3</div>'+
					'     </td>'+
					'     <td width=90%>{Name}</td>'+
					'  </tr>'+
					'</table>',
                ],
                onItemDisclosure: true
            }
        ]
    }

});