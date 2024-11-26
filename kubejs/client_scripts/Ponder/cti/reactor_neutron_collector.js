function fadeInSection(scene, selection, movingOffset, direction, idleTicks) {
    let link = scene.world.showIndependentSection(selection, direction);
    scene.world.moveSection(link, movingOffset, 0); // 0 to instantly move
    scene.idle(idleTicks);
    scene.world.hideIndependentSection(link, direction);
    scene.idle(idleTicks);
}



Ponder.registry((event) => {
    event.create("cti:reactor_neutron_collector")
        .scene("kubejs:reactor_neutron_collector", "反应堆中子素收集器", "kubejs:reactor_neutron_collector", (scene, utils) => {
        scene.showBasePlate()
        scene.idle(5)
        scene.world.showSection([3, 1, 3], Direction.DOWN)
        scene.idle(5)
        scene.text(60, "使用§9过热钠§r来§9发电、获得电子、中子与质子§r", [3.5,1.5,3.5])
        scene.idle(75)
        scene.text(80, "从左侧的§9气体容器§r中抽取过热钠，输出钠蒸汽到右侧的§9气体容器§r中，其他产物则输出至上方容器", [3.5,1.5,3.5])
        scene.world.showSection([4, 1, 3],Direction.DOWN)
        scene.idle(5)
        scene.world.showSection([3, 2, 3],Direction.DOWN)
        scene.idle(5)
        scene.world.showSection([2, 1, 3],Direction.DOWN)
        scene.idle(95)

        scene.text(60, "需要注意：§4必须放入催化剂§r才能工作", [3.5,1.5,3.5])
        scene.idle(10)
        scene.world.hideSection([2, 1, 3],Direction.UP)
        scene.idle(10)
        scene.world.hideSection([3, 2, 3],Direction.UP)
        scene.idle(10)
        scene.world.hideSection([4, 1, 3],Direction.UP)
        scene.idle(65)
        scene.addKeyframe()

        scene.text(125, "以下方块属于气体容器：")
        scene.idle(25)

        scene.world.setBlocks([2, 1, 1], "mekanism:ultimate_pressurized_tube")
        scene.world.setBlocks([3, 1, 1], "ae2:interface")

        scene.text(20, "AE2的ME接口", [1.5,1.5,1.5])
        fadeInSection(scene, [3, 1, 1], [-2, 0, 0], Direction.EAST, 20);
        scene.text(20, "加压管道", [1.5,1.5,1.5])
        fadeInSection(scene, [2, 1, 1], [-1, 0, 0], Direction.EAST, 20);
        scene.text(20, "化学品储罐", [1.5,1.5,1.5])
        fadeInSection(scene, [1, 1, 1], [0, 0, 0], Direction.EAST, 20);


        // scene.world.showSection([1, 1, 1], Direction.DOWN)
        // scene.text(20, "化学品储罐", [1.5,1.5,1.5])
        // scene.idle(35)
        // scene.world.setBlocks([1, 1, 1], "mekanism:ultimate_pressurized_tube",false)
        // scene.text(20, "加压管道", [1.5,1.5,1.5])
        // scene.idle(35)
        // scene.world.setBlocks([1, 1, 1], "ae2:interface",false)
        // scene.text(20, "以及AE2的ME接口", [1.5,1.5,1.5])
        // scene.idle(35)
        // scene.world.setBlocks([1, 1, 1], "minecraft:air",false)
        scene.text(60, "由于mek适配问题，思索展示存在bug，我们将尽量减少mek管道的出现")
        scene.idle(75)
        scene.world.showSection([6, 1, 3, 4, 1, 3], Direction.DOWN)
        scene.addKeyframe()
        scene.text(40, "左侧输入过热钠", [5.5,1.5,3.5])
        scene.idle(65)
        scene.world.showSection([2, 1, 3, 0, 1, 3], Direction.DOWN)
        scene.text(40, "右侧输出钠蒸汽", [1.5,1.5,3.5])
        scene.idle(65)
        scene.world.showSection([3, 2, 3], Direction.DOWN)
        scene.text(40, "上方输出额外产物", [3.5,2.5,3.5])
        scene.idle(65)
        scene.rotateCameraY(-100)
        scene.idle(15)
        scene.world.showSection([3, 1, 4, 3, 1, 6], Direction.DOWN)
        scene.text(40, "放入催化剂运行设备", [3.5,1.5,5.5])
        scene.idle(65)
        scene.rotateCameraY(100)
        scene.idle(15)
        scene.world.showSection([3, 1, 2], Direction.DOWN)
        scene.text(40, "最后输出能量即可",[3.5,1.5,2.5])
        scene.idle(65)
        // scene.addKeyframe()
        // scene.rotateCameraY(90)
        // scene.world.setBlocks([5, 1, 3, 6, 1, 3], "ae2:cable_bus",true)
        // scene.world.modifyTileNBT([5,1,3,6,1,3],nbt => {
        //     nbt.cable = {
        //         id: "ae2:fluix_covered_cable",
        //         visual: {
        //             connections: ["east","west"]
        //         }
        //     }
        // },true)
        // scene.world.modifyTileNBT([5,1,3],nbt => {
        //     nbt.west = {
        //         id:"ae2:export_bus"
        //     }
        // },true)
        // scene.overlay.showOutline("red", {}, [4, 1, 3, 6, 1, 3], 30)
        // scene.text(30, "我们极度反对用AE2的输出总线输出气体，即使打满加速升级速度也远低于pipez气体管道和终极加压管道",[5.5,1.5,3.5])
        // scene.idle(45)
        // scene.world.setBlocks([5, 1, 3, 6, 1, 3], "pipez:gas_pipe",true)
        // scene.world.modifyBlock([5, 1, 3], (state) => state.with("east", "true"), false)
        // scene.world.modifyBlock([6, 1, 3], (state) => state.with("east", "true"), false)
        // scene.world.modifyBlock([5, 1, 3], (state) => state.with("west", "true"), false)
        // scene.world.modifyBlock([6, 1, 3], (state) => state.with("west", "true"), false)
        // scene.rotateCameraY(-90)
        // scene.text(30, "打了终极管道升级的pipez管道与终极加压管道速率相差不大，不过加压管道有缓存且不需要储罐中转，各位可自行选择",[5.5,1.5,3.5])
        scene.idle(65)
    })
})
///setblock 2271 72 1210 pipez:gas_pipe[down=false,east=true,has_data=false,north=false,south=false,up=false,waterlogged=false,west=true]