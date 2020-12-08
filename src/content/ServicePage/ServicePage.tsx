import React from "react";
import {
  Container,
  Row,
} from "react-bootstrap";



interface ServiceProps { 
  serviceId: string 
};

interface ServiceDetailsConfig {
  thumbnail: string;
  title1: string;
  title2?: string;
  description1: string;
  description2: string;
}

export interface ServiceDetailsData {
  replacement: ServiceDetailsConfig;
  repair: ServiceDetailsConfig;
  waterDamage: ServiceDetailsConfig;
  painting: ServiceDetailsConfig;
}

const serviceDetailsData: ServiceDetailsData = {
  "replacement": { "thumbnail": "roofInstallationLG.jpeg",
                   "title1": "Roof Installation",
                   "description1": "Your roof has a lifespan. There will come a time when repairs simply will not suffice, and when this happens, you may require a roof replacement. When it comes to roof replacement services in the Austin area no one can compare to the level of quality or commitment of Arbor Roofing. We go above and beyond for our clients!",
                   "title2": "Hail Damaged Roof Replacement",
                   "description2": "Living here in the Austin area, you know the extreme weather we often face. Hail can be incredibly damaging to a modern roofing system. Sometimes, repairs will not be enough, and you may need to replace the entire roof or, at the very least, a significant portion of the shingles.",
                 },
  "repair":      { 
                   "thumbnail": "roofRepairLG.png",
                   "title1": "Roof Repair",
                   "description1": "Some contractors will turn up their noses at smaller roofing repair jobs, not us. We have done repairs in every size and shape possible and we have the experience necessary to solve your problems. We repair both residential and commercial properties and will never try and sell you a whole new roof unless it is truly necessary.",
                   "title2": "Most Common Repairs",
                   "description2": "Re-flashing plumbing vents, hot water heater vents, skylights and chimneys are some of our most common repairs. Whatever your problem may be, we have seen it before.",
                 },
  "waterDamage": { "thumbnail": "waterDamageLG.jpg",
                   "title1": "Wood Rot Replacement",
                   "description1": "Water damaged exterior walls are very common. The problem often occurs when an exterior wall has been poorly weatherproofed. We can removeany damaged wood, replace it with new wood or fiber cement siding, seal and paint to match the existing color.",
                   "description2": "",
                 },
  "painting": { "thumbnail": "exteriorPaintingLG.png",
                   "title1": "Exterior Painting",
                   "description1": "We are are skilled and thoroughly knowledgeable in all manner of surfaces and materials. Paint not only improves the appearance of your home, but is also a barrier between your home and the elements.",
                   "description2": "",
                 },
}

const ServicePage: React.FC<ServiceProps> = ( props: ServiceProps) =>  {
  let SERVICE_ROOF_REPLACEMENT = "replacement";
  let SERVICE_REPAIR = "repair";
  let SERVICE_WOOD_ROT = "waterDamage";
  let SERVICE_EXTERIOR_PAINTING = "painting";

  let serviceDetailsConfig = serviceDetailsData.replacement;

  if (props.serviceId === SERVICE_ROOF_REPLACEMENT) {
    serviceDetailsConfig = serviceDetailsData.replacement;
  } else if (props.serviceId === SERVICE_REPAIR) {
    serviceDetailsConfig = serviceDetailsData.repair;
  } else if (props.serviceId === SERVICE_WOOD_ROT) {
    serviceDetailsConfig = serviceDetailsData.waterDamage;
  } else if (props.serviceId === SERVICE_EXTERIOR_PAINTING) {
    serviceDetailsConfig = serviceDetailsData.painting;
  } 

  let containerContrib = (
      <Container>
        <Row>
            <p>{serviceDetailsConfig.description1}</p>
        </Row>
      </Container>);
  let containerContrib2 = (<div />);
  if (serviceDetailsConfig.title2 && serviceDetailsConfig.title2.length > 0) {
   containerContrib2 = (
      <Container>
       <h2 style={{textAlign: "center"}}>{serviceDetailsConfig.title2}</h2>
        <Row>
            <p>{serviceDetailsConfig.description2}</p>
        </Row>
      </Container>);

  }


  return (
    <Container className="p-3">
       <h1 className="header" style={{textAlign: "center"}}>{serviceDetailsConfig.title1}</h1>
      {containerContrib}
      {containerContrib2}
        <Row>
          <img
            className="d-block w-100"
            src={"static/images/" + serviceDetailsConfig.thumbnail}
            alt={serviceDetailsConfig.title1}
          />
        </Row>
    </Container>

  );
};
export default ServicePage;
