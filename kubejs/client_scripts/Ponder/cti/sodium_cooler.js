Ponder.registry((event) => {
    event.create("cti:sodium_cooler")
        .scene("kubejs:sodium_cooler", "微型裂变反应堆", "kubejs:sodium_cooler", (scene, utils) => {
        scene.showBasePlate()
        scene.idle(5)
        scene.world.showSection([3, 1, 3], Direction.DOWN)
        scene.idle(5)
        scene.text(40, "相当于一个单方块的、安全的裂变装置", [3.5,1.5,3.5])
        scene.idle(65)
        scene.text(40, "左侧输入燃料，右侧输出§4核废料§r", [3.5,1.5,3.5])
        scene.idle(65)
        scene.addKeyframe()
        scene.text(125, "以下方块属于气体容器：", [3.5,1.5,3.5])
        scene.idle(25)
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
        // scene.text(30, "由于技术原因，mek的管道无法在思索界面展示连接材质，我们会尽量减少mek管道的出现")
        // scene.idle(45)
        scene.world.setBlocks([2, 1, 1], "mekanism:ultimate_pressurized_tube")
        scene.world.setBlocks([3, 1, 1], "ae2:interface")

        scene.text(20, "AE2的ME接口", [1.5,1.5,1.5])
        fadeInSection(scene, [3, 1, 1], [-2, 0, 0], Direction.EAST, 20);
        scene.text(20, "加压管道", [1.5,1.5,1.5])
        fadeInSection(scene, [2, 1, 1], [-1, 0, 0], Direction.EAST, 20);
        scene.text(20, "化学品储罐", [1.5,1.5,1.5])
        fadeInSection(scene, [1, 1, 1], [0, 0, 0], Direction.EAST, 20);

        scene.text(60, "由于mek适配问题，思索展示存在bug，我们将尽量减少mek管道的出现")
        scene.idle(75)

        scene.world.showSection([6, 1, 3, 4, 1, 3], Direction.DOWN)
        scene.addKeyframe()
        scene.text(30, "左侧输入裂变燃料", [5.5,1.5,3.5])
        scene.idle(45)
        scene.world.showSection([2, 1, 3, 0, 1, 3], Direction.DOWN)
        scene.text(60,"只有ae与加压管道能缓存微型裂变产出的§4核废料\n务必保证你了解§4核废料§r的危险性")
        scene.idle(75)
        scene.text(30, "右侧输出§4核废料", [1.5,1.5,3.5])
        scene.idle(45)
        scene.text(30, "最后输出能量即可")
        scene.idle(30)
        scene.addKeyframe()
        scene.world.showSection([3, 2, 3, 3, 6, 3], Direction.DOWN)
        scene.text(60, "答应我，别这么做好吗", [3.5,3.5,3.5])
        scene.idle(75)
        scene.text(40, "裂变堆的产出效率不是pipez的管道可以承受的", [3.5,3.5,3.5])
        scene.idle(55)
        scene.addKeyframe()
        scene.world.setBlocks([3, 6, 3, 3, 3, 3], "minecraft:air",true)
        scene.world.setBlocks([3, 2, 3], "mekaevolution:infinite_universal_cable",true)
        scene.text(40, "mekaevolution的无限能量管道", [3.5,2.5,3.5])
        scene.idle(55)
        scene.world.setBlocks([3, 2, 3], "fluxnetworks:flux_plug",true)
        scene.world.modifyBlock([3, 2, 3], (state) => state.with("down", "true"), false)
        scene.text(40, "或是直接接入通量网络才是更好的选择", [3.5,2.5,3.5])
        scene.idle(55)
        scene.text(60, "只有ae与加压管道能缓存微型裂变产出的§4核废料\n务必保证你了解§4核废料§r的危险性", [2.5,1.5,3.5])
        scene.addKeyframe()
        scene.idle(85)
        scene.world.setBlocks([1, 1, 3, 0, 1, 3], "ae2:cable_bus",true)
        scene.world.setBlocks([2, 1, 3], "ae2:interface",true)
        scene.world.modifyTileNBT([1,1,3,0,1,3],nbt => {
            nbt.cable = {
                id: "ae2:fluix_covered_cable",
                visual: {
                    connections: ["east","west"]
                }
            }
        },true)
        scene.text(40, "当然，你也可以试试这个结构", [2.5,1.5,3.5])
        scene.idle(40)
    })
})
///setblock 2268 72 1203 ae2:cable_bus[light_level=0,waterlogged=false]{ForgeCaps:{},cable:{gn:{g:0L,k:-1L,p:0},id:"ae2:fluix_covered_cable"},hasRedstone:2}