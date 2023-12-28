const _realConsole = window.console;
const consoleOutput = (logAuthor = "silenceAlert.js") => {
  const style = {
    // Remember to change these as well on module.js
    leftPrefix: "background:  #00205B; color: white; border-radius: 0.5rem 0 0 0.5rem; padding: 0 0.5rem",
    rightPrefix:
      "background: #B9975B; color: white; border-radius: 0 0.5rem 0.5rem 0; padding: 0 0.5rem; font-weight: bold",
    text: "",
  };
  return [`%cMyInfo+%c${logAuthor}%c`, style.leftPrefix, style.rightPrefix, style.text];
};
const console = {
  ..._realConsole,
  log: _realConsole.log.bind(_realConsole, ...consoleOutput()),
  warn: _realConsole.warn.bind(_realConsole, ...consoleOutput()),
  error: _realConsole.error.bind(_realConsole, ...consoleOutput()),
};

//The default logout alert interupts the redirect
//This is dumb because it relies on them never changing the alert message
const newAlert = window.alert;
window.alert = function(msg) {
    if (msg != 'Session timeout occurred') {
        newAlert(msg);
    }
}
console.log("Successfully applied alert fix")