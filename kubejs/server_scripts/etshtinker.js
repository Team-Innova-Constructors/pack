ServerEvents.recipes(event => {
  // 铋三氧化硫
  event.replaceInput({mod:'etshtinker',type:'create:mixing',output:'etshtinker:bismuth_ingot'}, 'create:zinc_nugget','createaddition:biomass')
  //反中子
  event.replaceInput({mod:'etshtinker',output:'etshtinker:anti_neutronium'}, 'etshtinker:ultra_dense','avaritia:neutron_ingot')
})