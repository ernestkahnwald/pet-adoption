import React from 'react';
import { Button, Select } from '@chakra-ui/react';

export default function Chakra(): React.ReactElement {
  return (
    <div style={{ padding: '30px' }}>
      <Button variant="outline" size="sm">Hello</Button>

      <Select placeholder='Select option'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
    </div>
  );
}
