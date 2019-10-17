/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
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

Ext.define('HelcPDA.controller.maintain.MyController', {
	extend:'HelcPDA.controller.ApplicationController',

    config: {
    	refs:{
			//关闭提示框
    		Main_PLAN_BYGJ_TWO:'button[id=Main_PLAN_BYGJ_TWO]',
    	},
        control: {
            "list#mylist6": {
                itemtap: 'onListItemTap'
            },
            "list#L_MaintainPlanListHome2016": {
                itemtap: 'onListItemTap'
            },
          //关闭提示框
    		Main_PLAN_BYGJ_TWO:{
    			tap:'Main_PLAN_BYGJ_TWO'
    		},
    		"list#serach_NumberList":{
    			itemtap:'serach_NumberList'
    		}
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
    	console.log('---点击进入保养计划详细');
//		var datads=Ext.data.StoreManager.get('MaintainPlanList');
//		if(!datads){
//			datads=Ext.create('HelcPDA.store.maintain.MaintainPlanList');
//		}
		console.log(record);
		var mpid = record.get("MP_ID");
		var PLAN_START_DT = record.get("PLAN_START_DT");
		if(Ext.getCmp('hidden2MP_ID')){
			Ext.getCmp('hidden2MP_ID').setValue(mpid+"/"+PLAN_START_DT);
		}
		console.log('重要的值 :'+mpid+"/"+PLAN_START_DT);
		// tcode:mpid+"/"+PLAN_START_DT+'_Value'
		this.NextView('DetailPanel','HelcPDA.view.maintain.MaintenancePlanDetailPanel');
		Ext.getCmp('ISACTIVE').setValue(record.get("ISACTIVE"));
		if(Ext.getCmp('MaintainAloneTime')){
			Ext.getCmp('MaintainTime').setValue(Ext.getCmp('MaintainAloneTime').getValue());
		}else{
			Ext.getCmp('MaintainTime').setValue(Ext.Date.format(new Date(PLAN_START_DT),'Y-m-d'));
		}
		
		  //zhj 无纸化
		Ext.getCmp('PLAN_STATUS_N').setValue(record.get('PLAN_STATUS'));
	
        //2014-5-19 xcx 安全提示
        var xiangmu = record.get("TASK_NAME"); 
        if(xiangmu=='半年度'){
        	xiangmu='BND';
        }else if(xiangmu=='半月'){
        	xiangmu='BY';
        };
    	var query={tcode:'mainsecmsg',tid:xiangmu};
    	var options={
				exact:false,//默认
		};
    	var Maintain=collectionName;
    	var MaintainList=WL.JSONStore.get(Maintain);
        MaintainList.find(query,options).then(function(arrayResults){
        	var num=arrayResults.length;
        	if(num==0){
        		return ;
        	}
        	var data= arrayResults[num-1].json.stext;
        	
        	if(xiangmu=='BND'||xiangmu=='BY'){
        	 	ovlay_MainTain4=Ext.Viewport.add({
					xtype:'panel',
					id:'statPanel4',
					hideOnMaskTap: true,
		 	            centered: true,
				     	modal: true,
				     	height:'80%',
				     	width: '90%',
				     	/*scrollable: {
				    		direction: 'vertical',
				    		directionLock: true
						},*/
				     	/*items:[{
				     		xtype:'container',
				     		html:'<div id="plan_tools2" style="width:100%;text-align:left;padding-left:10px;" ></div>'+
				     				'<div style="width:100%;text-align:center" ><input type="button" name="AQTSone" value="确定" onclick="disp_Twim()"/></div>',
				     	}]*/
						style: 'background:#ccc',
				        items: [{
				                xtype: 'container',
				                height: '100%',
				                margin: '200 auto 0 auto',
				                padding: '',
				                style: 'background:#fff',
				                width: '100%',
				                layout: 'vbox',
				                items: [
				                    {
				                        xtype: 'toolbar',
				                        docked: 'top',
				                        title: '安全提示',
				                        items: [
				                            {
				                                xtype: 'spacer'
				                            },
				                            {
				                                xtype: 'button',
				                                iconCls: 'delete',
				                                text: '',
				                                id:'Main_PLAN_BYGJ_TWO',
				                            }
				                        ]
				                    },
				                    {
				                        xtype: 'formpanel',
				                        padding: 10,
		                                height: '100%',
				                        items: [
				                            {
				                                xtype: 'label',
				                                height: '100%',
				                                html: '<div id="plan_toolsTwo"></div>',
				                                margin: '0 0 10 0'
				                            }
				                        ]
				                    },
				                    /*{
		                                xtype: 'togglefield',
		                                label: '今天不再显示',
		                                labelWidth: '74%',
		                                id:'Main_togglefield',
		                                name: '',
		                            },*/
				                ]
				            }]
				});
				var byaq=data.split('#*');
				var xs='';
				for(var i=0;i<byaq.length-1;i++){
					if(i==0){
						xs+='<h2 style="text-align:center;font-weight:bold">'+byaq[i]+'</h2>';
					}else{
						xs+=byaq[i]+'<br>';
					}
				};
				document.getElementById("plan_toolsTwo").innerHTML=xs;
				
        	};
        	
        }).fail(function(errorObject){
			//console.log("查询数据失败");
		});
        
      
        //查询打卡信息
        var obz=this;
        function getResult(res){
        	console.log('打卡信息--------------------');
        	console.log(res);
        	var sendCardTime=Ext.getCmp('sendCardTime');
        	var content=res.content;
        	var length=content.length;
        	var datalist=[];
        	if(length>1){
        		datalist[0]={START_TIME:'请选择',END_TIME:'',ID:''};
        		for(var i=0;i<length;i++){
            		datalist[i+1]={START_TIME:'开始时间:'+content[i].START_TIME,END_TIME:'结束时间:'+content[i].END_TIME,ID:content[i].ID};
            	}
        	}else{
        		for(var i=0;i<length;i++){
        			datalist[i]={START_TIME:'开始时间:'+content[i].START_TIME,END_TIME:'结束时间:'+content[i].END_TIME,ID:content[i].ID};
        		}
        	}
        	sendCardTime.addListener('tap',function(){
        		var PanelId='listNumberPanel';
            	var ListArray={};
            	ListArray.id='serach_NumberList';
            	ListArray.StoreName='MaintenaceSendCardStore';
            	ListArray.StoreFullName='HelcPDA.store.maintain.MaintenaceSendCardStore';
            	ListArray.StoreParam=["START_TIME","END_TIME"];
            	var Data=datalist;
            	obz.getList(PanelId,ListArray,Data);
        	});
        	//sendCardTime.setOptions(datalist);
        }
        var ASSET_NUM=record.get('ASSET_NUM');
        var obj={};
        obj.ELEVATOR_NO=ASSET_NUM;
        this.asyconnectServer(getResult, 'maintainancePlanItemListAction.do?method=toSearchCompletedMonth', JSON.stringify(obj));
        
    },
    //选择list触发事件
    serach_NumberList:function(dataview,index,target,record,e,eOpts){
    	var START_TIME=record.get('START_TIME');
    	var END_TIME=record.get('END_TIME');
    	var ID=record.get('ID');
    	var Panel_List_Id=Ext.getCmp('Panel_List_Id');
    	if(Panel_List_Id){
    		Panel_List_Id.destroy();
    	}
    	if(START_TIME=='请选择'){
    		Ext.getCmp('startTime').setValue();
    		Ext.getCmp('endTime').setValue();
    		Ext.getCmp('sendCardTime_ID').setValue();
    	}else{
    		Ext.getCmp('startTime').setValue(START_TIME.split(':')[1]);
    		Ext.getCmp('endTime').setValue(END_TIME.split(':')[1]);
    		Ext.getCmp('sendCardTime_ID').setValue(ID);
    	}
    }
    ,
    //关闭提示框
	Main_PLAN_BYGJ_TWO:function(){
		 disp_Twim();
	},
});
        
        
function disp_Twim(){
       var statPanel3=Ext.getCmp('statPanel4');
       if(statPanel3){
        		statPanel3.destroy();
        };
}        