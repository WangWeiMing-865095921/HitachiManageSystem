/*
 * File: app/view/MyPanel49.js
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

Ext.define('HelcPDA.view.install.installBoxSearch.InstallBoxSearchListDetail', {
    extend: 'Ext.Panel',
    id:'installBoxSearchListDetail',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.field.Toggle',
        'Ext.field.Search',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: '箱头详细',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: '返回',
                        id:'BackSearch',
                    },
                    {
                        xtype: 'spacer'
                    }
                       ]
                      },
                           {
                                	xtype:'fieldset',
                                    height: '100%',
                                    items:[
                                           {
                                               xtype: 'formpanel',
                                               height: '100%',
                                               items: [     
                                                           {
                                                               xtype: 'textfield',
                                                               label: '合同号',
                                                               labelWidth: '50%',
                                                               id:'XT_ENGCONTRACT_NUMBER',
                                                               value: [
                                                               ],
                                                               readOnly: true
                                                           },
                                                           {
                                                               xtype: 'textfield',
                                                               label: '工号',
                                                               id:'XT_ELEVATOR_NO',
                                                               labelWidth: '50%',
                                                               value: [
                                                                   
                                                               ],
                                                               readOnly: true
                                                           },	 
                                                           {
                                                               xtype: 'textfield',
                                                               label: '箱头号',
                                                               id:'XT_ELVBOX_NAME',
                                                               labelWidth: '50%',
                                                               value: [
                                                                   
                                                               ],
                                                               readOnly: true
                                                           },
                                                           {
                                                               xtype: 'textfield',
                                                               label: '状态',
                                                               id:'XT_STATUS',
                                                               height:50,
                                                               labelWidth: '50%',
                                                               readOnly: true
                                                           },
														    {
                                                              xtype: 'textfield',
                                                              label: '监理',
                                                              labelWidth: '50%',
                                                              id:'XT_INIT_PERSON_NAME',
                                                              value: [
                                                              ],
                                                              readOnly: true
                                                          },
                                               ]
                                           }
                                           ]
                                }]
    
}
});