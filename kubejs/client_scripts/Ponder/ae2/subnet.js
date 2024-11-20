Ponder.registry((event) => {
    event.create(["ae2:quartz_fiber","ae2:storage_bus","ae2:me_p2p_tunnel"])
    .scene("subnet1","子网的基本概念","kubejs:ae2_base_casing",
        (scene,utils) => {
            scene.showBasePlate()

            scene.world.setBlocks([3,1,3],"ae2:controller")
            scene.world.setBlocks([5,1,3],"ae2:controller")

            scene.world.setBlocks([4,1,3], "ae2:cable_bus", false)
            scene.world.modifyTileNBT([4,1,3],nbt => {
                nbt.cable = {
                    id: "ae2:fluix_glass_cable",
                    visual: {
                        connections: ['east', 'west']
                    }
                }
            })
            scene.world.modifyBlocks([3,1,3,5,1,3],state => state.with("state","conflicted"),false)

            scene.text(60,"我们知道，一个ME网络中只能有一个ME控制器结构")
            scene.world.showSection([3,1,3,5,1,3],Direction.DOWN)
            scene.idle(60)

            scene.addKeyframe()
            scene.text(60,"所谓子网，就是两个网络通过某种方式连接在一起")
            scene.idle(60)
            scene.text(40,"所以我们需要把两个网络隔离")
            scene.addKeyframe()
            scene.idle(40)


            scene.world.modifyBlocks([3,1,3,5,1,3],state => state.with("state","online"),false)
            scene.text(40,"是石英纤维？")

            scene.showControls(40,[4,2.5,3],"DOWN")
                .withItem("ae2:quartz_fiber")
            
            scene.world.setBlocks([4,1,3], "ae2:cable_bus", true)
            scene.world.modifyTileNBT([4,1,3],nbt => {
                nbt.east = {
                    id:'ae2:quartz_fiber'
                }
            })
            scene.idle(40)

            scene.text(40,"是存储总线？")

            scene.showControls(40,[4,2.5,3],"DOWN")
                .withItem("ae2:storage_bus")

            scene.world.setBlocks([4,1,3], "ae2:cable_bus", true)
            scene.world.modifyTileNBT([4,1,3],nbt => {
                nbt.east = {
                    id:'ae2:storage_bus'
                }
            })
            scene.idle(40)

            scene.text(40,"还是p2p面板？")

            scene.showControls(40,[4,2.5,3],"DOWN")
            .withItem("ae2:me_p2p_tunnel")

            scene.world.setBlocks([4,1,3], "ae2:cable_bus", true)
            scene.world.modifyTileNBT([4,1,3],nbt => {
                nbt.east = {
                    id:'ae2:me_p2p_tunnel'
                }
            })
            scene.idle(40)

            scene.text(60,"依据你的需求而定，尽管发挥想象力！")
            scene.idle(60)
            

        }
    )
    .scene("subnet2","几种子网的功能","kubejs:ae2_base_casing",
        (scene,utils) => {
            scene.showBasePlate()

            //石英纤维
            scene.world.setBlocks([2,1,2],"ae2:controller",false)
            scene.world.setBlocks([2,1,4],"ae2:controller",false)
            scene.world.setBlocks([2,1,3],"ae2:cable_bus",false)
            scene.world.modifyTileNBT([2,1,3],nbt => {
                nbt.cable = {
                    id: "ae2:fluix_glass_cable",
                    visual: {
                        connections: ['south', 'north']
                    }
                }
                nbt.south = {
                    id:'ae2:quartz_fiber'
                }
            })


            scene.text(40,"子网络的功能由“连接介质”决定")
            scene.idle(40)


            scene.addKeyframe()
            scene.world.showSection([2,1,2,2,1,3],Direction.DOWN)
            scene.text(60,"譬如石英纤维只能传输电力")
            scene.world.modifyBlocks([2,1,2],state => state.with("state","online"),false)
            scene.idle(15)
            scene.world.showSection([2,1,4],Direction.DOWN)
            scene.idle(15)
            scene.world.modifyBlocks([2,1,4],state => state.with("state","online"),false)
            scene.idle(30)
            scene.world.hideSection([2,1,2,2,1,4],Direction.UP)
            scene.idle(20)

            //存储总线
            scene.world.setBlocks([4,1,2],"ae2:controller")
            scene.world.setBlocks([4,1,3],"ae2:cable_bus")
            scene.world.setBlocks([4,1,4],"ae2:interface")
            scene.world.setBlocks([4,1,5],"ae2:controller")
            scene.world.setBlocks([4,2,5],"ae2:cable_bus")
            scene.world.setBlocks([5,2,5],"minecraft:chest")
            scene.world.setBlocks([4,2,2],"ae2:cable_bus")

            scene.world.modifyTileNBT([4,2,2],nbt => {
                nbt.cable = {
                    id: "ae2:fluix_glass_cable",
                    visual:{
                        connections: ['down', 'west']
                    }
                }
                nbt.west = {
                    id: 'ae2:terminal'
                }
            })

            scene.world.modifyTileNBT([4,2,5],nbt => {
                nbt.cable = {
                    id:"ae2:fluix_glass_cable",
                    visual:{
                        connections: ['east', 'down']
                    }
                }
                nbt.east = {
                    id: 'ae2:storage_bus'
                }
            })


            scene.world.modifyTileNBT([4,1,3],nbt => {
                nbt.cable = {
                    id: "ae2:fluix_glass_cable",
                    visual: {
                        connections: ['south', 'north']
                    }
                }
                nbt.south = {
                    id:'ae2:storage_bus'
                }
            })
            
            scene.addKeyframe()
            scene.world.modifyBlocks([4,1,2,4,1,5],state => state.with("state","online"),false)
            scene.world.showSection([4,1,2,4,1,5],Direction.DOWN)
            scene.text(40,"再比如存储总线能够读写存储")
            scene.idle(40)
            scene.world.showSection([4,2,5,5,2,5],Direction.DOWN)
            scene.idle(20)
            scene.showControls(40,[5.5,2.5,5],"DOWN")
                .withItem("minecraft:apple")
            scene.idle(20)
            scene.world.showSection([4,2,2],Direction.EAST)
            scene.idle(40)
            scene.text(60, "所以主网可以读写子网存储", [5,1.5,4])
            scene.showControls(40,[5,2,4],"DOWN")
                .withItem("minecraft:apple")
            scene.idle(60)
            scene.world.hideSection([4,1,2,5,2,5],Direction.UP)
            scene.idle(20)

            //p2p组网
            scene.world.setBlocks([7,1,1],"fluxnetworks:flux_point",false)
            scene.world.modifyBlocks([7,1,1],(state) => state.with("south","true"),false)
            scene.world.setBlocks([7,1,2],"ae2:energy_acceptor",false)
            scene.world.setBlocks([7,1,3,7,1,7],"ae2:cable_bus",false)
            scene.world.setBlocks([7,1,8],"ae2:controller",false)
            scene.world.setBlocks([8,1,5],"ae2:controller",false)
            
            scene.world.modifyBlocks([8,1,5],state => state.with("state","online"),false)
            scene.world.modifyTileNBT([7,1,3],nbt => {
                nbt.cable = {
                    id: 'ae2:blue_covered_cable',
                    visual :{
                        connections:['north','south']
                    }
                }
            },false)
            scene.world.modifyTileNBT([7,1,7],nbt => {
                nbt.cable = {
                    id: 'ae2:blue_covered_cable',
                    visual :{
                        connections:['north','south']
                    }
                }
            },false)
            scene.world.modifyTileNBT([7,1,4],nbt => {
                nbt.cable = {
                    id: 'ae2:orange_covered_cable',
                    visual :{
                        connections:['north','south']
                    }
                }
                nbt.north = {
                    id: 'ae2:me_p2p_tunnel'
                }
            },false)

            scene.world.modifyTileNBT([7,1,5],nbt => {
                nbt.cable = {
                    id: 'ae2:orange_covered_cable',
                    visual :{
                        connections:['north','south','east']
                    }
                }
            },false)

            scene.world.modifyTileNBT([7,1,6],nbt => {
                nbt.cable = {
                    id: 'ae2:orange_covered_cable',
                    visual :{
                        connections:['north','south']
                    }
                }
                nbt.south = {
                    id: 'ae2:me_p2p_tunnel'
                }
            },false)

            scene.addKeyframe()
            scene.text(40,"而me-p2p通道能够将两部分 §9空间§r 连接在一起")
            scene.world.showSection([7,1,1,7,1,3],Direction.DOWN)
            scene.world.showSection([7,1,7,7,1,8],Direction.DOWN)
            scene.idle(25)
            scene.text(40,"此处网络断开",[7,1.5,8])
            scene.idle(40)
            scene.text(40,"此处添加两个正常运行的p2p通道\n用以将两边连接在一起",[7,1,5,8])
            scene.world.showSection([7,1,4,8,1,6],Direction.UP)
            scene.idle(50)
            scene.world.modifyBlocks([7,1,8],state => state.with("state","online"),false)
            scene.text(40,"能源接收器正常为控制器供电",[7,1.5,8])
            scene.idle(50)
            scene.text(60, "所以主网可以把子网 §9跨越空间§r 连接在一起")
            scene.idle(80)
            scene.world.hideSection([7,1,1,8,2,8],Direction.DOWN)
        }
    )
})