
/* JavaScript content from app/store/ApproveStore.js in folder common */
Ext.define('HelcBPM.store.ApproveStore',{
	extend:'Ext.data.Store',
	config:{
		fields:[
			'documentId',
			'taskId',
			'appName',
			'bpdName',
			//安装分包
			'WthtNo',
			'Yfs',
			'GchtNo',
			'WthtType',
			'WtClientName',
			'Gcfws',
			'Spz',
			'WtspVersion',
			//配件销售
			'bmname',
			'BjClientName',
			'BjOrderNo',
			'BjWbClientName',
			'BjOrderName',
			'BjSpFl',
			'BjBjVersion',
			//维护修理
			'BjSjNo',
			'BjSjName',
			'HtType',
			'BjVersion',
			//维修改造
			'ClientType',
			'SpFl',
		],
	},
});