import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  alien1,
  alien2,
  alien3,
  bootstrapIcon,
  closeIcon,
  cssIcon,
  cv,
  dimukaKitadi,
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

// HOOKS
import {
  bannerTextAnimation,
  fadeAnimation,
  scaleAnimation,
} from "../assets/utils/animations";

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
        className={`fixed w-full  h-full top-0 left-0 bg-[#00000070] z-40 backdrop-blur-md transition duration-150 ${
          openMenu ? "scale-100 rounded-md" : "scale-0 rounded-full"
        }`}
      >
        <div className="flex items-center h-full justify-center relative">
          <img src={whiteLogo} className="w-10 absolute left-8 top-6" alt="" />
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
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#aboutme"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#myservices"
              >
                Serviços
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
                Experiências
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#mycontacts"
              >
                Contactos
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
                Inicio
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#aboutme"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#myservices"
              >
                Serviços
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
                Experiencias
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:text-primary-color transition duration-150 focus:text-primary-color"
                href="#mycontacts"
              >
                Contactos
              </a>
            </li>
          </ul>
        </nav>

        <ul className="flex items-center gap-3">
          <li>
            <a href="#">
              <img className="w-6" src={githubIcon} alt="Github" />
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
        className="w-full relative py-44 pb-72 flex items-center justify-center  xs:px-16 lg:px-28 border-b-2 border-gray-variation-1"
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
            <motion.h2
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
              className="text-2xl font-poppinsMedium"
            >
              Web Developer
            </motion.h2>
            <motion.h1
              initial={fadeAnimation.initial}
              whileInView={fadeAnimation.animate}
              transition={fadeAnimation.transition}
              className="xs:text-5xl lg:text-6xl text-center font-poppinsSemiBold"
            >
              <span className="text-primary-color font-poppinsBold">
                Konnichiwa!
                <motion.span
                  initial={bannerTextAnimation.initial}
                  whileInView={bannerTextAnimation.animate}
                  transition={{ duration: 1, delay: 2 }}
                >
                  🐰
                </motion.span>
              </span>{" "}
              I'm Garcia Sebastião
            </motion.h1>
          </div>

          <p className="text-center lg:max-w-4xl">
            Este é meu portfolio pessoal, onde falo um pouso sobre mim, minha
            carreira como dev, e alguns projectos que desenvolvi durante esse
            periodo. Caso pretenda obter meus serviços, meus contactos também
            estarão disponíveis aqui.
          </p>

          <Button
            href="#aboutme"
            className="bg-gradient-to-b py-5 px-10 from-primary-color to-secondary-color"
          >
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

        <motion.div
          initial={fadeAnimation.initial}
          whileInView={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-color text-md font-poppinsMedium">
            Saiba mais
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            Sobre mim
          </h2>
        </motion.div>

        <Text className="text-center max-w-3xl">
          Nasci no dia 23 de Abril de 2004. Sempre fui apaixonado pela
          tecnologia já que desde pequeno sempre fui fascinado por computadores,
          video jogos, e sempre desperava aquela curiosidade em mim em saber
          como funcionava. Com isso decidi no ensino médio cursar Informática,
          onde conheci o universo web, universo esse que trabalho até hoje.
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
            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={htmlIcon} alt="HTML" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={cssIcon} alt="CSS" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={javascriptIcon} alt="Javascript" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={saasIcon} alt="SASS" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={reactIcon} alt="ReactJs" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={typescriptIcon} alt="Typescript" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={phpIcon} alt="PHP" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={mysqlIcon} alt="MYSQL" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={figmaIcon} alt="Figma" />
            </motion.li>

            <motion.li
              initial={scaleAnimation.initial}
              whileInView={scaleAnimation.animate}
              transition={scaleAnimation.transition}
            >
              <img className="w-12" src={bootstrapIcon} alt="Bootstrap" />
            </motion.li>
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

        <motion.div
          initial={fadeAnimation.initial}
          whileInView={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-color text-md font-poppinsMedium">
            Soiba sobre
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            Meus Serviços
          </h2>
        </motion.div>

        <Text className="text-center max-w-2xl">
          Aqu vocè poderá obter um dos meus planos de serviços a sua escolha, ou
          poderá ter a liberdade de personalizar seu plano, de acordo ao seu
          bolso😉.
        </Text>

        <div className="flex items-start mt-8 gap-6 flex-wrap">
          <Service
            icon={landingpageIcon}
            title="Landing Page"
            description="As landing pages são perfeitas para quem quer facilemnte expandir seu negõcio para 
            um público maior, de forma a dar a conhecer de maneira mais rápida a existência do seu negócio. 
            Ela é como um cartaz, so que na internet onde você poderá falar sobre seu negócio, apresentar 
            seus serviços e contactos, da mesma forma como meu portfolio. Não é legal?!"
            price="90.000.00"
          />

          <Service
            icon={websiteIcon}
            title="Web Sites"
            description="Web sites são formas ainda mais avançadas para expandir seu negócio. Assim como 
            as landig pages, vocè poderá falar sobre seus serviços, mas coma vantagem de poder passar mais 
            informações, e ainda permitir algumas funcionaliudades para tornar seu trabalho mais dinâmico como, 
            agendamentos, atendimento online, etc."
            price="150.000.00"
          />

          <Service
            icon={ecommerceIcon}
            title="Ecommerces"
            description="As lojas virtuais são das mais modernas formas para se poder acelerar as vendas. 
            Permitir que os seus clientes comprem apartir de casa, irá tornar suas vendas mais fáceis, rápidas 
            e eficazes, podendo assim evitar enchentes e dias fatigados de trabalho por tanto andar de um lado ao 
            foutro para lidar com vários clientes ao mesmo tempo."
            price="250.000.00"
          />
        </div>
      </Container>
to
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

        <motion.div
          initial={fadeAnimation.initial}
          whileInView={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-color text-md font-poppinsMedium">
            Explore with
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Portfolio
          </h2>
        </motion.div>

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

      <Container id="myexperience">
        <div
          className="w-20 h-20 absolute
         right-20  bg-secondary-color blur-3xl"
        ></div>

        <motion.div
          initial={fadeAnimation.initial}
          animate={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-color text-md font-poppinsMedium">
            Know about
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Experience
          </h2>
        </motion.div>

        <Text className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex relative py-10 gap-16 w-3/4 justify-center items-center flex-wrap">
          <motion.img
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            whileHover={{ scale: 1.2 }}
            className="w-44"
            src={njila}
            alt="Njila Brand"
          />
          <motion.img
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            whileHover={{ scale: 1.2 }}
            className="w-44"
            src={pnclique}
            alt="Pn Clique"
          />
          <motion.img
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            whileHover={{ scale: 1.2 }}
            className="w-44"
            src={monabeleLogo}
            alt="Njila Brand"
          />
          <motion.img
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            whileHover={{ scale: 1.2 }}
            className="w-44"
            src={dimukaKitadi}
            alt="Dimuka Kitadi"
          />
        </div>
      </Container>

      <Container
        id="mycontacts"
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
          className="xs:w-[320px] lg:w-[500px] opacity-10 -z-10 absolute bottom-0 xs:-right-20 lg:right-0 "
          alt=""
        />

        <img
          src={alien2}
          className="xs:w-32 lg:w-72 opacity-20 absolute top-0 left-0 -rotate-45"
          alt=""
        />

        <img
          src={alien3}
          className="xs:w-28 lg:w-56 opacity-20 absolute bottom-0 xs:left-0 lg:left-64"
          alt=""
        />

        <motion.div
          initial={fadeAnimation.initial}
          animate={fadeAnimation.animate}
          transition={fadeAnimation.transition}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-color text-md font-poppinsMedium">
            Get all
          </span>
          <h2 className="text-3xl text-white font-poppinsSemiBold">
            My Contacts
          </h2>
        </motion.div>

        <Text className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          inventore expedita.
        </Text>

        <div className="flex relative py-10 gap-6 w-3/4 justify-center items-center flex-wrap">
          <motion.div
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            className="flex brightness-80 items-center gap-4"
          >
            <img className="w-6" src={phoneIcon} alt="Phone Number" />
            <span className="text-sm">+244 934 889 417</span>
          </motion.div>

          <motion.div
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            className="flex brightness-80 items-center gap-4"
          >
            <img className="w-6" src={phoneIcon} alt="Phone Number" />
            <span className="text-sm">+244 952 011 203</span>
          </motion.div>

          <motion.div
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            className="flex brightness-80 items-center gap-4"
          >
            <img className="w-6" src={emailIcon} alt="Email" />
            <span className="text-sm">garciapedro.php@outlook.com</span>
          </motion.div>

          <motion.div
            initial={scaleAnimation.initial}
            animate={scaleAnimation.animate}
            transition={scaleAnimation.transition}
            className="flex brightness-80 items-center gap-4"
          >
            <img className="w-6" src={emailIcon} alt="Email" />
            <span className="text-sm">garciasebastiao.php@gmail.com</span>
          </motion.div>
        </div>

        <div className="absolute flex justify-center bottom-8 px-8">
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
