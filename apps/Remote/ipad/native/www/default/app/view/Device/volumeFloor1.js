
/* JavaScript content from app/view/Device/volumeFloor1.js in folder common */
/*
 * File: app/view/Device/volumeFloor1.js
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

Ext.define('HelcRemote.view.Device.volumeFloor1', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Label',
        'Ext.form.Panel'
    ],

    config: {
        id: 'device_volumeFloor1',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'remote-device',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'remote-device-Box',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'remote-title',
                                docked: 'top',
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'remote-titleText',
                                        docked: 'left',
                                        html: '音量控制'
                                    }
                                ]
                            },
                            {
                                xtype: 'formpanel',
                                flex: 1,
                                data: [
                                    {
                                        text: '电影模式',
                                        code: 'DYSYSM1'
                                    },
                                    {
                                        text: '讲解模式',
                                        code: 'DYSYSM2'
                                    },
                                    {
                                        text: '全亮模式',
                                        code: 'DYSYSM3'
                                    },
                                    
                                ],
                                id: 'device_volumeFloor1Form',
                                scrollable: null
                            }
                        ]
                    }
                ]
            }
        ]
    }

});