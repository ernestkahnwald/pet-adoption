import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Search from 'src/search/components/Search';
import Chakra from 'src/common/pages/Chakra';

export default function Routing(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pet" element={<p>Kindy</p>} />
        <Route path="/test" element={<Chakra />} />
        <Route path="/" element={<Search />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
