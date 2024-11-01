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
})