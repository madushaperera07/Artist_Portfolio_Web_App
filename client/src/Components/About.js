import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Images from "./Images";

function About() {
  return (
    <div class="All_about">
      <div>
        <Header />
      </div>
      <div class="About_container">
        <img src={Images.img12} alt="Artist"/>
        <h4>Bio</h4>
        <p>
          Welcome to the world of Madusha Perera, where creativity knows no
          bounds. With a brush in hand and a heart full of passion, he transform
          ordinary moments into extraordinary works of art.
        </p>
        <p>
          Madusha Perera is a visionary artist known for his ability to breathe
          life into canvases. With 5 years of experience, he have mastered the
          art of storytelling through colors and shapes.
        </p>
        <p>
          Perera's work is a reflection of his belief that art is a universal
          language. Each piece carries a message, an emotion, or a story waiting
          to be discovered by those who gaze upon it.
        </p>
        <p>
          Nature, human experiences, and the play of light and shadow are
          Perera's muses. These elements find their way into his art, creating
          pieces that resonate with the soul.
        </p>
        <p>
          Step into Perera's world and explore the beauty that surrounds us.
          Whether you're an art lover or a casual admirer, his art invites you
          to see the world through a different lens.
        </p>
        <p>
          Thank you for visiting and being a part of Perera's artistic journey.
          Together, let's discover the magic of his creations.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
