import TopDirectory from './TopDirectory';
import profilePic from './assets/profile.jpg';
import signature from './assets/signature.png';

export default function About() {
  return (
    <div className="subpage-container subpage-container--aligned">
      <TopDirectory />

      <div className="about-layout">
        {/* Left Side: Photo */}
        <div className="about-left">
          <img src={profilePic} alt="Khongor at the beach" className="about-image" />
        </div>

        {/* Right Side: Text & Signature */}
        <div className="about-right">
          <div className="about-text-content">
            <p>I was born in Ireland, raised in Mongolia, and currently live in Canada.</p>
            <br />
            <p>Outside of work and school, I love recording videos on my camcorder, biking with my brothers and playing ultimate frisbee with my friends.</p>
            <br />
            <p>I hope I can positively impact others lives, just like how people in my life have impacted mine.</p>
            
            <div className="signature-block">
              <img src={signature} alt="Khongor Bat-Erdene Signature" className="signature-image" />
              <p>Khongor "Honey" Bat-Erdene</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}