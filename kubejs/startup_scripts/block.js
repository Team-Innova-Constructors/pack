StartupEvents.registry("block",event=>{
    event.create("ultra_dense_block","basic").requiresTool(true).hardness(5.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.NETHERITE_BLOCK)
    event.create("protonium_block","basic").requiresTool(true).hardness(8.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.NETHERITE_BLOCK)
    event.create("electronium_block","basic").requiresTool(true).hardness(8.0).resistance(2048).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool').material('netherite').soundType(SoundType.NETHERITE_BLOCK)
})