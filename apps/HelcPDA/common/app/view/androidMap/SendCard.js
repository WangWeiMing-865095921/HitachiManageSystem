﻿/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('HelcPDA.view.androidMap.SendCard', {
    extend: 'Ext.Panel',
    id:'sendCard',
    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '工号收集',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        iconCls: '',
                        text: '地图',
                        id:'sendCardBack'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'textfield',
                        height: 35,
                        width: 191,
                        id:'number',
                        label: '',
                        placeHolder:'合同号或工号(精确)'
                    },
                    {
                        xtype: 'button',
                        height: 34,
                        width: 88,
                        id:'searchCardNum',
                        iconCls: 'search',
                        text: ''
                    }
                ]
            },
            {
            	xtype:'panel',
            	height:'100%',
            	width:'100%',
            	items:[
            	        {
                            xtype: 'list',
                            height:'100%',
                            id:'sendCard_list',
                            store:'MaintenaceSendCardStore',
                            itemTpl: [
                            ]
                        }
            	       ]
            }
    
        ]
    }

});