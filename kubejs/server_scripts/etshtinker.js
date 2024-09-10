ServerEvents.recipes(event => {
  // 铋三氧化硫
  event.replaceInput({mod:'etshtinker',type:'create:mixing',output:'etshtinker:bismuth_ingot'}, 'create:zinc_nugget','createaddition:biomass')
  //反中子
  event.replaceInput({mod:'etshtinker',output:'etshtinker:anti_neutronium'}, 'etshtinker:ultra_dense','avaritia:neutron_ingot')
  //三一默认配方
	event.remove([{mod: 'etshtinker', output: 'etshtinker:trinity_intereactive_alloy' }])
  //悚怖钢
	event.remove([{mod: 'dreadsteel', output: 'dreadsteel:dreadsteel_ingot' }])
  //血肉重铸
	event.remove([{mod: 'biomancy', output: 'biomancy:primordial_core' }])
  //数采和电板
	event.remove([{mod: 'mekanism', output: 'mekanism:digital_miner' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:supreme_control_circuit' }])
	event.remove([{mod: 'mekanism', output: 'mekanism:elite_control_circuit' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:absolute_control_circuit' }])
	event.remove([{mod: 'mekaevolution', output: 'mekaevolution:cosmic_control_circuit' }])
  //硫化橡胶熔炉配方
	event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting' })
  //神晶AE配方
	event.remove({ id: 'etshtinker:ae2/soakwater/blood_certus' })
	event.remove({ id: 'etshtinker:ae2/soakwater/soul_fluix' })
  event.remove({ id: 'tinkers_reforged:titanium_ingot_to_block' })
	//超致密
	event.remove([{mod: 'etshtinker', output: 'etshtinker:ultra_dense' }])
	//奇迹物质
	event.remove([{mod: 'etshtinker', output: 'etshtinker:exo_alloy' }])
	//热力锭铸膜
	event.remove([{mod: 'thermal', output: 'thermal:chiller_ingot_cast' }])
	//金铜堆
	event.remove([{mod: 'iceandfire', output: 'iceandfire:copper_pile' }])
  event.remove([{mod: 'iceandfire', output: 'iceandfire:gold_pile' }])
  event.remove([{mod: 'ad_astra', output: 'ad_astra:steel_ingot' }])
	//pnt
	event.remove([{mod: 'thermal', output: 'thermal:phyto_tnt' }])
  event.remove([{mod: 'createoreexcavation', output: 'createoreexcavation:vein_finder' }])
  //重力透镜
	event.remove({id:'botania:lens_weight'})
  event.remove({id:'twilightforest:uncrafting_table'})
	event.remove({id:'projecte:rm_katar'})
	event.remove({id:'projecte:rm_sword'})
	event.remove({id:'projecte:rm_hammer'})
	event.remove({id:'projecte:rm_morning_star'})
	event.remove({id:'projecte:rm_shovel'})
	event.remove({id:'projecte:rm_shovel'})
	event.remove({id:'projecte:rm_axe'})
	event.remove({id:'projecte:rm_pick'})


})