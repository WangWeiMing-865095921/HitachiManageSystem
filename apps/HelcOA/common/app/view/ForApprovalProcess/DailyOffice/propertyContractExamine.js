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

Ext.define('HelcOA.view.ForApprovalProcess.DailyOffice.propertyContractExamine', {
    extend: 'Ext.Panel',
    id:'sp_propertyContractExamine_ID',
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
                id: 'surface_ID',
                title: '物业公司对外合同审批流程',
                items: [{
                	xtype: 'button',
                    iconCls: 'home', 
                    id: 'returnHome_ID'
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    id: 'idea_ID',
                    text: '下一步'
                }]
            },
            {
                xtype: 'formpanel',
                flex: 1,
                id: 'fp',
                items: [
                    {
                        xtype: 'fieldset',
                        instructions: '本审批流程适用于公司除以下合同(电梯买卖、安装、维保合同、员工劳动合同（含保密协议）、特许经销合同（电梯经销商）及法律顾问聘用合同)外的其他类型的合同审批。',
                        title: '',
                        items: [
                            {
                                xtype: 'textfield',
                                label: '编号',
                                id:'fileno',
                                readOnly:true,
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
                                id:'subject',
                                labelWidth: '40%',
                                required: true,
                                readOnly:true,
                                placeHolder: '请输入标题'
                            },
                            {
                                xtype: 'textfield',
                                label: '我方合同号',
                                id:'mycontractno',
                                labelWidth: '40%',
                                readOnly:true,
                                placeHolder: '请输入我方合同号'
                            },
                            {
                                xtype: 'textfield',
                                label: '对方合同号',
                                id:'nextcontractno',
                                labelWidth: '40%',
                                required: true,
                                readOnly:true,
                                placeHolder: '请输入对方合同号'
                            },
                            {
                                xtype: 'textfield',
                                label: '申请日期',
                                id:'createdate',
                                labelWidth: '40%',
                                placeHolder: '请输入申请日期',
                                readOnly:true,
//                                listeners:{
//                                	focus:function(){
//                                		initDate(Ext.getCmp('createdate').getValue(),'申请日期','createdate');
//                                	}
//                                }
                            },
                            {
                                xtype: 'selectfield',
                                label: '合同类型',
                                id:'contracttype',
                                readOnly:true,
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
                                        text: '合同撤消',
                                        value: '合同撤消'
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                label: '对方单位名',
                                id:'addr',
                                labelWidth: '40%',
                                required: true,
                                readOnly:true,
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
                                id:'zbflag',
                                readOnly:true,
                                label: '是否招标',
                                labelWidth: '40%',
                                placeHolder: '请选择是否招标',
                                options: [
                                    {
                                        text: '招标',
                                        value: '招标'
                                    },
                                    {
                                        text: '不招标',
                                        value: '不招标'
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
                                id:'zbxm',
                                readOnly:true,
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
                                xtype: 'textfield',
                                label: '支付方式',
                                required: true,
                                readOnly:true,
                                id:'paytype',
                                labelWidth: '40%',
                                placeHolder: '请选择支付方式',
                            },
                            {
                                xtype: 'selectfield',
                                label: '三方合同',
                                id:'threeflag',
                                readOnly:true,
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
                                xtype: 'textnumfield',
                                label: '联系电话',
                                required: true,
                                readOnly:true,
                                id:'lxdh',
                                labelWidth: '40%',
                                placeHolder: '请输入联系电话'
                            },
                            {
                                xtype: 'textnumfield',
                                label: '合同份数',
                                required: true,
                                readOnly:true,
                                id:'htfs',
                                labelWidth: '40%',
                                placeHolder: '请输入合同份数'
                            },
                            {
                                xtype: 'textfield',
                                label: '合同金额',
                                required: true,
                                readOnly:true,
                                id:'contractyear',
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
                                id:'dept',
                                readOnly:true,
                                labelWidth: '40%',
                                placeHolder: '请输入部门名称'
                            },
                            {
                                xtype: 'textfield',
                                id:'agentman',
                                label: '姓名',
                                readOnly:true,
                                labelWidth: '40%',
                                placeHolder: '请输入姓名'
                            },
                            {
                                xtype: 'textfield',
                                label: '时间',
                                id:'reportdate',
                                labelWidth: '40%',
                                placeHolder: '请输入时间',
                                dateFormat: 'Y-m-d',
                                readOnly:true,
//                                listeners:{
//                                	focus:function(){
//                                		initDate2('reportdate','时间');
//                                	}
//                                }
                            },
                            {
                                xtype: 'autoTextArea',
                                id:'sqliyou_textarea',
                                label: '说明',
                                labelWidth: '40%',
                                required: true,
                                readOnly:true,
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
                                id:'zfname',
                                readOnly:true,
                                labelWidth: '40%',
                                placeHolder: '请输入保存支付条件的名称'
                            },
                            {
                                xtype: 'textfield',
                                id:'zfpage',
                                label: '页码',
                                readOnly:true,
                                labelWidth: '40%',
                                placeHolder: '请输入支付条件所在页码'
                            },
                            {
                                xtype: 'autoTextArea',
                                label: '说明',
                                id:'caiwureason_textarea',
                                labelWidth: '40%',
                                required: true,
                                readOnly:true,
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
                                    id:'hqflag',
                                    readOnly:true,
                                    labelWidth: '40%',
                                    placeHolder: '否需要其他部门领导会签',
                                    options: [
                                        {
                                            text: '否',
                                            value: '否'
                                        },
                                        {
                                            text: '是',
                                            value: '是'
                                        }
                                    ],
                                    listeners:{
                                    	change:function(select,newValue,oldValue){
                                    		if(newValue=='是'){
                                    			Ext.getCmp('hqleader').setDisabled(false);
                                    		}else{
                                    			Ext.getCmp('hqleader').setDisabled(true);
                                    			Ext.getCmp('hqleader').setValue('');
                                    		}
                                    	}
                                    }
                                },
                                {
                                    xtype: 'selectfield',
                                    label: '选择领导',
                                    disabled:true,
                                    readOnly:true,
                                    id:'hqleader',
                                    name:'hqleader',
                                    labelWidth: '40%',
                                    placeHolder: '选择会签领导',
                                    options: [
                                        {
                                            text: '请选择领导',
                                            value: ''
                                        },
                                        {
                                            text: '潘胜燊00000001',
                                            value: '潘胜燊00000001'
                                        },{
                                        	text: '任军00000002',
                                            value: '任军00000002'
                                        },{
                                        	text: '李振全00000025',
                                            value: '李振全00000025'
                                        },{
                                            text: '袁军00000131',
                                            value: '袁军00000131'
                                        },{
                                            text: '郭京互00000171',
                                            value: '郭京互00000171'
                                        },{
                                            text: '梁东明00000173',
                                            value: '梁东明00000173'
                                        },{
                                            text: '区红兵00000249',
                                            value: '区红兵00000249'
                                        },{
                                            text: '曾东生00000277',
                                            value: '曾东生00000277'
                                        },{
                                            text: '张国强00000340',
                                            value: '张国强00000340'
                                        },{
                                            text: '白文00000767',
                                            value: '白文00000767'
                                        },{
                                            text: '梁耀强00000840',
                                            value: '梁耀强00000840'
                                        },{
                                            text: '蔡崇礼00001009',
                                            value: '蔡崇礼00001009'
                                        },{
                                            text: '汪安国00004980',
                                            value: '汪安国00004980'
                                        },
                                    ]
                                },
                                {
                                	xtype:'fieldset',
                                	title:'审计监察部意见',
                                	items:[{
                                		xtype: 'textfield',
                                        label: '备案号',
                                        id:'beianno',
                                        labelWidth: '40%',
                                        placeHolder: '备案号'
                                	}]
                                }
                            ]
                    },
//                    {
//                        xtype: 'fieldset',
//                        instructions: '',
//                        title: '',
//                        items: [
//                            {
//                                xtype: 'container',
//                                layout: {
//                                    type: 'hbox',
//                                    align: 'start',
//                                    pack: 'center'
//                                },
//                                items: [
//                                    {
//                                        xtype: 'button',
//                                        margin: 10,
//                                        width: 120,
//                                        text: '拍照'
//                                    },
//                                    {
//                                        xtype: 'button',
//                                        margin: 10,
//                                        width: 120,
//                                        text: '浏览'
//                                    }
//                                ]
//                            }
//                        ]
//                    },
                    {
                        xtype: 'fieldset',
                        hidden: true,
                        items: [
                            {
                            	xtype:'textfield',
                            	id:'cwflag',
                            	name:'cwflag'
                            },
                            {
                            	xtype:'textfield',
                            	id:'fwflag',
                            	name:'fwflag'
                            },
                            {
                            	xtype:'textfield',
                            	id:'fjflag',
                            	name:'fjflag'
                            },
                            {
                                xtype: 'textfield',
                                id: 'conds',
                                name: 'conds',
                                value:'nocon'
                            },
                            {
                                xtype: 'textfield',
                                id: 'userid',
                                name: 'userid'
                            },
                            {
                            	xtype:'textfield',
                            	id:'tiaojian01',
                            	name:'tiaojian01',
                            	value:'xx'
                            },
                            {
                            	xtype:'textfield',
                            	id:'tiaojian02',
                            	name:'tiaojian02',
                            	value:'xx'
                            },
                            {
                                xtype: 'textfield',
                                id: 'type',
                                name: 'type'
                            },
                            {
                                xtype: 'textfield',
                                id: 'username',
                                name: 'username'
                            },
                            {
                                xtype: 'textfield',
                                id: 'node',
                                name: 'node'
                            },
                            {
                                xtype: 'textfield',
                                id: 'ctime',
                                name: 'ctime'
                            },
                            {
                                xtype: 'textfield',
                                id: 'piid',
                                name: 'piid'
                            },
                            {
                                xtype: 'textfield',
                                id: 'processname',
                                name: 'processname'
                            },
                            {
                                xtype: 'textfield',
                                id: 'curauthor',
                                name: 'curauthor'
                            },
                            {
                                xtype: 'textfield',
                                id: 'dealmen',
                                name: 'dealmen'
                            },
                            {
                                xtype: 'textfield',
                                id: 'ygbh',
                                name: 'ygbh'
                            },
                            {
                                xtype: 'textfield',
                                id: 'form',
                                name: 'form',
                                value:'processfile'
                            },
                            {
                                xtype: 'textfield',
                                id: 'arcpath',
                                name: 'arcpath'
                            },
                            {
                                xtype: 'textfield',
                                id: 'arcdate',
                                name: 'arcdate'
                            },
                            {
                                xtype: 'textfield',
                                id: 'idea',
                                name: 'idea'
                            },
                            {
                                xtype: 'textfield',
                                id: 'endprocessdate',
                                name: 'endprocessdate'
                            },
//                            {
//                                xtype: 'textfield',
//                                id: 'createdate',
//                                name: 'createdate'
//                            },
                            {
                                xtype: 'textfield',
                                id: 'audit_list',
                                name: 'audit_list'
                            },
                            {
                                xtype: 'textfield',
                                id: 'taskid',
                                name: 'taskid'
                            },
                            {
                                xtype: 'textfield',
                                id: 'mast',
                                name: 'mast'
                            },
                            {
                            	xtype: 'textfield',
                            	id: 'firflow',
                            	name: 'firflow'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});