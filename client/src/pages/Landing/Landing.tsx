import { useEffect } from 'react';
import './Landing.scss';

import Facebook from '../../components/Facebook/Facebook';

// @ts-ignore
import { Gradient } from './Gradient.js'


const Landing = () => {

  const gradient = new Gradient()
  useEffect(() => {
    gradient.initGradient('#gradient-canvas');
  })

  return (
    <div className="landing">
      <canvas id="gradient-canvas" data-transition-in />
      <h1>sidekick</h1>
      <Facebook />
      <img id="clouds" src="/client/src/assets/clouds.webp" alt="" />
      <img id="sidekick" src="/client/src/assets/sidekick.png" alt="" />
      {/* <video src="https://vp.nyt.com/video/2020/07/21/87571_1_00-sports-reboot-promo_wg_1080p.mp4" muted loop autoPlay playsInline></video> */}
    </div>
  );
};

export default Landing;
