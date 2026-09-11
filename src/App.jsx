import { useState } from "react";

// The data. Treat this as if it came from an API — you do not need to change it.
const INSTALLATIONS = [
  { id: "i-1041", machineName: "LAB-PC-01",  version: "4.2.1", status: "online"  },
  { id: "i-1042", machineName: "LAB-PC-02",  version: "4.2.1", status: "offline" },
  { id: "i-1043", machineName: "SEQ-WS-11",  version: "4.1.8", status: "error"   },
  { id: "i-1044", machineName: "LAB-PC-07",  version: "4.2.0", status: "online"  },
  { id: "i-1045", machineName: "QC-STATION", version: "3.9.4", status: "offline" },
  { id: "i-1046", machineName: "SEQ-WS-12",  version: "4.2.1", status: "online"  },
  { id: "i-1047", machineName: "LAB-PC-03",  version: "4.0.2", status: "error"   },
];

export default function App() {
  return (
    <div className="page">
      <h1>Installations</h1>

      {/*
        Your work goes here. See README.md for what to build.

        Styling does not matter — there are a few helper classes in index.css
        if you want them, but plain unstyled markup is completely fine.
      */}
    </div>
  );
}
