Ponder.registry((event) => {
    event.create(["ae2:quantum_ring","ae2:quantum_link","ae2:quantum_entangled_singularity"])
    .scene("quantumring","量子环的基本用法","kubejs:ae2_base_casing",
        (scene,utils) => {
            scene.showBasePlate()

            scene.world.setBlocks([8,1,3,6,3,3],"ae2:quantum_ring",false)
            scene.world.setBlocks([7,2,3],"ae2:quantum_link",false)

            scene.world.setBlocks([4,1,6,2,3,6],"ae2:quantum_ring",false)
            scene.world.setBlocks([3,2,6],"ae2:quantum_link",false)

            scene.world.setBlocks([3,4,6],"ae2:cable_bus",false)
            scene.world.setBlocks([3,5,6],"ae2:controller",false)

            scene.world.setBlocks([7,4,3],"ae2:cable_bus")
            scene.world.setBlocks([9,2,3],"ae2:energy_acceptor",false)
            scene.world.setBlocks([10,2,3],"fluxnetworks:flux_point",false)
            scene.world.modifyBlocks([10,2,3],(state) => state.with("west","true"),false)

            scene.idle(10)
            scene.text(60,"搭建量子环结构")
            for(let y = 1; y < 4; y++){
                for(let x = 8; x > 5; x--){
                    scene.world.showSection([x,y,3],Direction.DOWN)
                    scene.idle(3)
                }
            }

            for(let y = 1; y < 4; y++){
                for(let x = 4; x > 1; x--){
                    scene.world.showSection([x,y,6],Direction.DOWN)
                    scene.idle(3)
                }
            }

            scene.idle(10)
            scene.world.modifyBlocks([7,1,3,7,3,3],state => state.with("formed","true"))
            scene.world.modifyBlocks([8,2,3,6,2,3],state => state.with("formed","true"))
            scene.world.modifyBlocks([3,1,6,3,3,6],state => state.with("formed","true"))
            scene.world.modifyBlocks([4,2,6,2,2,6],state => state.with("formed","true"))


            scene.idle(40)
            scene.addKeyframe()
            scene.showControls(40, [7.5,3,3], "DOWN")
                .withItem("ae2:quantum_entangled_singularity")
            scene.showControls(40, [3.5,3,6], "DOWN")
                .withItem("ae2:quantum_entangled_singularity")
            scene.text(40, "为量子环添加缠绕态奇点")
            scene.idle(60)
            scene.addKeyframe()
            //可用面
            scene.text(80,"量子环§4并不是所有面§r都可以使用\n并且一个量子环只能传输32个频道")
            scene.overlay.showOutline("green", {}, [7,1,3], 60)
            scene.overlay.showOutline("green", {}, [7,3,3], 55)
            scene.overlay.showOutline("green", {}, [6,2,3], 50)
            scene.overlay.showOutline("green", {}, [8,2,3], 45)

            scene.overlay.showOutline("green", {}, [3,1,6], 60)
            scene.overlay.showOutline("green", {}, [3,3,6], 55)
            scene.overlay.showOutline("green", {}, [2,2,6], 50)
            scene.overlay.showOutline("green", {}, [4,2,6], 45)
            scene.idle(90)

            scene.addKeyframe()
            scene.text(40,"将量子环接入网络，注意首次连接需要给§9两端都供电§r")
            scene.idle(30)
            scene.world.modifyTileNBT([3,4,6],nbt => {
                nbt.cable = {
                    id: 'ae2:fluix_covered_dense_cable',
                    visual:{
                        connections: ['up','down']
                    }
                }
            },false)


            scene.world.modifyTileNBT([7,4,3],nbt => {
                nbt.cable = {
                    id: 'ae2:fluix_covered_cable',
                    visual:{
                        connections: ['down']
                    }
                }
                nbt.up = {
                    id: 'ae2:level_emitter'
                }
                
            },false)

            scene.world.showSection([3,4,6,3,5,6],Direction.DOWN)
            scene.world.showSection([7,4,3],Direction.DOWN)
            scene.idle(30)
            scene.world.modifyBlocks([3,5,6],state => state.with("state","online"),false)
            scene.world.showSection([10,2,3,9,2,3],Direction.WEST)
            scene.idle(20)
            scene.world.modifyTileNBT([7,4,3],nbt => {
                nbt.up = {
                    id: 'ae2:level_emitter',
                    visual: {
                        on: true
                    }
                }
            },true)
            scene.text(40,"量子环两端连接成功！",[7,5.5,3])
            scene.idle(40)

        }
    )
})