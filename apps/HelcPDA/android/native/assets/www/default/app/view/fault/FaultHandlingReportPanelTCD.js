
/* JavaScript content from app/view/fault/FaultHandlingReportPanelTCD.js in folder common */
/*
 * File: app/view/FaultHandlingReportPanelTCD.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('HelcPDA.view.fault.FaultHandlingReportPanelTCD', {
    extend: 'Ext.Panel',
    id: 'faultHandlingReportPanelTCD',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Select',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'TCD码',
                items: [
                    {
                        xtype: 'button',
                        id: 'back_FRP',
                        ui: 'back',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            var menu = Ext.create('Ext.Menu', {
                                items: [
                                {
                                    text: '增加',
                                    id: 'add_fault',
                                    iconCls: 'add',
                                    handler:function(button,e){
                                   		Ext.Viewport.hideMenu('right');
                                    }
                                },
                                {
                                    text: '修改',
                                    id: 'modify_fault',
                                    iconCls: 'refresh',
                                    handler:function(button,e){
                                     	 Ext.Viewport.hideMenu('right');
                                   }
                                },
                                {
                                    text: '取消',
                                    id: 'cancel_fault',
                                    iconCls: 'delete',
                                    handler:function(button,e){
                                   		Ext.Viewport.hideMenu('right');
                                    }
                                }
                                ]
                            });

                            Ext.Viewport.setMenu(menu, {
                                side: 'right',
                                reveal: false
                            });

                            Ext.Viewport.showMenu('right');

                        },
                        itemId: 'mybutton6',
                        iconCls: 'more',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                id: 'TCD_tabP',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        id: 'TCD_info',
                        title: 'TCD码信息',
                        height: '100%',
                        scrollable: true,
                        items: [
                            {
                                xtype: 'formpanel',
                                height: 800,
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        items: [
                                            {
                                                xtype: 'selectfield',
                                                id: 'TCD_TYPE',
                                                label: 'TCD码类型',
                                                labelWidth:'40%',
                                                placeHolder: '请选择',
                                                options: [
                                                    
                                                ],
                                                usePicker: 'auto'
                                            },
                                            {
                                                xtype: 'selectfield',
                                                id: 'TCD_NUMBER',
                                                label: 'TCD编码',
                                                labelWidth:'40%',
                                                placeHolder: '请选择',
                                                options: [
                                                    
                                                ],
                                                usePicker: 'auto'
                                            },
                                            {
                                                xtype: 'textfield',
                                                id: 'FAULT_NUMBER',
                                                label: '故障码',
                                                labelWidth:'40%',
                                                placeHolder: '请输入故障码'
                                            },
                                            {
                                                xtype: 'panel',
                                                layout: {
                                                    type: 'hbox',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        id: 'CommitTCD',
                                                        margin: '15 0',
                                                        width: '90%',
                                                        text: '提交'
                                                    },
                                                    {
                                                        xtype: 'spacer'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '<div id="Fault_TcdContainer"></div>',
                        height: '100%',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'list',
                                id:'faultList',
                                store:'FaultListStore',
                                flex: 1,
                                itemTpl: [
                                    '<div style="width:100%; margin:0; padding:0;">',
                                    '    <h1 style="float:left;margin:0; padding:0;">{TCD_TYPE}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TCD_NUMBER}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{FAULT_NUMBER}</h1>',
                                    '    <div style="float:right;margin:0;">',
                                    '    <img id="1" style="width:22px;" src="images/delete01.png"/>',
                                    '    </div>',
                                    '</div>'
                                ]
                            },
                            {
                            	xtype:'hiddenfield',
                            	id:'TCDhidddenListIndex',
                            	value:''
                            }
                        ]
                    }
                ]
            }
        ]
    }

});