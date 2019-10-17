/*
 * File: app/view/Home.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('HelcOA.view.yuyue.Home', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.tab.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
    	id:'yuyuehome',
        itemId: 'mypanel1',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '预约管理',
                items: [
                    {
                        xtype: 'button',
                        id:'yuyueback',
                        iconCls: 'home',
//                        html: ' <i class="fa fa-chevron-left"></i>'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        title: '待我确认',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'list',
                                flex: 1,
                                cls: 'home-list',
                                id: 'Home_Unconfirmed_lsit',
                                itemTpl: [
                                    '<div class="home-list-box">',
                                    '    <div class="home-list-title">{title}</div>',
                                    '    <div class="home-list-con">',
                                    '        <div class="home-list-left">{company}</div>',
                                    '        <div class="home-list-right">{date}</div>',
                                    '    </div>',
                                    '</div>'
                                ],
                                store: 'Home_Unconfirmed_lsit',
                                onItemDisclosure: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: '我已确认',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'list',
                                flex: 1,
                                cls: 'home-list',
                                id: 'Home_Confirmed_lsit',
                                itemTpl: [
                                    '<div class="home-list-box">',
                                    '    <div class="home-list-title">{title}</div>',
                                    '    <div class="home-list-con">',
                                    '        <div class="home-list-left">{company}</div>',
                                    '        <div class="home-list-right">{date}</div>',
                                    '    </div>',
                                    '</div>'
                                ],
                                store: 'Home_Confirmed_lsit',
                                onItemDisclosure: true
                            }
                        ]
                    }
                ]
            }
        ]
    }

});