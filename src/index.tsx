import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { css } from "gitlanding";
import { GlArticle } from "gitlanding/GlArticle";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { GlCheckList } from "gitlanding/GlCheckList";
import { GlFooter } from "gitlanding/GlFooter";
import { GlHeader } from "gitlanding/GlHeader";
import { GlHero } from "gitlanding/GlHero";
import { GlIllustration } from "gitlanding/GlIllustration";
import { GlSectionDivider } from "gitlanding/GlSectionDivider";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlYoutubeVideoSection } from "gitlanding/GlYoutubeVideoSection";
import { useTheme, breakpointsValues } from "gitlanding/theme";
import { render } from "react-dom";
import Carousel from "react-material-ui-carousel";
import { MarkdownCard } from "./MarkdownCard";
import { PersonCard } from "./PersonCard";
import { VideoStack } from "./VideoStack";

function CustomHeader() {
  const theme = useTheme();

  const isCollapsibleMenu =
    50 + theme.spacing(9) + theme.paddingRightLeft * 2 >
      theme.windowInnerWidth - 150 ||
    theme.windowInnerWidth < breakpointsValues.sm;

  return (
    <GlHeader
      title="Aether Sensor Network"
      customItemStart={
        !isCollapsibleMenu && (
          <IconButton 
            href="https://github.com/ucf-aether" 
            color="inherit" 
            sx={{ 
              p: 0,
              pt: 0,
              mr: 3,
              "&:hover": {
                color: theme.colors.palette.focus.main,
              }
            }}
          >
            <GitHubIcon />
          </IconButton>
        )
      }
      classes={{
        links: css({
          paddingTop: 8,
        })
      }}
      links={[
        ...(isCollapsibleMenu
          ? [
              {
                label: "GitHub",
                href: "https://github.com/ucf-aether",
              },
            ]
          : []),
        {
          label: "Report",
          href: "docs/Final_Report_g41.pdf",
        },
        {
          label: "Conference Paper",
          href: "docs/Conference_Paper_g41.pdf",
        },
      ]}
      enableDarkModeSwitch={true}
    />
  );
}

