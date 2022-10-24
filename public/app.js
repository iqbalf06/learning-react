const root = document.querySelector('#root');
function App() {
  const [login, setLogin] = React.useState(false);
  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Udah Login, Bang"), /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setLogin(false);
      }
    }, "Logout"));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Login Dulu, Bang"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);