import React from "react";
import Header from "../../components/header/Header";
import "./cookies.css";

const About = () => {
  return (
    <div>
      <Header />
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col12">
              <div className="about-inner">
                <div className="about-inner-box">
                  <h2 className="heading">Lorem Ipsum</h2>
                  <h1 className="sub-heading">Cookies Policy</h1>
                  <p>
                    MetaPets aims to be a first step in bringing love and
                    companionship to the metaverse in a personalized way,
                    allowing users to become owners of pets of their design.
                    Never again do you have to worry about the painful feelings
                    that come with loss.
                  </p>
                  <p>
                    Allergic to cats but love them? Fulfill your heart's wish to
                    own your cat, made into an NFT, where the colors, sizes, and
                    loveable furriness are customizable into your forever
                    friend.
                  </p>
                  <p>
                    MetaPets aims to make your MetaPet adaptable to the virtual
                    designs of the metaverse. Interoperable into other worlds,
                    you can show your dog off in a dog show, have your prize cow
                    produce milk to sell, and race your trophy-winning horse in
                    a competition, all while earning a passive income from your
                    MetaPets Investment.
                  </p>
                  <p>
                    What if you could own a pet that would be with you forever?
                    Always there for you, always loving, always happy to see
                    you. The concept is not so hard to imagine, especially now,
                    when you envision your pet in a digital world in the
                    metaverse.
                  </p>
                  <p>
                    It has inspired us to think about the relationship between
                    real pets you adopt in the real world and ones that will
                    always be with you in the Metaverse.
                  </p>
                  <p>
                    Your best friend is with you when you’re sad, lonely, or
                    tired and just want to be together. Never again will you
                    lose your pet and have to deal with the grief and hardship
                    of loss.{" "}
                  </p>
                  <p>
                    It's hard to get over the sadness, the loss, hard to feel
                    like a new pet won't leave you too. But imagine you could
                    own a forever pet in the metaverse. You can still have a
                    friendship or be a family together in the metaverse. You can
                    easily find pet owners who may suffer the same situation you
                    have, and you can help each other get through the pain
                    together. It's the starting point that we thought of when
                    thinking about our pets, the possibilities to be together
                    forever, which is why we created this project – MetaPets.
                  </p>
                  <p>
                    With the changes in global lifestyles and people adopting
                    new ways to be creative while they are stuck at home, it may
                    not be entirely random that 2021 was the year that people
                    started talking seriously about the metaverse. During the
                    pandemic, so many things have gone digital from
                    necessity—from being social to shopping, that it sometimes
                    felt as if we were halfway into the metaverse already.
                  </p>
                  <p>
                    Before that, Virtual Reality (VR) seemed like the most
                    realistic way to push us to a transition into a
                    reality-based digital world. We’ll continue to see attempts
                    to shift focus towards VR with headsets; however, once we
                    are more comfortable wearing powerful devices and things
                    like this go more mainstream, it’s game over. Or could it
                    possibly be interpreted differently? More like GAME ON.{" "}
                  </p>
                  <p>
                    In doing so, there will be different layers of reality that
                    we will be experiencing, even in the same environment or
                    physical space that slowly shifts us like we have been with
                    our phones—passively, in a physical environment while
                    mentally into a digital one. Yet, this is just the
                    beginning, because beyond a phone, our whole bodies will be
                    fully engaged, and that’s where the metaverse starts to get
                    interesting—where all things are possible, and a new and
                    imaginative world with our friends and companions.
                  </p>
                  <p>
                    In this place, we genuinely begin to explore and live in
                    these alternate realities simultaneously with our eternally
                    loyal and loving MetaPets.
                  </p>
                  <p>
                    Thanks to the level of resolution and quality of today’s
                    technology, the metaverse may appear as natural as in real
                    life. However, it’s all pointing toward a more immersive
                    entertainment experience that engages all of our senses
                    while staying true to a creator’s vision, for instance, the
                    ability to have a secondary existence in a virtual world
                    with your beloved pets. Owners can outfit their pets, train
                    and breed them, show them off at the national dog show, and
                    place them on a pedestal for others to envy.
                  </p>
                  <div className="about-main-img">
                    <img src="assets/images/about-main.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-half-round">
          <img src="assets/images/metapets-round.svg" alt="" />
        </div>
        <div className="about-full-round-img">
        <img className="rotating" src="assets/images/home-team-cercul.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
