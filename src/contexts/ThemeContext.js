import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  //   function to generate a button later on
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        // need of value property = to an object
        value={{ ...this.state, passToggleTheme: this.toggleTheme }}
      >
        {this.props.children}
        {/* refers to the component that is wrapped in app.js */}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
