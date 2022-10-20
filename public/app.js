const root = document.querySelector('#root');
function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Time now"), new Date().toLocaleTimeString());
  ReactDOM.render(element, root);
}
tick();
setInterval(function () {
  tick();
}, 1000);