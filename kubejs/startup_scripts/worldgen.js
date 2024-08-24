WorldgenEvents.remove(event => {
	event.removeOres((props) => {
		// 移除矿石生成
		// 注：此处无法使用标签
		props.blocks = ['rftoolsbase:dimensionalshard_overworld']
		props.blocks = ['rftoolsbase:dimensionalshard_nether']
		props.blocks = ['rftoolsbase:dimensionalshard_end']
	})
})