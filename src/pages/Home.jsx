import { useEffect, useState } from "react";
import {
  alien1,
  alien2,
  alien3,
  bootstrapIcon,
  closeIcon,
  cssIcon,
  cv,
  discordIcon,
  dragonIllustration,
  ecommerceIcon,
  emailIcon,
  figmaIcon,
  githubIcon,
  htmlIcon,
  instagramIcon,
  javascriptIcon,
  krypto,
  landingpageIcon,
  menuIcon,
  monabele,
  monabeleLogo,
  mysqlIcon,
  nextcent,
  njila,
  phoneIcon,
  phpIcon,
  pnCars,
  pnclique,
  reactIcon,
  rightArrow,
  saasIcon,
  typescriptIcon,
  websiteIcon,
  whiteLogo,
  youtube,
} from "../assets";

// COMPONENTS
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import Container from "../components/layout/Container";
import Project from "../components/common/Project";
import Service from "../components/common/Service";

export default function Home() {
  const [header, setHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setHeader(true) : setHeader(false);
    });

    links.forEach((element) => {
      element.addEventListener("click", () => {
        links.forEach((link) => {
          link.classList.remove("active");
        });

        setOpenMenu(false);

        element.classList.add("active");
      });
    });
  });
  return (
    <div className="w-full relative overflow-x-hidden">
      <nav
        className={`fixed w-full  h-full top-0 left-0 bg-[#00000070] z-10 backdrop-blur-md transition duration-150 ${
          openMenu ? "scale-100 rounded-md" : "scale-0 rounded-full"
        }`}
      >
        <div className="flex items-center h-full justify-center relative">
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-6 right-8"
          >
            <img src={closeIcon} className="w-6" alt="Close Menu" />
          </button>
          <ul className="flex flex-col items-center gap-8">
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
                href="#myportfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#myexperience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#mycontacts"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header
        className={`flex w-full transition duration-150 items-center justify-between py-4  xs:px-8 lg:px-28 border-b-2 border-gray-variation-1 ${
          header
            ? "fixed -top-[1px] bg-[#00000070] z-10 backdrop-blur-sm"
            : "relative"
        }`}
      >
        <div>
          <a href="">
            <img src={whiteLogo} className="w-12" alt="Logo" />
          </a>
        </div>

        <nav className="xs:hidden lg:flex items-center  justify-between">
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
                href="#myportfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#myexperience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#mycontacts"
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

        <button className="lg:hidden" onClick={() => setOpenMenu(true)}>
          <img className="w-6" src={menuIcon} alt="Menu" />
        </button>
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
            <h1 className="xs:text-5xl lg:text-6xl text-center font-poppinsSemiBold">
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

          <Button className="bg-gradient-to-b py-5 px-10 from-primary-color to-secondary-color">
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
          className="xs:w-full lg:w-[70%] absolute opacity-10 -z-10"
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

        <Button
          href={cv}
          download="curriculum-garciasebastiao.pdf"
          className="border-2 border-primary-color"
        >
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

        <Text className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex items-start mt-8 gap-6 flex-wrap">
          <Service
            icon={landingpageIcon}
            title="Landing Page"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis illo aliquam quae in velit provident deserunt
                reiciendis non voluptates beatae maxime ullam doloribus unde
                voluptate, temporibus."
            price="90.000.00"
          />

          <Service
            icon={landingpageIcon}
            title="Web Sites"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis illo aliquam quae in velit provident deserunt
                reiciendis non voluptates beatae maxime ullam doloribus unde
                voluptate, temporibus."
            price="150.000.00"
          />

          <Service
            icon={ecommerceIcon}
            title="Ecommerces"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis illo aliquam quae in velit provident deserunt
                reiciendis non voluptates beatae maxime ullam doloribus unde
                voluptate, temporibus."
            price="250.000.00"
          />
        </div>
      </Container>

      <Container id="myportfolio" className="py-48">
        <div
          className="w-20 h-20 absolute
         right-24 top-32 bg-secondary-color blur-3xl"
        ></div>
        {/* 
        <div
          className="w-28 h-28 absolute -bottom-12
         left-20 bg-secondary-color blur-3xl opacity-60"
        ></div> */}

        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-color text-md font-poppinsMedium">
            Explore with
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Portfolio
          </h2>
        </div>

        <Text className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex items-center justify-center mt-4 gap-3 flex-wrap">
          <button className="px-6 py-3 flex-none rounded-md border-2 border-primary-color hover:bg-primary-color-50 transition duration-150 brightness-90 focus:bg-primary-color-50">
            Web
          </button>
          <button className="px-6 py-3 flex-none rounded-md border-2 border-primary-color hover:bg-primary-color-50 transition duration-150 brightness-90 focus:bg-primary-color-50">
            Mobile
          </button>
          <button className="px-6 py-3 flex-none rounded-md border-2 border-primary-color hover:bg-primary-color-50 transition duration-150 brightness-90 focus:bg-primary-color-50">
            UI/UX Design
          </button>
        </div>

        <div className="flex items-center gap-4 mt-8 justify-center flex-wrap">
          <Project
            image={monabele}
            alt="Monabelle WebSite"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              assumenda magni sunt deserunt, doloribus quasi quos laudantium
              porro ea fugiat sit exercitationem."
          />
          <Project
            image={nextcent}
            alt="NextCent WebSite"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              assumenda magni sunt deserunt, doloribus quasi quos laudantium
              porro ea fugiat sit exercitationem."
          />
          <Project
            image={krypto}
            alt="Krypto WebSite"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              assumenda magni sunt deserunt, doloribus quasi quos laudantium
              porro ea fugiat sit exercitationem."
          />
          <Project
            image={youtube}
            alt="Clone Youtube"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              assumenda magni sunt deserunt, doloribus quasi quos laudantium
              porro ea fugiat sit exercitationem."
          />
          <Project
            image={pnCars}
            alt="PN CAR WebSite"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              assumenda magni sunt deserunt, doloribus quasi quos laudantium
              porro ea fugiat sit exercitationem."
          />
        </div>
      </Container>

      <Container id="myexperience" className="pb-44">
        <div
          className="w-20 h-20 absolute
         left-20 top-0 bg-secondary-color blur-3xl"
        ></div>
        <div
          className="w-20 h-20 absolute
         right-20  bg-secondary-color blur-3xl"
        ></div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-color text-md font-poppinsMedium">
            Know about
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Experience
          </h2>
        </div>

        <Text className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex relative py-10 gap-16 w-3/4 justify-center items-center flex-wrap">
          <img className="w-44" src={njila} alt="Njila Brand" />
          <img className="w-44" src={pnclique} alt="Pn Clique" />
          <img className="w-44" src={monabeleLogo} alt="Njila Brand" />
        </div>
      </Container>

      <Container
        id="mycotacts"
        className="pb-48 pt-20 bg-gradient-to-t from-[#00000060] from-[50%] to-transparent h-[80vh] backdrop-blur-sm"
      >
        <div
          className="w-20 h-20 absolute
         left-20 top-0 bg-secondary-color blur-3xl"
        ></div>
        <div
          className="w-20 h-20 absolute
         right-20  bg-secondary-color blur-3xl"
        ></div>

        <img
          src={alien1}
          className="w-[320px] opacity-10 -z-10 absolute top-10 left-[50%] -translate-x-[50%s]"
          alt=""
        />

        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-color text-md font-poppinsMedium">
            Get all
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Contacts
          </h2>
        </div>

        <Text className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex relative py-10 gap-6 w-3/4 justify-center items-center flex-wrap">
          <div className="flex brightness-80 items-center gap-4">
            <img className="w-6" src={phoneIcon} alt="Phone Number" />
            <span className="text-sm">+244 934 889 417</span>
          </div>

          <div className="flex brightness-80 items-center gap-4">
            <img className="w-6" src={phoneIcon} alt="Phone Number" />
            <span className="text-sm">+244 952 011 203</span>
          </div>

          <div className="flex brightness-80 items-center gap-4">
            <img className="w-6" src={emailIcon} alt="Email" />
            <span className="text-sm">garciapedro.php@outlook.com</span>
          </div>

          <div className="flex brightness-80 items-center gap-4">
            <img className="w-6" src={emailIcon} alt="Email" />
            <span className="text-sm">garciasebastiao.php@gmail.com</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-[50%] -translate-x-[50%]">
          <span className="text-sm text-center brightness-50">
            Developed by{" "}
            <span className="font-poppinsMedium">Garcia Sebastião</span>. All
            Rights Reserved. Luanda, 2023
          </span>
        </div>
      </Container>
    </div>
  );
}
