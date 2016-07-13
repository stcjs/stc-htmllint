import Plugin from 'stc-plugin';
import defaultOptions from './default_options';
import {extend} from 'stc-helper';

let options = null;
let htmllint = null;

/**
 * Use htmllint to check code
 * */
export default class HTMLLintPlugin extends Plugin {
  async run() {
    if(!htmllint) {
      htmllint = require('htmllint');
    }
    if(!options){
      let ignoreReg = this.config.tpl.ld + ".*" + this.config.tpl.rd;
      options = extend(defaultOptions, {
        'attr-name-ignore-regex': ignoreReg,
        'id-class-ignore-regex': ignoreReg,
        'line-max-len-ignore-regex': ignoreReg,
      }, this.options);
    }
    
    let content = await this.getContent('UTF-8');
    
    var messages = null;
    await htmllint(content, options).then((issues)=> {
      messages = issues.map(item => {
        return {
          line: item.line,
          column: item.column,
          msg: (item.msg || htmllint.messages.renderIssue(item)) + ' (' + item.code + ') | ' + JSON.stringify(item.data)
        }
      });
    });
    return messages;
  }
  /**
   * 
   */
  update(messages) {
    messages.forEach(item => {
      this.error(item.msg, item.line-1, item.column);
    });
  }
  /**
   * use cluster
   */
  static cluster() {
    return true;
  }
  /**
   * enable cache
  */
  static cache() {
    return true;
  }
}
