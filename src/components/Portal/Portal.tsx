import * as React from 'react';
import { withTheme } from '../../core/Theme';
import PortalConsumer from './PortalConsumer';
import PortalHost, { PortalContext, PortalMethods } from './PortalHost';

type Props = {
  children: React.ReactNode;
  theme: ReactNativeNoxi.Theme;
};

class Portal extends React.Component<Props> {
  static Host = PortalHost;

  render() {
    const { children } = this.props;

    return (
      <PortalContext.Consumer>
        {(manager) => (
          <PortalConsumer manager={manager as PortalMethods}>
            {children}
          </PortalConsumer>
        )}
      </PortalContext.Consumer>
    );
  }
}

export default withTheme(Portal);
