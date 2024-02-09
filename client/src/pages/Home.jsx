// import React from 'react';
import assetImage from "../assets/react.svg";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Glow Guide</h1>
      </header>
      <section>
        <p>
          Discover the magic of the Northern Lights with Glow Guide. Plan your
          next aurora borealis adventure and explore the best viewing spots
          around the world.
        </p>
        <p>
          Ready to witness the breathtaking beauty of the Northern Lights?
          Sign up now to unlock additional features!
        </p>
        {/* Add a link or button to navigate to the SignUp page */}
        <a href="/sign-up">Sign Up</a>
      </section>
      <p></p>
      <p></p>
      <p>imported image</p>
      <img src={assetImage} alt="import image" />
      <p></p>
      <p></p>
      <p>public folder image</p>
      <img src="/catImage.jpeg" alt="public folder cat" />
      <img src="/vite.svg" alt="public folder vite" />
    </div>
  );
};

export default Home;

