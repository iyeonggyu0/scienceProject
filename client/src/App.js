import React from 'react';
import GlobalStyle from './style/globalStyle';

// library
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMedia } from './hooks/useMedia';
import PcConnectError from './components/_common/error/PcConnect';
// 나중에 삭제하기 * 폰트 어썸
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, light, thin, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import ScrollToTop from './components/_common/scrollToTop';
import MainPage from './pages/mainPage';
import NotFountPage from './components/_common/error/404';

function App() {
  const media = useMedia();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      {media.isPc && (
        <Routes>
          <Route path={'*'} element={<PcConnectError />} />
        </Routes>
      )}
      {media.isMobile && (
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 404 */}
          <Route path={'/*'} element={<NotFountPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
