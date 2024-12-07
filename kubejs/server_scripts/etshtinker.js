ServerEvents.recipes(event => {
  	// 铋三氧化硫
  	event.replaceInput({mod:'etshtinker',type:'create:mixing',output:'etshtinker:bismuth_ingot'}, 'create:zinc_nugget','createaddition:biomass')
  	//硫化橡胶熔炉配方
	event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting' })
    event.remove({ id: 'tinkers_reforged:titanium_ingot_to_block' })
	//奇迹物质
	event.remove([{mod: 'etshtinker', output: 'etshtinker:exo_alloy',type:'crafting_shaped' }])
	//粉默认配方
	event.remove([{mod: 'etshtinker', output: 'etshtinker:activated_neutronium_dust' }])
	//流体中子
	event.remove([{id: 'etshtinker:smeltery/melting/overchargedneutronium/overchargedneutronium'}])
	//天地宝晶
	event.remove([{id: 'etshtinker:powah/earth_crystal'}])
	event.remove([{id: 'etshtinker:powah/earth_crystal2'}])
	event.remove([{id: 'etshtinker:powah/earth_crystal3'}])
	event.remove([{id: 'etshtinker:powah/earth_crystal4'}])
	event.remove([{id: 'etshtinker:thermal/refinery/overchargedneutronium_refine'}])
})