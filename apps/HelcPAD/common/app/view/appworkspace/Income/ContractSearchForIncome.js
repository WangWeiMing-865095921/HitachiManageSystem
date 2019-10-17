/*
 * File: app/view/ContractSearchForIncome.js
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

Ext.define('HelcPAD.view.appworkspace.Income.ContractSearchForIncome', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.form.FieldSet',
        'Ext.field.Text'
    ],

    config: {
    	id:'ContractSearchForIncomeId',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '查找合同',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        id:'appws_FH',
                        text: '返回'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                    	id:'btn_ContractSearchForIncomeId',
                        xtype: 'button',
                        margin: 10,
                        text: '查询'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                instructions: '所有可输入的查询条件（工号范围除外）均支持模糊查询',
                title: '查询条件',
                items: [
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '客户',
                        placeHolder: '请输入客户'
                    },
                    {
                    	id:'hetonghao',
                        cls:'textf',
                        labelWidth: '40%',
                        xtype: 'textfield',
                        label: '合同号',
                        placeHolder: '请输入合同号'
                    },
                    {
                    	id:'gonghao',
                        cls:'textf',
                        labelWidth: '40%',
                        xtype: 'textfield',
                        label: '工号',
                        placeHolder: '请输入工号'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '工号范围-开始',
                        placeHolder: '请输入工号范围的开始工号'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '工号范围-结束',
                        placeHolder: '请输入工号范围的结束工号'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '实体业务',
                        placeHolder: '请选择实体业务'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '拆分状态',
                        placeHolder: '请选择拆分状态'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '冻结状态',
                        placeHolder: '请选择冻结状态'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '48%',
                        label: '存在杂项收款拆分',
                        placeHolder: '请选择是否存在杂项收款拆分'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '状态',
                        placeHolder: '请选择状态'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '收款编号',
                        placeHolder: '请输入收款编号'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '来款单位',
                        placeHolder: '请输入来款单位'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '49%',
                        label: '收款金额范围-开始',
                        placeHolder: '请输入收款金额范围的开始金额'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '49%',
                        label: '收款金额范围-结束',
                        placeHolder: '请输入收款金额范围的结束金额'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '收款日期',
                        placeHolder: '请输入收款日期'
                    },
                    {
                        xtype: 'textfield',
                        cls:'textf',
                        labelWidth: '40%',
                        label: '发布日期',
                        placeHolder: '请输入发布日期'
                    }
                ]
            }
        ]
    }

});