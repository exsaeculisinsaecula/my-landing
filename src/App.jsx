import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeatureCard from './components/FeatureCard.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
// TODO: 자기 내용으로 교체하고 네 번째 카드를 추가합니다.
const features = [
  { id:'walk', title:'초보자도 부담 없이 참여할 수 있는 주말 사진 산책', text:'매주 토요일 오전, 동네에서 함께 걸으며 익숙한 풍경을 새롭게 담아요.' },
  { id:'feedback', title:'완성작 한 장씩 나누는 짧고 따뜻한 피드백 시간', text:'많은 사진 대신 인상 깊은 한 장을 고르고 서로 이야기를 나눠요.' },
  { id:'gear', title:'비싼 장비 없이 폰카메라만으로도 충분히 시작하기', text:'좋은 사진은 장비가 아니라 시선에서 나와요. 지금 가진 카메라로 시작하세요.' },
  { id:'season', title:'봄꽃부터 겨울 눈까지 계절이 이끄는 촬영 미션', text:'계절마다 다른 테마로 나가면 같은 동네도 새롭게 보여요.' }
];
export default function App() {
  // Fragment(<></>)는 불필요한 상자 없이 형제 요소를 묶습니다.
  return <><Header /><main id="home" className="container">
    <Hero title="한 장의 사진에, 오늘을 담으세요." />
    <section id="features"><h2>부담 없이 시작하는 한 컷</h2><div className="cards">{features.map(item => <FeatureCard key={item.id} title={item.title} text={item.text} />)}</div></section>
    <section><div className="about"><h2>사진으로 오늘을 기록하는 시간</h2><p>교육용 가상 모임 소개입니다. 실제 운영 실적을 뜻하지 않습니다. 자신의 프로젝트 내용으로 교체하세요. 저는 폰카메라로 일상을 찍기 시작해 3년간 주말마다 혼자 나갔습니다. 초보 시절에는 사진을 보여줄 사람도, 어떻게 늘어야 할지 알려줄 사람도 없었습니다. 그런 아쉬움으로 「찰나」를 기획했습니다.</p></div></section>
    <section id="faq"><h2>처음이라 궁금한 것들</h2><FAQ id="faq-first" question="사진을 잘 못 찍어도 참여할 수 있나요?" answer="네, 처음 카메라를 든 분을 기준으로 산책 코스와 촬영 팁을 안내합니다." /><FAQ id="faq-gear" question="DSLR이 아닌 폰카메라도 괜찮나요?" answer="물론입니다. 장비 제한 없이 지금 가진 카메라로 참여하세요." /><FAQ id="faq-rain" question="비가 오면 어떻게 하나요?" answer="실제 운영 시 실내 촬영이나 일정 변경 공지가 필요합니다. 이 페이지는 교육용 예제입니다." /></section>
    <Contact /></main><footer><div className="container">찰나 · 교육용 가상 페이지 · <a href="./index.html">HTML판 비교</a></div></footer></>;
}
