'use strict';

const React = require('react');
const ReactNative = React;

ReactNative.StyleSheet = {
    create: function(styles) {
        return styles;
    }
};

class ActivityIndicatorIOS extends React.Component {}
class ScrollView extends React.Component {}
class View extends React.Component {}
class Text extends React.Component {}
class TextInput extends React.Component {}
class TouchableHighlight extends React.Component {}
class PickerIOS extends React.Component {}
class PickerItem extends React.Component {}

class PanResponder extends React.Component {
  static create() {}
}

class Dimensions {
  static get() {
    return {
      height: 123,
      widght: 123
    }
  }
}

class StartableAnimation {
  start() {}
}

class Animated {
  static event() {}
  static parallel() { return new StartableAnimation(); }
  static spring() { return new StartableAnimation(); }
}

class AnimatedView extends React.Component {}
class AnimatedValue {
  setOffset() {}
}
class AnimatedValueXY {
  constructor() {
    this.x = {
      _value: null,
      _offset: null
    };
    this.y = {
      _value: null,
      _offset: null
    };
  }

  addListener() {}
  getLayout() {}
  removeListener() {}
  setOffset() {}
  setValue() {}
}

class InteractionManager {
  static runAfterInteractions() {}
}

Animated.View = AnimatedView;
Animated.Value = AnimatedValue;
Animated.ValueXY = AnimatedValueXY;

PickerIOS.Item = PickerItem;

ReactNative.ActivityIndicatorIOS = ActivityIndicatorIOS;
ReactNative.Animated = Animated;
ReactNative.Dimensions = Dimensions;
ReactNative.InteractionManager = InteractionManager;
ReactNative.View = View;
ReactNative.ScrollView = ScrollView;
ReactNative.Text = Text;
ReactNative.TextInput = TextInput;
ReactNative.TouchableHighlight = TouchableHighlight;
ReactNative.PickerIOS = PickerIOS;

ReactNative.PanResponder = PanResponder;

ReactNative['@noCallThru'] = true;
ReactNative['@global'] = true;


module.exports = ReactNative;