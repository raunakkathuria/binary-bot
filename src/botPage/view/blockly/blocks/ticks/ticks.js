// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2jo335
import { beforeSell } from '../../relationChecker'
import { translator } from '../../../../../common/translator'

Blockly.Blocks.ticks = {
  init: function init() {
    this.appendDummyInput()
      .appendField(translator.translateText('Ticks List'))
    this.setOutput(true, 'Array')
    this.setColour('#f2f2f2')
    this.setTooltip(translator.translateText('Returns the list of tick values')); // eslint-disable-line max-len
    this.setHelpUrl('https://github.com/binary-com/binary-bot/wiki')
  },
  onchange: function onchange(ev) {
    beforeSell(this, ev, 'Ticks List')
  },
}
Blockly.JavaScript.ticks = () => ['Bot.expect.notEmptyArray(ticks.ticks).map(function(i){return Bot.expect.tick(i).quote;})',
  Blockly.JavaScript.ORDER_ATOMIC]
