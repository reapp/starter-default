import { Reapp, React, NestedViewList, View, Button } from 'reapp-kit';

class Home extends React.Component {
  render() {
    const Child = this.props.child;

    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="REAPP_NAME">
          <p>Hello, World!</p>

          <Button onTap={() => this.context.router.transitionTo('sub')}>
            Go to sub view
          </Button>
        </View>

        {Child && Child()}
      </NestedViewList>
    );
  }
}

export default Reapp(Home);