import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
//import pg from "../assets/projects/pg.png";
//import project from "../assets/projects/project.jpeg";
//import lift from "../assets/projects/lift.png";
//import krypto from "../assets/projects/krypto.png";
//import kickstart from "../assets/projects/kickstart.png";
import Social from "../assets/projects/SM.PNG";
import Capture from "../assets/projects/RM.PNG";
import Food from "../assets/projects/FM.PNG";
import Movie from "../assets/projects/MM.PNG";
import insta from "../assets/projects/IM.PNG";
import ubereat from "../assets/projects/UM.PNG";
import Room from "../assets/projects/Room.PNG";
import Ecom from "../assets/projects/Ecommerce.PNG";
import Real from "../assets/projects/Realstate.PNG";
import Portfolio from "../assets/projects/Portfolio.PNG";
import Ecomm from "../assets/projects/Ecomm.PNG";
import DW from "../assets/projects/DW.PNG";
import crpto from "../assets/projects/crpto.PNG";
import Foodie from "../assets/projects/foodie.PNG";
import grilli from "../assets/projects/grilli.PNG";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h2 className="yellow" style={{ marginTop: 70 }}> React Native Projects </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">

            <ProjectCard
              imgPath={Social}
              isBlog={false}
              title="Social App"
              description="Our social app, built using React Native,brings people together through seamless and engaging interactions.With a user-friendly interface and intuitive design, users can connect, share, and discover content effortlessly.The app allows users to create profiles,post updates,share photos and videos, and interact with others through likes,comments,and direct messaging. Whether it's staying updated with friends or discovering new connections, our React Native social app offers a delightful experience for building and maintaining meaningful connections."
              ghLink="https://github.com/FaisalHanif12/Social-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Capture}
              isBlog={false}
              title="Registration App"
              description="our Login Registration app stands out as a reliable and convenient solution, enhancing the user journey with its smooth navigation, sleek design, and reliable security features. Whether accessing the app for the first time or returning to the platform, users will appreciate the hassle-free experience provided by our React Native application.Our React Native-based app also focuses on accessibility, catering to a broad range of users. The user interface is thoughtfully crafted to accommodate various devices and screen sizes, ensuring an optimized experience for all users"
              ghLink="https://github.com/FaisalHanif12/AnimatedScreens"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="Food Delivery App"
              description="FoodXpress is a cutting-edge food delivery app, thoughtfully designed and developed in React Native, to provide you with the most delightful and hassle-free culinary experience. With a host of innovative features, FoodXpress is set to revolutionize the way you order and enjoy your favorite meals.Ordering food has never been easier! Our app boasts a user-friendly interface that allows you to navigate through menus effortlessly. With just a few taps, you can customize your dishes, add special instructions, and place your order within seconds."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Display App"
              description="Cinemate is a user-friendly movie ticket booking app built with React Native, providing a seamless experience for booking movie tickets. With real-time seat availability, personalized recommendations, and secure payment options, Cinemate enhances your movie-watching experience. Share your excitement with friends through social sharing and enjoy exclusive loyalty rewards and offers. Download Cinemate now and immerse yourself in the magic of cinema!"
              ghLink="https://github.com/FaisalHanif12/MovieApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta}
              isBlog={false}
              title="Mini Instagram App"
              description="MiniGram is a compact and efficient Instagram app developed using React Native, allowing users to experience a streamlined version of the popular social media platform. With a user-friendly interface, MiniGram enables users to post photos, apply filters, and add captions effortlessly. Stay connected with friends by liking, commenting, and sharing posts. Explore captivating content through a simplified feed and discover new accounts. MiniGram brings the essence of Instagram to your fingertips, providing a delightful social media experience in a lightweight package."
              ghLink="https://github.com/FaisalHanif12/MiniInstagramApp"
            // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ubereat}
              isBlog={false}
              title="UberEat App"
              description="Uber Eat App in React Native is a dynamic food delivery application that brings a wide range of delicious cuisines right to your doorstep. With a simple and intuitive user interface, users can easily browse nearby restaurants, explore diverse menus, and place orders with just a few taps. The app also supports real-time order tracking, allowing users to follow their food's journey from preparation to delivery. Additionally, users can customize their orders, apply discounts, and securely make payments through various methods."
              ghLink="https://github.com/FaisalHanif12/UberEatApp"
            />
          </Col>


          <h2 className="yellow" style={{ marginTop: 50 }}> React Js Projects </h2>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Room}
              isBlog={false}
              title="Hotal Room Booking"
              description="The hotel room booking website is a comprehensive online platform designed to facilitate hotel reservations and enhance the experience of travelers and hotel owners alike. It offers a user-friendly interface with a range of features to simplify the booking process and provide detailed information to help users make informed decisions.The website boasts an intuitive and aesthetically pleasing design. The user interface is easy to navigate, ensuring that users of all levels of technical proficiency can access and use the platform effectively."
              ghLink="https://github.com/FaisalHanif12/Hotal-Booking-Website"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Welcome to my personal portfolio website, where I showcase my skills, experience, and projects in the field of  web development, graphic design, Reactjs. This website serves as a digital representation of who I am, what I've accomplished, and how you can get in touch with me.Thank you for visiting my portfolio website. I'm passionate about what I do, and I hope this website provides you with a glimpse of my skills and experiences. I'm excited to hear from you and discuss how we can work together to achieve our goals"
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="E-commerce Website"
              description="Welcome to our e-commerce platform, where you'll discover a wide range of products and a seamless shopping experience. Our website is built with React.js to ensure a user-friendly and visually appealing interface that makes your online shopping journey enjoyable and convenient.With a user-friendly navigation system and a robust search feature, finding the products you desire has never been easier. You can browse through categories, apply filters, and even search for specific items, ensuring you get exactly what you're looking for"
              ghLink="https://github.com/FaisalHanif12/Ecommerce-Reactjs-Website"
            />
          </Col>


          <h2 className="yellow" style={{ marginTop: 50 }}> Web Projects </h2>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Real}
              isBlog={false}
              title="Real State Website"
              description="The hotel room booking website is a comprehensive online platform designed to facilitate hotel reservations and enhance the experience of travelers and hotel owners alike. It offers a user-friendly interface with a range of features to simplify the booking process and provide detailed information to help users make informed decisions.The website boasts an intuitive and aesthetically pleasing design. The user interface is easy to navigate, ensuring that users of all levels of technical proficiency can access and use the platform effectively."
              ghLink="https://github.com/FaisalHanif12/Real-State-Website"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crpto}
              isBlog={false}
              title="Crpto Website"
              description="Welcome to our cryptocurrency-focused website, a hub for all things related to the exciting world of digital currencies. Our website is designed with HTML, CSS, and JavaScript to provide a clean and informative platform for crypto enthusiasts, traders, and those looking to learn more about this fascinating ecosystem.Our website is your gateway to staying informed and engaged with the latest developments in the world of cryptocurrencies. Whether you're a seasoned crypto investor or just starting your journey, you'll find valuable information and resources here."
              ghLink="https://github.com/FaisalHanif12/Crpto-Website-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomm}
              isBlog={false}
              title="E-commerce Website"
              description="Welcome to our e-commerce platform, where you'll discover a wide range of products and a seamless shopping experience. Our website is built with React.js to ensure a user-friendly and visually appealing interface that makes your online shopping journey enjoyable and convenient.With a user-friendly navigation system and a robust search feature, finding the products you desire has never been easier. You can browse through categories, apply filters, and even search for specific items, ensuring you get exactly what you're looking for"
              ghLink="https://github.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DW}
              isBlog={false}
              title="Dashboard Website"
              description="
            
                Welcome to the Techxelo Company Dashboard, your one-stop destination for a comprehensive overview of our company's performance and key statistics. This dashboard has been meticulously crafted using HTML, CSS, and JavaScript to provide you with real-time insights into our organization's achievements and milestones.At Techxelo, transparency and data-driven decision-making are at the core of our operations. Our dashboard empowers our team and stakeholders to stay informed and in control by offering a clear and visual representation."
              ghLink="https://github.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodie}
              isBlog={false}
              title="Foodie Website"
              description="Welcome to Foodie's Delight, your culinary destination where you can explore a world of delectable food-related items. Our website, crafted with HTML, CSS, and JavaScript, is a feast for your eyes and a treat for your taste buds.At Foodie's Delight, we're passionate about everything related to food. Whether you're a seasoned chef, a home cook, or just a food enthusiast, you'll find a treasure trove of culinary delights on our website.Discover an extensive collection of mouthwatering recipes from around the globe. From appetizers to desserts."
              ghLink="https://github.com/FaisalHanif12/Foodie-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grilli}
              isBlog={false}
              title="Grilli Website"
              description="Welcome to Grilli, your ultimate destination for all things related to the world of gastronomy and culinary delights. Our website, meticulously handcrafted using HTML, CSS, and JavaScript, is a paradise for food enthusiasts, grill masters, and anyone who appreciates the art of cooking.Explore a diverse collection of grilling recipes and cooking techniques that go beyond the ordinary. From perfectly seared steaks to mouthwatering barbeque ribs, we've got your taste buds covered. Discover tips and tricks for mastering the art of grilling."
              ghLink="https://github.com/FaisalHanif12/Grilli-Food-Website"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects