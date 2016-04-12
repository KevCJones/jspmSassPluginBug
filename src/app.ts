import style from './a.scss!';

function injectCSS(c) {
    var d = document,
        a = 'appendChild',
        i = 'styleSheet',
        s = d.createElement('style');
    s.type = 'text/css';
    d.getElementsByTagName('head')[0][a](s);
    s[i] ?
        s[i].cssText = c :
        s[a](d.createTextNode(c));
}


console.log('launching app...');
injectCSS(style);

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
