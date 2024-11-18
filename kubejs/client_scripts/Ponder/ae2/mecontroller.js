Ponder.registry((event) => {
    event.create("ae2:controller").scene("me_controller1","ME控制器","kubejs:ae2_base_casing",
                (scene,utils) => {
                    scene.showBasePlate()
                    scene.idle(20)

                    scene.world.setBlocks([3,1,3],"ae2:controller")
                    scene.world.showSection([3,1,3], Direction.DOWN)
                    
                    scene.idle(40)
                    scene.addKeyframe()
                    scene.idle(10)

                    //插电
                    scene.world.setBlocks([2,1,3],"fluxnetworks:flux_point")
                    scene.world.modifyBlocks([2,1,3],(state) => state.with("east","true"),false)
                    scene.world.showSection([2,1,3], Direction.EAST)

                    scene.idle(10)
                    scene.text(40, "为ME控制器连接电力", [2,1,3.5])
                    scene.world.modifyBlocks([3,1,3],(state) => state.with("state","online"),false)

                    scene.idle(60)
                    scene.addKeyframe()
                    scene.idle(10)

                    //单方向最大七格
                    scene.text(80, "ME控制器在一个方向上最多只能有七个")

                    scene.world.setBlocks([4,1,3,9,1,3],"ae2:controller")
                    scene.world.modifyBlocks([4,1,3,9,1,3],(state) => state.with("type","column_x"),false)
                    scene.world.setBlocks([10,1,3],"ae2:controller")
                    scene.world.showSection([4,1,3,10,1,3],Direction.DOWN)

                    
                    scene.idle(20)

                    scene.world.modifyBlocks([3,1,3,10,1,3],(state) => state.with("state","conflicted"),false)

                    scene.idle(30)

                    scene.world.setBlocks([10,1,3,9,1,3],"minecraft:air",true)
                    scene.world.showSection([10,1,3,9,1,3],Direction.UP)
                    scene.world.modifyBlocks([8,1,3],(state) => state.with("type","block"),false)

                    scene.idle(10)

                    scene.world.modifyBlocks([8,1,3,3,1,3],(state) => state.with("state","online"),false)

                    scene.idle(60)
                    scene.addKeyframe()
                    scene.idle(10)

                    //平面内周围最多三个
                    scene.text(80,"一个面内，一个ME控制器周围最多三个ME控制器",[5,1,4])

                    scene.world.setBlocks([4,1,2,4,1,4],"ae2:controller",false)
                    scene.world.showSection([4,1,2,4,1,4],Direction.UP)

                    scene.idle(5)

                    scene.world.modifyBlocks([8,1,3,3,1,3],state => state.with("state","conflicted"),false)
                    scene.world.modifyBlocks([4,1,2],state => state.with("state","conflicted"),false)
                    scene.world.modifyBlocks([4,1,4],state => state.with("state","conflicted"),false)
                    scene.world.modifyBlocks([4,1,3],state => state.with("type","inside_a"),false)

                    scene.idle(5)

                    scene.overlay.showOutline("red", {}, [3, 1, 2, 5, 1, 4], 45)

                    scene.idle(40)

                    scene.world.setBlocks([4,1,2],"minecraft:air",true)
                    scene.world.showSection([4,1,2],Direction.UP)

                    scene.idle(5)

                    scene.world.modifyBlocks([8,1,3,3,1,3],state => state.with("state","online"),false)
                    scene.world.modifyBlocks([4,1,4],state => state.with("state","online"),false)
                    scene.world.modifyBlocks([4,1,3],state => state.with("type","column_x"),false)
                    scene.world.modifyBlocks([4,1,3],state => state.with("state","online"),false)

                    scene.idle(40)
                    scene.addKeyframe()
                    scene.idle(10)

                    //一个网络只能有一个控制器结构
                    scene.text(80,"一个ME网络只能有一个控制器结构")
                    scene.world.setBlocks([4,1,5], "ae2:cable_bus", false);
                    scene.world.modifyTileNBT([4,1,5],nbt => {
                        nbt.cable = {
                            id: "ae2:fluix_glass_cable",
                            visual: {
                                connections: ['north', 'south']
                            }
                        }
                    })

                    scene.world.setBlocks([4,1,6],"ae2:controller")
                    scene.world.showSection([4,1,6],Direction.NORTH)
                    scene.world.modifyBlocks([3,1,3,8,1,6],state => state.with("state","conflicted"),false)
                    scene.world.showSection([4,1,5],Direction.NORTH)
                    scene.rotateCameraY(180)

                    scene.idle(60)

                    scene.world.setBlocks([4,1,6],"minecraft:air",true)
                    scene.world.modifyTileNBT([4,1,5],nbt => {
                        nbt.cable = {
                            id: "ae2:fluix_glass_cable",
                            visual: {
                                connections: ['north']
                            }
                        }
                    })
                    scene.world.modifyBlocks([3,1,3,8,1,6],state => state.with("state","online"),false)
                }
                )
})