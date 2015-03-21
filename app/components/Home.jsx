import React from 'react';
import Component from 'component';
import Button from 'reapp-ui/components/Button';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Theme from 'reapp-ui/helpers/Theme';
import theme from 'theme/theme';

export default Component({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    return (
      <Theme {...theme}>
        <NestedViewList {...this.routedViewListProps()}>
          <View title="REAPP_NAME">
            <p>Hello, World!</p>

            <Button onTap={() => this.context.router.transitionTo('sub')}>
              Go to sub view
            </Button>
          </View>

          {this.childRouteHandler()}
        </NestedViewList>
      </Theme>
    );
  }
});