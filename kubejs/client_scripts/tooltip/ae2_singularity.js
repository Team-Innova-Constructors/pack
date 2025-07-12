(() => { // 用这种古怪的结构以防 “Redeclaration of 'keyNBT'” 错误，愚蠢的Lat Rhino

    // https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/96f3ed7018dab3af76fbf756e84fd1e9d18bdbc3/src/main/java/appeng/blockentity/qnb/QuantumBridgeBlockEntity.java#L226
    const keyNBT = 'freq';

    const emojis = '─│┌┐└┘├┤┬┴┼═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▀▄█▌▐░▒▓⚠⚡⚥✂✉✎✔✘❄❣❤⭐'.split('');

    /**
     * @type {dev.latvian.mods.rhino.mod.util.color.Color_[]}
     */
    const colorsAe = [
        // 'black',
        'dark_blue',
        'dark_green',
        'dark_aqua',
        // 'dark_red',
        'dark_purple',
        // 'gold',
        'gray',
        // 'dark_gray',
        'blue',
        'green',
        'aqua',
        // 'red',
        'light_purple',
        // 'yellow',
        'white'
    ];

    const cutDownLen = emojis.length * colorsAe.length;
    const splitLen = colorsAe.length;

    /**
     * @param {long} freq
     */
    function emojifiedFreq(freq) {
        if (freq == 0) {
            return Text.string('0');
        }
        const emojified = Text.of('Freq').green().append(Text.of(': ').white());
        if (freq < 0) {
            freq = -freq;
            emojified.append('-');
        }
        let hasNext = true;
        while (hasNext) {
            let cut = freq % cutDownLen;
            freq = Math.floor(freq / cutDownLen);
            emojified.append(
                Text.string(emojis[Math.floor(cut / splitLen)]).color(colorsAe[Math.floor(cut % splitLen)])
            );
            hasNext = freq != 0;
        }
        return emojified;
    }

    ItemEvents.tooltip(event => {
        event.addAdvanced(
            ["ae2:quantum_entangled_singularity"],
            (stack, isAdvanced, tooltips) => {
                if (!stack.hasNBT()) {
                    return;
                }
                const freq = stack.nbt.getLong(keyNBT);
                tooltips.add(emojifiedFreq(freq));
            }
        );
    })
})()
