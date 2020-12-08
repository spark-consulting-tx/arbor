import React from 'react';

import { Link } from "react-router-dom";

interface ServiceTileProps {
  serviceId: string;
}

interface ServiceConfig {
  thumbnail: string;
  description: string;
  title: string;
}

export interface ServiceData {
  replacement: ServiceConfig;
  repair: ServiceConfig;
  waterDamage: ServiceConfig;
  painting: ServiceConfig;
}

const serviceData: ServiceData = {
  "replacement": { "thumbnail": "roofInstallation.png",
                   "description": "If repairs will not suffice, then consider calling out the experts for a full roof replacement. At Arbor Roofing, we are committed to providing homeowners with a return on their investment – their roof – by professionally replacing old, worn-out roofing materials with ease!",
                   "title": "Roof Installation",
                 },
  "repair":      { "thumbnail": "roofRepair2.png",
                   "description": "Repairing a leak in your roof shouldn’t cost an arm and a leg. At Arbor Roofing, we provide affordable roof repair services for our clients in the Austin area and surrounding cities. You can extend the lifespan and efficiency of your roof by scheduling roof repairs now!",
                   "title": "Roof Repair",
                 },
  "waterDamage": { "thumbnail": "waterDamage.png",
                   "description": "Water damaged exterior walls are very common. The problem often occurs when an exterior wall has been poorly weatherproofed. We can removeany damaged wood, replace it with new wood or fiber cement siding, seal and paint to match the existing color.",
                   "title": "Wood Rot Repair",
                 },
  "painting": { "thumbnail": "exteriorPainting.png",
                   "description": "We are are skilled and thoroughly knowledgeable in all manner of surfaces and materials. Paint not only improves the appearance of your home, but is also a barrier between your home and the elements.",
                   "title": "Exterior Painting",
                 }
}

const ServiceTile: React.FC<ServiceTileProps> = (props: ServiceTileProps) => {
  let SERVICE_ROOF_REPLACEMENT = "replacement";
  let SERVICE_REPAIR = "repair";
  let SERVICE_WOOD_ROT = "waterDamage";
  let SERVICE_EXTERIOR_PAINTING = "painting";

  let serviceId = SERVICE_ROOF_REPLACEMENT;
  let serviceConfig = serviceData.replacement;

  if (props.serviceId === SERVICE_REPAIR) {
    serviceId = props.serviceId;
    serviceConfig = serviceData.repair;
  } else if (props.serviceId === SERVICE_WOOD_ROT) {
    serviceId = props.serviceId;
    serviceConfig = serviceData.waterDamage;
  } else if (props.serviceId === SERVICE_EXTERIOR_PAINTING) {
    serviceId = props.serviceId;
    serviceConfig = serviceData.painting;
  }

  return (
  <div className="p-3" >
    <Link to={"/services/" + serviceId}>

    <img
          className="d-block w-100"
          src={"static/images/" + serviceConfig.thumbnail}
          alt={serviceConfig.title}
        />
    <h4 className="serviceTitle" style={{textAlign: "center", color: "#1b69b7"}}>{serviceConfig.title}</h4>
    </Link>
      <p className="serviceDesc">{serviceConfig.description}</p>
  </div>
);
  }

export default ServiceTile;
