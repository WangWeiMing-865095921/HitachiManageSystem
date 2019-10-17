
/* JavaScript content from app/view/install/installtoreportcheck/InstallationTasksReportCheckPanel1.js in folder common */
/*
 * File: app/view/InstallatoinTasksFactoryPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('HelcPDA.view.install.installtoreportcheck.InstallationTasksReportCheckPanel1', {
    extend: 'Ext.Panel',
    id:'installationTasksReportCheckPanel1',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.tab.Panel'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '报检任务',
                items: [
                    {
                        xtype: 'button',
                        id:'BJ_Back',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                        },
                        iconCls: '',
                        id:'toReportDetailCheck',
                        text: '录入'
                    }
                 
                ]
            },  {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'select_All',
                        text: '全选'
                    },
                    {
                        xtype: 'button',
                        id:'select_other',
                        text: '反选'
                    }
                ]
            },
            
                    {
                                xtype: 'list',
                                data: [
                                ],
                                height: '100%',
                                itemId: 'mylist8',
                                id:'check_list2',
                                store:'InstallatoinTasksReportCheck_1Store',
                                itemTpl: [
                                    '<table border=0 width=100% >',
                                    '    <tr height=20>',
                                    '        <td rowspan="2" width=10%>',
                                    '            <div name="instsb_eno_check" class="p_judge_box" id="{ELEVATOR_NO}">3</div>',
                                    '        </td>',
                                    '        <td width=70% class="o_list_title">',
                                    '            <span style="font-size:18px;color:#000">{ELEVATOR_NO}</span>',
                                    '            <span style="">批次:{SEQ_NUM}</span>',
                                    '            <span style="">调试次第:{DEBUG_NUM}</span>',
                                    '</td>',
                                    '    </tr>',
                                    '    <tr height=18>',
                                    '        <td class="o_list_con_01"><span style="float:left;">状态:</span><div style="float:left;width:100px;text-align:center"  class="{FLGS}">{FLGS}</div></td>',
                                    '    </tr>',
                                    '</table>'
                                ]
                            },
                            {
                            	xtype:'hiddenfield',
                            	id:'hidden_ENGCONTRACT_NUMBER',
                            	value:'',
                            	
                            }
                ]
            }
});