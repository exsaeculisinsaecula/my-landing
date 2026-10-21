import React from 'react';
// 부모가 title을 전달합니다. 중괄호 안의 이름은 변수 값으로 바뀝니다.
export default function Hero({ title }) {
  return <section className="hero"><div><p className="eyebrow">WEEKEND PHOTO WALK</p><h1>{title}</h1><p>혼자 찍고 혼자 보관하던 사진, 이번 토요일에는 함께 걸으며 나눠요. 장비 자랑 없이 폰카메라도 환영하는 초보 친화 사진 모임입니다.</p><a className="button" href="#contact">첫 모임 참여하기</a></div><img src={`${import.meta.env.BASE_URL}images/camera.svg`} width="600" height="420" alt="카메라 삽화" /></section>;
}
