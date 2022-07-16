import React from 'react';

import Routing from 'src/common/components/Routing';
import { withDisplayName } from 'src/common/components/utils/wrappers';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withDisplayName(App);
