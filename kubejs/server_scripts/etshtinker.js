ServerEvents.recipes(event => {
  	// 铋三氧化硫
  	event.replaceInput({mod:'etshtinker',type:'create:mixing',output:'etshtinker:bismuth_ingot'}, 'create:zinc_nugget','createaddition:biomass')
  	//悚怖钢
	event.remove([{mod: 'dreadsteel', output: 'dreadsteel:dreadsteel_ingot' }])
  	//血肉重铸
	event.remove([{mod: 'biomancy', output: 'biomancy:primordial_core' }])
  	//硫化橡胶熔炉配方
	event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting' })
  	//神晶AE配方
	event.remove({ id: 'etshtinker:ae2/soakwater/blood_certus' })
	event.remove({ id: 'etshtinker:ae2/soakwater/soul_fluix' })
    event.remove({ id: 'tinkers_reforged:titanium_ingot_to_block' })
	//超致密
	event.replaceInput({mod: 'etshtinker', id: 'etshtinker:mekanism/compressing/ultra_dense' }, 'etshtinker:os_induced_netherstarshard','kubejs:compressed_hardlead')
	event.replaceOutput({mod: 'etshtinker', id: 'etshtinker:mekanism/compressing/ultra_dense' }, 'etshtinker:ultra_dense','kubejs:ultra_dense_nugget')
	//奇迹物质
	event.remove([{mod: 'etshtinker', output: 'etshtinker:exo_alloy' }])
	//粉默认配方
	event.remove([{mod: 'etshtinker', output: 'etshtinker:activated_neutronium_dust' }])
	//流体中子
	event.remove([{id: 'etshtinker:smeltery/melting/overchargedneutronium/overchargedneutronium'}])1
})