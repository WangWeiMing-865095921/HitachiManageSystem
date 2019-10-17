
/* JavaScript content from app/view/startProcess/OverseasTravelApplicationForm.js in folder common */
/*
 * File: app/view/MyPanel16.js
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

Ext.define('HelcOA.view.startProcess.OverseasTravelApplicationForm', {
    extend: 'Ext.Panel',
    id:'OverseasTravelApplicationForm_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.TextArea'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '境外出差申请表',
                items: [
                    {
    xtype: 'button',
    ui: 'back',
    text: '返回',
    listeners:{
    	tap:function(){
    		var obj=Ext.getCmp('StartprocessName_id');
    		if(!obj){
    			obj=Ext.create('HelcOA.view.startProcess.StartprocessName');
    		}
    		Ext.Viewport.setActiveItem(obj);
    	}
    }
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
                 text: '提交',
                 listeners:{
                 	tap:function(){
                 		var obj=Ext.getCmp('OverseasTravelApplicationFormCommit_id');
                 		if(!obj){
                 			obj=Ext.create('HelcOA.view.startProcess.OverseasTravelApplicationFormCommit');
                 		}
                 		Ext.Viewport.setActiveItem(obj);
                 	}
                 },
                 handler:function(button,e){
                	 Ext.Viewport.hideMenu('right');
                	 
                }
             },
             {
                 text: '保存',
                     handler:function(button,e){
                     	 Ext.Viewport.hideMenu('right');
                     	 
                     }
             },
             {
                 text: '意见',
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
     itemId: 'mybutton3',
     iconCls: 'more'
}
                ]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '编号',
                                labelWidth: '40%',
                                placeHolder: '请输入编号'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '领队',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '员工编号',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入员工编号'
                            },
                            {
                                xtype: 'textfield',
                                label: '姓名',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入员工姓名'
                            },
                            {
                                xtype: 'textfield',
                                label: '出发地点',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入出发地点'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '出访时间',
                        items: [
                            {
                                xtype: 'datepickerfield',
                                label: '开始',
                                labelWidth: '40%',
                                placeHolder: '请输入开始时间',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '结束',
                                labelWidth: '40%',
                                placeHolder: '请输入结束时间',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '标题',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入申请人姓名'
                            },
                            {
                                xtype: 'selectfield',
                                label: '出访类型',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请选择出访类型',
                                options: [
                                    {
                                        text: '出差',
                                        value: '出差'
                                    },
                                    {
                                        text: '培训',
                                        value: '培训'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: '办理签证',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请选择出访类型',
                                options: [
                                    {
                                        text: '需办理',
                                        value: '需办理'
                                    },
                                    {
                                        text: '不需办理',
                                        value: '不需办理'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'textareafield',
                                label: '任务及理由',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入出访任务及理由'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});