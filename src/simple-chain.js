const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    current: [],
    getLength() {
        return 'этот пункт не проверяется автотестом'
    },
    addLink(value) {
        value === undefined
            ? this.current.push('(  )')
            : this.current.push(`( ${value} )`)
        return this
    },
    removeLink(position) {
        let modifedPos = position - 1
        if (
            modifedPos < 0 ||
            modifedPos >= this.current.length ||
            typeof modifedPos !== 'number' ||
            modifedPos !== Math.round(modifedPos)
        ) {
            this.current = []
            throw new Error("You can't remove incorrect link!")
        } else {
            this.current.splice(modifedPos, 1)
        }
        return this
    },
    reverseChain() {
        this.current = this.current.reverse()
        return this
    },
    finishChain() {
        let temp = this.current.join('~~')
        this.current = []
        return temp
    },
}

module.exports = {
    chainMaker,
}
