ServerEvents.recipes(event =>
{
//机械动力：矿石开掘配方,drilling后面的括号是需要输出的物品,矿脉名称,生成权重,以 32 RPM 为单位的提取时间。
//残骸碎片
event.recipes.createoreexcavation.drilling('tconstruct:debris_nugget','{"text": "残骸碎片"}', 10, 300)
//钻头等级
.drill('createoreexcavation:netherite_drill')
//生物群落白名单
.biomeWhitelist('minecraft:is_nether')
//无限量
.alwaysInfinite()
//应力值
.stress(1024)
//配方id
.id("netherite");

//碧空史莱姆
event.recipes.createoreexcavation.extracting('tconstruct:sky_slime 2000','{"text": "碧空史莱姆"}', 10, 400)
//钻头等级
.drill('createoreexcavation:diamond_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("sky_slime");


//贫油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 500','{"text": "贫油"}', 10, 200)
//钻头等级
.drill('createoreexcavation:diamond_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(512)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("poor_oil");




//富油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 4000','{"text": "富油"}', 20, 200)
//钻头等级
.drill('createoreexcavation:diamond_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(512)
//生物群落白名单
// .biomeWhitelist('forge:is_desert')
.biomeWhitelist('forge:is_dry/overworld')
//配方id
.id("rich_oil");





//钴矿
event.recipes.createoreexcavation.drilling('tconstruct:raw_cobalt','{"text": "粗钴"}', 10, 200)
.drill('createoreexcavation:diamond_drill')
.biomeWhitelist('minecraft:is_nether')
.alwaysInfinite()
.stress(128)
.id("cobalt");

//阿迪特矿
event.recipes.createoreexcavation.drilling('tinkers_thinking:raw_ardite','{"text": "粗阿迪特"}', 10, 200)
.drill('createoreexcavation:diamond_drill')
.biomeWhitelist('minecraft:is_nether')
.alwaysInfinite()
.stress(128)
.id("ardite");

//钴-阿迪特伴生矿
event.recipes.createoreexcavation.drilling([Item.of('tconstruct:raw_cobalt'), Item.of('tinkers_thinking:raw_ardite')], '{"text": "钴-阿迪特伴生矿"}', 4, 400)
.drill('createoreexcavation:diamond_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_nether')
.alwaysInfinite()
.stress(192)
.id("cobalt_ardite_complex");

//锡矿
event.recipes.createoreexcavation.drilling('thermal:raw_tin','{"text": "锡矿"}', 10, 150)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(64)
.id("tin");

//银矿
event.recipes.createoreexcavation.drilling('thermal:raw_silver','{"text": "银矿"}', 10, 250)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(96)
.id("silver");

//铅矿
event.recipes.createoreexcavation.drilling('thermal:raw_lead','{"text": "铅矿"}', 10, 150)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(96)
.id("lead");

//镍矿
event.recipes.createoreexcavation.drilling('thermal:raw_nickel','{"text": "镍矿"}', 10, 150)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(128)
.id("nickel");

//铀矿
event.recipes.createoreexcavation.drilling('mekanism:raw_uranium','{"text": "铀矿"}', 10, 200)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(192)
.id("uranium");

//锇矿
event.recipes.createoreexcavation.drilling('mekanism:raw_osmium','{"text": "锇矿"}', 10, 150)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(128)
.id("osmium");

//朱砂矿
event.recipes.createoreexcavation.drilling('thermal:cinnabar','{"text": "朱砂矿"}', 10, 400)
.drill('createoreexcavation:drill')
.biomeWhitelist('minecraft:is_overworld')
.fluid('minecraft:lava')
.alwaysInfinite()
.stress(128)
.id("cinnabar");

//硫化铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('etshtinker:bismuthinite').withChance(0.1)], '{"text": "硫化铁矿"}', 4, 400)
.drill('createoreexcavation:diamond_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(192)
.id("iron_sulfide");
},
);