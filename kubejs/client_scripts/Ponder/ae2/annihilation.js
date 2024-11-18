Ponder.registry((event) => {
    event.create("ae2:annihilation_plane")
    .scene("annihilation","破坏面板使用方法","kubejs:ae2_base_casing",
        (scene,utils) => {
            scene.showBasePlate()

            scene.world.setBlocks([6,1,3,6,1,5],"ae2:cable_bus",false)
            scene.world.setBlocks([6,1,6],"ae2:controller",false)
            scene.world.setBlocks([7,1,4],"minecraft:chest",false)
            scene.world.setBlocks([6,1,2],"minecraft:stone")

            scene.world.modifyTileNBT([6,1,2,6,1,5],nbt => {
                nbt.cable = {
                    id: 'ae2:fluix_glass_cable',
                    visual: {
                        connections: ["north","south"]
                    }
                }
            },true)

            scene.world.modifyTileNBT([6,1,3],nbt => {
                nbt.north = {
                    id: 'ae2:annihilation_plane'
                }
            })
            scene.idle(20)
            scene.world.showSection([6,1,2,7,1,6],Direction.UP)
            scene.text(40,"破坏面板§9没有§r过滤能力\n我们需要使用§9存储总线§r为破坏面板§9所在网络§r标记过滤")
            scene.world.modifyTileNBT([6,1,4],nbt => {
                nbt.cable = {
                    id: 'ae2:fluix_glass_cable',
                    visual: {
                        connections: ["north","south","east"]
                    }
                }
                nbt.east = {
                    id: 'ae2:storage_bus'
                }
            })
            scene.idle(40)

            scene.showControls(40,[6.8,2,4],"DOWN")
                .withItem("minecraft:stone")

            scene.idle(20)
            scene.world.modifyBlocks([6,1,6],state => state.with("state","online"),false)
            scene.idle(20)
            scene.world.setBlocks([6,1,2],"minecraft:air",true)
            // scene.world.showSection([6,1,2],Direction.north)
            scene.idle(20)
        }
    )


})