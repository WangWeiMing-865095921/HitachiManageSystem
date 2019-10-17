
/* JavaScript content from app/view/HasEnded/HasEnded.js in folder common */
/*
 * File: app/view/MyPanel4.js
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

Ext.define('HelcOA.view.HasEnded.HasEnded', {
    extend: 'Ext.Panel',
    id:'HasEnded_id',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        style: 'background-color:#edebf1',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '一天内已结束的流程',
                items: [
                        {
                        	xtype: 'button',
                            iconCls: 'home',
                            id: 'returnHome_ID'
                        }
                    ]
            },
            {
                xtype: 'list',
                flex: 1,
                id: 'yjs_HasEndedList',
                itemTpl: [
                    '<table border=0 class="i_Button_List">',
                    '  <tr>',
                    '      <td rowspan="3" class="i_Button_List_Icon_1 i_Button_List_Icon_2" style="color:#854107">O</td>',
                    '      <td colspan="2" class="i_Button_List_Title">{major}{subject}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td class="i_Button_List_left">{processname}</td>',
                    '      <td class="i_Button_List_right">{createdate}</td>',
                    '  </tr>',
                    '  <tr>',
                    '      <td ><span class={endstauts}>{endstauts}</span></td>',
                    '  </tr>',
                    '</table>'
                ],
                onItemDisclosure: true,
                store:'HasEndedStore'
            }
        ]
    }

});