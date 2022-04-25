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
import { render } from "react-dom";
import { MarkdownCard } from "./MarkdownCard";
import { PersonCard } from "./PersonCard";

function App() {
  return (
    <GlTemplate
      header={
        <GlHeader
          title="Aether - Air Quality Sensor"
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
          ]}
          enableDarkModeSwitch={true}
        />
      }
      headerOptions={{
        position: "sticky",
        isRetracted: "smart",
      }}
      footer={
        <GlFooter
          bottomDivContent="Licence MIT"
          links={[
            {
              label: "Report",
              href: "https://github.com/ucf-aether/report",
            },
            {
              label: "Firmware",
              href: "https://github.com/ucf-aether/aether-firmware",
            },
            {
              label: "Electronics",
              href: "https://github.com/ucf-aether/electronics",
            },
            {
              label: "Application",
              href: "https://github.com/ucf-aether/aether-app",
            },
          ]}
        />
      }
    >
      <GlHero
        title="A LoRaWAN-enabled air quality sensor"
        subTitle="The Spring 2022 UCF CECS Senior Design Showcase winner"
        illustration={{
          type: "image",
          imageSrc: "img/aether_node_1.png",
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
        title="What is Aether?"
        body={`Aether is a low-power air quality monitoring device and web application that measures 
          and calculates the EPA Air Quality Index (AQI). The Aether Node is implemented on a 
          four-layer PCB and housed in a 3D printed enclosure. And, the
          computation that is performed by the Aether Node is done by a
          Seeed LoRa-E5 LoRaWAN module. This module packages an
          ST STM32WLE5JC, which is an SoC combing an ARM M4
          processor and a LoRa transceiver on the same IC. Packets are sent to The Things Network where
          they are forwarded to Supabase, our backend, which allows data to be displayed on the web application hosted on AWS.`}
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

      <GlYoutubeVideoSection
        title="Showcase Video"
        src="https://www.youtube.com/embed/E9gR2ITvywU"
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
              iconUrls={["img/kicad.png"]}
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
            title="Paul Wood"
            subtitle="BSCpE"
            projectImageUrl="img/paul.jpg"
            social={{
              github: "plmwd",
              linkedin: "plmwd",
            }}
          />
          <PersonCard
            title="Ian Wallace"
            subtitle="BSCpE"
            projectImageUrl="img/ian.jpg"
            social={{
              linkedin: "ian-wallace-539261197",
              github: "ianw2560",
            }}
          />
          <PersonCard
            title="Randy Alvarez"
            subtitle="BSEE"
            projectImageUrl="img/randy.jpg"
            social={{
              linkedin: "alvarezrandy129",
            }}
          />
          <PersonCard
            title="Parke Benjamin"
            subtitle="BSEE"
            projectImageUrl="img/parke.jpg"
            social={{
              linkedin: "parke-benjamin-443768172",
            }}
          />
        </>
      </GlCards>

      <GlYoutubeVideoSection
        title="Final Presentation Video"
        src="https://www.youtube.com/embed/uTsx15xbbo8"
        hasAnimation={true}
      />

      <GlYoutubeVideoSection
        title="Final Demo Video"
        src="https://www.youtube.com/embed/MYu3QT3-u_8"
        hasAnimation={true}
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
            />
            <MarkdownCard
              title="Final Report"
              buttonLabel="Download"
              link={{
                href: "docs/Final_Report_g41.pdf",
              }}
            />

            <MarkdownCard
              title="Final Presentation"
              buttonLabel="Download"
              link={{
                href: "docs/Final_Presentation_g41.pptx",
              }}
            />
            <MarkdownCard
              title="Schematic"
              buttonLabel="Download"
              link={{
                href: "docs/Schematic_g41.pdf",
              }}
            />
            <MarkdownCard
              title="CDR Presentation"
              buttonLabel="Download"
              link={{
                href: "docs/CDR_Presentation_g41.pdf",
              }}
            />
            <MarkdownCard
              title="SD1 Final Report"
              buttonLabel="Download"
              link={{
                href: "docs/Senior_Design_1_Final_Report_g41.pdf",
              }}
            />

            <MarkdownCard
              title="Divide and Conquer (V2)"
              buttonLabel="Download"
              link={{
                href: "docs/Divide_and_Conquer_v2_g41.pdf",
              }}
            />
            <MarkdownCard
              title="Divide and Conquer (V1)"
              buttonLabel="Download"
              link={{
                href: "docs/Divide_and_Conquer_v1_g41.pdf",
              }}
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
              title="Schematic & PCB"
              github="ucf-aether/electronics"
              buttonLabel="Download"
              link={{
                href: "src/Electronics_g41.zip",
              }}
            />
            <MarkdownCard
              title="Final Report"
              github="ucf-aether/report"
              buttonLabel="Download"
              link={{
                href: "src/Final_Report_g41.zip",
              }}
            />
            <MarkdownCard
              title="Conference Paper"
              github="ucf-aether/conference-paper"
              buttonLabel="Download"
              link={{
                href: "src/Conference_Paper_g41.zip",
              }}
            />
            <MarkdownCard
              title="SD1 Final Report"
              github="ucf-aether/report/tree/vSD1"
              buttonLabel="Download"
              link={{
                href: "src/Senior_Design_1_Final_Report_g41.zip",
              }}
            />
            <MarkdownCard
              title="Divide and Conquer (V2)"
              buttonLabel="Download"
              link={{
                href: "src/Divide_and_Conquer_v2_g41.zip",
              }}
            />
            <MarkdownCard
              title="Divide and Conquer (V1)"
              buttonLabel="Download"
              link={{
                href: "src/Divide_and_Conquer_v1_g41.zip",
              }}
            />
          </>
        }
      </GlCards>
    </GlTemplate>
  );
}

render(<App />, document.getElementById("root"));
