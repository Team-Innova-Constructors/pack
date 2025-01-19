ServerEvents.recipes(event => {
    event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
              "bottom": {
                "item": "ae2:spatial_cell_component_16"
              },
              "middle": {
                "item": "ae2:singularity"
              },
              "top": {
                "item": "megacells:cell_component_4m"
              }
            },
            "mode": "press",
            "result": {
              "item": "megacells:bulk_cell_component"
            }
      })
    event.replaceInput({mod:'megacells',type:'crafting_shaped',output:'megacells:cell_component_4m'}, 'ae2:ender_dust','#forge:dusts/ender_pearl')
    event.replaceInput({mod:'megacells',type:'crafting_shaped',output:'megacells:cell_component_16m'}, 'ae2:ender_dust','#forge:dusts/ender_pearl')
    event.shaped(Item.of('ae2additions:super_cell_component_1k',8), [
      'BCB',
      'CAC',
      'BCB'
    ],
    {
      A: 'ae2:logic_processor',
      B: '#forge:ingots/steel',
      C: 'cti:rasterite'
    }
  )
  event.shaped(Item.of('ae2additions:super_cell_component_4k',4), [
    'BDB',
    'CAC',
    'BDB'
  ],
  {
    A: 'ae2:logic_processor',
    B: 'etshtinker:hardlead_plate',
    C: 'ae2additions:super_cell_component_1k',
    D:'cti:rasterite'
  }
)
event.shaped(Item.of('ae2additions:super_cell_component_16k',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:logic_processor',
  B: 'etshtinker:chroma_plate',
  C: 'ae2additions:super_cell_component_4k',
  D:'cti:rasterite'
}
)
event.shaped(Item.of('ae2additions:super_cell_component_64k',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:calculation_processor',
  B: 'etshtinker:chroma_plate',
  C: 'ae2additions:super_cell_component_16k',
  D:'cti:rasterite'
}
)
event.shaped(Item.of('ae2additions:super_cell_component_256k',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A:'ae2:calculation_processor',
  B: 'mekanism:alloy_atomic',
  C: 'ae2additions:super_cell_component_64k',
  D:'cti:rasterite'
}
)
event.shaped(Item.of('ae2additions:super_cell_component_1024k',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A:'ae2:calculation_processor',
  B: 'kubejs:zirconium_alloy',
  C: 'ae2additions:super_cell_component_256k',
  D:'cti:rasterite'
}
)
event.shaped(Item.of('ae2additions:super_cell_component_4096k',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A:'ae2:engineering_processor',
  B: 'kubejs:tungsten_steel_ingot',
  C: 'ae2additions:super_cell_component_1024k',
  D:'cti:rasterite'
}
)
event.shaped(Item.of('ae2additions:super_cell_component_16m',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A:'ae2:engineering_processor',
  B: 'etshtinker:ultra_dense',
  C: 'ae2additions:super_cell_component_4096k',
  D:'cti:rasterite'
}
)
event.shaped(Item.of('ae2additions:super_cell_component_65m',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A:'ae2:engineering_processor',
  B: 'kubejs:atherium_alloy',
  C: 'ae2additions:super_cell_component_16m',
  D:'cti:rasterite'
}
)

event.shaped(Item.of('ae2:cell_component_1k',4), [
  'BCB',
  'CAC',
  'BCB'
],
{
  A: 'ae2:quartz_glass',
  B: 'ae2:logic_processor',
  C: 'kubejs:pure_silicon',
}
)
event.shaped(Item.of('ae2:cell_component_4k',2), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:cell_component_1k',
  B: 'ae2:logic_processor',
  C: 'kubejs:pure_silicon',
  D: '#thermal:glass/hardened'
}
)
event.shaped(Item.of('ae2:cell_component_16k',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:cell_component_4k',
  B: 'ae2:logic_processor',
  C: 'kubejs:pure_silicon',
  D: '#thermal:glass/hardened'
}
)
event.shaped(Item.of('ae2:cell_component_64k',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:cell_component_16k',
  B: 'ae2:calculation_processor',
  C: 'kubejs:pure_silicon',
  D: 'thermal:enderium_glass'
}
)
event.shaped(Item.of('ae2:cell_component_256k',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:cell_component_64k',
  B: 'ae2:calculation_processor',
  C: 'kubejs:pure_silicon',
  D: 'thermal:enderium_glass'
}
)
event.replaceInput({mod:'megacells',type:'crafting_shaped',input:'megacells:cell_component_1m'}, 'megacells:cell_component_1m','#kubejs:cell_1m')
event.replaceInput({mod:'megacells',type:'crafting_shaped',input:'megacells:cell_component_4m'}, 'megacells:cell_component_4m','#kubejs:cell_4m')
event.replaceInput({mod:'megacells',type:'crafting_shaped',input:'megacells:cell_component_16m'}, 'megacells:cell_component_16m','#kubejs:cell_16m')
event.replaceInput({mod:'megacells',type:'crafting_shaped',input:'megacells:cell_component_64m'}, 'megacells:cell_component_64m','#kubejs:cell_64m')

event.replaceInput({mod:'ae2additions',type:'crafting_shaped',input:'ae2additions:cell_component_1024'}, 'ae2additions:cell_component_1024','#kubejs:cell_1m')
event.replaceInput({mod:'ae2additions',type:'crafting_shaped',input:'ae2additions:cell_component_4096'}, 'ae2additions:cell_component_4096','#kubejs:cell_4m')
event.replaceInput({mod:'ae2additions',type:'crafting_shaped',input:'ae2additions:cell_component_16384'}, 'ae2additions:cell_component_16384','#kubejs:cell_16m')
event.replaceInput({mod:'ae2additions',type:'crafting_shaped',input:'ae2additions:cell_component_65536'}, 'ae2additions:cell_component_65536','#kubejs:cell_64m')

event.shaped(Item.of('ae2additions:cell_component_1024',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2:cell_component_256k',
  B: 'ae2:calculation_processor',
  C: 'kubejs:pure_silicon',
  D: 'mekanism:structural_glass'
}
)
event.shaped(Item.of('ae2additions:cell_component_4096',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2additions:cell_component_1024',
  B: 'ae2:calculation_processor',
  C: 'kubejs:pure_silicon',
  D: 'mekanism:structural_glass'
}
)
event.shaped(Item.of('ae2additions:cell_component_16384',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2additions:cell_component_4096',
  B: 'ae2:calculation_processor',
  C: 'kubejs:pure_silicon',
  D: 'mekanismgenerators:reactor_glass'
}
)
event.shaped(Item.of('ae2additions:cell_component_65536',1), [
  'BDB',
  'CAC',
  'BDB'
],
{
  A: 'ae2additions:cell_component_16384',
  B: 'ae2:calculation_processor',
  C: 'kubejs:pure_silicon',
  D: 'mekanismgenerators:reactor_glass'
}
)
})