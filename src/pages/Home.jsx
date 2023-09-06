import { useEffect, useState } from "react";
import {
  bootstrapIcon,
  cssIcon,
  discordIcon,
  dragonIllustration,
  dragonIllustration1,
  ecommerceIcon,
  figmaIcon,
  githubIcon,
  htmlIcon,
  instagramIcon,
  javascriptIcon,
  landingpageIcon,
  mysqlIcon,
  phpIcon,
  reactIcon,
  rightArrow,
  saasIcon,
  typescriptIcon,
  websiteIcon,
  whiteLogo,
} from "../assets";

// COMPONENTS
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import Container from "../components/layout/Container";

export default function Home() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("header nav ul li a");

    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setHeader(true) : setHeader(false);
    });

    links.forEach((element) => {
      element.addEventListener("click", () => {
        links.forEach((link) => {
          link.classList.remove("active");
        });

        element.classList.add("active");
      });
    });
  });
  return (
    <div className="w-full relative">
      <header
        className={`flex w-full transition duration-150 items-center justify-between py-4 px-28 border-b-2 border-gray-variation-1 ${
          header ? "fixed bg-[#00000070] z-10 backdrop-blur-sm" : "relative"
        }`}
      >
        <div>
          <a href="">
            <img src={whiteLogo} className="w-12" alt="Logo" />
          </a>
        </div>

        <nav className="flex items-center  justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <a
                className="text-sm active hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#aboutme"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#myservices"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          <li>
            <a href="#">
              <img className="w-6" src={githubIcon} alt="Githug" />
            </a>
          </li>

          <li>
            <a href="#">
              <img className="w-6" src={instagramIcon} alt="Instagram" />
            </a>
          </li>

          <li>
            <a href="#">
              <img className="w-6" src={discordIcon} alt="Discord" />
            </a>
          </li>
        </ul>
      </header>

      <section
        id="home"
        className="w-full relative py-44 pb-52 flex items-center justify-center px-28 border-b-2 border-gray-variation-1"
      >
        <div
          className="w-28 h-28 absolute top-44
         left-20 bg-secondary-color blur-3xl opacity-60"
        ></div>

        <div
          className="w-20 h-20 absolute
         right-20 top-20 bg-secondary-color blur-3xl"
        ></div>

        <div
          className="w-32 h-32 absolute
         right-96 bottom-16 bg-secondary-color blur-3xl opacity-70"
        ></div>

        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-poppinsMedium">Web Developer</h2>
            <h1 className="text-6xl font-poppinsSemiBold">
              <span className="text-primary-color font-poppinsBold">
                Konnichiwa!🐰
              </span>{" "}
              I'm Garcia Sebastião
            </h1>
          </div>

          <p className="text-center max-w-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            nesciunt quibusdam ipsam a amet laborum rem cum voluptates quasi.
            Assumenda illum impedit quisquam? Reiciendis fuga ullam autem! Nisi,
            eveniet voluptas?
          </p>

          <Button className="bg-gradient-to-b from-primary-color to-secondary-color">
            <span className="text-white text-sm font-poppinsMedium">
              Saber mais
            </span>
          </Button>
        </div>
      </section>

      <Container id="aboutme" className="py-48">
        <div
          className="w-24 h-24  absolute top-44
         left-36 bg-secondary-color blur-3xl opacity-60"
        ></div>

        <img
          src={dragonIllustration}
          className="w-[70%] absolute opacity-10"
          alt=""
        />

        <div
          className="w-12 h-12 absolute
         right-44 top-72 bg-secondary-color blur-3xl"
        ></div>

        <div
          className="w-10 h-10 absolute
         left-[40%] bottom-16 bg-secondary-color blur-3xl"
        ></div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-color text-md font-poppinsMedium">
            Know more
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">About Me</h2>
        </div>

        <Text className="text-center max-w-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          explicabo ab unde, a dignissimos reprehenderit perferendis temporibus
          consequatur illo, labore quam, voluptatibus libero minima provident
          enim? Odit dolores quas voluptatem.
        </Text>

        <Button className="border-2 border-primary-color">
          <span className="text-sm font-poppinsMedium">Download CV</span>
        </Button>

        <div className="mt-4">
          <ul className="flex items-center gap-6 justify-center max-w-md flex-wrap">
            <li>
              <img className="w-12" src={htmlIcon} alt="HTML" />
            </li>

            <li>
              <img className="w-12" src={cssIcon} alt="CSS" />
            </li>

            <li>
              <img className="w-12" src={javascriptIcon} alt="Javascript" />
            </li>

            <li>
              <img className="w-12" src={saasIcon} alt="SASS" />
            </li>

            <li>
              <img className="w-12" src={reactIcon} alt="ReactJs" />
            </li>

            <li>
              <img className="w-12" src={typescriptIcon} alt="Typescript" />
            </li>

            <li>
              <img className="w-12" src={phpIcon} alt="PHP" />
            </li>

            <li>
              <img className="w-12" src={mysqlIcon} alt="MYSQL" />
            </li>

            <li>
              <img className="w-12" src={figmaIcon} alt="Figma" />
            </li>

            <li>
              <img className="w-12" src={bootstrapIcon} alt="Bootstrap" />
            </li>
          </ul>
        </div>
      </Container>

      <Container id="myservices" className="">
        <div
          className="w-20 h-20 absolute
         right-20 top-20 bg-secondary-color blur-3xl"
        ></div>

        <div
          className="w-28 h-28 absolute -bottom-12
         left-20 bg-secondary-color blur-3xl opacity-60"
        ></div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-color text-md font-poppinsMedium">
            Know about
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Services
          </h2>
        </div>

        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex items-start mt-8 gap-6">
          <div className="bg-primary-color-50 border-2 border-primary-color p-10 rounded-md flex flex-col items-start gap-6">
            <img
              src={landingpageIcon}
              className="w-16 brightness-90"
              alt="Websites"
            />
            <div className="flex flex-col gap-2">
              <h3 className="brightness-90 text-2xl font-poppinsMedium">
                Landing Page
              </h3>

              <span className="text-sm brightness-90">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis illo aliquam quae in velit provident deserunt
                reiciendis non voluptates beatae maxime ullam doloribus unde
                voluptate, temporibus.
              </span>

              <span className="brightness-90 text-md">
                Basic Price: 90.000.00 kzs
              </span>
            </div>

            <Button className="bg-white mt-3">
              <span className="text-primary-color text-sm font-poppinsMedium">
                Buy
              </span>
              <img className="w-4" src={rightArrow} alt="" />
            </Button>
          </div>

          <div className="bg-primary-color-50 border-2 border-primary-color p-10 rounded-md flex flex-col items-start gap-6">
            <img
              src={websiteIcon}
              className="w-16 brightness-90"
              alt="Websites"
            />
            <div className="flex flex-col gap-2">
              <h3 className="brightness-90 text-2xl font-poppinsMedium">
                Web Site
              </h3>

              <span className="text-sm brightness-90">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis illo aliquam quae in velit provident deserunt
                reiciendis non voluptates beatae maxime ullam doloribus unde
                voluptate, temporibus.
              </span>

              <span className="brightness-90 text-md">
                Basic Price: 150.000.00 kzs
              </span>
            </div>

            <Button className="bg-white mt-3">
              <span className="text-primary-color text-sm font-poppinsMedium">
                Buy
              </span>
              <img className="w-4" src={rightArrow} alt="" />
            </Button>
          </div>

          <div className="bg-primary-color-50 border-2 border-primary-color p-10 rounded-md flex flex-col items-start gap-6">
            <img
              src={ecommerceIcon}
              className="w-16 brightness-90"
              alt="Websites"
            />
            <div className="flex flex-col gap-2">
              <h3 className="brightness-90 text-2xl font-poppinsMedium">
                E-commerce
              </h3>

              <span className="text-sm brightness-90">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis illo aliquam quae in velit provident deserunt
                reiciendis non voluptates beatae maxime ullam doloribus unde
                voluptate, temporibus.
              </span>

              <span className="brightness-90 text-md">
                Basic Price: 250.000.00 kzs
              </span>
            </div>

            <Button className="bg-white mt-3">
              <span className="text-primary-color font-poppinsMedium text-sm">
                Buy
              </span>
              <img className="w-4" src={rightArrow} alt="" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
