/*
 * File: app/view/MyPanel37.js
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

Ext.define('HelcPDA.view.install.installtask.wangGouYiJiao', {
    extend: 'Ext.Panel',
    id:'wangGouYiJiao_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '完工及移交任务',
                items: [
                    {
                        xtype: 'button',
                        ui:'back',
                        text: '返回',
                        id:'wangGouYiJiao_id_FH_BUTTON',
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },{
            	xtype:'hiddenfield',
            	id:'wangGouYiJiaoHidden_id',
            	value:''
            },
            {
                xtype: 'list',
                id:'wangGouYiJiaoList_id',
                data: [
                    
                ],
                height: '100%',
                itemId: 'mylist22',
                itemTpl: [
                    '<table border=0 width=100% style="color:#666">',
                    '  <tr>',
                    //合同号:
                    '    <td style="color:#000;font-size:18px;">{ENGCONTRACT_NUMBER}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td>项目名称:{PROJECT_NAME}</td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'ZhengFujianStore'
            }
        ]
    }

});