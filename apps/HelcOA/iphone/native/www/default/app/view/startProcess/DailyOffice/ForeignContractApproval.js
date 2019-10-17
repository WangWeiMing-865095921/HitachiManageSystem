
/* JavaScript content from app/view/startProcess/DailyOffice/ForeignContractApproval.js in folder common */
/*
 * File: app/view/DailyOffice16.js
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

Ext.define('HelcOA.view.startProcess.DailyOffice.ForeignContractApproval', {
    extend: 'Ext.Panel',
     id:'ForeignContractApproval_id',
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
                title: '公司对外合同审批',
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
                		var obj=Ext.getCmp('ForeignContractApprovalCommit_id');
                		if(!obj){
                			obj=Ext.create('HelcOA.view.startProcess.DailyOffice.ForeignContractApprovalCommit');
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
    itemId: 'mybutton2',
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
                        instructions: '本审批流程适用于公司除以下合同(电梯买卖、安装、维保合同、员工劳动合同（含保密协议）、特许经销合同（电梯经销商）及法律顾问聘用合同)外的其他类型的合同审批。',
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
                        items: [
                            {
                                xtype: 'textfield',
                                label: '标题',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入标题'
                            },
                            {
                                xtype: 'textfield',
                                label: '我方合同号',
                                labelWidth: '40%',
                                placeHolder: '请输入我方合同号'
                            },
                            {
                                xtype: 'textfield',
                                label: '对方合同号',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入对方合同号'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '申请日期',
                                labelWidth: '40%',
                                placeHolder: '请输入申请日期',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'selectfield',
                                label: '合同类型',
                                labelWidth: '40%',
                                placeHolder: '请选择合同类型',
                                options: [
                                    {
                                        text: '合同评审',
                                        value: '合同评审'
                                    },
                                    {
                                        text: '合同变更',
                                        value: '合同变更'
                                    },
                                    {
                                        text: '合同撤销',
                                        value: '合同撤销'
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                label: '对方单位名',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入对方单位名'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        instructions: '注：特殊项目，需要极短时间内完成（或其他原因不招标的项目），须提交《特殊项目专题报告审批表》报经公司领导（总经理以上人员）批准，并报审计监察部确认及建档备案。详见规章制度QG/GH-03-05。 提别提示:若选择\'不招标\'请在添加附件处上传<特殊项目专题报告审批表>，再提交! ',
                        title: '',
                        items: [
                            {
                                xtype: 'selectfield',
                                label: '是否招标',
                                labelWidth: '40%',
                                placeHolder: '请选择是否招标',
                                options: [
                                    {
                                        text: '是',
                                        value: '是'
                                    },
                                    {
                                        text: '否',
                                        value: '否'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        instructions: '如果合同无金额请填0；<br/> 本年度美元兑人民币以1比6.6计算',
                        title: '',
                        items: [
                            {
                                xtype: 'selectfield',
                                label: '合同项目',
                                labelWidth: '40%',
                                placeHolder: '请选择合同项目',
                                options: [
                                    {
                                        text: '基建、机电工程',
                                        value: '基建、机电工程'
                                    },
                                    {
                                        text: '维修项目及施工',
                                        value: '维修项目及施工'
                                    },
                                    {
                                        text: '重要设备、原材料等货物的采购',
                                        value: '重要设备、原材料等货物的采购'
                                    },
                                    {
                                        text: '软件及管理项目、工装夹具采购',
                                        value: '软件及管理项目、工装夹具采购'
                                    },
                                    {
                                        text: '办公用品设备',
                                        value: '办公用品设备'
                                    },
                                    {
                                        text: '废旧设备、物资项目',
                                        value: '废旧设备、物资项目'
                                    },
                                    {
                                        text: '其他',
                                        value: '其他'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: '支付方式',
                                labelWidth: '40%',
                                placeHolder: '请选择支付方式',
                                options: [
                                    {
                                        text: '基建、机电工程',
                                        value: '基建、机电工程'
                                    },
                                    {
                                        text: '维修项目及施工',
                                        value: '维修项目及施工'
                                    },
                                    {
                                        text: '重要设备、原材料等货物的采购',
                                        value: '重要设备、原材料等货物的采购'
                                    },
                                    {
                                        text: '软件及管理项目、工装夹具采购',
                                        value: '软件及管理项目、工装夹具采购'
                                    },
                                    {
                                        text: '办公用品设备',
                                        value: '办公用品设备'
                                    },
                                    {
                                        text: '废旧设备、物资项目',
                                        value: '废旧设备、物资项目'
                                    },
                                    {
                                        text: '其他',
                                        value: '其他'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: '三方合同',
                                labelWidth: '40%',
                                placeHolder: '是否三方合同',
                                options: [
                                    {
                                        text: '是',
                                        value: '是'
                                    },
                                    {
                                        text: '否',
                                        value: '否'
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                label: '联系电话',
                                labelWidth: '40%',
                                placeHolder: '请输入联系电话'
                            },
                            {
                                xtype: 'textfield',
                                label: '合同份数',
                                labelWidth: '40%',
                                placeHolder: '请输入合同份数'
                            },
                            {
                                xtype: 'textfield',
                                label: '合同金额',
                                labelWidth: '40%',
                                placeHolder: '请输入合同金额'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        instructions: '（为加快审批，请将本合同的重点及需要特别注意的内容或条款列明）。',
                        title: '合同背景及要点说明',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '部门',
                                labelWidth: '40%',
                                placeHolder: '请输入部门名称'
                            },
                            {
                                xtype: 'textfield',
                                label: '姓名',
                                labelWidth: '40%',
                                placeHolder: '请输入姓名'
                            },
                            {
                                xtype: 'datepickerfield',
                                label: '时间',
                                labelWidth: '40%',
                                placeHolder: '请输入时间',
                                picker: {
                                    doneButton: '完成',
                                    cancelButton: '取消'
                                }
                            },
                            {
                                xtype: 'textareafield',
                                label: '说明',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入合同背景及要点说明'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        instructions: '（为加快审批，请将支付条件的主要内容填写在支付条件说明中，并将保存这些条款的文件名填写在“保存支付条件的文件名称”栏目中，将支付条款的页码填写在“支付条件所在的页码”栏目中）',
                        title: '财务关注重点',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '名称',
                                labelWidth: '40%',
                                placeHolder: '请输入保存支付条件的名称'
                            },
                            {
                                xtype: 'textfield',
                                label: '页码',
                                labelWidth: '40%',
                                placeHolder: '请输入支付条件所在页码'
                            },
                            {
                                xtype: 'textareafield',
                                label: '说明',
                                labelWidth: '40%',
                                required: true,
                                placeHolder: '请输入支付条件说明'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: '',
                        items: [
                            {
                                xtype: 'selectfield',
                                label: '领导会签',
                                labelWidth: '40%',
                                placeHolder: '否需要其他部门领导会签',
                                options: [
                                    {
                                        text: '是',
                                        value: '是'
                                    },
                                    {
                                        text: '否',
                                        value: '否'
                                    }
                                ]
                            },
                            {
                                xtype: 'selectfield',
                                label: '选择领导',
                                labelWidth: '40%',
                                placeHolder: '选择会签领导',
                                options: [
                                    {
                                        text: '是',
                                        value: '是'
                                    },
                                    {
                                        text: '否',
                                        value: '否'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        instructions: '',
                        title: '',
                        items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'start',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        margin: 10,
                                        width: 120,
                                        text: '拍照'
                                    },
                                    {
                                        xtype: 'button',
                                        margin: 10,
                                        width: 120,
                                        text: '浏览'
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