import React from 'react';
import Component from 'component';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';

export default Component({
  render() {
    const backButton =
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title={[backButton, 'Sub Route']}>
        <p>Hello, from the sub route!</p>
        <p>You can drag from the left side of the screen to drag this view back out</p>
        <p>Ready to deploy? Run <code>reapp build</code> and check your build directory</p>
      </View>
    );
  }
});