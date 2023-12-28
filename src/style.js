// Used to compare content script's copy of local storage to the background script when background broadcasts a change
const _realConsole = window.console;
const consoleOutput = (logAuthor = "style.js") => {
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
var event = new CustomEvent("myInfoPlusOrphanedMessage");
console.log("Sending update notice to possible orphans");
window.dispatchEvent(event);

var displayState = true;
var titleStyle;
var mainStyle;

function createTitleStyle() {
    titleStyle = document.getElementById('MyInfoPlusTitleStyle');
    if(titleStyle == null) {
		let titleStyleElement = document.createElement("style");
		titleStyleElement.id = "MyInfoPlusTitleStyle"
		titleStyleElement.textContent = `
		body {
			margin-left: 10px !important;
			margin-right: 10px !important;
			background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8"%3F><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="71px" viewBox="0 0 299 71" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.235294%,16.078431%,40.784314%);fill-opacity:1;" d="M 35.769531 59.128906 L 35.769531 55.136719 L 35.4375 55.136719 C 32.226562 55.136719 31.230469 54.25 31.230469 51.140625 L 31.230469 33.613281 C 31.230469 32.949219 32.558594 32.949219 33 33.613281 L 45.625 53.914062 C 45.847656 54.136719 46.398438 55.136719 47.066406 54.027344 C 47.730469 52.917969 56.589844 38.828125 59.800781 33.613281 C 60.355469 32.949219 61.570312 32.949219 61.570312 33.613281 L 61.570312 51.140625 C 61.570312 54.25 60.6875 55.136719 57.363281 55.136719 L 57.03125 55.136719 L 57.03125 58.90625 C 63.765625 59.386719 70.441406 60.5 76.964844 62.234375 L 76.964844 55.136719 L 76.632812 55.136719 C 73.53125 55.136719 72.535156 54.25 72.535156 51.140625 L 72.535156 26.957031 C 72.535156 23.851562 73.421875 22.964844 76.632812 22.964844 L 76.964844 22.964844 L 76.964844 16.972656 L 58.582031 16.972656 C 58.582031 16.972656 49.390625 33.390625 46.84375 37.71875 C 46.84375 37.960938 46.644531 38.164062 46.398438 38.164062 C 46.15625 38.164062 45.957031 37.960938 45.957031 37.71875 L 34.328125 16.972656 L 15.835938 16.972656 L 15.835938 22.964844 L 16.167969 22.964844 C 19.378906 22.964844 20.265625 23.851562 20.265625 26.957031 L 20.265625 51.140625 C 20.265625 54.25 19.269531 55.136719 16.167969 55.136719 L 15.835938 55.136719 L 15.835938 62.679688 C 22.328125 60.929688 28.960938 59.738281 35.660156 59.128906 Z M 35.769531 59.128906 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(92.54902%,66.666667%,12.54902%);fill-opacity:1;" d="M 93.132812 68.671875 C 88.050781 65.816406 82.613281 63.652344 76.964844 62.234375 C 70.441406 60.5 63.765625 59.386719 57.03125 58.90625 C 53.710938 58.6875 50.386719 58.574219 46.953125 58.574219 C 43.519531 58.574219 39.421875 58.796875 35.660156 59.128906 C 28.960938 59.738281 22.328125 60.929688 15.835938 62.679688 C 10.375 64.140625 5.128906 66.304688 0.222656 69.113281 C 0 69.226562 -0.109375 69.558594 0 69.667969 C 0.09375 69.886719 0.316406 70.023438 0.554688 70 C 15.84375 66.777344 31.4375 65.214844 47.066406 65.34375 C 62.402344 65.300781 77.714844 66.675781 92.800781 69.445312 C 93.011719 69.527344 93.253906 69.429688 93.355469 69.226562 C 93.355469 69.003906 93.355469 68.78125 93.132812 68.671875 Z M 51.164062 8.984375 L 50.941406 9.207031 C 50.941406 11.425781 47.507812 16.75 47.507812 16.863281 L 44.628906 21.964844 C 41.972656 26.179688 43.519531 29.507812 46.179688 33.835938 L 46.398438 33.835938 L 53.929688 20.96875 C 56.257812 16.863281 54.152344 13.535156 52.160156 10.207031 L 51.496094 9.097656 L 51.164062 9.097656 Z M 51.164062 8.984375 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(92.941176%,83.529412%,48.627451%);fill-opacity:1;" d="M 46.398438 0 L 46.066406 0 L 38.539062 12.980469 C 36.324219 17.085938 38.425781 20.414062 40.421875 23.742188 L 41.085938 24.851562 L 41.304688 24.851562 L 41.527344 24.628906 C 41.527344 22.410156 44.960938 17.085938 45.070312 16.972656 L 47.949219 11.871094 C 50.496094 7.65625 48.949219 4.328125 46.398438 0 Z M 46.398438 0 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.235294%,16.078431%,40.784314%);fill-opacity:1;" d="M 163.011719 29.289062 C 163.011719 37.386719 158.136719 42.046875 149.832031 42.046875 C 141.527344 42.046875 136.765625 37.386719 136.765625 29.289062 C 136.765625 21.1875 141.636719 16.53125 149.832031 16.53125 C 158.027344 16.53125 163.011719 21.078125 163.011719 29.289062 Z M 142.855469 29.175781 C 142.855469 35.609375 145.402344 38.9375 149.832031 38.9375 C 154.261719 38.9375 156.808594 35.609375 156.808594 29.175781 C 156.808594 22.742188 154.371094 19.523438 149.832031 19.523438 C 145.292969 19.523438 142.855469 22.851562 142.855469 29.175781 Z M 142.855469 29.175781 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(8.235294%,16.078431%,40.784314%);fill-opacity:1;" d="M 173.308594 17.085938 L 182.390625 35.054688 C 182.523438 35.292969 182.785156 35.425781 183.054688 35.390625 C 183.253906 35.335938 183.394531 35.152344 183.386719 34.945312 L 183.386719 22.296875 C 183.386719 20.078125 182.832031 19.191406 180.617188 19.191406 L 180.175781 19.191406 L 180.175781 17.085938 L 191.136719 17.085938 L 191.136719 19.191406 L 190.695312 19.191406 C 188.480469 19.191406 187.925781 20.078125 187.925781 22.296875 L 187.925781 41.492188 L 180.730469 41.492188 L 171.539062 24.296875 C 171.414062 24.121094 171.195312 24.035156 170.984375 24.074219 C 170.652344 24.074219 170.539062 24.515625 170.539062 24.515625 L 170.761719 36.277344 C 170.761719 38.382812 171.207031 39.382812 173.421875 39.382812 L 173.972656 39.382812 L 173.972656 41.492188 L 162.789062 41.492188 L 162.789062 39.382812 L 163.34375 39.382812 C 165.558594 39.382812 166.109375 38.382812 166.109375 36.277344 L 166.109375 22.296875 C 166.109375 20.078125 165.558594 19.191406 163.34375 19.191406 L 162.789062 19.191406 L 162.789062 17.085938 Z M 192.355469 17.085938 L 215.722656 17.085938 L 215.722656 24.40625 L 212.84375 24.40625 L 212.84375 23.742188 C 212.84375 20.632812 211.957031 19.96875 208.746094 19.96875 L 206.863281 19.96875 L 206.863281 36.277344 C 206.863281 38.382812 207.417969 39.382812 209.632812 39.382812 L 210.519531 39.382812 L 210.519531 41.492188 L 197.5625 41.492188 L 197.5625 39.382812 L 198.449219 39.382812 C 200.550781 39.382812 201.105469 38.382812 201.105469 36.277344 L 201.105469 19.96875 L 198.890625 19.96875 C 196.011719 19.96875 195.015625 20.746094 195.015625 23.40625 L 195.015625 24.40625 L 192.355469 24.40625 Z M 269.984375 17.085938 L 259.023438 17.085938 L 259.023438 19.191406 L 259.464844 19.191406 C 261.679688 19.191406 262.234375 20.078125 262.234375 22.296875 L 262.234375 34.945312 C 262.242188 35.152344 262.101562 35.335938 261.902344 35.390625 C 261.632812 35.425781 261.371094 35.292969 261.238281 35.054688 L 252.265625 17.085938 L 241.636719 17.085938 L 241.636719 19.191406 L 242.191406 19.191406 C 244.40625 19.191406 244.957031 20.078125 244.957031 22.296875 L 244.957031 36.277344 C 244.957031 38.382812 244.40625 39.382812 242.191406 39.382812 C 240.085938 39.160156 239.53125 37.828125 238.644531 35.5 L 231.003906 17.085938 L 224.027344 17.085938 L 216.164062 35.609375 C 215.167969 38.050781 214.285156 39.273438 212.621094 39.382812 L 212.621094 41.492188 L 224.027344 41.492188 L 224.027344 39.382812 C 221.703125 39.273438 220.929688 39.050781 220.929688 37.609375 C 220.949219 37.15625 221.023438 36.710938 221.148438 36.277344 L 222.035156 33.726562 L 232 33.726562 L 232.886719 35.722656 C 233.0625 36.335938 233.171875 36.96875 233.21875 37.609375 C 233.21875 38.9375 232.335938 39.273438 230.007812 39.382812 L 230.007812 41.492188 L 252.710938 41.492188 L 252.710938 39.382812 L 252.265625 39.382812 C 250.050781 39.382812 249.5 38.382812 249.5 36.277344 L 249.5 24.515625 C 249.5 24.273438 249.699219 24.074219 249.941406 24.074219 C 250.152344 24.035156 250.371094 24.121094 250.496094 24.296875 L 259.578125 41.492188 L 266.773438 41.492188 L 266.773438 22.296875 C 266.773438 20.078125 267.328125 19.191406 269.542969 19.191406 L 269.984375 19.191406 Z M 223.363281 30.730469 L 226.90625 21.300781 C 226.90625 21.058594 227.109375 20.855469 227.351562 20.855469 C 227.59375 20.855469 227.792969 21.058594 227.792969 21.300781 L 231.117188 30.730469 Z M 286.929688 17.085938 L 294.460938 35.5 C 295.34375 37.828125 296.011719 39.160156 298.003906 39.382812 L 298.003906 41.492188 L 285.820312 41.492188 L 285.820312 39.382812 C 288.148438 39.273438 289.144531 38.9375 289.144531 37.609375 C 289.101562 36.957031 288.949219 36.320312 288.699219 35.722656 L 287.925781 33.726562 L 277.960938 33.726562 L 277.074219 36.277344 C 276.859375 36.6875 276.746094 37.144531 276.742188 37.609375 C 276.742188 39.050781 277.628906 39.273438 279.84375 39.382812 L 279.84375 41.492188 L 268.4375 41.492188 L 268.4375 39.382812 C 270.097656 39.273438 270.984375 38.050781 271.980469 35.609375 L 279.953125 17.085938 Z M 282.609375 21.300781 L 279.066406 30.730469 L 286.820312 30.730469 L 283.496094 21.300781 C 283.496094 21.058594 283.296875 20.855469 283.054688 20.855469 C 282.8125 20.855469 282.609375 21.058594 282.609375 21.300781 Z M 119.601562 37.71875 C 119.269531 37.71875 119.046875 37.273438 119.046875 37.273438 L 111.847656 25.070312 C 111.847656 25.070312 111.515625 24.515625 111.183594 24.515625 C 110.851562 24.515625 110.742188 25.070312 110.742188 25.070312 L 110.742188 36.277344 C 110.742188 38.496094 111.292969 39.382812 113.507812 39.382812 L 114.0625 39.382812 L 114.0625 41.492188 L 102.878906 41.492188 L 102.878906 39.382812 L 103.320312 39.382812 C 105.535156 39.382812 106.089844 38.496094 106.089844 36.277344 L 106.3125 22.296875 L 106.3125 22.078125 C 106.3125 20.078125 105.648438 19.191406 103.542969 19.191406 L 103.101562 19.191406 L 103.101562 17.085938 L 113.730469 17.085938 L 119.15625 28.398438 C 119.246094 28.558594 119.421875 28.644531 119.601562 28.621094 C 120.042969 28.621094 120.042969 28.398438 120.042969 28.398438 L 125.914062 17.085938 L 136.320312 17.085938 L 136.320312 19.191406 L 135.769531 19.191406 C 133.664062 19.191406 133 19.96875 133 22.078125 L 133 22.296875 L 133.332031 36.277344 C 133.332031 38.382812 133.773438 39.382812 135.988281 39.382812 L 136.542969 39.382812 L 136.542969 41.492188 L 125.246094 41.492188 L 125.246094 39.382812 L 125.800781 39.382812 C 128.015625 39.382812 128.570312 38.382812 128.570312 36.277344 L 128.570312 24.960938 C 128.570312 24.960938 128.570312 24.40625 128.128906 24.40625 C 127.683594 24.40625 127.460938 24.960938 127.460938 24.960938 L 120.265625 37.273438 C 120.144531 37.535156 119.886719 37.707031 119.601562 37.71875 Z M 134.105469 47.925781 L 138.203125 58.019531 C 138.757812 59.242188 139.089844 60.015625 140.199219 60.128906 L 140.199219 61.238281 L 133.554688 61.238281 L 133.554688 60.128906 C 134.882812 60.015625 135.324219 59.796875 135.324219 59.128906 C 135.339844 58.785156 135.261719 58.441406 135.105469 58.132812 L 134.660156 56.6875 L 129.457031 56.6875 L 128.792969 58.351562 C 128.707031 58.605469 128.671875 58.867188 128.679688 59.128906 C 128.679688 59.90625 129.125 60.015625 130.34375 60.128906 L 130.34375 61.238281 L 124.363281 61.238281 L 124.363281 60.128906 C 125.136719 60.015625 125.578125 59.351562 126.132812 58.019531 L 130.34375 47.925781 Z M 131.890625 50.253906 L 130.007812 55.136719 L 133.996094 55.136719 L 132.335938 50.253906 C 132.335938 50.253906 132.335938 50.144531 132.113281 50.144531 C 131.890625 50.144531 131.890625 50.253906 131.890625 50.253906 Z M 112.734375 51.808594 L 111.183594 51.808594 L 111.183594 51.476562 C 111.183594 49.8125 110.1875 49.035156 108.195312 49.035156 C 106.199219 49.035156 105.535156 49.8125 105.535156 51.03125 C 105.535156 52.25 106.089844 52.472656 107.308594 52.917969 L 110.1875 54.027344 C 112.179688 54.691406 113.175781 55.914062 113.175781 57.464844 C 113.175781 59.019531 111.183594 61.460938 107.527344 61.460938 C 105.816406 61.433594 104.113281 61.246094 102.433594 60.90625 L 102.433594 57.132812 L 104.097656 57.132812 L 104.097656 57.464844 C 104.097656 59.128906 105.203125 60.015625 107.308594 60.015625 C 109.410156 60.015625 109.964844 59.242188 109.964844 58.019531 C 109.964844 56.800781 109.523438 56.578125 108.414062 56.132812 L 105.648438 55.023438 C 103.433594 54.136719 102.324219 53.140625 102.324219 51.476562 C 102.324219 49.8125 104.316406 47.59375 107.972656 47.59375 C 109.582031 47.609375 111.179688 47.835938 112.734375 48.257812 Z M 263.007812 52.140625 L 261.457031 52.140625 L 261.457031 51.695312 C 261.457031 50.03125 260.460938 49.367188 258.578125 49.367188 C 256.695312 49.367188 255.921875 50.144531 255.921875 51.253906 C 255.921875 52.363281 256.476562 52.695312 257.695312 53.140625 L 260.460938 54.136719 C 262.457031 54.914062 263.453125 56.023438 263.453125 57.578125 C 263.453125 59.128906 261.457031 61.460938 257.804688 61.460938 C 256.164062 61.488281 254.527344 61.300781 252.933594 60.90625 L 252.933594 57.242188 L 254.480469 57.242188 L 254.480469 57.578125 C 254.480469 59.242188 255.589844 60.128906 257.695312 60.128906 C 259.796875 60.128906 260.242188 59.351562 260.242188 58.132812 C 260.242188 56.910156 259.796875 56.800781 258.691406 56.355469 L 256.03125 55.246094 C 253.929688 54.359375 252.820312 53.359375 252.820312 51.695312 C 252.820312 50.03125 254.703125 47.925781 258.246094 47.925781 C 259.847656 47.957031 261.445312 48.144531 263.007812 48.480469 Z M 113.621094 48.148438 L 126.132812 48.148438 L 126.132812 51.808594 L 124.582031 51.808594 C 124.582031 50.144531 124.140625 49.8125 122.367188 49.8125 L 121.371094 49.8125 L 121.371094 58.464844 C 121.371094 59.683594 121.703125 60.238281 122.8125 60.238281 L 123.144531 60.238281 L 123.144531 61.347656 L 116.386719 61.347656 L 116.386719 60.128906 L 116.832031 60.128906 C 118.050781 60.128906 118.269531 59.574219 118.269531 58.351562 L 118.269531 49.699219 L 117.054688 49.699219 C 115.503906 49.699219 115.058594 50.03125 115.058594 51.476562 L 115.058594 51.808594 L 113.621094 51.808594 Z M 138.425781 48.148438 L 150.941406 48.148438 L 150.941406 51.917969 L 149.390625 51.917969 L 149.390625 51.695312 C 149.390625 50.03125 148.835938 49.699219 147.175781 49.699219 L 146.179688 49.699219 L 146.179688 58.351562 C 146.179688 59.574219 146.511719 60.128906 147.617188 60.128906 L 148.171875 60.128906 L 148.171875 61.238281 L 141.414062 61.238281 L 141.414062 60.128906 L 141.636719 60.128906 C 142.746094 60.128906 143.078125 59.574219 143.078125 58.351562 L 143.078125 49.699219 L 141.859375 49.699219 C 140.308594 49.699219 139.753906 50.03125 139.753906 51.476562 C 139.753906 52.917969 139.753906 51.808594 139.867188 51.917969 L 138.425781 51.917969 Z M 163.011719 48.148438 L 163.011719 51.808594 L 161.679688 51.808594 L 161.679688 51.140625 C 161.679688 49.921875 160.90625 49.699219 159.246094 49.699219 L 156.367188 49.699219 L 156.367188 53.804688 L 157.140625 53.804688 C 158.691406 53.804688 159.132812 53.472656 159.132812 52.03125 L 160.351562 52.03125 L 160.351562 56.800781 L 159.132812 56.800781 C 159.023438 55.359375 158.691406 55.136719 157.25 55.136719 L 156.367188 55.136719 L 156.367188 59.683594 L 158.914062 59.683594 C 161.238281 59.683594 161.792969 59.351562 161.792969 57.132812 L 163.121094 57.132812 L 163.121094 61.238281 L 151.605469 61.238281 L 151.605469 60.128906 L 151.824219 60.128906 C 153.042969 60.128906 153.375 59.574219 153.375 58.351562 L 153.375 50.921875 C 153.375 49.699219 153.042969 49.257812 151.824219 49.257812 L 151.605469 49.257812 L 151.605469 48.148438 Z M 170.984375 48.148438 L 177.074219 48.148438 L 177.074219 49.257812 L 176.851562 49.257812 C 175.636719 49.257812 175.300781 49.699219 175.300781 50.921875 L 175.300781 56.6875 C 175.300781 58.6875 176.078125 59.683594 178.183594 59.683594 C 180.285156 59.683594 181.171875 58.6875 181.171875 56.578125 L 181.171875 50.921875 C 181.171875 49.699219 180.839844 49.257812 179.730469 49.257812 L 179.398438 49.257812 L 179.398438 48.148438 L 185.046875 48.148438 L 185.046875 49.257812 L 184.714844 49.257812 C 183.941406 49.257812 183.609375 49.8125 183.609375 50.921875 L 183.609375 56.46875 C 183.609375 59.90625 182.058594 61.570312 177.960938 61.570312 C 173.863281 61.570312 172.3125 60.015625 172.3125 56.910156 L 172.3125 50.921875 C 172.3125 49.8125 172.203125 49.257812 171.207031 49.257812 L 170.984375 49.257812 Z M 202.542969 48.148438 L 209.1875 48.148438 L 209.1875 49.257812 L 208.855469 49.257812 C 207.640625 49.257812 207.417969 49.699219 207.417969 50.921875 L 207.417969 58.351562 C 207.417969 59.574219 207.640625 60.128906 208.855469 60.128906 L 209.1875 60.128906 L 209.1875 61.238281 L 202.542969 61.238281 L 202.542969 60.128906 L 202.878906 60.128906 C 203.984375 60.128906 204.316406 59.574219 204.316406 58.351562 L 204.316406 50.921875 C 204.316406 49.699219 203.984375 49.257812 202.878906 49.257812 L 202.542969 49.257812 Z M 224.472656 48.148438 L 218.714844 48.148438 L 218.714844 49.367188 C 219.820312 49.367188 220.375 49.476562 220.375 50.03125 C 220.410156 50.226562 220.367188 50.421875 220.261719 50.585938 L 217.605469 58.242188 C 217.605469 58.242188 217.496094 58.464844 217.382812 58.464844 C 217.246094 58.449219 217.121094 58.363281 217.050781 58.242188 L 214.285156 50.585938 C 214.203125 50.414062 214.164062 50.222656 214.171875 50.03125 C 214.171875 49.476562 214.617188 49.367188 215.722656 49.367188 L 215.722656 48.035156 L 209.855469 48.035156 L 209.855469 49.257812 C 210.628906 49.257812 210.960938 49.699219 211.292969 50.699219 L 215.613281 61.347656 L 218.933594 61.347656 L 223.03125 50.585938 C 223.171875 49.878906 223.757812 49.339844 224.472656 49.257812 Z M 244.40625 48.148438 C 248.390625 48.148438 250.273438 49.035156 250.273438 51.585938 C 250.355469 53.082031 249.304688 54.417969 247.835938 54.691406 C 249.054688 54.804688 249.386719 55.46875 249.832031 56.800781 C 249.933594 57.773438 250.238281 58.71875 250.71875 59.574219 C 250.976562 59.847656 251.335938 60.007812 251.714844 60.015625 L 251.714844 61.238281 L 248.058594 61.238281 C 247.285156 59.351562 247.171875 57.796875 246.730469 56.578125 C 246.289062 55.359375 245.734375 55.46875 244.515625 55.46875 L 243.40625 55.46875 L 243.40625 58.351562 C 243.40625 59.574219 243.628906 60.128906 244.847656 60.128906 L 245.179688 60.128906 L 245.179688 61.238281 L 238.535156 61.238281 L 238.535156 60.128906 L 238.867188 60.128906 C 239.976562 60.128906 240.308594 59.574219 240.308594 58.351562 L 240.308594 50.921875 C 240.308594 49.699219 239.976562 49.257812 238.867188 49.257812 L 238.535156 49.257812 L 238.535156 48.148438 Z M 243.40625 54.027344 L 244.40625 54.027344 C 246.398438 54.027344 247.285156 53.472656 247.285156 51.917969 C 247.285156 50.367188 246.507812 49.699219 244.515625 49.699219 L 243.40625 49.699219 Z M 264.558594 48.148438 L 271.203125 48.148438 L 271.203125 49.257812 L 270.871094 49.257812 C 269.765625 49.257812 269.433594 49.699219 269.433594 50.921875 L 269.433594 58.351562 C 269.433594 59.574219 269.765625 60.128906 270.871094 60.128906 L 271.203125 60.128906 L 271.203125 61.238281 L 264.558594 61.238281 L 264.558594 60.128906 L 264.890625 60.128906 C 266 60.128906 266.332031 59.574219 266.332031 58.351562 L 266.332031 50.921875 C 266.332031 49.699219 266 49.257812 264.890625 49.257812 L 264.558594 49.257812 Z M 271.980469 48.148438 L 284.492188 48.148438 L 284.492188 51.808594 L 283.054688 51.808594 C 283.054688 50.144531 282.5 49.8125 280.839844 49.8125 L 279.84375 49.8125 L 279.84375 58.464844 C 279.84375 59.683594 280.175781 60.238281 281.28125 60.238281 L 281.722656 60.238281 L 281.722656 61.347656 L 274.746094 61.347656 L 274.746094 60.128906 L 275.300781 60.128906 C 276.410156 60.128906 276.742188 59.574219 276.742188 58.351562 L 276.742188 49.699219 L 275.523438 49.699219 C 273.972656 49.699219 273.417969 50.03125 273.417969 51.476562 L 273.417969 51.808594 L 271.980469 51.808594 Z M 284.9375 48.148438 L 290.804688 48.148438 L 290.804688 49.257812 L 290.695312 49.257812 C 289.917969 49.257812 289.699219 49.476562 289.699219 49.8125 C 289.722656 50.082031 289.796875 50.34375 289.917969 50.585938 L 291.46875 53.582031 L 292.023438 53.582031 L 293.464844 50.699219 C 293.664062 50.488281 293.78125 50.210938 293.796875 49.921875 C 293.796875 49.476562 293.351562 49.257812 292.578125 49.257812 L 292.578125 48.148438 L 298.226562 48.148438 L 298.226562 49.257812 L 298.113281 49.257812 C 297.339844 49.257812 297.007812 49.699219 296.34375 50.699219 L 292.910156 55.914062 L 292.910156 58.574219 C 292.910156 59.683594 293.128906 60.128906 294.460938 60.128906 L 294.792969 60.128906 L 294.792969 61.238281 L 288.148438 61.238281 L 288.148438 60.128906 L 288.480469 60.128906 C 289.808594 60.128906 290.03125 59.683594 290.03125 58.574219 L 290.03125 55.800781 L 286.820312 50.699219 C 286.265625 49.8125 285.820312 49.257812 284.9375 49.257812 Z M 191.691406 48.148438 L 196.566406 57.910156 C 196.597656 58 196.679688 58.058594 196.773438 58.058594 C 196.816406 58.058594 196.859375 58.042969 196.898438 58.019531 C 197.019531 58.019531 197.117188 57.921875 197.117188 57.796875 L 197.117188 50.921875 C 197.117188 49.8125 196.898438 49.257812 195.679688 49.257812 L 195.347656 49.257812 L 195.347656 48.148438 L 201.328125 48.148438 L 201.328125 49.257812 L 201.105469 49.257812 C 199.886719 49.257812 199.664062 49.8125 199.664062 50.921875 L 199.664062 61.347656 L 195.679688 61.347656 L 190.804688 51.585938 C 190.773438 51.496094 190.691406 51.4375 190.597656 51.4375 C 190.554688 51.4375 190.511719 51.449219 190.472656 51.476562 C 190.351562 51.476562 190.253906 51.574219 190.253906 51.695312 L 190.253906 58.464844 C 190.253906 59.683594 190.472656 60.238281 191.691406 60.238281 L 191.914062 60.238281 L 191.914062 61.347656 L 185.933594 61.347656 L 185.933594 60.238281 L 186.265625 60.238281 C 187.484375 60.238281 187.707031 59.683594 187.707031 58.464844 L 187.707031 50.921875 C 187.707031 49.8125 187.484375 49.257812 186.265625 49.257812 L 185.933594 49.257812 L 185.933594 48.148438 Z M 236.542969 48.148438 L 236.542969 51.808594 L 235.214844 51.808594 L 235.214844 51.140625 C 235.214844 49.921875 234.4375 49.699219 232.777344 49.699219 L 229.898438 49.699219 L 229.898438 53.804688 L 230.785156 53.804688 C 232.222656 53.804688 232.667969 53.472656 232.667969 52.03125 L 233.882812 52.03125 L 233.882812 56.800781 L 232.667969 56.800781 C 232.554688 55.359375 232.222656 55.136719 230.785156 55.136719 L 229.898438 55.136719 L 229.898438 59.683594 L 232.445312 59.683594 C 234.769531 59.683594 235.324219 59.351562 235.324219 57.132812 L 236.652344 57.132812 L 236.652344 61.238281 L 225.136719 61.238281 L 225.136719 60.128906 L 225.355469 60.128906 C 226.6875 60.128906 226.90625 59.574219 226.90625 58.351562 L 226.90625 50.921875 C 226.90625 49.699219 226.574219 49.257812 225.355469 49.257812 L 225.136719 49.257812 L 225.136719 48.148438 Z M 236.542969 48.148438 "/></g></svg>') !important;
			background-repeat: no-repeat !important;
		}`;
		document.documentElement.appendChild(titleStyleElement);
    }
    document.documentElement.style.visibility = 'hidden';
    titleStyle = document.getElementById('MyInfoPlusTitleStyle');
}
createTitleStyle();

window.addEventListener("myInfoPlusOrphanedMessage", onDisconnect);
function onDisconnect() {
    if(chrome.runtime?.id) {
        console.warn("Received false orphan message");
        return;
    }
    console.log("Content script is orphaned. Disconnecting event listeners but leaving injected styles");
    chrome.runtime.onMessage.removeListener(onMessage);
    window.removeEventListener("myInfoPlusOrphanedMessage", onDisconnect);

}

window.addEventListener ("load", createStyle);
function createStyle() {
    let newStyle = document.createElement("style");
    newStyle.id = "MyInfoPlusMainStyle";
    newStyle.textContent = styleString;
    document.documentElement.appendChild(newStyle);
    mainStyle = document.getElementById('MyInfoPlusMainStyle');
    mainStyle.disabled = !displayState;
    titleStyle.disabled = !displayState;
    document.documentElement.style.visibility = '';
}

chrome.runtime.onMessage.addListener(onMessage);
function onMessage(message, sender, sendResponse) {
    switch(message.type) {
        case "getState":
            console.log("Received state request from background")
            mainStyle.disabled = displayState;
            titleStyle.disabled = displayState;
            displayState = !displayState;
            chrome.runtime.sendMessage({type: "setState", data: displayState});
            console.log("Sent state to background")
        break
        case "refreshRequest":
            titleStyle = document.getElementById('MyInfoPlusTitleStyle');
            mainStyle = document.getElementById('MyInfoPlusMainStyle');
            if(titleStyle) {
                titleStyle.remove();
            }
            if(mainStyle) {
                mainStyle.remove();
            }
            console.log("Received refresh request from background. Removing and reapplying styles")
            createTitleStyle();
            createStyle();
        break
        default:
            console.error("Unknown message", message.type)
    }
}

const styleString = `
img[src="/wtlgifs/twgginfo.gif"] {
  display: inline;
  box-sizing: border-box;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(12.941176%,58.823529%,95.294118%);fill-opacity:1;" d="M 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476562 22 2 17.523438 2 12 C 2 6.476562 6.476562 2 12 2 C 17.523438 2 22 6.476562 22 12 Z M 22 12 "/><path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11 11 L 13 11 L 13 16.5 L 11 16.5 Z M 13.25 8.25 C 13.25 8.941406 12.691406 9.5 12 9.5 C 11.308594 9.5 10.75 8.941406 10.75 8.25 C 10.75 7.558594 11.308594 7 12 7 C 12.691406 7 13.25 7.558594 13.25 8.25 Z M 13.25 8.25 "/></g></svg>')
    no-repeat;
  width: 24px;
  height: 24px;
  padding-left: 120px;
  margin-right: -96;
}
img[src="/wtlgifs/web_email.gif"] {
  display: inline;
  box-sizing: border-box;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:rgb(10.196078%,45.098039%,90.980392%);fill-opacity:1;" d="M 22.5 18 C 22.5 18.152344 22.46875 18.296875 22.429688 18.433594 L 15.75 11.25 L 22.5 6 Z M 2.667969 19.460938 L 9.433594 12.246094 L 12 14.1875 L 14.453125 12.234375 L 21.332031 19.460938 C 21.226562 19.484375 2.773438 19.484375 2.667969 19.460938 Z M 1.5 18 L 1.5 6 L 8.25 11.25 L 1.570312 18.433594 C 1.53125 18.296875 1.5 18.152344 1.5 18 Z M 21.75 4.5 L 12 12 L 2.25 4.5 Z M 21 3 L 3 3 C 1.34375 3 0 4.34375 0 6 L 0 18 C 0 19.65625 1.34375 21 3 21 L 21 21 C 22.65625 21 24 19.65625 24 18 L 24 6 C 24 4.34375 22.65625 3 21 3 Z M 21 3 "/></g></svg>')
    no-repeat;
  width: 24px;
  height: 24px;
  padding-left: 120px;
  margin-right: -96;
}
img[src="/wtlgifs/web_checkbox.gif"], img[src="/wtlgifs/web_success_cascade.png"] {
  display: inline;
  box-sizing: border-box;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(10.196078%,45.098039%,90.980392%);fill-opacity:1;" d="M 18.25 3 C 19.769531 3 21 4.230469 21 5.75 L 21 18.25 C 21 19.769531 19.769531 21 18.25 21 L 5.75 21 C 4.230469 21 3 19.769531 3 18.25 L 3 5.75 C 3 4.230469 4.230469 3 5.75 3 Z M 18.25 4.5 L 5.75 4.5 C 5.058594 4.5 4.5 5.058594 4.5 5.75 L 4.5 18.25 C 4.5 18.941406 5.058594 19.5 5.75 19.5 L 18.25 19.5 C 18.941406 19.5 19.5 18.941406 19.5 18.25 L 19.5 5.75 C 19.5 5.058594 18.941406 4.5 18.25 4.5 Z M 10 14.4375 L 16.46875 7.96875 C 16.761719 7.675781 17.238281 7.675781 17.53125 7.96875 C 17.796875 8.234375 17.824219 8.652344 17.605469 8.949219 L 17.53125 9.03125 L 10.53125 16.03125 C 10.265625 16.296875 9.847656 16.324219 9.550781 16.105469 L 9.46875 16.03125 L 6.46875 13.03125 C 6.175781 12.738281 6.175781 12.261719 6.46875 11.96875 C 6.734375 11.703125 7.152344 11.675781 7.449219 11.894531 L 7.53125 11.96875 L 10 14.4375 L 16.46875 7.96875 Z M 10 14.4375 "/></g></svg>')
    no-repeat;
  width: 24px;
  height: 24px;
  padding-left: 120px;
  margin-right: -96;
}
img[src="/wtlgifs/web_box.gif"] {
  display: inline;
  box-sizing: border-box;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(10.196078%,45.098039%,90.980392%);fill-opacity:1;" d="M 5.75 3 L 18.25 3 C 19.769531 3 21 4.230469 21 5.75 L 21 18.25 C 21 19.769531 19.769531 21 18.25 21 L 5.75 21 C 4.230469 21 3 19.769531 3 18.25 L 3 5.75 C 3 4.230469 4.230469 3 5.75 3 Z M 5.75 4.5 C 5.058594 4.5 4.5 5.058594 4.5 5.75 L 4.5 18.25 C 4.5 18.941406 5.058594 19.5 5.75 19.5 L 18.25 19.5 C 18.941406 19.5 19.5 18.941406 19.5 18.25 L 19.5 5.75 C 19.5 5.058594 18.941406 4.5 18.25 4.5 Z M 5.75 4.5 "/></g></svg>')
    no-repeat;
  width: 24px;
  height: 24px;
  padding-left: 120px;
  margin-right: -96;
}
img[src="/wtlgifs/web_info_cascade.png"] {
  display: inline;
  box-sizing: border-box;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(10.196078%,45.098039%,90.980392%);fill-opacity:1;" d="M 5.25 18 C 3.453125 18 2 16.546875 2 14.75 L 2 6.25 C 2 4.453125 3.453125 3 5.25 3 L 18.75 3 C 20.546875 3 22 4.453125 22 6.25 L 22 14.75 C 22 16.546875 20.546875 18 18.75 18 L 13.011719 18 L 8 21.75 C 7.445312 22.164062 6.664062 22.050781 6.25 21.5 C 6.085938 21.28125 6 21.019531 6 20.75 L 6 18 Z M 12.511719 16.5 L 18.75 16.5 C 19.714844 16.5 20.5 15.714844 20.5 14.75 L 20.5 6.25 C 20.5 5.285156 19.714844 4.5 18.75 4.5 L 5.25 4.5 C 4.285156 4.5 3.5 5.285156 3.5 6.25 L 3.5 14.75 C 3.5 15.714844 4.285156 16.5 5.25 16.5 L 7.5 16.5 L 7.5 20.25 Z M 12.511719 16.5 "/></g></svg>')
    no-repeat;
  width: 24px;
  height: 24px;
  padding-left: 120px;
  margin-right: -96;
}
[src="/wtlgifs/web_caution_cascade.png"] {
  display: inline;
  box-sizing: border-box;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(10.196078%,45.098039%,90.980392%);fill-opacity:1;" d="M 12 2 C 17.523438 2 22 6.476562 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476562 22 2 17.523438 2 12 C 2 6.476562 6.476562 2 12 2 Z M 12 3.667969 C 7.40625 3.667969 3.667969 7.40625 3.667969 12 C 3.667969 16.59375 7.40625 20.332031 12 20.332031 C 16.59375 20.332031 20.332031 16.59375 20.332031 12 C 20.332031 7.40625 16.59375 3.667969 12 3.667969 Z M 12 14.503906 C 12.550781 14.503906 12.996094 14.949219 12.996094 15.5 C 12.996094 16.050781 12.550781 16.5 12 16.5 C 11.445312 16.5 11 16.050781 11 15.5 C 11 14.949219 11.445312 14.503906 12 14.503906 Z M 11.996094 7 C 12.375 7 12.6875 7.28125 12.738281 7.648438 L 12.746094 7.75 L 12.75 12.25 C 12.75 12.664062 12.414062 13 12 13 C 11.621094 13 11.304688 12.71875 11.253906 12.355469 L 11.25 12.253906 L 11.246094 7.75 C 11.246094 7.335938 11.582031 7 11.996094 7 Z M 11.996094 7 "/></g></svg>')
    no-repeat;
  width: 24px;
  height: 24px;
  padding-left: 120px;
  margin-right: -96;
}
#param_table tr .dddefault {
    background-color: transparent !important;
    border-bottom: 2px solid gray
}
form[onsubmit="return checkTerm()"] #param_table tr td.dddefault, #param_table tr td.ddheader {
    text-align: center !important;
    vertical-align: middle !important;
    margin: 1em;
}

form[onsubmit="return checkTerm()"] #param_table {
    --radius: 10px;
    --border-color: gray;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    border-spacing: 0;
}
form[onsubmit="return checkTerm()"] #param_table tr:first-child>:first-child { border-top-left-radius: var(--radius); }
form[onsubmit="return checkTerm()"] #param_table tr:first-child>:last-child { border-top-right-radius: var(--radius); }
form[onsubmit="return checkTerm()"] #param_table tr:last-child>:first-child { border-bottom-left-radius: var(--radius); }
form[onsubmit="return checkTerm()"] #param_table tr:last-child>:last-child { border-bottom-right-radius: var(--radius); }

form[onsubmit="return checkTerm()"] #param_table th, #param_table td {
    padding: .2rem;
    box-shadow: -1px -1px var(--border-color);
}
map[name="FPMap0"], img[src="https://atlas.montana.edu:9000/Bozeman/images/msu.jpg"] {
    display: none;
}
td.bg3[colspan="3"] {
    display: none;
}
select, #ECIF {
    padding: 10px;
    border-radius:10px;
    color: #1a73e8;
    border:1px solid #1a73e8;
    
}

TD.delabel {
    background-color: transparent !important;
    margin: 5px;
    text-align: center;
    display: inline-block;
}
.checklist_header img[src="https://www.montana.edu/creativeservices/images/MSU-horiz.png"]{
    display: none;
}
.checklist_header {
    text-align: left;
}
.checklist tr th, .welcome tr th, td[colspan="3"]:not(:has(input)) {
    color: black;
    text-align: left;
    background-color: transparent;
    border-bottom: 1px solid gray;
    border-left: 0px;
    border-right: 0px;
}
td[colspan="3"] span[style="color:CCCC33"] {
    color:black !important;
}
.checklist tr td, .checklist tr td.side, .checklist tr td.end {
    border: 0px;
}

.ddheader {
    background-color: transparent !important;
    border-bottom: 2px solid gray;
}
.captiontext {
    font-style: normal;
}
input[type="submit"], #continue_btn, #verify_button, #update_button, button[onclick="javascript:resetForm();"], a[onclick="switchSubjectRow(var_ind);"], #keyword_in_id, input[type="reset"] {
  margin-bottom:-1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  background-color: white;
  background-image:none;
  border: 1px solid #1a73e8;
  color: #1a73e8;
}
#keyword_in_id {
    margin-top: 2em;
    text-align: left !important;
}
.ddheader:has(a[onclick="switchSubjectRow(var_ind);"]) b, .ddheader:has(a[onclick="switchSubjectRow(var_list);"]) b {
  display: block !important;
  padding-bottom: 1em !important;
}
a[onclick="switchSubjectRow(var_ind);"], a[onclick="switchSubjectRow(var_list);"] {
    font-weight: normal;
    margin-left: 0em !important;
}
.panel-primary {
    border-color: #1a73e8;
}
input[value="Show Details"] {
    margin-left: 3em;
}
input[value="Hide Details"], a[onclick="switchSubjectRow(var_list);"] {
  margin-block-start: 0.5em;
  margin-block-end: 0em;
  position: relative;
  margin-left: 3em;
  margin-bottom:-1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  background-color: #1a73e8;
  background-image:none;
  color: white;
}

a[href="http://www.montana.edu/registrar/CCN.html"], a[href="http://calendar.msu.montana.edu/academic-term-calendar"], a[href="http://www.montana.edu/newnumbers"], a[href="http://www2.montana.edu/policy/student_email_policy.htm"], a[href="http://www.montana.edu/registrar/pdfs/RegistrationTimes.pdf"] {
    text-decoration: line-through;
    color: gray;
}
.headerwrapperdiv {
    padding-bottom: 16px;
    border-bottom: 1px solid gray;
}
.infotextdiv {
    border-bottom: 1px solid gray;
}
.banner_copyright, .releasetext, .bgtaboff, .bgtabon {
    display:none;
}

A.submenulinktext2, A.submenulinktext2:hover, A.submenulinktext2:visited, .mpdefault A:visited, a font[color="red"] {
    color:#0000ff !important;
}

.pageheaderlinks {
    position: absolute;
    padding: 28px;
    right:0px;
    top: 0px;
    text-transform: lowercase;
}
.pageheaderlinks:first-line {
    text-transform: capitalize !important;
}
.headerlinksdiv {
    margin-bottom: -3.5em;
}
TABLE TD.mpdefault {
font-size: 110%;
}
.tabon, .tabon A:visited {
  position: relative;
  margin: 1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background-color: #1a73e8;
  background-image:none;
  color: white
}
.taboff, .taboff A:visited {
  position: relative;
  margin: 1em;
  padding: 1em 2em;
  border: 0;
  border-radius: 30px;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  background-color: white;
  background-image:none;
  border: 1px solid #1a73e8;
  color: #1a73e8;
}

table.plaintable {
  border-collapse: separate; 
  border-spacing: 0.5em;
}
.pageheaderdiv1 {
    margin-top: 45px !important;
}
.pagetitlediv .plaintable {
    display: none;
}
.pagetitlediv h2 {
    padding-top: 2em;
    padding-left: 0.5em;
}
`

