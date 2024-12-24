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
})