import { GlArticle } from "gitlanding/GlArticle";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { GlProjectCard } from "gitlanding/GlCards/GlProjectCard";
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
          title="Aether Sensor Network"
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
        title="Aether Sensor Network"
        subTitle="The Spring 2022 UCF CECS Senior Design Showcase winner, a LoRaWAN-enabled air quality sensor that measures and calculates the EPA Air Quality Index (AQI)."
        illustration={{
          type: "image",
          imageSrc: "img/aether_node_1.png",
        }}
        hasLinkToSectionBellow={true}
        hasIllustrationShadow={false}
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
        body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                    nisl nec hendrerit rutrum, 
                    mi enim **semper arcu**, ut imperdiet urna libero non metus. 
                    Donec imperdiet ac nulla sit amet lacinia. 
                    Suspendisse volutpat lectus vitae libero luctus, a egestas magna egestas. 
                    Suspendisse potenti. In semper erat scelerisque sapien convallis porttitor.`}
        buttonLabel="Aether GitHub"
        buttonLink={{
          href: "https://www.github.com/ucf-aether",
        }}
        illustration={
          <GlIllustration
            hasShadow={false}
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
              iconUrls={[
                "img/kicad.png",  
              ]}
              paragraph={`The Aether schematic PCB was designed in KiCad 6. KiCad provides an extensive 
              part library which minimized the development of part footprints. Using KiCad allowed us 
              to version control our hardware design which allowed us to revert mistakes and easily 
              share work with the team.`}
            />
            <GlLogoCard
              title="Powered by Zephyr RTOS"
              iconUrls={[
                "img/zephyr.png",  
              ]}
              paragraph={`Zephyr RTOS is an open, collaborative, vendor-neutral RTOS hosted under the
              Linux Foundation. Zephyr uses the Linux device tree and Kconfig specification for Generalizing
              drivers to work across architectures and boards. We were able to create a Aether specific 
              device tree specification (DTS) file and DT-overlay for working on our development board 
              while keeping the firmware exactly the same. This allowed us to easily migrate to our 
              PCB later in development with no issues.`}
            />

            <GlLogoCard
              title="Accessible through AWS & Supabase"
              iconUrls={[
                "img/aws.svg",  
                "img/supabase.svg",  
              ]}
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus.`}
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
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut **imperdiet** urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
          },
          {
            title: "Low Power",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
          },
          {
            title: "Maintenance-Free",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
          },
          {
            title: "Shell Interface",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
          },
          {
            title: "Real-Time & Historical Data",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
          },
          {
            title: "Map Overlay",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus. 
                                Donec imperdiet ac nulla sit amet lacinia.`,
          },
        ]}
      />

      <GlSectionDivider />

      <GlCards
        title="The Team"
      >
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

      <GlCards
        title="Project Documentation"
      >
        {
          <>
            <MarkdownCard
              title="Conference Paper"
              buttonLabel="Download"
              link={{ 
                href: "docs/Conference_Paper_g41.pdf"
              }}
            />
            <MarkdownCard
              title="Final Report"
              buttonLabel="Download"
              link={{ 
                href: "docs/Final_Report_g41.pdf"
              }}
            />

            <MarkdownCard
              title="Final Presentation"
              buttonLabel="Download"
              link={{ 
                href: "docs/Final_Presentation_g41.pptx"
              }}
            />
            <MarkdownCard
              title="Schematic"
              buttonLabel="Download"
              link={{ 
                href: "docs/Schematic_g41.pdf"
              }}
            />
            <MarkdownCard
              title="CDR Presentation"
              buttonLabel="Download"
              link={{ 
                href: "docs/CDR_Presentation_g41.pdf"
              }}
            />
            <MarkdownCard
              title="SD1 Final Report"
              buttonLabel="Download"
              link={{ 
                href: "docs/Senior_Design_1_Final_Report_g41.pdf"
              }}
            />

            <MarkdownCard
              title="Divide and Conquer (V2)"
              buttonLabel="Download"
              link={{ 
                href: "docs/Divide_and_Conquer_v2_g41.pdf"
              }}
            />
            <MarkdownCard
              title="Divide and Conquer (V1)"
              buttonLabel="Download"
              link={{ 
                href: "docs/Divide_and_Conquer_v1_g41.pdf"
              }}
            />
          </>
        }
      </GlCards>

      <GlCards
        title="Project Source"
      >
        {
          <>
            <MarkdownCard
              title="Firmware"
              github="ucf-aether/aether-firmware"
              buttonLabel="Download"
              link={{ 
                href: "src/firmware.zip"
              }}
            />
            <MarkdownCard
              title="Web Application"
              github="ucf-aether/aether-app"
              buttonLabel="Download"
              link={{ 
                href: "src/app.zip"
              }}
            />
            <MarkdownCard
              title="Schematic & PCB"
              github="ucf-aether/electronics"
              buttonLabel="Download"
              link={{ 
                href: "src/electronics.zip"
              }}
            />
            <MarkdownCard
              title="Final Report"
              github="ucf-aether/report"
              buttonLabel="Download"
              link={{ 
                href: "src/Final_Report_g41.zip"
              }}
            />
            <MarkdownCard
              title="Conference Paper"
              github="ucf-aether/conference-paper"
              buttonLabel="Download"
              link={{ 
                href: "src/Conference_Paper_g41.zip"
              }}
            />
            <MarkdownCard
              title="SD1 Final Report"
              github="ucf-aether/report/tree/vSD1"
              buttonLabel="Download"
              link={{ 
                href: "src/Senior_Design_1_Final_Report_g41.zip"
              }}
            />
            <MarkdownCard
              title="Divide and Conquer (V2)"
              buttonLabel="Download"
              link={{ 
                href: "src/Divide_and_Conquer_v2_g41.zip"
              }}
            />
            <MarkdownCard
              title="Divide and Conquer (V1)"
              buttonLabel="Download"
              link={{ 
                href: "src/Divide_and_Conquer_v1_g41.zip"
              }}
            />
          </>
        }
      </GlCards>

    </GlTemplate>
  );
}

render(<App />, document.getElementById("root"));
