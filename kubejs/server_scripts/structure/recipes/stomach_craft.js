// MMEvents.createProcesses(event => {
//     //酸液
//     event.create("mm:stomach_acid")
//         .structureId("mm:stomach")
//         .ticks(40)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'biomancy:toxin_extract',
//                 count: 1
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: "biomancy:withering_ooze",
//                 count: 2
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: "biomancy:nutrients",
//                 count: 3
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "minecraft:water",
//                 amount: 4000
//             }
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 5000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "biomancy:acid",
//                 amount: 2000
//             }
//         })
//         //幽匿脉络
//         event.create("mm:stomach_sculk_vein")
//         .structureId("mm:stomach")
//         .ticks(40)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'minecraft:sculk_vein',
//                 count: 1
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "biomancy:acid",
//                 amount: 1000
//             }
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 20000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'tinkers_thinking:molten_echo',
//                 amount: 50
//             }
//         })
//         //幽匿块
//         event.create("mm:stomach_sculk")
//         .structureId("mm:stomach")
//         .ticks(200)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'minecraft:sculk',
//                 count: 1
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "biomancy:acid",
//                 amount: 2000
//             }
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 40000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'tinkers_thinking:molten_echo',
//                 amount: 100
//             }
//         })
//         //幽匿催发体
//         event.create("mm:stomach_sculk_catalyst")
//         .structureId("mm:stomach")
//         .ticks(400)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'minecraft:sculk_catalyst',
//                 count: 1
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "biomancy:acid",
//                 amount: 4000
//             }
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 80000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'tinkers_thinking:molten_echo',
//                 amount: 200
//             }
//         })
//         //怪物肌腱
//     event.create("mm:stomach_mob_sinew")
//         .structureId("mm:stomach")
//         .ticks(40)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'biomancy:mob_sinew',
//                 count: 1
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'biomancy:acid',
//                 amount: 100
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 1000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:elastic_fibers',
//                 count: 8
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:flesh_bits',
//                 count: 2
//             }
//         })
//         //怪物骨髓
//     event.create("mm:stomach_mob_marrow")
//         .structureId("mm:stomach")
//         .ticks(40)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'biomancy:mob_marrow',
//                 count: 1
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'biomancy:acid',
//                 amount: 100
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 1000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:hormone_secretion',
//                 count: 5
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:mineral_fragment',
//                 count: 2
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:bone_fragments',
//                 count: 4
//             }
//         })
//         //凋灵骨髓
//     event.create("mm:stomach_withered_mob_marrow")
//         .structureId("mm:stomach")
//         .ticks(40)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'biomancy:withered_mob_marrow',
//                 count: 1
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'biomancy:acid',
//                 amount: 100
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 1000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:withering_ooze',
//                 count: 5
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:bone_fragments',
//                 count: 4
//             }
//         })
//         //胆囊
//     event.create("mm:stomach_mob_gland")
//         .structureId("mm:stomach")
//         .ticks(40)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'biomancy:mob_gland',
//                 count: 1
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: 'biomancy:acid',
//                 amount: 100
//         },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 1000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:elastic_fibers',
//                 count: 3
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:flesh_bits',
//                 count: 3
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item:'biomancy:bile',
//                 count: 6
//             }
//         })
//         //毒囊
//     event.create("mm:stomach_toxin_gland")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'biomancy:toxin_gland',
//             count: 1
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: 'biomancy:acid',
//             amount: 100
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:elastic_fibers',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:flesh_bits',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:toxin_extract',
//             count: 5
//         }
//     })
//     //不稳定腺囊
//     event.create("mm:stomach_volatile_gland")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'biomancy:volatile_gland',
//             count: 1
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: 'biomancy:acid',
//             amount: 100
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:elastic_fibers',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:flesh_bits',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:volatile_fluid',
//             count: 5
//         }
//     })
//     //凋灵骷髅头
//     event.create("mm:stomach_skeleton_skull")
//     .structureId("mm:stomach")
//     .ticks(100)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:wither_skeleton_skull',
//             count: 1
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: 'biomancy:acid',
//             amount: 100
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bone_fragments',
//             count: 48
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:mineral_fragment',
//             count: 7
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:withering_ooze',
//             count: 16
//         }
//     })
//     //僵尸头
//     event.create("mm:stomach_zombie_head")
//     .structureId("mm:stomach")
//     .ticks(100)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:zombie_head',
//             count: 1
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: 'biomancy:acid',
//             amount: 100
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:elastic_fibers',
//             count: 9
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:flesh_bits',
//             count: 24
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'minecraft:skeleton_skull',
//             count: 1
//         }
//     })
//     //骷髅头
//     event.create("mm:stomach_skeleton_skull")
//     .structureId("mm:stomach")
//     .ticks(100)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:skeleton_skull',
//             count: 1
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: 'biomancy:acid',
//             amount: 100
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bone_fragments',
//             count: 48
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:mineral_fragment',
//             count: 7
//         }
//     })
//     //玩家头
//     event.create("mm:stomach_player_head")
//     .structureId("mm:stomach")
//     .ticks(100)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:player_head',
//             count: 1
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: 'biomancy:acid',
//             amount: 100
//     },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:elastic_fibers',
//             count: 9
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:flesh_bits',
//             count: 32
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'minecraft:skeleton_skull',
//             count: 1
//         }
//     })
//     //紫水晶碎片
//     event.create("mm:stomach_amethyst_shard")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:amethyst_shard',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:gem_fragments',
//             count: 5
//         }
//     })
//     //下界之星
//     event.create("mm:stomach_nether_star")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:nether_star',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 200
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 2000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:exotic_dust',
//             count: 50
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:gem_fragments',
//             count: 20
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bio_lumens',
//             count: 25
//         }
//     })
//     //铜锭
//     event.create("mm:stomach_copper_ingot")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:copper_ingot',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:mineral_fragment',
//             count: 9
//         }
//     })
//     //沙砾
//     event.create("mm:stomach_gravel")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:gravel',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:stone_powder',
//             count: 6
//         }
//     })
//     //烈焰粉
//     event.create("mm:stomach_blaze_powder")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:blaze_powder',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:exotic_dust',
//             count: 1
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bio_lumens',
//             count: 2
//         }
//     })
//     //烈焰棒
//     event.create("mm:stomach_blaze_rod")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:blaze_rod',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:exotic_dust',
//             count: 2
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bio_lumens',
//             count: 4
//         }
//     })    //烈焰粉
//     event.create("mm:stomach_blaze_powder")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:blaze_powder',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:exotic_dust',
//             count: 1
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bio_lumens',
//             count: 2
//         }
//     })
//     //萤石
//     event.create("mm:stomach_glowstone")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:glowstone',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:exotic_dust',
//             count: 4
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bio_lumens',
//             count: 4
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:stone_powder',
//             count: 4
//         }
//     })
//     //菌菇体
//     event.create("mm:stomach_shroomlight")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:shroomlight',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:bio_lumens',
//             count: 9
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:organic_matter',
//             count: 3
//         }
//     })
//         //冰龙
//     event.create("mm:stomach_ice_dragon_flesh")
//     .structureId("mm:stomach")
//     .ticks(10)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'iceandfire:ice_dragon_flesh',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "tinkers_ingenuity:ice_dragon_blood",
//             amount: 300
//         }
//     })
//     //火龙
//     event.create("mm:stomach_fire_dragon_flesh")
//     .structureId("mm:stomach")
//     .ticks(10)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'iceandfire:fire_dragon_flesh',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "tinkers_ingenuity:fire_dragon_blood",
//             amount: 300
//         }
//     })
//     //雷龙
//     event.create("mm:stomach_lightning_dragon_flesh")
//     .structureId("mm:stomach")
//     .ticks(10)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'iceandfire:lightning_dragon_flesh',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "tinkers_ingenuity:lightning_dragon_blood",
//             amount: 300
//         }
//     })
//     //潜影壳
//     event.create("mm:stomach_shulker_shell")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:shulker_shell',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:mineral_fragment',
//             count: 10
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:stone_powder',
//             count: 2
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:tough_fibers',
//             count: 7
//         }
//     })
//     //皮革类
//     event.create("mm:stomach_leather")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             tag: 'forge:leather',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:tough_fibers',
//             count: 4
//         }
//     })
//     //下界疣块
//     event.create("mm:stomach_nether_wart_block")
//     .structureId("mm:stomach")
//     .ticks(40)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:nether_wart_block',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "biomancy:acid",
//             amount: 100
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item:'biomancy:nutrient_paste',
//             count: 18
//         }
//     })


// })