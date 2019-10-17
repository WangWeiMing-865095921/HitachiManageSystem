/*
 * File: app/view/MyPanel40.js
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

Ext.define('HelcPDA.view.install.installtask.wangGuoYiJiaoxinqi', {
    extend: 'Ext.Panel',
     id:'wangGuoYiJiaoxinqi_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '完工详细信息',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        ui:'back',
                        id:'wangGuoYiJiaoxinqi_id_FH_BUTTON',
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id:'buttonID',
                        handler: function(button, e) {
                            var menu = Ext.create('Ext.Menu', {
                                items: [
                                {
                                    text: '保存',
                                    id:'wangGuoYiJiaoxinqiSave_id',
                                    handler: function() {
                                        Ext.Viewport.removeMenu('right');
                                    }
                                },
                                {
                                    text: '提交',
                                    xtype: 'button',
                                    id:'wangGuoYiJiaoxinqiSummit_id',
                                    handler: function() {
                                        Ext.Viewport.removeMenu('right');
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
                        itemId: 'mybutton5',
                        iconCls: 'more',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        title: '查看信息',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                height: '100%',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: '报障服务',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                label: '合同号:',
                                                id:'ENGCONTRACT_NUMBER_id',
                                                labelWidth: '50%',
                                                value: [
                                                  
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '工号:',
                                                id:'ELEVATOR_NO_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '生产类型:',
                                                id:'PRODUCE_TYPE_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '批次:',
                                                id:'SEQ_NUM_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '设备号:',
                                                id:'EQUIPMENT_NO_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '工号类型:',
                                                id:'ELEVATOR_CLASS_NAME_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '安装工法:',
                                                id:'BUDGET_INSTALL_METHOD_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '层/站/门:',
                                                id:'PARAM_C_id',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '载重:',
                                                id:'PARAM_ZZ_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '速度:',
                                                id:'PARAM_SD_id',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '提升高度:',
                                                id:'PARAM_TSGD_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '井道高度:',
                                                id:'PARAM_JDZG_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },{
                                                xtype: 'textfield',
                                                label: '出仓日期:',
                                                id:'outDay_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textfield',
                                                label: '报出日期:',
                                                id:'ReportDate_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },{
                                                xtype: 'textfield',
                                                label: '上报完工期:',
                                                id:'ReportCompletionDate_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },{
                                                xtype: 'textfield',
                                                label: '完工状态:',
                                                id:'BasedConfirmCompletionStatus_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },{
                                                xtype: 'textfield',
                                                label: '档案编号:',
                                               id:'Number_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'textareafield',
                                                label: '梯种:',
                                                id:'CM_ELEVATOR_TYPE_NAME_id',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'autoTextArea',
                                                label: '客户名称:',
                                                id:'CUSTOMER_NAME_id',
                                                labelWidth: '50%',
                                                value: [
                                                  
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'autoTextArea',
                                                label: '安装地址:',
                                                id:'INSTALL_ADDRESS_id',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'autoTextArea',
                                                label: '安装单位:',
                                                id:'dwNAME_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'autoTextArea',
                                                label: '吊装单位:',
                                                id:'dzNAME_id',
                                                labelWidth: '50%',
                                                value: [
                                                    
                                                ],
                                                readOnly: true
                                            },
                                            {
                                                xtype: 'autoTextArea',
                                                label: '搭栅单位:',
                                                id:'dpNAME_id',
                                                labelWidth: '50%',
                                                value: [
                                                   
                                                ],
                                                readOnly: true
                                            }
                                            
                                        ]
                                    },
                                    
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '维护信息',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                height: 600,
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        title: '',
                                        items: [
                                            {
	                                            xtype: 'textfield',
	                                            label: '移交日期',
	                                            placeHolder: '请输入移交时间',
	                                            labelWidth: '50%',
	                                            id:'time_id',
	                                            value: [
	                                               
	                                            ],
	                                            readOnly:true,
	                                            listeners:{
	                                            	focus:function(){
	                                            		need_text_id='time_id';
	                                        			//initDate();
	                                            		initDate1('time_id','移交日期');
	                                        			//picker_show.show();
	                                            	}
	                                            },
                                            },
                                            {
                                            	xtype: 'textfield',
                                                label: '备注',
                                                labelWidth: '50%',
                                                id:'time_id2',
                                                value: [
                                                            
                                                ],
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldset',
                                        title: '移交日期不能小与技监发证日期',
                                        items: [
                                            {
                                            	xtype: 'textfield',
                                                label: '技监发证日期',
                                                labelWidth: '50%',
                                                id:'Test_JJFZRQ',
                                                readOnly: true
                                            }
                                        ]
                                    }
                                ]	
                            }
                        ]
                    }
                ]
            }
        ]
    }

});