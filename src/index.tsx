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
import { render } from "react-dom";

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
          imageSrc:
            "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=ma",
        }}
        hasLinkToSectionBellow={true}
        hasIllustrationShadow={false}
      />

      <GlArticle
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
      />

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
            url="https://user-images.githubusercontent.com/39378411/135731808-6cf3e4dd-1047-4a0a-95be-65fdd6947315.png"
          />
        }
        hasAnimation={true}
        illustrationPosition="right"
      />

      <GlCards>
        {
          <>
            <GlLogoCard
              title="Designed in KiCad"
              iconUrls={[
                "kicad.png",  
              ]}
              paragraph={`The Aether schematic PCB was designed in KiCad 6. KiCad provides an extensive 
              part library which minimized the development of part footprints. Using KiCad allowed us 
              to version control our hardware design which allowed us to revert mistakes and easily 
              share work with the team.`}
            />
            <GlLogoCard
              title="Powered by Zephyr RTOS"
              iconUrls={[
                "zephyr.png",  
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
                "aws.svg",  
                "supabase.svg",  
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
          <GlProjectCard
            title="Paul Wood"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731821-0f1c7165-fada-418f-896a-c36a0e55171b.png"
          />
          <GlProjectCard
            title="Ian Wallace"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731810-93193eba-ada5-460a-96ad-948215278850.png"
          />
          <GlProjectCard
            title="Randy Alvarez"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731819-1cf18697-e946-449f-ad6e-be414e341c40.png"
          />
          <GlProjectCard
            title="Parke Benjamin"
            subtitle="Project Card Subtitle"
            projectImageUrl="https://user-images.githubusercontent.com/39378411/135731914-0265b77e-3338-4747-b014-e845f16332a7.png"
          />
        </>
      </GlCards>

      <GlCards
        title="Project Documentation"
      >
        {
          <>
            <GlLogoCard
              title="Conference Paper"
              // paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
            />
            <GlLogoCard
              title="Final Report"
              // paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
            />

            <GlLogoCard
              title="Final Presentation"
              // paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
              overlapIcons={true}
            />
            <GlLogoCard
              title="CDR Presentation"
              // paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
            />
            <GlLogoCard
              title="SD1 Final Report"
              // paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
            />

            <GlLogoCard
              title="Divide and Conquer (V2)"
              // //paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
              overlapIcons={true}
            />
            <GlLogoCard
              title="Divide and Conquer (V1)"
              // //paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
              //                   nisl nec hendrerit rutrum, 
              //                   mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
              overlapIcons={true}
            />

          </>
        }
      </GlCards>

      <GlCards
        title="Project Source"
      >
        {
          <>
            <GlLogoCard
              title="Firmware"
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
            />
            <GlLogoCard
              title="Web Application"
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
            />

            <GlLogoCard
              title="Schematic & PCB"
              paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus, 
                                nisl nec hendrerit rutrum, 
                                mi enim semper arcu, ut imperdiet urna libero non metus.`}
              buttonLabel="Download"
              overlapIcons={true}
            />
          </>
        }
      </GlCards>

    </GlTemplate>
  );
}

render(<App />, document.getElementById("root"));
