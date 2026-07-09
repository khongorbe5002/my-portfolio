import Typewriter from 'typewriter-effect';
import TopDirectory from './TopDirectory';

export default function IntroScroll() {

  return (
    <div className="intro-container">

      {/* top directory sits inside the intro container so it can be positioned relative to it */}
      <TopDirectory align="left" />

      {/* The Terminal Typewriter Effect */}
      <div className="typewriter-wrapper">
        
        <Typewriter
          options={{
            wrapperClassName: "typewriter-text",
            cursorClassName: "typewriter-cursor",
            delay: 50, /* Speed this up slightly for a fast terminal feel */
            cursor: '_'
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString('<br/>') 
              .typeString('<br/>hi my name is honey bat&#8209;erdene')
              .pauseFor(50)
              .typeString('<br/>') 
              .typeString('<br/>3rd year integrated engineering student at UBC') /* <br/> forces a new line */
              .pauseFor(50)
              .typeString('<br/>') 
              .typeString('<br/>interested in software/hardware developement')
              .pauseFor(50)
              .typeString('<br/>') 
              .typeString('<br/>looking for co-op/full time internships for Fall 2026')
              // Add as many lines as you want here!
              .start();
          }}
        />
      </div>
    </div>
  );
}