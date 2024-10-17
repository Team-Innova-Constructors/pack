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
    
})