// MMEvents.createProcesses(event => {
//     //挥发熔岩(石油焦粉)
//     event.create("mm:volatile_lava_petcoke_dust")
//     .structureId("mm:lava_centrifugal")
//     .ticks(2)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'immersivepetroleum:petcoke_dust',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:volatile_lava",
//             amount: 10000
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 100000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:dense_lava",
//             amount: 5000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'etshtinker:bismuthinite',
//             count: 10
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'gobber2:gobber2_glob',
//             count: 10
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:raw_copper',
//             count: 40
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:raw_gold',
//             count: 20
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:raw_iron',
//             count: 30
//         }
//     })
//     .output({
//             type: "mm:output/simple",
//             ingredient: {
//             type: "mm:item",
//             item: 'mekanism:raw_osmium',
//             count: 20
//         }
//     })
//     //挥发熔岩（焦煤粉）
//     event.create("mm:volatile_lava_dust_coke")
//     .structureId("mm:lava_centrifugal")
//     .ticks(2)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'immersiveengineering:dust_coke',
//             count: 1
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:volatile_lava",
//             amount: 5000
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 1000000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:dense_lava",
//             amount: 2500
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'etshtinker:bismuthinite',
//             count: 5
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'gobber2:gobber2_glob',
//             count: 5
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:raw_copper',
//             count: 20
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:raw_gold',
//             count: 10
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:raw_iron',
//             count: 15
//         }
//     })
//     .output({
//             type: "mm:output/simple",
//             ingredient: {
//             type: "mm:item",
//             item: 'mekanism:raw_osmium',
//             count: 10
//         }
//     })
//     //浓稠熔岩+燧石
//     event.create("mm:dense_lava_flint")
//     .structureId("mm:lava_centrifugal")
//     .ticks(2)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:flint',
//             count: 3
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:dense_lava",
//             amount: 500
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 50000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:used_lava",
//             amount: 200
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'thermal:raw_nickel',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'thermal:raw_tin',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'thermal:raw_silver',
//             count: 2
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'thermal:raw_lead',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'immersiveengineering:raw_aluminum',
//             count: 3
//         }
//     })
//     .output({
//             type: "mm:output/simple",
//             ingredient: {
//             type: "mm:item",
//             item: 'mekanism:raw_uranium',
//             count: 8
//         }
//     })
//         //浓稠熔岩+灵魂沙
//         event.create("mm:dense_lava_soul_sand")
//         .structureId("mm:lava_centrifugal")
//         .ticks(2)
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'minecraft:soul_sand',
//                 count: 8
//             },
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "kubejs:dense_lava",
//                 amount: 500
//             }
//         })
//         .input({
//             type: "mm:input/consume",
//             ingredient: {
//                 type: "mm:energy",
//                 amount: 50000
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:fluid",
//                 fluid: "kubejs:used_lava",
//                 amount: 200
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'minecraft:quartz',
//                 count: 8
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'tconstruct:raw_cobalt',
//                 count: 3
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'minecraft:netherite_scrap',
//                 count: 2
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'kubejs:tungsten_ingot',
//                 count: 2
//             }
//         })
//         .output({
//             type: "mm:output/simple",
//             ingredient: {
//                 type: "mm:item",
//                 item: 'tinkers_thinking:raw_ardite',
//                 count: 3
//             }
//         })
//         .output({
//                 type: "mm:output/simple",
//                 ingredient: {
//                 type: "mm:item",
//                 item: 'gobber2:gobber2_glob_nether',
//                 count: 1
//             }
//         })
//     //用尽的熔岩+末地石
//     event.create("mm:used_lava_endstone")
//     .structureId("mm:lava_centrifugal")
//     .ticks(2)
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:end_stone',
//             count: 3
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:item",
//             item: 'pneumaticcraft:glycerol',
//             count: 3
//         },
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "kubejs:used_lava",
//             amount: 200
//         }
//     })
//     .input({
//         type: "mm:input/consume",
//         ingredient: {
//             type: "mm:energy",
//             amount: 50000
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "tinkerscalibration:moltentitanium",
//             amount: 90
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         chance:0.20,
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:shulker_shell',
//             count: 1
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'tinkers_reforged:raw_kepu',
//             count: 2
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'gobber2:gobber2_glob_end',
//             count: 1
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'tinkers_reforged:raw_titanium',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:chorus_fruit',
//             count: 10
//         }
//     })
//     .output({
//             chance:0.10,
//             type: "mm:output/simple",
//             ingredient: {
//             type: "mm:item",
//             item: 'tinkersinnovation:raw_void_crystal',
//             count: 1
//         }
//     })
//      //用尽的熔岩+矿渣
//      event.create("mm:used_lava_slag_gravel")
//      .structureId("mm:lava_centrifugal")
//      .ticks(2)
//      .input({
//          type: "mm:input/consume",
//          ingredient: {
//              type: "mm:item",
//              tag: 'forge:slag',
//              count: 4
//          },
//      })
//      .input({
//          type: "mm:input/consume",
//          ingredient: {
//              type: "mm:item",
//              item: 'minecraft:amethyst_shard',
//              count: 2
//          },
//      })
//      .input({
//          type: "mm:input/consume",
//          ingredient: {
//              type: "mm:fluid",
//              fluid: "kubejs:used_lava",
//              amount: 200
//          }
//      })
//      .input({
//          type: "mm:input/consume",
//          ingredient: {
//              type: "mm:energy",
//              amount: 50000
//          }
//      })
//      .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:fluid",
//             fluid: "tinkerscalibration:moltentitanium",
//             amount: 90
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:diamond',
//             count: 2
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:emerald',
//             count: 2
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'minecraft:lapis_lazuli',
//             count: 6
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'thermal:cinnabar',
//             count: 3
//         }
//     })
//     .output({
//         type: "mm:output/simple",
//         ingredient: {
//             type: "mm:item",
//             item: 'thermal:apatite',
//             count: 5
//         }
//     })
//     .output({
//             type: "mm:output/simple",
//             ingredient: {
//             type: "mm:item",
//             item: 'thermal:niter',
//             count: 7
//         }
//     })
// })