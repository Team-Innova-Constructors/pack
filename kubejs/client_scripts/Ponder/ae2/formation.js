Ponder.registry((event) => {
    event.create("ae2:formation_plane")
    .scene("formation","成型面板使用方法","kubejs:ae2_base_casing",
        (scene,utils) => {
            scene.showBasePlate()

            scene.world.setBlocks([6,1,3,6,1,5],"ae2:cable_bus",false)
            scene.world.setBlocks([6,1,6],"ae2:controller",false)
            scene.world.setBlocks([7,1,4],"minecraft:chest",false)

            scene.world.modifyTileNBT([6,1,3,6,1,5],nbt => {
                nbt.cable = {
                    id: 'ae2:fluix_glass_cable',
                    visual: {
                        connections: ["north","south"]
                    }
                }
            },true)

            scene.world.modifyTileNBT([6,1,3],nbt => {
                nbt.north = {
                    id: 'ae2:formation_plane'
                }
            })
            scene.idle(20)
            scene.world.showSection([6,1,2,7,1,6],Direction.UP)
            scene.text(40,"成型面板§9没有§r主动输出能力\n我们需要使用§9输入总线§r为成型面板§9所在网络§r输入材料")
            scene.world.modifyTileNBT([6,1,4],nbt => {
                nbt.cable = {
                    id: 'ae2:fluix_glass_cable',
                    visual: {
                        connections: ["north","south","east"]
                    }
                }
                nbt.east = {
                    id: 'ae2:import_bus'
                }
            })
            scene.idle(40)

            scene.showControls(40,[7.3,2,4],"DOWN")
                .withItem("minecraft:stone")

            scene.idle(20)
            scene.world.modifyBlocks([6,1,6],state => state.with("state","online"),false)
            scene.idle(20)
            scene.world.setBlocks([6,1,2],"minecraft:stone",true)
            // scene.world.showSection([6,1,2],Direction.north)
            scene.idle(20)
        }
    )


})