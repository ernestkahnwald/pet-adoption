import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Routing from 'src/common/components/Routing';
import { withDisplayName } from 'src/common/components/utils/wrappers';
import BaseTheme from 'src/common/themes/base';

const App: React.FC = () => {
  return (
    <div className="App">
      <ChakraProvider resetCSS={true} theme={BaseTheme}>
        <Routing />
      </ChakraProvider>
    </div>
  );
}

export default withDisplayName(App);
