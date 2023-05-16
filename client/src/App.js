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
import MenuPage from './pages/menuPage';
import TryChatGPTPage from './pages/tryChatGPTPage';
import SurveyPage from './pages/surveyPage';

function App() {
  const media = useMedia();

  useEffect(() => {
    const lastResetTime = localStorage.getItem('lastResetTime');
    const now = Date.now();

    // 페이지가 로드될 때마다 마지막 초기화 시간을 확인하고 5시간이 지났는지 확인
    if (!lastResetTime || now - lastResetTime > 5 * 60 * 60 * 1000) {
      // 'GPT Number of uses'를 5로 설정하고 현재 시간을 마지막 초기화 시간으로 저장
      localStorage.setItem('GPT Number of uses', 5);
      localStorage.setItem('lastResetTime', now);
    }
  }, []);

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
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/try-ChatGPT" element={<TryChatGPTPage />} />
          <Route path="/survey" element={<SurveyPage />} />
          {/* 404 */}
          <Route path={'/*'} element={<NotFountPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
