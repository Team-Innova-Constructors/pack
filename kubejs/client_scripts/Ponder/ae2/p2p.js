Ponder.registry((event) => {
    event.create(["ae2:me_p2p_tunnel","ae2:redstone_p2p_tunnel","ae2:item_p2p_tunnel","ae2:fluid_p2p_tunnel","ae2:fe_p2p_tunnel","ae2:light_p2p_tunnel","appbot:mana_p2p_tunnel","appmek:chemical_p2p_tunnel"])
    //p2p原理
    .scene("p2p1","基本用法","kubejs:ae2_base_casing",
        (scene,utils) => {
            scene.showBasePlate()

            //展示
            scene.text(40,"p2p通道是一种用于传输的设备")
            scene.idle(10)
                //p2p面板，线缆
            scene.world.setBlocks([8, 1, 2], "ae2:cable_bus", false)
            scene.world.modifyTileNBT([8, 1, 2], nbt => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:false,connections:['north','south']
                    }
                }
                nbt.north = {
                    id: 'ae2:me_p2p_tunnel'
                }
            })

            scene.world.setBlocks([7,1,3,4,1,3], "ae2:cable_bus", false)
            scene.world.modifyTileNBT([7,1,3,4,1,3], nbt => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:false,connections:['east','west']
                    }
                }
            })
            scene.world.setBlocks([8,1,3], "ae2:cable_bus", false)
            scene.world.modifyTileNBT([8,1,3], nbt => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:false,connections:['west','north']
                    }
                }
                
            })
            scene.world.setBlocks([3,1,3], "ae2:cable_bus", false)
            scene.world.modifyTileNBT([3,1,3], nbt => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:false,connections:['south','east']
                    }
                }
            })
            scene.world.setBlocks([3,1,4], "ae2:cable_bus", false)
            scene.world.modifyTileNBT([3,1,4], nbt => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:false,connections:['north','south']
                    }
                }
                nbt.south = {
                    id: 'ae2:me_p2p_tunnel'
                }
            });
            scene.world.showSection([8,1,2,3,1,4],Direction.EAST)

            scene.idle(30)

            scene.text(60,"将其接入网络并用内存卡添加编号")

            scene.world.setBlocks([5,2,3],"ae2:controller",false)
            scene.world.modifyTileNBT([5,1,3],nbt => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:true,connections:['east','west','up']
                    }
                }
            })


            scene.world.modifyBlocks([5,2,3],(state) => state.with("state","online"),false)

            scene.world.showSection([5,2,3],Direction.DOWN)
            scene.idle(60)

            scene.text(80,"shift右键设置输入口",[9,2,2]).attachKeyFrame()
            scene.showControls(60, [8, 2, 2], "DOWN")
                .rightClick()
                .whileSneaking()
                .withItem("ae2:memory_card")

            scene.idle(60)

            scene.rotateCameraY(180)
            scene.world.modifyTileNBT([8,1,2],nbt => {
                nbt.north = {
                    id: 'ae2:me_p2p_tunnel',
                    freq: 1234,
                    visual: {
                        powered: true
                    }
                }
            })

            scene.idle(30)
            scene.text(60,"直接右键设置输出口",[3,2,4]).attachKeyFrame()
            scene.showControls(60, [3, 2, 4], "DOWN")
                .rightClick()
                .withItem("ae2:memory_card")


            scene.world.modifyTileNBT([3,1,4],nbt => {
                nbt.south = {
                    id: 'ae2:me_p2p_tunnel',
                    freq: 1234,
                    visual: {
                        powered: true
                    }
                }
            }
            )

            scene.idle(60)

            scene.text(60,"使用特定物品右键修改传输类型").attachKeyFrame()
            scene.showControls(40, [3, 2, 4], "DOWN")
            .rightClick()
            .withItem("minecraft:redstone")
            scene.idle(10)            
            scene.world.modifyTileNBT([3,1,4],nbt => {
                nbt.south = {
                    id: 'ae2:redstone_p2p_tunnel',
                    freq: 1234,
                    visual: {
                        powered: true
                    }
                }
            },
            true
            )
            scene.idle(60)
        }
    )
    .scene("p2p2","传输原理","kubejs:p2p",
        (scene,utils) => {
            scene.showStructure(6)

 
            scene.text(60,"其实p2p通道就像在两端开了一个任意门")
            scene.idle(20)
            scene.world.setBlocks([10,3,3,7,0,3],"minecraft:nether_portal",false)
            scene.world.modifyBlocks([10,3,3,7,0,3],(state)=> state.with("axis","x"))
            scene.world.setBlocks([4,3,7,1,0,7],"minecraft:nether_portal",false)
            scene.world.modifyBlocks([4,3,7,1,0,7],(state)=> state.with("axis","x"))
            scene.world.showSection([10,3,3,7,0,3],Direction.NORTH)
            scene.world.showSection([4,3,7,1,0,7],Direction.NORTH)

            scene.idle(40)
            scene.addKeyframe()
            scene.text(60,"任何传输都是实时、无损耗的，但它不能主动抽取")

            scene.world.setBlocks([10,0,2],"minecraft:redstone_wire",false)
            scene.world.setBlocks([7,0,2],"create:mechanical_pump",false)
            scene.world.setBlocks([10,0,1],"minecraft:redstone_torch",false)
            scene.world.setBlocks([7,0,1],"minecraft:water",false)
            scene.world.modifyBlocks([10,0,2],(state) => state.with("north","side").with("south","side").with("power","15"))
            scene.world.modifyBlocks([10,0,1],(state) => state.with("lit","true"))
            scene.world.modifyBlocks([7,0,2],(state) => state.with("facing","south"))

            scene.idle(20)
            
            scene.rotateCameraY(120)

            scene.idle(40)
            scene.world.setBlocks([4,0,8],"minecraft:redstone_wire",false)
            scene.world.setBlocks([1,0,8,1,1,8],"create:fluid_tank",false)
            scene.world.modifyBlocks([1,0,8],(state) => state.with("top","false"),true)
            scene.world.modifyBlocks([1,1,8],(state) => state.with("bottom","false"),true)
            scene.world.modifyBlocks([4,0,8],(state) => state.with("north","side").with("south","side").with("power","0"),false)
            scene.world.modifyTileNBT([1,1,8],(nbt) => {
                nbt.Controller = {
                    X: 1,Y: 0 ,Z: 8
                }
            })
            scene.idle(20)

            scene.world.setBlocks([5,1,5],"ae2:controller",false)
            scene.world.modifyBlocks([5,1,5],(state) => state.with("state","online"))
            scene.world.modifyTileNBT([5,0,5],(nbt) => {
                nbt.cable = {
                    id: "ae2:orange_smart_cable",
                    visual:{
                        channel:0,powered:true,connections:['up','east','west']
                    }
                }
            })

            scene.rotateCameraY(60)
            scene.text(60,"将其接入网络就相当于两端连接在一起了")
            scene.idle(60)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 0,
                    FluidName: "minecraft:water"
                }
            })
            scene.text(60,"水被逐渐传输至储罐",[1,1,8])
            scene.text(60,"红石信号被传输至红石粉",[4,0,8])
            scene.addKeyframe()
            scene.world.modifyBlocks([4,0,8],(state) => state.with("north","side").with("south","side").with("power","14"))
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 1000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 2000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 3000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 4000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 5000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 6000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 7000,
                    FluidName: "minecraft:water"
                }
            })
            scene.idle(10)
            scene.world.modifyTileNBT([1,0,8],(nbt) => {
                nbt.TankContent = {
                    Amount: 8000,
                    FluidName: "minecraft:water"
                }
            })



        }
    )



})