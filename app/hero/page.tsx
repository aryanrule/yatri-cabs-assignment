import React from "react";
import "./Hero.css";
import Image from "next/image";
import Form from "../form/page";
import { userAgent } from "next/server";

const testimonial_1 = [
  {
    id: 1,
    logo: "/group.png",
    heading: "Return Fare, Not Fair!",
    content:
      "Why Pay for Return Journey when you are travelling oneway? Now get discounted AC Taxi at just half of the round trip cost for your one way travel.",
  },
  {
    id: 2,
    logo: "/location.png",
    heading: "GPS Based Billing System ",
    content:
      "Since the GPS data captures the actual distance and time travelled, it reduce the chance of Kilometer tampering or discrepancies in billing.",
  },
  {
    id: 3,
    logo: "/driving.png",
    heading: "Now available routes are!",
    content: "Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly",
  },
];

const testimonial_2 = [
  {
    id: 1,
    logo: "/bolt.png",
    heading: "Fast response time",
    content:
      "Why Pay for Return Journey when you are travelling oneway? Now get discounted AC Taxi at just half of the round trip cost for your one way travel.",
  },
  {
    id: 2,
    logo: "/people.png",
    heading: "Vast fleet",
    content:
      "Since the GPS data captures the actual distance and time travelled, it reduce the chance of Kilometer tampering or discrepancies in billing.",
  },
  {
    id: 3,
    logo: "/order.png",
    heading: "Easy to order",
    content: "Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly",
  },
  {
    id: 4,
    logo: "paid.png",
    heading: "Great tariffs",
    content:
      "Rent a Car at the Lowest Rates! Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri Car Rental.",
  },
];

const carTable = [
  {
    heading: "CAR TYPE",
    subHeadings: ["AC Sedans", "AC Hatchbacks", "AC SUV"],
  },
  {
    heading: "MODEL INCLUDES",
    subHeadings: [
      "Etios, Amaze, Dzire etc.",
      "Wagon R, Celerio, Micra etc.",
      "Ertiga, Xylo etc.",
    ],
  },
  {
    heading: "PASSENGERS",
    subHeadings: ["4 Pax", "4 Pax", "6-7 Pax"],
  },
  {
    heading: "IDEAL FOR",
    subHeadings: [
      "Comfortable trips with small families",
      "Budget trips over short distances",
      "Premium trips with large families",
    ],
  },
  {
    heading: "FARE",
    subHeadings: ["Rs.11/KM", "Rs.11/KM", "Rs.13/KM"],
  },
];

