/*
 * File: app/view/Service/branch.js
 *
 * This file was generated by Sencha Architect
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

Ext.define('HelcRemote.view.Service.branch', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button'
    ],

    config: {
        id: 'Service_branch',
        layout: 'vbox',
        cls: [
            'remote-content',
            'remote-service'
        ],
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-service-Customer',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'remote-title',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'remote-titleText',
                                docked: 'left',
                                html: '分公司'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'remote-service-Customer-buttonBox',
                        items: [
                            {
                                xtype: 'button',
                                id: 'Service_branch_btnStop',
                                text: '停止换屏'
                            },
                            {
                                xtype: 'button',
                                hidden: true,
                                id: 'Service_branch_btnLastPage',
                                text: '上一屏'
                            },
                            {
                                xtype: 'button',
                                hidden: true,
                                id: 'Service_branch_btnNextPage',
                                text: '下一屏'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});