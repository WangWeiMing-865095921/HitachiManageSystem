
/* JavaScript content from app/view/historyFault/historyFaultInformation.js in folder common */
/*
 * File: app/view/MyPanel38.js
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

Ext.define('HelcPDA.view.historyFault.historyFaultInformation', {
    extend: 'Ext.Panel',
    id:'historyFaultInformation_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '历史故障详细信息',
                items: [
                    {
                        xtype: 'button',
                        ui:'back',
                        text: '返回',
                        id:'historyFaultInformation_id_FH_BUTTON',
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                height: '100%',
                items: [
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '活动ID',
                                id:'ACTIVITY_ID',
                                labelWidth: '40%',
                                value: [
                                   
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '工号',
                                id:'ASSET_NUM',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '维保人员',
                                id:'PERSON_NAME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '保养站',
                                id:'STATION_NAME',
                                labelWidth: '40%',
                                value: [
                                  
                                ],
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: '受信地盘',
                                id:'FAULT_DOMAIN',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '受信大厦',
                                id:'FAULT_EDIFICE',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '受信时间',
                                id:'START_TIME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            }
                            ,{
                                xtype: 'textfield',
                                label: '发生时间',
                                id:'HAPPEN_TIME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '是否困人',
                                id:'BOX_UP',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '预约时间',
                                id:'BOOKING_TIME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '派单时间',
                                id:'ASSIGN_TIME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '联系人姓名',
                                id:'CONTACT_NAME',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '联系人电话',
                                id:'CONTACT_PHONE',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '服务请求来源',
                                id:'SERVICE_REQUEST_SOURCE',
                                labelWidth: '50%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '受信故障状态',
                                id:'HOTLINE_FAULT_STATUS',
                                labelWidth: '50%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textfield',
                                label: '受信内容',
                                id:'ABSTRACT',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textareafield',
                                label: '受信地址',
                                id:'FAULT_ADDRESS',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            },{
                                xtype: 'textareafield',
                                label: '服务子类型',
                                id:'AREA',
                                labelWidth: '40%',
                                value: [
                                    
                                ],
                                readOnly: true
                            }
                        ]
                    }
                ]
            }
        ]
    }

});