const review_testimonials = [
  {
    logo: "/rating.png",
    review:
      "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!",
    user_name: "Vikram Kulkarni",
    location: "kalyan maharashtra",
  },
  {
    logo: "/rating.png",
    review:
      "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!",
    user_name: "Rajesh Kumawat",
    location: "Kanpur, Uttar Pradesh",
  },
  {
    logo: "/rating.png",
    review:
      "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable.",
    user_name: "Anjali Mishra",
    location: "Gorakhpur, Uttar Pradesh",
  },
  {
    logo: "/rating.png",
    review:
      "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable.",
    user_name: "Siddharth Vaidya",
    location: "Rohini, Delhi",
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="image-wrapper">
        {/* Layer 1 */}
        <img src="/screen.jpg" className="screen-image" />

        {/* Layer 2 */}
        <img src="/shadow.png" className="shadow-image" />

        {/* Layer 3 (IMPORTANT) */}
        <div className="overlay-content">
          <div className="hero-left">
            <h1 className="hero-heading">
              INDIA'S{" "}
              <span>
                LEADING <br /> ONE WAY
              </span>
              INTERCITY CAB SERVICE PROVIDER
            </h1>
          </div>

          <div className="hero-right">
            <Form />
          </div>
        </div>
      </div>

      <div className="billing-container">
        <div className="billing-block">
          <h1 className="billing-heading">Transparent Billing</h1>
          <p className="billing-subtext">GPS Based Billing | No Km Tampering</p>
        </div>

        <div className="billing-divider"></div>

        <div className="billing-block">
          <h1 className="billing-heading">Download Now!</h1>
          <div className="billing-icons">
            <img src="/google_play.png" alt="google" />
            <img src="/apple_store.png" alt="apple" />
          </div>
        </div>

        <div className="billing-divider"></div>

        <div className="billing-block">
          <h1 className="billing-heading">No Return Fare</h1>
          <p className="billing-subtext">
            Pay only one way | No hidden charges
          </p>
        </div>
      </div>

      <div className="testimonials-cards">
        <div className="test-cards">
          <img className="test-cards_image" src="/hand.png" />
          <h3>Return Fare, Not Fair!</h3>
          <p>
            Why Pay for Return Journey when you are travelling oneway? Now get
            discounted AC Taxi at just half of the round trip cost for your one
            way travel.
          </p>
        </div>

        <div className="line-separator"></div>

        <div className="test-cards">
          <img className="test-cards_image" src="/location.png" />
          <h3>GPS Based Billing System </h3>
          <p>
            Since the GPS data captures the actual distance and time travelled,
            it reduce the chance of Kilometer tampering or discrepancies in
            billing.
          </p>
        </div>

        <div className="line-separator"></div>

        <div className="test-cards">
          <img className="test-cards_image" src="/driving.png" />
          <h3>Now available routes are!</h3>
          <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
        </div>
      </div>

      <div className="about_product">
        <h1 className="about_product_heading1">
          India's Premier Intercity and Local Taxi Services
        </h1>
        <h4 className="about_product_heading2">
          At Yatri Cabs, we pride ourselves on being a top-tier online oneway
          cab booking service, delivering reliable and premium intercity and
          local taxi services. With over a decade of experience, Instead of
          self-drive car rental, we have become the leading driver-driven One
          Way car rental company in India, renowned for our extensive coverage
          across the country
        </h4>
      </div>

      <h1 className="why">
        WHY <span className="yatri">YATRI</span>?
      </h1>
      <div className="block1">
        <img id="swift_image" src="/swift.svg" />

        <div className="sideblock1">
          {testimonial_2.map((item, index) => (
            <div key={index} className="inner-block1">
              <img src={item.logo} />
              <div className="inner-block1-content">
                <h2>{item.heading}</h2>
                <h3>{item.content}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="car-table">
        {carTable.map((col, index) => (
          <div key={index} className="car-column">
            <div className="car-header">{col.heading}</div>

            <div className="car-body">
              {col.subHeadings.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <section className="car_animation_block">
        <div className="car_animation_text">
          <h1>
            WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <br />
            <span className="highlight-green">ONE-WAY JOURNEY?</span>
          </h1>

          <p>
            Our oneway Car Rental service is cheaper than AC bus and 2-tier AC
            train ticket fares. It reduces your travel time, and you travel in
            your own private space, allowing you to fully enjoy your journey.
            Our one way taxi will come to your doorstep and take you to your
            desired destination. So, book your Cheapest one way cab from Lucknow
            to Gorakhpur or Varanasi to Ayodhya with our reliable Oneway car
            rental service with driver. Experience the convenience of our taxi
            service, where you can rent a car effortlessly and enjoy seamless
            cab booking. Choose our car hire option for a hassle-free and
            comfortable travel experience. We offer outstation cab and intercity
            travel services, ensuring a smooth and enjoyable Luxury ride
            wherever you need to go.
          </p>
        </div>

        <div className="car_animation_video">
          <video src="/book-taxi.mp4" autoPlay muted loop playsInline />
        </div>
      </section>

      <div className="green-section">
        <p className="car-rental-heading">
          Car Rental in India - Book Reliable Vehicles for All Your Needs
        </p>
      </div>

      <div className="benefits-section">
        {/* TOP PARAGRAPH */}
        <p className="benefits-intro">
          Choosing a chauffeur-driven car rental over a self-drive Car Hire
          option in India offers several benefits with Yatri Car Rental:
        </p>

        {/* POINTS */}
        <div className="benefits-list">
          <p>
            <span className="benefit-title">1. Skilled Chauffeurs:</span>
            Our experienced and courteous drivers ensure a safe, comfortable,
            and stress-free ride. Whether you need a taxi service, outstation
            car rental, or oneway cab, they are adept at navigating India’s
            roads for a seamless travel experience.
          </p>

          <p>
            <span className="benefit-title">
              2. Dedicated Oneway Cab Service:
            </span>
            We offer specialized oneway car rental services across India,
            allowing you to pay only for the distance you travel. This makes
            intercity trips both cost-effective and convenient.
          </p>

          <p>
            <span className="benefit-title">
              3. Well-Maintained Car Rental Fleet:
            </span>
            Our fleet of rental cars in India is kept in top condition, ensuring
            you enjoy a comfortable and secure ride.
          </p>

          <p>
            <span className="benefit-title">
              4. Transparent Pricing for Car Hire:
            </span>
            Our GPS-based billing system ensures fair pricing by eliminating any
            chances of kilometer tampering, giving you transparency and peace of
            mind.
          </p>

          <p>
            <span className="benefit-title">
              5. 24/7 Customer Support for Car Rentals:
            </span>
            Our customer care team is available round the clock to assist with
            any inquiries, ensuring a smooth experience throughout your journey.
          </p>
        </div>
      </div>

      <div className="oneway-heading">
        <h1>Why Choose One Way Cab?</h1>
      </div>

      <div className="oneway-card">
        <div className="card side-card">
          <ul>
            <li>Instant Booking & Confirmation</li>
            <li>Confirmed Booking Immediately</li>
            <li>No Return Fare For One-Way Trip</li>
            <li>Clean & Professional Cab Services</li>
            <li>Transparent Billing With GPS Based Billing System</li>
          </ul>
        </div>

        <div className="card center-card">
          <video src="/moving-car.mp4" autoPlay muted loop playsInline />
        </div>

        <div className="card side-card">
          <ul>
            <li>Pick-Up From Your House</li>
            <li>Dedicated Cab Just For You</li>
            <li>Drop To Your Desired Destination</li>
            <li>Completed More Than 20,000+ Oneway Trips</li>
            <li>Multiple Payment Option Including Credit Card.</li>
          </ul>
        </div>
      </div>

      <div className="discover-section">
        <h1>
          Discover affordable travel with our seamless
          <span className="highlight-text"> intercity car rental </span>
          in India – where excellence meets affordability with standardized
          rates in every city. Unleash your journey!
        </h1>
      </div>

      {/* leftover */}
      <div className="green-section">
        <p className="car-rental-heading">
          Exploring India's amazing landscapes, from the mountains to the
          beaches, one memorable road trip at a time
        </p>
      </div>

      <div className="benefits-section">
        <ul className="benefits-list">
          <li className="benefit-item">
            Experience the thrill of road travel with our reliable car rental
            and taxi service as we explore the diverse landscapes of India
            together. We're passionate about making car hire accessible and
            enjoyable for everyone.
          </li>

          <li className="benefit-item">
            Instead of worrying about the road, relax in our chauffeur-driven
            cabs on your next vacation. With a presence in over 2000 cities
            across India, we're here to take you wherever your heart desires
            with our Luxury car rental services.
          </li>

          <li className="benefit-item">
            We cherish the freedom to stop, breathe in the fresh air, immerse in
            local cultures, and savor regional cuisines along the way. These
            moments of discovery enrich your travels and create lasting memories
            through our rent a car service.
          </li>

          <li className="benefit-item">
            No destination is too far or too close; we encourage you to explore
            the beauty around you with our car hire options. Pack your bags, set
            out on weekend adventures, and uncover the gems in your vicinity
            with our taxi service.
          </li>

          <li className="benefit-item">
            Planning your trip is a breeze with our user-friendly website, or
            you can chat with our travel experts at 7860663399 for personalized
            guidance on car rental. Our cab booking app simplifies the process,
            ensuring a hassle-free experience when you rent a car.
          </li>

          <li className="benefit-item">
            Our experienced drivers are your companions on the road, guiding you
            through India's best experiences with our car rental and taxi
            service. From booking to your safe return home, we're dedicated to
            ensuring you have an exceptional road trip.
          </li>
        </ul>
      </div>

      {/* car icon things are leftover */}

      <div className="green-section">
        <p className="car-rental-heading">Why Choose Yatri Car Rental?</p>
      </div>

      <div className="benefits-section">
        <div className="benefits-list">
          {/* Main Intro */}
          <p className="benefit-para">
            Yatri Car Rental has been a trusted digital platform for booking
            local and outstation car rental and taxi services since 2014. Our
            primary goal is to offer our clients an exceptional car rental and
            cab booking experience. We take pride in our commitment to safety,
            reliability, and experienced drivers, making us a preferred choice
            across India.
          </p>

          {/* Para 1 */}
          <p className="benefit-para">
            <span className="benefit-title">Service You Can Trust - </span>
            At Yatri Car Rental, we are dedicated to providing dependable
            services in India. We ensure that bookings are never cancelled
            without prior notice, and our vehicles are well-maintained for a
            seamless journey.
          </p>

          {/* Para 2 */}
          <p className="benefit-para">
            <span className="benefit-title">Safety is Our Priority - </span>
            Safety and comfort are paramount. We hire experienced drivers with
            deep knowledge of routes and traffic regulations, ensuring a smooth
            and safe ride for all passengers.
          </p>

          {/* Para 3 */}
          <p className="benefit-para">
            <span className="benefit-title">
              Expert Chauffeurs at Your Service -{" "}
            </span>
            We select only skilled, knowledgeable, and courteous drivers to
            enhance your overall travel experience and satisfaction.
          </p>

          {/* Para 4 */}
          <p className="benefit-para">
            <span className="benefit-title">
              Extensive Industry Experience -{" "}
            </span>
            With over 10 years of industry expertise, Yatri Car Rental is your
            trusted choice for premium car hire services.
          </p>

          {/* Para 5 */}
          <p className="benefit-para">
            <span className="benefit-title">Proven Track Record - </span>
            We emphasize transparency in billing and consistently deliver a
            seamless experience. Our strong Google ratings (4.8★+) reflect our
            commitment to customer satisfaction.
          </p>
        </div>
      </div>

      <div className="customer_testimonial">
        {/* HEADING */}
        <div className="testimonial-header">
          <h1>Customer Testimonials</h1>
        </div>

        {/* CARDS */}
        <div className="testimonial-cards">
          {review_testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              {/* STARS */}
              <div className="stars">★★★★★</div>

              {/* REVIEW */}
              <p className="testimonial-text">{item.review}</p>

              {/* USER */}
              <h4 className="testimonial-name">{item.user_name}</h4>
              <p className="testimonial-location">{item.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="landing-container">
        {/* Hero Section */}
        <div className="hero-section">
          {/* Mobile Image */}
          <div className="hero-image-container">
            <img src="/mobile.png" alt="Mobile App" className="hero-image" />
          </div>

          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="hero-title">
              GET YOUR <span className="highlight-yatri-cabs">YATRI CABS</span>{" "}
              APP NOW!
            </h1>
            <h4 className="hero-subtitle">
              Use code <span className="highlight">WELCOMEYATRI</span> and get{" "}
              <span className="highlight">FLAT</span> 05% OFF* on your first
              intercity RIDE
            </h4>

            {/* Download Section */}
            <div className="download-section">
              <h4 className="download-title">Download Now</h4>
              <div className="app-icons">
                <img
                  src="/google_play.png"
                  alt="Google Play"
                  className="app-icon"
                />
                <img
                  src="/apple_store.png"
                  alt="Apple Store"
                  className="app-icon"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="separator-line"></div>

        <div className="driver-section">
          <h1 className="driver-title">
            Become a <span className="driver">Driver</span> Partner
          </h1>
          <p className="driver-description">
            Join Yatri Car Rental and attach your car to our platform. Earn more
            by serving our passengers and benefit from our extensive customer
            Base.
          </p>
          <button className="driver-button">DOWNLOAD THE APP</button>
        </div>
      </div>

      <div className="operational-cities">
        <span className="cities-label">Operational Cities:</span>
        <span className="city">Lucknow</span>
        <span className="city">Ayodhya</span>
        <span className="city">Varanasi</span> 
        <span className="city">Gorakhpur</span>
        <span className="city">Varanasi</span>
        <span className="city">Allahbad(Prayagraj)</span>
        <span className="city">kanpur</span>
      </div>

      <footer className="footer">
        <div className="footer-logo">
          <img src="/yatri.svg" alt="Yatri Cabs Logo" />
        </div>

        <div className="footer-nav">
          <ul className="footer-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Career</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="footer-copy">
          <h4>All Copyrights are reserved by YATRI CABS</h4>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
