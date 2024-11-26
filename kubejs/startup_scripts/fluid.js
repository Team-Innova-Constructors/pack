StartupEvents.registry("fluid",event=>{
    //流体注册

    //熔融锆
    let zirconium_fluid = event.create("zirconium_fluid").thinTexture(0xa4a163).thickTexture(0xa4a163).temperature(2000).bucketColor(0xa4a163).displayName("zirconium");
    let zirconiumAttributes = zirconium_fluid.createAttributes();
    zirconiumAttributes.dropOff(2);
    zirconiumAttributes.tickDelay(20);
    zirconium_fluid.attributes = zirconiumAttributes;
    //挥发性熔岩
    let volatile_lava = event.create("volatile_lava").thinTexture(0xc81a09).thickTexture(0xc81a09).temperature(1000).bucketColor(0xc81a09).displayName("volatile_lava");
    let volatilelavaAttributes = volatile_lava.createAttributes();
    volatilelavaAttributes.dropOff(2);
    volatilelavaAttributes.tickDelay(20);
    volatile_lava.attributes = volatilelavaAttributes;
    //高密度熔岩
    let dense_lava = event.create("dense_lava").thinTexture(0x480e03).thickTexture(0x480e03).temperature(1000).bucketColor(0x480e03).displayName("dense_lava");
    let denselavaAttributes = dense_lava.createAttributes();
    denselavaAttributes.dropOff(2);
    denselavaAttributes.tickDelay(20);
    dense_lava.attributes = denselavaAttributes;
    //用尽的熔岩
    let used_lava = event.create("used_lava").thinTexture(0x2e0300).thickTexture(0x2e0300).temperature(1000).bucketColor(0x2e0300).displayName("used_lava");
    let usedlavaAttributes = used_lava.createAttributes();
    usedlavaAttributes.dropOff(2);
    usedlavaAttributes.tickDelay(20);
    used_lava.attributes = usedlavaAttributes;
    //铝热剂
    let thermite = event.create("molten_thermite").thickTexture(0xFFDC8A).temperature(1300).bucketColor(0xFFDC8A).displayName("molten_thermite");
    let thermiteAttributes = thermite.createAttributes();
    thermiteAttributes.dropOff(2);
    thermiteAttributes.tickDelay(20);
    thermite.attributes = thermiteAttributes;
    //凛冰
    let fluid_cryotheum = event.create("fluid_cryotheum").thinTexture(0xabe9ff).temperature(1).bucketColor(0xabe9ff).displayName("fluid_cryotheum");
    let fluidcryotheumAttributes = fluid_cryotheum.createAttributes();
    fluidcryotheumAttributes.dropOff(2);
    fluidcryotheumAttributes.tickDelay(20);
    fluid_cryotheum.attributes = fluidcryotheumAttributes;
    //炽焰
    let fluid_pyrotheum = event.create("fluid_pyrotheum").thickTexture(0xffcd19).temperature(1300).bucketColor(0xffcd19).displayName("fluid_pyrotheum");
    let fluidpyrotheumAttributes = fluid_pyrotheum.createAttributes();
    fluidpyrotheumAttributes.dropOff(2);
    fluidpyrotheumAttributes.tickDelay(20);
    fluid_pyrotheum.attributes = fluidpyrotheumAttributes;
    //层岩
    let fluid_petrotheum = event.create("fluid_petrotheum").thickTexture(0x3f3f3f).temperature(1300).bucketColor(0x3f3f3f).displayName("fluid_petrotheum");
    let fluid_petrotheumAttributes = fluid_petrotheum.createAttributes();
    fluid_petrotheumAttributes.dropOff(2);
    fluid_petrotheumAttributes.tickDelay(20);
    fluid_petrotheum.attributes = fluid_petrotheumAttributes;
    //生长液
    let crystal_growth = event.create("crystal_growth").thinTexture(0x00ffff).temperature(500).bucketColor(0x00ffff).displayName("crystal_growth");
    let crystal_growthAttributes = crystal_growth.createAttributes();
    crystal_growthAttributes.dropOff(2);
    crystal_growthAttributes.tickDelay(20);
    crystal_growth.attributes = crystal_growthAttributes;
    //富二氧化碳水
    let co2_water = event.create("co2_water").thinTexture(0xeeede4).temperature(500).bucketColor(0xeeede4).displayName("co2_water");
    let co2_waterAttributes = co2_water.createAttributes();
    co2_waterAttributes.dropOff(2);
    co2_waterAttributes.tickDelay(20);
    co2_water.attributes = co2_waterAttributes;
    //钙质溶液
    let ca_solution = event.create("ca_solution").thinTexture(0xb6b5ae).temperature(500).bucketColor(0xb6b5ae).displayName("ca_solution");
    let ca_solutionAttributes = ca_solution.createAttributes();
    ca_solutionAttributes.dropOff(2);
    ca_solutionAttributes.tickDelay(20);
    ca_solution.attributes = ca_solutionAttributes;
    //浓缩腐蚀性生物酸
    let biotic_acids = event.create("biotic_acids").thinTexture(0x647a5d).temperature(500).bucketColor(0x647a5d).displayName("biotic_acids");
    let biotic_acidsAttributes = biotic_acids.createAttributes();
    biotic_acidsAttributes.dropOff(2);
    biotic_acidsAttributes.tickDelay(20);
    biotic_acids.attributes = biotic_acidsAttributes;
    //焦油混合物
    let tar_mix = event.create("tar_mix").thinTexture(0x413c40).temperature(500).bucketColor(0x413c40).displayName("tar_mix");
    let tar_mixAttributes = tar_mix.createAttributes();
    tar_mixAttributes.dropOff(2);
    tar_mixAttributes.tickDelay(20);
    tar_mix.attributes = tar_mixAttributes;
    //乙炔
    let ethyne = event.create("ethyne").thinTexture(0xcac1f5).temperature(500).bucketColor(0xcac1f5).displayName("ethyne");
    let ethyneAttributes = ethyne.createAttributes();
    ethyneAttributes.dropOff(2);
    ethyneAttributes.tickDelay(20);
    ethyne.attributes = ethyneAttributes;
    //重金属高温熔岩
    let hot_heavymetal_lava = event.create("hot_heavymetal_lava").thickTexture(0xff6923).temperature(2000).bucketColor(0xff6923).displayName("hot_heavymetal_lava");
    let hot_heavymetal_lavaAttributes = hot_heavymetal_lava.createAttributes();
    hot_heavymetal_lavaAttributes.dropOff(2);
    hot_heavymetal_lavaAttributes.tickDelay(20);
    hot_heavymetal_lava.attributes = hot_heavymetal_lavaAttributes;
    //晶体高温熔岩
    let hot_heavycrystal_lava = event.create("hot_heavycrystal_lava").thickTexture(0xffe5ca).temperature(2000).bucketColor(0xffe5ca).displayName("hot_heavymetal_lava");
    let hot_heavycrystal_lavaAttributes = hot_heavycrystal_lava.createAttributes();
    hot_heavycrystal_lavaAttributes.dropOff(2);
    hot_heavycrystal_lavaAttributes.tickDelay(20);
    hot_heavycrystal_lava.attributes = hot_heavycrystal_lavaAttributes;
    //蜂王浆
    let royal_jelly = event.create("royal_jelly").thinTexture(0xfff895).temperature(2000).bucketColor(0xfff895).displayName("royal_jelly");
    let royal_jellyAttributes = royal_jelly.createAttributes();
    royal_jellyAttributes.dropOff(2);
    royal_jellyAttributes.tickDelay(20);
    royal_jelly.attributes = royal_jellyAttributes;
})