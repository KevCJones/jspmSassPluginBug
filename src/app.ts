import * as style from './a.scss!';


console.log('launching app...');
style;

const log = document.querySelector('#log');

// Print console logs to html div
['log','warn','error'].forEach(function (verb: string) {
    console[verb] = (function (method: any, verb: any, log: any) {
        return function (text: string) {
            method(text);

            var msg = document.createElement('code');
            msg.classList.add(verb);
            msg.textContent = verb + ': ' + text;
            log.appendChild(msg);
        };
    })(console[verb].bind(console), verb, log);
})
