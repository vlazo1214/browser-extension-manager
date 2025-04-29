import { Extension } from "./extension";

export const MockExtensionList: Extension[] = [
    {
        id: 1,
        logo: "./assets/images/logo-devlens.svg",
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true
    },
    {
        id: 2,
        logo: "./assets/images/logo-style-spy.svg",
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true
    },
    {
        id: 3,
        logo: "./assets/images/logo-speed-boost.svg",
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false
    },
    {
        id: 4,
        logo: "./assets/images/logo-json-wizard.svg",
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true
    },
    {
        id: 5,
        logo: "./assets/images/logo-tab-master-pro.svg",
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true
    },
    {
        id: 6,
        logo: "./assets/images/logo-viewport-buddy.svg",
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false
    },
]