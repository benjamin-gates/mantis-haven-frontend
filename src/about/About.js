import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <Container as="main">
      <h1>About Mantis Haven</h1>
      <hr />
      <div>
        What started as a hobby, <em>mantis-keeping</em> quickly became an obsession for
        me. Beginning at only 13 years of age, I have had many years of
        experience raising and breeding mantids.
      </div>
      <div>
        Over the years, I have kept several different species with a variety of
        colors, sizes, and shapes! My current favorite species is Gongylus
        Gongylodes, otherwise known as the violin mantis. This mighht be partly due to the fact that I have played the violin since I was 5.
      </div>
      <div>Born in a small town in Wyoming, that's where my business remains to this date. I hope you'll find <strong>Mantis Haven</strong> a platform to experience unique and stunning species of mantids, as you become as awestruck with their beauty as I have.</div>
    </Container>
  );
}

export default About;
