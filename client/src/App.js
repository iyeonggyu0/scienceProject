import React, { useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

function App() {
  const media = useMedia();
  console.log(media);

  useEffect(() => {
    if (media.isPc) {
      window.location.replace('/pcConnect');
    }
  }, [media]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 404 */}
        <Route path={'/pcConnect'} element={<PcConnectError />} />
        <Route path={'/*'} element={<NotFountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