function App() {
  return (
    <GlTemplate
      header={<CustomHeader />}
      headerOptions={{
        position: "sticky",
        isRetracted: "smart",
      }}
      footer={
        <GlFooter
          bottomDivContent="Licence MIT"
          links={[
            {
              label: "GitHub",
              href: "https://github.com/ucf-aether",
            },
            {
              label: "Report",
              href: "docs/Final_Report_g41.pdf",
            },
            {
              label: "Conference Paper",
              href: "docs/Conference_Paper_g41.pdf",
            },
            {
              label: "App",
              href: "https://github.com/ucf-aether/aether-app",
            },
            {
              label: "Firmware",
              href: "https://github.com/ucf-aether/aether-firmware",
            },
            {
              label: "Electronics",
              href: "https://github.com/ucf-aether/aether-electronics",
            },
          ]}
        />
      }
    >
      <GlHero
        title="A LoRaWAN connected air quality sensor"
        subTitle="Winner of the Spring 2022 UCF CECS Senior Design Showcase Best ECE Project Award"
        classes={{
          imageWrapper: css({ width: "100%" }),
        }}
        illustration={{
          type: "custom component",
          Component: ({ id, onLoad }) => {
            // useEffect(() => {
            //   setTimeout(onLoad, 50);
            // })
            return (
              <div id={id} style={{ width: "100%" }}>
                <Carousel
                  height={475}
                  interval={5500}
                >
                  {[
                    "img/aether_node_1.png",
                    "img/aether-sunset.gif",
                    "img/aetherOpenedUp.jpg",
                  ].map((src, i) => (
                    <img
                      src={src}
                      alt={src}
                      width="100%"
                      height="auto"
                      style={{
                        width: "100%",
                        maxWidth: 600,
                        objectFit: "contain",
                      }}
                      // Wait for the first image to load
                      onLoad={i === 0 ? onLoad : undefined}
                    />
                  ))}
                </Carousel>
              </div>
            );
          },
        }}
        hasLinkToSectionBellow={true}
        hasIllustrationShadow={true}
      />

      {/* <GlArticle
        id="aboutAqi"
        title="What is the AQI?"
        body={`The Air Quality Index, or AQI, is an integer number ranging from 0 through 500 with 0 being
          the best air quality and 500 being the worst. The AQI was established by the EPA and based
          off standards for five main pollutants, ozone, particulate matter, nitrogen dioxide, carbon monoxide,
          and sodium dioxide, defined in standards set by the Clean Air Act. The AQI is calculated for
          each pollutant, and the maximum is taken as the reported AQI. The AQI is split into discrete
          ranges with advisory messages for each category, as shown on the left.
        `}
        buttonLabel="Learn More"
        buttonLink={{
          href: "https://www.airnow.gov",
        }}
        illustration={
          <GlIllustration
            hasShadow={true}
            type="image"
            url="aqi.png"
          />
        }
        hasAnimation={true}
        illustrationPosition="left"
      /> */}

      <GlSectionDivider />

      <GlArticle
        id="aboutAether"
        title="Project Description"
        body={`The Aether Sensor Network is a low-power, air quality monitoring system that is designed to measure
          and calculate the air quality index (AQI). Aether consists of two main components: the device which collects
          air quality data, known as the Aether Node, and a website the hosts and displays that data. The Aether Node 
          uses two gas sensors and a particulate matter sensor to collect the data used in calculating air quality. This collected data is 
          transmitted by the Aether Node over LoRaWAN. The Aether Node is implemented on a four-layer PCB and housed 
          in a 3D printed enclosure.`}
        buttonLabel="Aether Webapp"
        buttonLink={{
          href: "https://aethersensor.network",
        }}
        illustration={
          <GlIllustration
            hasShadow={true}
            type="image"
            url="img/aetherOpenedUp.jpg"
          />
        }
        hasAnimation={true}
        illustrationPosition="right"
      />

      <VideoStack 
        videos={[
          {
            title: "Showcase Video",
            src: "https://www.youtube.com/embed/E9gR2ITvywU",
            downloadUrl: "videos/SeniorDesignShowcase_g41.mp4",
          }
        ]}
      />
      <GlYoutubeVideoSection
        hasAnimation={true}
      />

      <GlCards>
        {
          <>
            <GlLogoCard
              title="Designed in KiCad"
              link={{
                href: "https://www.kicad.org",
              }}
              classes={{
                icon: css({
                  width: 70,
                  "& svg": {
                    width: 70,
                  },
                }),
              }}
              iconUrls={["img/kicad.svg"]}
              paragraph={`The Aether schematic PCB was designed in KiCad 6. KiCad provides an extensive 
              part library which minimized the development of part footprints. Using KiCad allowed us 
              to version control our hardware design which allowed us to revert mistakes and easily 
              share work with the team.`}
            />
            <GlLogoCard
              title="Powered by Zephyr RTOS"
              iconUrls={["img/zephyr.png"]}
              link={{
                href: "https://www.zephyrproject.org",
              }}
              classes={{
                icon: css({
                  width: 70,
                  "& svg": {
                    width: 70,
                  },
                }),
              }}
              paragraph={`Zephyr RTOS is an open, collaborative, vendor-neutral RTOS hosted under the
              Linux Foundation. Zephyr uses the Linux device tree and Kconfig specification for Generalizing
              drivers to work across architectures and boards. We were able to create a Aether specific 
              device tree specification (DTS) file and DT-overlay for working on our development board 
              while keeping the firmware exactly the same. This allowed us to easily migrate to our 
              PCB later in development with no issues.`}
            />

            <GlLogoCard
              title="Accessible through AWS & Supabase"
              iconUrls={["img/aws.svg", "img/supabase.svg"]}
              link={{
                href: "https://supabase.com",
              }}
              paragraph={`The web application is hosted on AWS, and the backend and API is hosted on Supabase,
              a managed PostgreSQL database with PostgREST and HTTP extensions. The database is accessible
              through Supabase's JavaScript client which allows for CRUD operations along with real-time
              subscriptions to table inserts, updates, and deletions. All of the backend logic is 
              performed inside Supabase and the PostgreSQL database.`}
              overlapIcons={false}
            />
          </>
        }
      </GlCards>

      <GlSectionDivider />

      <GlCheckList
        heading="Features"
        hasAnimation={true}
        elements={[
          {
            title: "LoRaWAN",
            description: `The LoRa-E5 utilizes the STM32WLE5JC which combines a Cortex-M4 with a 
              LoRa transceiver capable of LoRaWAN 1.4.`,
          },
          {
            title: "Low Power",
            description: `Even with power hungry sensors, the device still operates at less than 100 mW
              thanks to our power management.`,
          },
          {
            title: "Maintenance-Free",
            description: `The Aether Node fits inside a small enclosure which makes it easy to mount
              anywhere. The solar panel ensures longevity with little to no maintenance.`,
          },
          {
            title: "Shell Interface",
            description: `Thanks to Zephyr, the Aether Node has a familiar shell interface that allows 
              for user configuration and real-time device information.`,
          },
          {
            title: "Real-Time & Historical Data",
            description: `The Aether web interface allows users to view historical and real-time AQI, 
            temperature, humidity, ozone, and particulate matter.`,
          },
          {
            title: "Map Overlay",
            description: `The map overlay makes it easy to see what the current AQI value is in your 
              area with a slider to view historical data.`,
          },
        ]}
      />

      <GlSectionDivider />

      <GlCards title="The Team">
        <>
          <PersonCard
            name="Paul Wood"
            subtitle="**Web App, Firmware**"
            text={`**Paul Wood** is currently a senior at the University of Central Florida and will 
              graduate with a **BSCpE** in May 2022. He is 
              pursuing roles in low-level embedded systems, and is interested in operating systems 
              and IoT devices. He plans on pursuing a graduate degree after working for a few years.`}
            projectImageUrl="img/paul.jpg"
            social={{
              github: "plmwd",
              linkedin: "plmwd",
            }}
          />
          <PersonCard
            name="Ian Wallace"
            subtitle="**Firmware, Enclosure**"
            text={`**Ian Wallace** is currently a senior at the University of Central Florida and 
              will graduate with a **BSCpE** in May 2022. He is 
              currently interning at Lockheed Martin in Orlando, FL and is doing work in cryptography 
              and FPGAs. He plans on continuing to work there full-time, following his graduation.`}
            projectImageUrl="img/ian.jpg"
            social={{
              linkedin: "ian-wallace-539261197",
              github: "ianw2560",
            }}
          />
          <PersonCard
            name="Randy Alvarez"
            subtitle="**Schematic, PCB**"
            text={`**Randy Alvarez** is currently a senior at the University of Central Florida and 
              will graduate with a **BSEE** in May 2022. He 
              is currently an intern in the CWEP program at Lockheed Martin in Orlando, FL doing 
              work on systems testability and improvements. He plans on continuing to work there 
              full-time, following his graduation.`}
            projectImageUrl="img/randy.jpg"
            social={{
              linkedin: "alvarezrandy129",
            }}
          />
          <PersonCard
            name="Parke Benjamin"
            subtitle="**Schematic**"
            text={`**Parke Benjamin** is currently a senior at the University of Central Florida and will 
              graduate with a **BSEE** in May 2022. He is 
              currently working at Duke Energy in Orlando, FL doing work in the protections and 
              controls department. He plans on continuing to work there full-time, following his graduation.`}
            projectImageUrl="img/parke.jpg"
            social={{
              linkedin: "parke-benjamin-443768172",
            }}
          />
        </>
      </GlCards>

      <GlSectionDivider />

      <VideoStack
        videos={[
          {
            title: "Final Presentation Video",
            src: "https://www.youtube.com/embed/uTsx15xbbo8",
            downloadUrl: "SeniorDesignFinalPresentation_g41.mp4",
          },
          {
            title: "Final Demo Video",
            src: "https://www.youtube.com/embed/MYu3QT3-u_8",
            downloadUrl: "videos/SeniorDesignFinalDemo_g41.mp4",
          },
        ]}
      />

      <GlCards title="Project Documentation">
        {
          <>
            <MarkdownCard
              title="Conference Paper"
              buttonLabel="Download"
              link={{
                href: "docs/Conference_Paper_g41.pdf",
              }}
              source="src/Conference_Paper_g41.zip"
              sourcePopup="Download LaTeX Source"
            />
            <MarkdownCard
              title="Final Report"
              buttonLabel="Download"
              link={{
                href: "docs/Final_Report_g41.pdf",
              }}
              source="src/Final_Report_g41.zip"
              sourcePopup="Download LaTeX Source"
            />

            <MarkdownCard
              title="Final Presentation"
              buttonLabel="Download"
              link={{
                href: "docs/Final_Presentation_g41.pptx",
              }}
            />
            <MarkdownCard
              title="Schematics"
              buttonLabel="Download"
              link={{
                href: "docs/Schematic_g41.pdf",
              }}
            />
            <MarkdownCard
              title="CDR Presentation"
              buttonLabel="Download"
              link={{
                href: "docs/CDR_Presentation_g41.pptx",
              }}
            />
            <MarkdownCard
              title="SD1 Final Report"
              buttonLabel="Download"
              link={{
                href: "docs/Senior_Design_1_Final_Report_g41.pdf",
              }}
              source="src/Senior_Design_1_Final_Report_g41.zip"
              sourcePopup="Download LaTeX Source"
            />

            <MarkdownCard
              title="Divide and Conquer (V2)"
              buttonLabel="Download"
              link={{
                href: "docs/Divide_and_Conquer_v2_g41.pdf",
              }}
              source="src/Divide_and_Conquer_v2_g41.zip"
              sourcePopup="Download LaTeX Source"
            />
            <MarkdownCard
              title="Divide and Conquer (V1)"
              buttonLabel="Download"
              link={{
                href: "docs/Divide_and_Conquer_v1_g41.pdf",
              }}
              source="src/Divide_and_Conquer_v1_g41.zip"
              sourcePopup="Download LaTeX Source"
            />
          </>
        }
      </GlCards>

      <GlCards title="Project Source">
        {
          <>
            <MarkdownCard
              title="Firmware"
              github="ucf-aether/aether-firmware"
              buttonLabel="Download"
              link={{
                href: "src/Firmware_g41.zip",
              }}
            />
            <MarkdownCard
              title="Web Application"
              github="ucf-aether/aether-app"
              buttonLabel="Download"
              link={{
                href: "src/App_g41.zip",
              }}
            />
            <MarkdownCard
              title="Schematics & PCB Files"
              github="ucf-aether/electronics"
              buttonLabel="Download"
              link={{
                href: "src/Electronics_g41.zip",
              }}
            />
          </>
        }
      </GlCards>
    </GlTemplate>
  );
}

render(<App />, document.getElementById("root"));
