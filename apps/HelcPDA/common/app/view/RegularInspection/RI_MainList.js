/*
 * File: app/view/RegularInspection/RI_MainList.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.RegularInspection.RI_MainList', {
    extend: 'Ext.Container',
    id: 'RI_MainList',
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
                title: '定期检查',
                items: [
                    {
                        xtype: 'button',
                        id: 'btn_RI_MainList_back',
                        ui: 'back',
                        text: ''
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'btn_RI_MainList_add',
                        iconCls: 'add',
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: 'btn_RI_MainList_search',
                        iconCls: 'search',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'list',
                id: 'L_RI_MainList',
                flex: 1,
                itemTpl: [
                    '<div>{AssetNumber} / {AssetDomainName} / [{ActualCheckDate}] / {Status}</div>',
                    '<tpl if="PDASubmittedFlag==\'Y\'">',
					'<div>PDA已提交</div>',
					'</tpl>'
                ],
                store: 'ST_RI_MainList',
//                onItemDisclosure: true
            }
        ]
    }

});