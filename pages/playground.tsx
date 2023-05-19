//@ts-ignore
import {
  Button,
  Card,
  Aspect,
  Heading,
  Icon,
  TextLink,
  Accordion,
  Tabs,
  Banner,
  Carousel,
  Footer,
  LeaderBoard,
  Menu,
  Outstanding,
  PromoLink,
} from "@lottus-ed/components";

const Playground = () => {
  const argsCarousel = {
    data: [
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 1",
        text: "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
        subtitle: "Subtitle 1",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 2",
        text: "Demo Card content 2",
        subtitle: "Subtitle 2",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 3",
        text: "Demo Card 3",
        subtitle: "Subtitle 3",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 4",
        text: "Demo Card 4",
        subtitle: "Subtitle 4",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 5",
        text: "Demo Card 5",
        subtitle: "Subtitle 5",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 6",
        text: "Demo Card 6",
        subtitle: "Subtitle 6",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
      {
        imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
        title: "Demo Card 7",
        text: "Demo Card 7",
        subtitle: "Subtitle 7",
        link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
      },
    ],
    variant: "card",
  };
  const args = {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Card",
    text: "Lorem ipsum dolor sit amet consectetur. Urna curabitur sit faucibus vitae. Elit dignissim tempus pharetra risus porta in phasellus magnis pellentesque.",
    subtitle: "subtitle",
    type: "horizontal",
    aspectRatio: "2/1",
    link: { label: "Ver más", route: "https://jonsuh.com/hamburgers/" },
    className: "",
  };
  const argsTabs = {
    tabs: [
      { label: "Text Link", active: true, iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
      { label: "Text Link", iconName: "home" },
    ],
  };
  const argsBanner = {
    imageUrl: "https://wallpapercave.com/wp/wp2599594.jpg",
    title: "Demo Banner",
    text: "Demo Banner",
    ratio: "4/3",
    overlay: "dark",
    contentVariant: "dark",
    btn: {
      id: "banner-button",
      label: "button",
    },
    position: "left-top",
    className: "",
  };
  const argsAccordion = {
    itemsData: [
      {
        data: {
          title: "Item 1",
          content: [
            { text: "content", link: "https://www.deepl.com/es/translator" },
            { text: "text", link: "https://www.deepl.com/es/translator" },
          ],
          icon: { iconName: "people", type: "outlined" },
          text: "texto",
        },
        open: true,
        borderDownOn: false,
        ColorClass: "border-neutral-400",
      },
      {
        data: {
          title: "Item 1",
          content: [{ text: "content" }],
          icon: { iconName: "people", type: "outlined" },
          text: "texto",
        },
        borderDownOn: true,
        ColorClass: "border-primary-500",
      },
    ],
    oneItemOpen: true,
  };
  const argsFooter = {
    logoUrl:
      "https://1.bp.blogspot.com/-ilM0ThnMs_s/WIVtiNb1qOI/AAAAAAAADEw/1fY4kvXEJdQm_IKoBFI4iVQfWoF9GqEaACPcB/s1600/uane%2Bmatamoros%2Blogo%2Bgota%2Bde%2Bagua.png",
    newsletter: {
      text: "¡Suscríbete a nuestro newsletter!",
      inputTxt: "Correo electrónico",
      btn: {
        label: "Enviar",
        onclick: () => {},
      },
      inputName: "mail",
    },
    textLinks: {
      text: "Text Link",
      href: "https://www.nba.com/playoffs/2023",
      iconName: "arrow_forward_ios",
    },

    links: {
      deskLinks: [
        [
          {
            titleSection: "Estudiantes",
            linktext: [
              {
                text: "SIAAF",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "ULA Online",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Biblioteca virtual E-libro",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Servicios Escolares",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Alumnos",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
          {
            titleSection: "Egresados",
            linktext: [
              {
                text: "Egresados",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Egresados talento",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
        [
          {
            titleSection: "Admisiones",
            linktext: [
              {
                text: "Solicita informes",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Becas",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
          {
            titleSection: "Oferta eduactiva",
            linktext: [
              {
                text: "Bachillerato",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Licenciaturas",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Maestrías",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Extension Universitaria",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
        [
          {
            titleSection: "Nosotros",
            linktext: [
              {
                text: "Oferta Educativa",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Internacionalización",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Somos ULA",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Vida estudiantil",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Planteles",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Modelo educativo",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Empleabilidad",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Vinculación empresarial",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "CESEPCOM",
                href: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Acceso para colaboradores",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
        [
          {
            titleSection: "",
            linktext: [
              {
                text: "Text Link",
                href: "https://www.nba.com/playoffs/2023",
              },
            ],
          },
        ],
      ],
      mobileLinks: [
        {
          data: {
            title: "Estudiantes",
            content: [
              {
                text: "SIAAF",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "ULA Online",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Biblioteca virtual E-libro",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Servicios Escolares",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Alumnos",
                link: "https://www.nba.com/playoffs/2023",
              },
            ],
            icon: { iconName: "people", type: "outlined" },
          },
          borderDownOn: false,
        },
        {
          data: {
            title: "Estudiantes",
            content: [
              {
                text: "SIAAF",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "ULA Online",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Biblioteca virtual E-libro",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Servicios Escolares",
                link: "https://www.nba.com/playoffs/2023",
              },
              {
                text: "Alumnos",
                link: "https://www.nba.com/playoffs/2023",
              },
            ],
            icon: { iconName: "people", type: "outlined" },
          },
          borderDownOn: true,
        },
      ],
    },
    contact: {
      text: "Síguenos en redes sociales",
      socialMedia: [
        {
          socialName: "instagram",
          alt: "instagram-logo",
          link: "https://www.instagram.com/",
        },
        {
          socialName: "facebook",
          alt: "facebook-logo",
          link: "https://www.facebook.com",
        },
        {
          socialName: "tiktok",
          alt: "tiktok-logo",
          link: "https://www.tiktok.com",
        },
        {
          socialName: "twitter",
          alt: "twitter-logo",
          link: "https://www.twitter.com",
        },
      ],
      phoneText: "Llámanos",
      phoneNumber: "0000 000 000",
      icon: { iconName: "call" },
    },
    certificates: {
      title: "Certificaciones",
      logos: [
        {
          url: "https://www.pngfind.com/pngs/m/342-3423146_award-ribbon-transparent-png-ribbon-for-certificate-of.png",
          alt: "certificate",
          link: "https://www.pngfind.com/pngs/m/342-3423146_award-ribbon-transparent-png-ribbon-for-certificate-of.png",
        },
        {
          url: "https://www.pngfind.com/pngs/m/342-3423146_award-ribbon-transparent-png-ribbon-for-certificate-of.png",
          alt: "certificate",
        },
      ],
    },
    legal: {
      title: "Derechos reservados:",
      text: "Lottus Education 2023",
      linkText: {
        text: "Aviso de privacidad",
        href: "https://uane.edu.mx/",
      },
    },
  };
  const argsLB = {
    imgUrl: "https://wallpapercave.com/wp/wp2951423.png",
    title: "Contacta con el área de Titulación",
    variant: "light",
    links: [
      {
        type: "phone",
        value: "xxxxxxx",
        text: "8xx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        type: "mail",
        value: "lottusExample@mail.com",
        text: "lottusExample@mail.com",
        icon: { iconName: "mail", type: "solid" },
        target: "_blank",
      },
      {
        type: "phone",
        value: "xx-xx-xx-xx",
        text: "xxx-xxx-xx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        type: "phone",
        value: "8441121234",
        text: "xxx-xxx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
      {
        type: "phone",
        value: "8441121234",
        text: "xxx-xxx-xxx-xx",
        icon: { iconName: "phone", type: "solid" },
        target: "_blank",
      },
    ],
    button: {
      label: "Consultar",
      variant: "outlined-negative",
      size: "xsm",
    },
  };

  const argsMenu = {
    languages: false,
    btn: {
      id: "MenuMobileBtn",
      label: "Pedir información",
      type: "primary",
      iconName: "home",
      onClick: () => {},
    },
    className: "",
    data: {
      menus: [
        { label: "Admisiones", route: "/admisiones", active: true, items: [] },
        {
          label: "Oferta Educativa",
          route: "/oferta-educativa",
          active: true,
          items: [
            { label: "Bachillerato", route: "/oferta-educativa/bachillerato" },
            {
              label: "Licenciaturas",
              route: "/oferta-educativa/licenciatura",
              active: true,
            },
            { label: "Maestrías", route: "/oferta-educativa/maestria" },
            {
              label: "Extensión Universitaria",
              route: "/extension-universitaria",
            },
            {
              label: "UTEG Virtual",
              route: "https://utegvirtual.com/",
              external: true,
            },
          ],
        },
        {
          label: "Nosotros",
          route: "/nosotros",
          items: [
            { label: "Somos UTEG", route: "/nosotros" },
            { label: "Planteles", route: "/nosotros/planteles" },
            { label: "Modelo Educativo", route: "/nosotros/modelo-educativo" },
            {
              label: "Internacionalización",
              route: "/nosotros/internacionalizacion",
            },
            { label: "Bolsa de Talento", route: "/nosotros/bolsa-de-talento" },
            { label: "CESEPCOM", route: "/nosotros/CESEPCOM" },
          ],
        },
        { label: "Blog", route: "/blog", items: [] },
      ],
      logotype: {
        src: "https://1.bp.blogspot.com/-ilM0ThnMs_s/WIVtiNb1qOI/AAAAAAAADEw/1fY4kvXEJdQm_IKoBFI4iVQfWoF9GqEaACPcB/s1600/uane%2Bmatamoros%2Blogo%2Bgota%2Bde%2Bagua.png",
        alt: "logotipo-uteg",
      },
      socialMedia: [
        {
          socialName: "instagram",
          alt: "instagram-logo",
          link: "https://www.instagram.com/",
        },
        {
          socialName: "facebook",
          alt: "facebook-logo",
          link: "https://www.facebook.com",
        },
        {
          socialName: "tiktok",
          alt: "tiktok-logo",
          link: "https://www.tiktok.com",
        },
        {
          socialName: "twitter",
          alt: "twitter-logo",
          link: "https://www.twitter.com",
        },
      ],
      menuMobile: [
        {
          label: "Estudiantes",
          principal: true,
          route: "",
          external: false,
          children: [
            {
              label: "SIAAF",
              principal: false,
              route:
                "https://www.uteg.edu.mx/colaboradores-uteg/bienvenidos-a-siaaf/",
              external: true,
            },
            {
              label: "UTEG Online",
              principal: false,
              route: "/",
              external: false,
            },
            {
              label: "Biblioteca virtual E-libro",
              principal: false,
              route: "https://biblioteca.uteg.edu.mx/",
              external: true,
            },
            {
              label: "Servicios escolares",
              principal: false,
              route:
                "https://www.uteg.edu.mx/colaboradores-uteg/servicios-escolares/",
              external: false,
            },
            {
              label: "Alumnos",
              principal: false,
              route: "/alumnos",
              external: false,
            },
          ],
        },
        {
          label: "Egresados",
          principal: true,
          route: "",
          external: false,
          children: [
            {
              label: "Egresados",
              principal: false,
              route: "/egresados",
              external: false,
            },
            {
              label: "Egresados talento",
              principal: false,
              route: "/egresados/talento",
              external: false,
            },
          ],
        },
        {
          label: "Admisiones",
          principal: true,
          route: "",
          children: [
            {
              label: "Solicita informes",
              principal: false,
              route: "/admisiones/pedir-informacion",
              external: false,
            },
            {
              label: "Becas",
              principal: false,
              route: "/admisiones/becas",
              external: false,
            },
          ],
        },
        {
          label: "Oferta educativa",
          principal: true,
          route: "/oferta-educativa",
          external: false,
          children: [
            {
              label: "Bachillerato",
              principal: false,
              route: "/oferta-educativa/bachillerato",
              external: false,
            },
            {
              label: "Licenciaturas",
              principal: false,
              route: "/oferta-educativa/licenciatura",
              external: false,
            },
            {
              label: "Maestrías",
              principal: false,
              route: "/oferta-educativa/maestria",
              external: false,
            },
            {
              label: "Extensión Universitaria",
              principal: false,
              route: "/extension-universitaria",
              external: false,
            },
            {
              label: "UTEG Virtual",
              principal: false,
              route: "https://utegvirtual.com/",
              external: true,
            },
          ],
        },
        {
          label: "Nosotros",
          principal: true,
          route: "/nosotros",
          external: false,
          children: [
            {
              label: "Internacionalización",
              principal: false,
              route: "/nosotros/internacionalizacion",
              external: false,
            },
            {
              label: "Somos UTEG",
              principal: false,
              route: "/nosotros",
              external: false,
            },
            {
              label: "Vida estudiantil",
              principal: false,
              route: "/nosotros/vida-estudiantil",
              external: false,
            },
            {
              label: "Planteles",
              principal: false,
              route: "/nosotros/planteles",
              external: false,
            },
            {
              label: "Modelo educativo",
              principal: false,
              route: "/nosotros/modelo-educativo",
              external: false,
            },
            {
              label: "Bolsa de Talento",
              principal: false,
              route: "/nosotros/bolsa-de-talento",
              external: false,
            },
            {
              label: "Vinculación empresarial",
              principal: false,
              route: "/nosotros/vinculacion-empresarial",
              external: false,
            },
            {
              label: "CESEPCOM",
              principal: false,
              route: "/nosotros/CESEPCOM",
              external: false,
            },
            {
              label: "Accesos para colaboradores",
              principal: false,
              route: "/nosotros/accesos-colaboradores",
              external: false,
            },
          ],
        },
        {
          label: "Contacto",
          principal: true,
          route: "/contactanos",
          external: false,
          children: [
            {
              label: "Línea segura",
              principal: false,
              route: "https://lineasegura.uane.edu.mx/",
              external: true,
            },
            {
              label: "Preguntas frecuentes",
              principal: false,
              route: "/contactanos/faq/general",
              external: false,
            },
            {
              label: "Envíanos un mensaje",
              principal: false,
              route: "/contactanos",
              external: false,
            },
          ],
        },
        {
          label: "Blog",
          principal: true,
          route: "/blog",
          external: false,
          children: [],
        },
      ],
    },
  };
  const argsOuts = {
    imageUrl:
      "https://www.smatbot.com/blog/wp-content/uploads/2018/02/Hi-Animation-without-background-.gif",
    title: "Perfil de ingreso",
    imgPosition: "right",
    backgroundColor: "color1",
    paragraph:
      "Al ingresar a la Licenciatura en Administración el aspitante deberá tener una alta orientación a los negocios y las siguientes características: Pensamiento innovador y analítico enfocado a resultados. Adaptación a los cambios. Facilidad de palabra, liderazgo y gusto por formar y dirigir equipos de trabajo de alto desempeño. ",
  };
  const argsPromo = {
    link: "https://www.caffeineinformer.com/death-by-caffeine",
    text: "Demo PromoLink",
    imgUrl:
      "https://bachilleratorapido.com/wp-content/uploads/2020/07/La-UANE-de-Saltillo-2.jpg",
    color: "color1",
    className: "",
  };

  return (
    <div>
      <Menu {...argsMenu} />
      <Heading title="heading" font="principal" type="h-1" />
      <Button
        id="button"
        label="Demo Button"
        onClick={() => {
          console.log("Holap");
        }}
      />
      <PromoLink {...argsPromo} />
      <Outstanding {...argsOuts} />
      <Icon iconName="home" type="solid" />
      <TextLink
        text="textLink"
        href="https://cat-bounce.com/"
        iconName="home"
      />
      <Aspect ratio="2/1"></Aspect>
      <Card {...args} />

      <Accordion {...argsAccordion} />
      <LeaderBoard {...argsLB} />

      <Tabs {...argsTabs} />
      <Banner {...argsBanner} />
      <Carousel {...argsCarousel} />
      <Footer {...argsFooter} />
    </div>
  );
};

export default Playground;
