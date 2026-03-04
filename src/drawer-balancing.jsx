import { useState } from "react";

/* ─── Figma Assets ─────────────────────────────────────────────────────────── */
const FA = {
  /* sidebar nav icons — refreshed from Figma node 19:205 */
  navHome:     "https://www.figma.com/api/mcp/asset/8a854e30-4bb5-4adf-b68d-0ebe72864f1f",  /* imgPrimary3  Home          20×19.999  */
  navSearch:   "https://www.figma.com/api/mcp/asset/e21307f5-9706-4dff-8a7d-70a142b4a7d7",  /* imgPrimary4  Global Search 19.998×19.998 */
  navTxSearch: "https://www.figma.com/api/mcp/asset/25cbfe82-b7f9-40b9-ac8b-dac438f580cd",  /* imgPrimary5  Search Txn    20×16.25   */
  navDrawer:   "https://www.figma.com/api/mcp/asset/f00109e5-fd96-4599-9a16-8718a8b45e20",  /* imgPrimary6  Drawer Bal    22.5×18.75 */
  navInventory:"https://www.figma.com/api/mcp/asset/6a52f7a9-3245-41a4-949d-745f654adbec",  /* imgPrimary7  Inventory     19.998×15.937 */
  navReports:  "https://www.figma.com/api/mcp/asset/d610a9a8-9c75-4f3b-baca-1a90286fcb86",  /* imgVector    Reports       20.033×18  */
  navSysAdmin: "https://www.figma.com/api/mcp/asset/af29eefc-0294-4b38-b1c3-4cd069b079e2",  /* imgVector1   SysAdmin      20.005×15.006 */
  navQmatic:   "https://www.figma.com/api/mcp/asset/c8a6bcc0-c7a6-4279-9364-eb75d3e13c47",  /* imgPrimary8  Qmatic        22.97×21.731 */
  navSettings: "https://www.figma.com/api/mcp/asset/849e2598-183c-4c92-93c6-5b2c80ddf7e3",  /* imgPrimary9  Settings      20.222×21.25 */
  navProfile:  "https://www.figma.com/api/mcp/asset/8fc61fd1-039c-4874-93cb-75b5773db2a1",  /* imgPrimary   Profile       17.5×20    */
  navBell:     "https://www.figma.com/api/mcp/asset/0fecbe52-a358-4ff2-81ce-7796872a09d1",  /* imgPrimary1  Bell          17.5×20    */
  navLogout:   "https://www.figma.com/api/mcp/asset/46e6b551-6276-453b-81ea-554f66cb23b3",  /* imgPrimary2  Logout        19.998×17.5 */
  /* logo assets */
  dmvCircle:   "https://www.figma.com/api/mcp/asset/ebe15903-a5e7-4890-a701-626e573de19b",  /* imgGroup30967 56×56 */
  dmvInner:    "https://www.figma.com/api/mcp/asset/c75ba0e2-e6eb-4ee4-9ef7-ecfa5da31416",  /* imgDcDmvLogo  40×30 */
  destinyLogo:     "/destiny-logo.png",      /* circular D icon  52×47   — sidebar bottom */
  destinyWordmark: "/destiny-wordmark.png",  /* wordmark 153×43  — modals                */
  /* landing page — refreshed from Figma node 19:204 / 26:445 */
  coffeeTable: "https://www.figma.com/api/mcp/asset/1d9d5b80-905e-4591-8e84-834e92d60db6",
  scanIcon:    "https://www.figma.com/api/mcp/asset/e6e222f3-78f4-49cb-bc30-7db9493e0270",  /* imgGroup32483 — refreshed from 26:445 */
  /* Customer Search card illustration — Figma 26:445 */
  csRect1:     "https://www.figma.com/api/mcp/asset/91cdd62b-b5d4-479a-9e7b-aac99e524a63",  /* document bg      */
  csRect2:     "https://www.figma.com/api/mcp/asset/7a105487-1c51-4e0c-a121-8a215facc0cb",  /* small rect       */
  csRect3:     "https://www.figma.com/api/mcp/asset/5163be02-e2fb-446e-8f30-1f848af6dd2d",  /* doc shadow       */
  csPath:      "https://www.figma.com/api/mcp/asset/1ce3663a-2c55-49b1-8760-78a3f1b8ee0a",  /* card strip       */
  csVec1:      "https://www.figma.com/api/mcp/asset/00bc1f49-af0c-4649-98c5-a38c0bdce393",  /* handle outer     */
  csVec2:      "https://www.figma.com/api/mcp/asset/c53f27ef-47e3-4704-a8dc-c6536042cd19",  /* handle inner     */
  csVec3:      "https://www.figma.com/api/mcp/asset/1d482214-86c2-4b1e-8e31-c9f74b4610b9",  /* hinge            */
  csVec4:      "https://www.figma.com/api/mcp/asset/71ab35e9-1325-4798-8482-6e8ab688ede2",  /* hinge2           */
  csRect4:     "https://www.figma.com/api/mcp/asset/dd8c3d98-15e7-4726-96dd-69b8e5ee782a",  /* handle stripe    */
  csVec5:      "https://www.figma.com/api/mcp/asset/13b54231-f11c-45ed-8018-19d34704587e",  /* lens outer       */
  csVec6:      "https://www.figma.com/api/mcp/asset/61cb65e2-9d4f-4251-a220-a0d9bf8b6f48",  /* lens inner       */
  csVec7:      "https://www.figma.com/api/mcp/asset/b8a72eda-0088-4c03-bb61-8eb1c490d43b",  /* sparkle1         */
  csVec8:      "https://www.figma.com/api/mcp/asset/138eeb03-4259-4794-8372-b18e972b5bbf",  /* sparkle2         */
  csVec9:      "https://www.figma.com/api/mcp/asset/bef68a9c-f2a6-48a7-909d-6df5c6da9e9c",  /* sparkle3         */
  csVec10:     "https://www.figma.com/api/mcp/asset/0f053df5-e0b2-400a-aef7-cb9f72c00293",  /* sparkle4         */
  csVec11:     "https://www.figma.com/api/mcp/asset/9ad464c3-c747-48df-b3a1-c04b6de32b6c",  /* pin              */
  csVec12:     "https://www.figma.com/api/mcp/asset/aec19bc9-2433-48d3-a36d-3ed8ca392c40",  /* pin2             */
};

/* ─── Font ─────────────────────────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Open Sans', system-ui, sans-serif; }
    input, select, button { font-family: 'Open Sans', system-ui, sans-serif; }
    div:focus, div:focus-visible { outline: none !important; }
    input:focus, select:focus { outline: none; border-color: #003087 !important; box-shadow: 0 0 0 3px rgba(0,48,135,0.12) !important; }
    input[type="date"]:focus { outline: none; border-color: #003087 !important; box-shadow: 0 0 0 3px rgba(0,48,135,0.12) !important; }
    button:active { opacity: 0.88; }
    .dr-input:focus { outline: none; border-color: #003087 !important; box-shadow: 0 0 0 3px rgba(0,48,135,0.12) !important; }
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 3px; }
    @media print {
      body * { visibility: hidden; }
      #print-content, #print-content * { visibility: visible; }
      #print-content { position: fixed; top: 0; left: 0; width: 100%; background: white; padding: 32px 40px; overflow: visible !important; }
      .print-only-title { display: block !important; }
    }
  `}</style>
);

/* ─── Tokens ───────────────────────────────────────────────────────────────── */
const C = {
  blue:       "#003087",
  blueDark:   "#001F5C",
  blueLight:  "#E8EFFC",
  bluePale:   "#F3F7FF",
  red:        "#C62828",
  redPale:    "#FEF2F2",
  redBorder:  "#FECACA",
  green:      "#166534",
  greenPale:  "#F0FDF4",
  greenBorder:"#BBF7D0",
  amber:      "#92400E",
  amberPale:  "#FFFBEB",
  amberBorder:"#FDE68A",
  ink:        "#111827",
  inkMid:     "#374151",
  inkSoft:    "#6B7280",
  inkFaint:   "#9CA3AF",
  border:     "#E5E7EB",
  borderMid:  "#D1D5DB",
  bg:         "#F1F4F9",
  surface:    "#FFFFFF",
  surfaceSys: "#F5F8FF",
};
const SANS = "'Open Sans', system-ui, sans-serif";
const ROW  = 36;

/* ─── Icons ────────────────────────────────────────────────────────────────── */
const Icon = {
  Lock:        ()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  Shield:      ({s=14,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  X:           ({s=16})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Check:       ({s=14})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Alert:       ({s=14})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  Plus:        ({s=14})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Trash:       ({s=13})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>,
  Eye:         ({off,s=13})=> off
    ? <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
    : <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  Pin:         ({s=11})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Printer:     ({s=13,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  Calc:        ({s=11,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="18" x2="16" y2="18"/></svg>,
  /* ── Nav icons (Figma sidebar) ── */
  Home:        ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
  SearchNav:   ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>,
  QRScan:      ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="5" y="5" width="3" height="3" fill={color} stroke="none"/><rect x="16" y="5" width="3" height="3" fill={color} stroke="none"/><rect x="5" y="16" width="3" height="3" fill={color} stroke="none"/><circle cx="17.5" cy="17.5" r="3"/><line x1="20" y1="20" x2="22" y2="22"/></svg>,
  DollarCircle:({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c0-1.1.9-2 2.5-2s2.5.9 2.5 2-1 1.8-2.5 2-2.5.9-2.5 2 .9 2 2.5 2 2.5-.9 2.5-2"/></svg>,
  Tasks:       ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  DocSearch:   ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10.5" cy="14.5" r="2.5"/><line x1="12.5" y1="16.5" x2="15" y2="19"/></svg>,
  CalendarGear:({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="17" cy="17" r="3"/><path d="M17 15v.5M17 19v.5M15 17h.5M18.5 17H19M15.7 15.7l.35.35M18.6 18.6l.35.35M15.7 18.3l.35-.35M18.6 15.4l.35-.35"/></svg>,
  CustomerTag: ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 3.5l4 4-6 6-4-4 6-6z"/><circle cx="18.5" cy="5" r="1" fill={color} stroke="none"/></svg>,
  Gear:        ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Person:      ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Bell:        ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  LogOut:      ({s=20,color="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
};

/* ─── Helpers ──────────────────────────────────────────────────────────────── */
const fmt     = (v) => { const n = parseFloat(v)||0; return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","); };
const pv      = (s) => parseFloat(String(s||"").replace(/[^0-9.]/g,""))||0;
const autoFmt = (v) => {
  const s = v.trim();
  if (!s || s==="0") return "0.00";
  const n = parseFloat(s.replace(/[^0-9.]/g,""));
  if (isNaN(n)) return "0.00";
  return n.toFixed(2);
};
const fmtDate = (d) => {
  try { return new Date(d+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}); }
  catch { return d; }
};

/* ─── Constants ────────────────────────────────────────────────────────────── */
const DRAWER_NUMS = [1,2,3,4,5,6];
const autoDrawer  = () => String(Math.ceil(Math.random() * 6));
const LOCATION    = "SOUTHWEST SERVICE CENTER";

const todayStr     = new Date().toISOString().split("T")[0];
const yesterdayStr = new Date(Date.now()-86400000).toISOString().split("T")[0];

const DEMO_PENDING_PAST = {
  date: yesterdayStr, drawerNum: 2, csrName:"SHANKARATH, BINOY", beginVal:"150.00",
};

const LOCATIONS = [
  "SOUTHWEST SERVICE CENTER",
  "NORTHWEST SERVICE CENTER",
  "DOWNTOWN SERVICE CENTER",
];
const CSR_BY_LOCATION = {
  "SOUTHWEST SERVICE CENTER": ["SHANKARATH, BINOY","RAMIREZ, MARIA","CHEN, DAVID"],
  "NORTHWEST SERVICE CENTER": ["JOHNSON, KATE","PATEL, ARJUN"],
  "DOWNTOWN SERVICE CENTER":  ["WILLIAMS, JAMES","GARCIA, SOFIA","NGUYEN, THOMAS"],
};
const DEMO_OPEN_DRAWERS = [
  {id:1, location:"SOUTHWEST SERVICE CENTER", csr:"RAMIREZ, MARIA",  drawer:3, date:todayStr,     begin:"200.00", sys:2966.25},
  {id:2, location:"NORTHWEST SERVICE CENTER", csr:"JOHNSON, KATE",   drawer:1, date:yesterdayStr, begin:"175.00", sys:1420.00},
  {id:3, location:"DOWNTOWN SERVICE CENTER",  csr:"GARCIA, SOFIA",   drawer:2, date:todayStr,     begin:"100.00", sys:3100.50},
];

const BILL_DENOMS = [1,2,5,10,20,50,100];
const COIN_DENOMS = [
  {label:"1¢",      val:0.01,  key:"c1"},
  {label:"5¢",      val:0.05,  key:"c5"},
  {label:"10¢",     val:0.10,  key:"c10"},
  {label:"25¢",     val:0.25,  key:"c25"},
  {label:"50¢",     val:0.50,  key:"c50"},
  {label:"$1 coin", val:1.00,  key:"c100"},
];

const SYS_TOTALS = {
  cash:340.50, check:120.00, achEcheck:85.00,
  creditCard:1850.75, debitCard:430.00, moneyOrder:225.00, reverseATM:0, mou:0,
};

const EMPTY_DRAWER = {
  cash:"", coin:"",
  check:"", achEcheck:"",
  creditCard:"", debitCard:"",
  moneyOrder:"", reverseATM:"", mou:"",
};

const EMPTY_BILLS = {100:0,50:0,20:0,10:0,5:0,2:0,1:0};
const EMPTY_COINS = {c100:0,c50:0,c25:0,c10:0,c5:0,c1:0};

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function DrawerBalancing() {
  // phases: landing | active | closing | closed
  const [phase,          setPhase]          = useState("landing");
  const [drawerNum,      setDrawerNum]      = useState("");
  const [openedAt,       setOpenedAt]       = useState("");
  const [drawerDate,     setDrawerDate]     = useState(todayStr);
  const [isReconcile,    setIsReconcile]    = useState(false);
  const [pendingPastCleared, setPendingPastCleared] = useState(false);
  const [drawerCsr,      setDrawerCsr]      = useState("SHANKARATH, BINOY");

  // modal visibility
  const [showOpenModal,  setShowOpenModal]  = useState(false);
  const [pastBlocked,    setPastBlocked]    = useState(false);

  // beginning balance
  const [beginVal,       setBeginVal]       = useState("");
  const [beginLocked,    setBeginLocked]    = useState(false);

  // system totals (fixed demo)
  const st       = SYS_TOTALS;
  const sysTotal = Object.values(st).reduce((a,b)=>a+b,0);

  // pickups
  const [pickups,    setPickups]    = useState([]);
  const [showPickup, setShowPickup] = useState(false);
  const [pickupAmt,  setPickupAmt]  = useState("");

  // drawer contents
  const [drawer,     setDrawer]     = useState(EMPTY_DRAWER);

  // supervisor override (discrepancy)
  const [showOvr,    setShowOvr]    = useState(false);
  const [ovrOk,      setOvrOk]      = useState(false);
  const [ovrLogin,   setOvrLogin]   = useState("");
  const [ovrPass,    setOvrPass]    = useState("");
  const [ovrReason,  setOvrReason]  = useState("");
  const [showPass,   setShowPass]   = useState(false);
  const [ovrErr,     setOvrErr]     = useState("");

  // supervisor admin mode
  const [supervisorMode,  setSupervisorMode]  = useState(false);
  const [showSupvLogin,   setShowSupvLogin]   = useState(false);
  const [supvName,        setSupvName]        = useState("");
  const [supvLocation,    setSupvLocation]    = useState(LOCATIONS[0]);
  const [supvCsr,         setSupvCsr]         = useState("");

  // cash calculator
  const [showCashCalc, setShowCashCalc] = useState(false);
  const [calcBills,    setCalcBills]    = useState(EMPTY_BILLS);
  const [calcCoins,    setCalcCoins]    = useState(EMPTY_COINS);

  // print report
  const [showPrintReport, setShowPrintReport] = useState(false);

  /* ── calcs ── */
  const pickTotal = pickups.reduce((a,p)=>a+p.amount, 0);
  const drCash    = pv(drawer.cash)+pv(drawer.coin)+pickTotal;   // cashPickup is now derived = pickTotal
  const drTotal   = drCash
    + pv(drawer.check)+pv(drawer.achEcheck)
    + pv(drawer.creditCard)+pv(drawer.debitCard)
    + pv(drawer.moneyOrder)+pv(drawer.reverseATM)+pv(drawer.mou);
  const lessBegin = pv(beginVal);
  const drNet     = drTotal - lessBegin;
  const disc      = drNet - (sysTotal + pickTotal);
  const hasDiff   = Math.abs(disc) > 0.005;

  /* ── handlers ── */
  const handleOpenDrawer = () => {
    if (!drawerDate) return;
    // Blocker: today's date + pending past drawer not yet cleared
    if (drawerDate === todayStr && !pendingPastCleared) {
      setPastBlocked(true);
      return;
    }
    const t = new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});
    setOpenedAt(t);
    setIsReconcile(drawerDate < todayStr);
    setDrawerCsr("SHANKARATH, BINOY");
    setPhase("active");
    setShowOpenModal(false);
    setPastBlocked(false);
  };

  const openPastReconciliation = () => {
    setDrawerNum(String(DEMO_PENDING_PAST.drawerNum));
    setDrawerDate(DEMO_PENDING_PAST.date);
    setBeginVal(DEMO_PENDING_PAST.beginVal);
    setBeginLocked(true);
    setIsReconcile(true);
    setDrawerCsr(DEMO_PENDING_PAST.csrName);
    setDrawer({
      ...EMPTY_DRAWER,
      creditCard: st.creditCard.toFixed(2),
      debitCard:  st.debitCard.toFixed(2),
    });
    const t = new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});
    setOpenedAt(t);
    setPhase("closing");
    setShowOpenModal(false);
    setPastBlocked(false);
    setPickups([]);
  };

  const handleLockBegin = () => {
    setBeginVal(autoFmt(beginVal));
    setBeginLocked(true);
  };

  const handleAddPickup = () => {
    const amt = pv(pickupAmt);
    if (amt <= 0) return;
    const t = new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});
    setPickups(p=>[...p,{id:Date.now(),amount:amt,time:t}]);
    setPickupAmt(""); setShowPickup(false);
  };

  const handleDrawerChange = (field, val) => {
    const clean = val.replace(/[^0-9.]/g,"");
    setDrawer(d=>({...d,[field]:clean}));
  };

  const handleDrawerBlur = (field) => {
    setDrawer(d=>({...d,[field]:autoFmt(d[field])}));
  };

  const handleCloseOut = () => {
    if (hasDiff) { setShowOvr(true); }
    else { setPhase("closed"); }
  };

  const handleOvrSubmit = () => {
    if (!ovrLogin||!ovrPass||!ovrReason) { setOvrErr("All fields are required."); return; }
    setOvrErr(""); setOvrOk(true);
    setTimeout(()=>{ setPhase("closed"); setShowOvr(false); setOvrOk(false); },1600);
  };

  const handleSupvCloseDr = (dr) => {
    setDrawerNum(String(dr.drawer));
    setDrawerDate(dr.date);
    setBeginVal(dr.begin);
    setBeginLocked(true);
    setIsReconcile(dr.date < todayStr);
    setDrawerCsr(dr.csr);
    setDrawer({
      ...EMPTY_DRAWER,
      creditCard: st.creditCard.toFixed(2),
      debitCard:  st.debitCard.toFixed(2),
    });
    const t = new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});
    setOpenedAt(t);
    setPickups([]);
    setPhase("closing");
    setSupervisorMode(false);
  };

  const handleAfterReconcile = () => {
    setPendingPastCleared(true);
    setPhase("landing");
    setDrawer(EMPTY_DRAWER);
    setPickups([]);
    setBeginVal(""); setBeginLocked(false);
    setIsReconcile(false);
    setDrawerNum(autoDrawer()); setDrawerDate(todayStr);
    setShowOpenModal(true);
    setPastBlocked(false);
  };

  const isClosing  = phase==="closing";
  const isClosed   = phase==="closed";
  const drEditable = isClosing && !isClosed;

  /* ── sub-components ── */
  const ColHeader = ({sys}) => (
    <div style={{
      padding:"11px 16px",
      background: sys ? `linear-gradient(135deg,#003087 0%,#0041B8 100%)` : "#F9FAFB",
      borderRight: sys ? `2px solid ${C.blueLight}` : "none",
      display:"flex", justifyContent:"space-between", alignItems:"center",
    }}>
      {sys ? <>
        <span style={{fontSize:12,fontWeight:700,color:"#FFF"}}>System Transaction Total</span>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.55)",display:"flex",alignItems:"center",gap:4}}>
          <Icon.Lock/> Live · Read-only
        </span>
      </> : <>
        <span style={{fontSize:12,fontWeight:700,color:C.inkMid}}>Drawer Contents</span>
        {isClosing && <span style={{fontSize:10,color:C.green,fontWeight:600}}>● Editable</span>}
        {!isClosing && phase==="active" && <span style={{fontSize:10,color:C.inkFaint}}>Available at close-out</span>}
      </>}
    </div>
  );

  const SecHead = ({label,sys,action}) => (
    <div style={{
      padding:"6px 16px",
      background: sys
        ? `linear-gradient(90deg,${C.blueLight} 0%,${C.surfaceSys} 100%)`
        : "#FAFAFA",
      borderBottom:`1px solid ${C.border}`,
      borderRight: sys ? `2px solid ${C.blueLight}` : "none",
      display:"flex", alignItems:"center", justifyContent:"space-between",
    }}>
      <div style={{display:"flex",alignItems:"center",gap:6}}>
        <div style={{width:3,height:11,background:sys?C.blue:C.inkFaint,borderRadius:2,opacity:sys?0.6:1}}/>
        <span style={{fontSize:10,fontWeight:700,color:sys?C.blue:C.inkSoft,textTransform:"uppercase",letterSpacing:"0.07em"}}>
          {label}
        </span>
      </div>
      {action}
    </div>
  );

  const SysCell = ({label,value,tall=false}) => (
    <div style={{
      display:"flex",justifyContent:"space-between",alignItems:"center",
      height: tall ? ROW*3 : ROW,
      padding:"0 16px",
      background:C.surfaceSys,
      borderBottom:`1px solid ${C.border}`,
      borderRight:`2px solid ${C.blueLight}`,
    }}>
      <span style={{fontSize:12,color:C.inkSoft}}>{label}</span>
      <span style={{fontSize:12,color:C.inkMid,fontWeight:500,fontVariantNumeric:"tabular-nums"}}>{fmt(value)}</span>
    </div>
  );

  const SubRow = ({sl,sv,dl,dv,highlight=false}) => (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",
      borderTop:`2px solid ${highlight?C.blue:C.border}`,
      borderBottom:`1px solid ${C.border}`}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
        height:ROW+6,padding:"0 16px",
        background:highlight?"#EBF0FC":C.surfaceSys,
        borderRight:`2px solid ${C.blueLight}`}}>
        <span style={{fontSize:12,fontWeight:700,color:highlight?C.blue:C.inkMid}}>{sl}</span>
        <span style={{fontSize:14,fontWeight:700,color:C.blue,fontVariantNumeric:"tabular-nums"}}>{fmt(sv)}</span>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
        height:ROW+6,padding:"0 16px",
        background:highlight?"#F9FAFB":"#FAFAFA"}}>
        <span style={{fontSize:12,fontWeight:700,color:C.inkMid}}>{dl}</span>
        <span style={{fontSize:14,fontWeight:700,color:C.ink,fontVariantNumeric:"tabular-nums"}}>{fmt(dv)}</span>
      </div>
    </div>
  );

  /* ════════════════════════════════════════════════════════════════════════ */
  return (
    <div style={{display:"flex",position:"fixed",inset:0,overflow:"hidden",background:C.bg,fontFamily:SANS,color:C.ink}}>
      <FontLoader/>

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      {(()=>{
        const drawerActive = phase!=="landing"&&!supervisorMode;
        const drawerDot    = drawerActive?(isClosed?"#8E24AA":isClosing?"#F59E0B":"#10B981"):null;
        /* Nav items — Figma order & exact icon sizes */
        const navItems = [
          {key:"home",      src:FA.navHome,      w:20,      h:19.999,  title:"Home"},
          {key:"search",    src:FA.navSearch,    w:19.998,  h:19.998,  title:"Global Search"},
          {key:"txsearch",  src:FA.navTxSearch,  w:20,      h:16.25,   title:"Search Transaction"},
          {key:"drawer",    src:FA.navDrawer,    w:22.5,    h:18.75,
           title: drawerActive?"Drawer open":"Open Drawer Balance",
           onClick: (!drawerActive&&!supervisorMode) ? ()=>{ setDrawerNum(autoDrawer()); setShowOpenModal(true); } : null,
           active:drawerActive, dot:drawerDot},
          {key:"inventory", src:FA.navInventory, w:19.998,  h:15.937,  title:"Inventory"},
          {key:"reports",   src:FA.navReports,   w:20.033,  h:18,      title:"Reports"},
          {key:"sysadmin",  src:FA.navSysAdmin,  w:20.005,  h:15.006,  title:"System Administration"},
          {key:"qmatic",    src:FA.navQmatic,    w:22.97,   h:21.731,  title:"Qmatic"},
          {key:"settings",  src:FA.navSettings,  w:20.222,  h:21.25,   title:"Settings"},
        ];
        const sep = <div style={{width:56,height:1,background:"rgba(255,255,255,0.2)",margin:"0 auto",flexShrink:0}}/>;
        return (
          <div style={{
            width:70,
            background:"linear-gradient(180deg,#0c255f 10%,#153a8b 80%)",
            display:"flex",flexDirection:"column",alignItems:"center",
            flexShrink:0,zIndex:1,
            boxShadow:"0.5px 0 2px rgba(0,0,0,0.1)",
            overflow:"hidden",
          }}>

            {/* ── DMV Logo (72px row) — admin trigger ── */}
            <div style={{height:72,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <div
                title={supervisorMode?"Exit Admin Mode":"Supervisor Login"}
                onClick={()=>supervisorMode?setSupervisorMode(false):setShowSupvLogin(true)}
                style={{
                  position:"relative",width:56,height:56,borderRadius:"50%",
                  cursor:"pointer",flexShrink:0,overflow:"hidden",
                  border:supervisorMode?"2.5px solid rgba(245,158,11,0.9)":"2.5px solid transparent",
                  transition:"border .15s",
                }}>
                <img src={FA.dmvCircle} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}/>
                <div style={{position:"absolute",top:"25%",left:"14.29%",right:"14.29%",bottom:"21.43%"}}>
                  <img src={FA.dmvInner} alt="DC DMV" style={{width:"100%",height:"100%",display:"block"}}/>
                </div>
              </div>
            </div>

            {/* ── 9 nav icons (flex:1 row) ── */}
            <div style={{flex:1,display:"flex",flexDirection:"column",width:"100%"}}>
              {navItems.map(item=>(
                <div key={item.key} title={item.title}
                  onClick={item.onClick||undefined}
                  style={{
                    position:"relative",display:"flex",height:52,width:"100%",
                    alignItems:"center",justifyContent:"center",
                    cursor:item.onClick?"pointer":"default",
                    background:item.active?"rgba(255,255,255,0.15)":"transparent",
                    transition:"background .15s",
                    outline:"none",
                  }}>
                  <img src={item.src} alt={item.title}
                    style={{width:item.w,height:item.h,display:"block",objectFit:"contain"}}/>
                  {item.dot&&<div style={{
                    position:"absolute",top:12,right:18,
                    width:7,height:7,borderRadius:"50%",
                    background:item.dot,border:"1.5px solid #0c255f",
                  }}/>}
                </div>
              ))}
            </div>

            {/* ── Profile + Bell (168px row) ── */}
            <div style={{width:"100%",flexShrink:0}}>
              {sep}
              {[
                {src:FA.navProfile, w:17.5, h:20,   title:"Profile"},
                {src:FA.navBell,    w:17.5, h:20,   title:"Notifications"},
              ].map(({src,w,h,title})=>(
                <div key={title} title={title} style={{
                  display:"flex",height:52,width:"100%",
                  alignItems:"center",justifyContent:"center",cursor:"pointer",outline:"none",
                }}>
                  <img src={src} alt={title} style={{width:w,height:h,display:"block"}}/>
                </div>
              ))}
              {sep}
              <div title="Sign Out" style={{
                display:"flex",height:52,width:"100%",
                alignItems:"center",justifyContent:"center",cursor:"pointer",outline:"none",
              }}>
                <img src={FA.navLogout} alt="Sign Out"
                  style={{width:19.998,height:17.5,display:"block",transform:"scale(-1,1)"}}/>
              </div>
            </div>

            {/* ── Destiny logo strip (55px row) ── */}
            <div style={{
              background:"#FFF",width:"100%",
              padding:"4px 9px",flexShrink:0,
              display:"flex",flexDirection:"column",alignItems:"center",
            }}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                <div style={{height:32,width:23.63,overflow:"hidden",position:"relative",flexShrink:0}}>
                  <img src={FA.destinyLogo} alt="Destiny"
                    style={{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",objectFit:"contain"}}/>
                </div>
                <span style={{fontSize:8,color:"#0060b5",fontFamily:SANS,
                  textAlign:"center",letterSpacing:"0.12em",fontWeight:400}}>
                  PRODUCTION
                </span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── Page content ────────────────────────────────────────────────── */}
      <div style={{flex:1,minHeight:0,display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"}}>

        {/* ════════ SUPERVISOR ADMIN VIEW ════════ */}
        {supervisorMode && (
          <SupervisorAdminView
            supvName={supvName}
            supvLocation={supvLocation}
            setSupvLocation={(loc)=>{ setSupvLocation(loc); setSupvCsr(""); }}
            supvCsr={supvCsr}
            setSupvCsr={setSupvCsr}
            onExit={()=>setSupervisorMode(false)}
            onCloseDrawer={handleSupvCloseDr}
          />
        )}

        {/* ════════ CSR VIEW ════════ */}
        {!supervisorMode && (
          <>
            {/* Landing page */}
            {phase==="landing" && <LandingPage/>}

            {/* Active / Closing / Closed */}
            {phase!=="landing" && (
              <>
                {/* Page Header */}
                <div style={{background:"#FFF",borderBottom:`1px solid ${C.border}`,
                  padding:"0 22px",display:"flex",alignItems:"center",
                  justifyContent:"space-between",height:54,flexShrink:0,
                  boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10}}>
                    <div style={{width:4,height:20,background:C.blue,borderRadius:2}}/>
                    <h1 style={{fontSize:16,fontWeight:700,color:C.blue,letterSpacing:"-0.01em"}}>
                      Drawer Balance
                    </h1>
                    <StatusBadge phase={phase}/>
                    {isReconcile && (
                      <div style={{display:"flex",alignItems:"center",gap:5,
                        background:C.amberPale,border:`1px solid ${C.amberBorder}`,
                        borderRadius:20,padding:"3px 10px"}}>
                        <span style={{color:C.amber,fontSize:10,fontWeight:700}}>⚠ RECONCILIATION</span>
                      </div>
                    )}
                  </div>
                  <div style={{display:"flex",gap:12,fontSize:12,color:C.inkSoft,
                    background:C.bg,padding:"5px 14px",borderRadius:8,
                    border:`1px solid ${C.border}`,flexWrap:"wrap",alignItems:"center"}}>
                    <span style={{display:"flex",alignItems:"center",gap:5}}>
                      <Icon.Pin s={10}/> {LOCATION}
                    </span>
                    <span style={{color:C.border}}>|</span>
                    <span><b style={{color:C.inkMid}}>Date</b> {fmtDate(drawerDate)}</span>
                    <span style={{color:C.border}}>|</span>
                    <span><b style={{color:C.inkMid}}>Drawer</b> {drawerNum}</span>
                    <span style={{color:C.border}}>|</span>
                    <span><b style={{color:C.inkMid}}>Opened</b> {openedAt}</span>
                    <span style={{color:C.border}}>|</span>
                    <span><b style={{color:C.inkMid}}>Employee</b> {drawerCsr}</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{flex:1,minHeight:0,overflowY:"auto"}}>
                <div style={{padding:18,display:"flex",flexDirection:"column",gap:14}}>

                  {/* Closed banner */}
                  {isClosed && (
                    <div style={{background:C.greenPale,border:`1px solid ${C.greenBorder}`,borderRadius:8,
                      padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
                      <div style={{display:"flex",alignItems:"center",gap:10}}>
                        <span style={{color:C.green,flexShrink:0}}><Icon.Check s={13}/></span>
                        <span style={{fontSize:12,color:"#374151"}}>
                          Drawer <b>closed out</b> successfully. No further edits allowed.
                          {isReconcile && <span style={{color:C.amber,marginLeft:8}}>· Past drawer reconciled.</span>}
                        </span>
                      </div>
                      <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
                        {isReconcile && !pendingPastCleared && (
                          <button onClick={handleAfterReconcile} style={{
                            padding:"6px 16px",background:C.blue,color:"#FFF",border:"none",
                            borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",
                            boxShadow:"0 2px 6px rgba(0,48,135,0.3)",whiteSpace:"nowrap"}}>
                            Open Today's Drawer →
                          </button>
                        )}
                        <button onClick={()=>setShowPrintReport(true)} style={{
                          display:"flex",alignItems:"center",gap:6,
                          padding:"6px 14px",background:"#FFF",color:C.inkMid,
                          border:`1px solid ${C.borderMid}`,borderRadius:6,
                          fontSize:12,fontWeight:600,cursor:"pointer",
                          boxShadow:"0 1px 3px rgba(0,0,0,0.06)",whiteSpace:"nowrap"}}>
                          <Icon.Printer s={13}/> Print Report
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Beginning Balance Card */}
                  <div style={{
                    background:"#FFF",borderRadius:10,overflow:"hidden",
                    border:`1.5px solid ${beginLocked ? C.border : C.blue}`,
                    boxShadow: beginLocked
                      ? "0 1px 4px rgba(0,0,0,0.06)"
                      : `0 0 0 3px ${C.blueLight}, 0 1px 4px rgba(0,0,0,0.06)`,
                  }}>
                    <div style={{display:"flex",alignItems:"stretch"}}>
                      <div style={{width:4,background:beginLocked?"#E5E7EB":C.blue,flexShrink:0}}/>
                      <div style={{flex:1,padding:"10px 18px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        {beginLocked ? (
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <span style={{fontSize:10,fontWeight:700,color:C.inkFaint,
                              textTransform:"uppercase",letterSpacing:"0.08em",whiteSpace:"nowrap"}}>
                              Beginning Balance
                            </span>
                            <div style={{width:1,height:14,background:C.border,flexShrink:0}}/>
                            <span style={{fontSize:20,fontWeight:700,color:C.ink,fontVariantNumeric:"tabular-nums"}}>
                              {fmt(beginVal)}
                            </span>
                            <div style={{display:"flex",alignItems:"center",gap:5,
                              background:C.bg,border:`1px solid ${C.border}`,
                              borderRadius:20,padding:"3px 10px",color:C.inkFaint,fontSize:11}}>
                              <Icon.Lock/> Locked at {openedAt}
                            </div>
                          </div>
                        ) : (
                          <div style={{display:"flex",alignItems:"center",gap:10}}>
                            <span style={{fontSize:10,fontWeight:700,color:C.inkFaint,
                              textTransform:"uppercase",letterSpacing:"0.08em",whiteSpace:"nowrap"}}>
                              Beginning Balance
                            </span>
                            <input
                              type="text"
                              value={beginVal}
                              onChange={e=>setBeginVal(e.target.value.replace(/[^0-9.]/g,""))}
                              onBlur={()=>setBeginVal(autoFmt(beginVal))}
                              placeholder="0.00"
                              style={{width:120,padding:"6px 10px",fontSize:14,fontWeight:600,
                                border:`1.5px solid ${C.borderMid}`,borderRadius:7,
                                textAlign:"right",fontVariantNumeric:"tabular-nums"}}
                            />
                            <button onClick={handleLockBegin} style={{
                              padding:"7px 16px",background:C.blue,color:"#FFF",
                              border:"none",borderRadius:7,fontSize:12,fontWeight:600,cursor:"pointer"}}>
                              Save &amp; Lock
                            </button>
                            <span style={{fontSize:11,color:C.inkFaint}}>Enter starting amount before accepting payments.</span>
                          </div>
                        )}
                        {beginLocked && phase==="active" && !isClosed && (
                          <button onClick={()=>{
                            setDrawer(d=>({...d,
                              creditCard: st.creditCard.toFixed(2),
                              debitCard:  st.debitCard.toFixed(2),
                            }));
                            setPhase("closing");
                          }} style={{
                            padding:"10px 24px",
                            background:`linear-gradient(135deg,#1A3A6B,#003087)`,
                            color:"#FFF",border:"none",borderRadius:8,
                            fontSize:13,fontWeight:700,cursor:"pointer",
                            boxShadow:"0 2px 8px rgba(0,48,135,0.3)",
                            display:"flex",alignItems:"center",gap:7,letterSpacing:"0.01em",
                          }}>
                            Close Out Drawer →
                          </button>
                        )}
                        {isClosing && !isClosed && (
                          <div style={{fontSize:12,color:C.inkSoft,display:"flex",alignItems:"center",gap:6}}>
                            <span style={{width:8,height:8,borderRadius:"50%",background:"#F59E0B",display:"inline-block"}}/>
                            Counting in progress…
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Not-opened warning */}
                  {!beginLocked && (
                    <Banner bg={C.amberPale} border={C.amberBorder} color={C.amber} icon={<Icon.Alert s={13}/>}>
                      <b>Drawer Not Opened —</b> Enter and lock your Beginning Balance before accepting any payments.
                    </Banner>
                  )}

                  {/* Main Grid */}
                  <div style={{background:"#FFF",borderRadius:10,overflow:"hidden",
                    border:`1px solid ${C.border}`,
                    boxShadow:"0 1px 6px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)"}}>

                    {/* Column headers */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                      <ColHeader sys={true}/>
                      <ColHeader sys={false}/>
                    </div>

                    {/* Cash section */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                      <div style={{borderRight:`2px solid ${C.blueLight}`}}>
                        <SecHead label="Cash" sys={true}/>
                      </div>
                      <div>
                        <SecHead label="Cash" sys={false} action={
                          drEditable && (
                            <button
                              onClick={()=>{ setCalcBills(EMPTY_BILLS); setCalcCoins(EMPTY_COINS); setShowCashCalc(true); }}
                              style={{display:"flex",alignItems:"center",gap:4,
                                padding:"2px 8px",background:"rgba(0,48,135,0.07)",color:C.blue,
                                border:`1px solid ${C.blueLight}`,borderRadius:4,
                                fontSize:10,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>
                              <Icon.Calc s={10}/> Calc
                            </button>
                          )
                        }/>
                      </div>
                    </div>

                    {/* Cash rows */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                      <SysCell label="Cash" value={st.cash} tall={true}/>
                      <div style={{display:"flex",flexDirection:"column"}}>
                        <DrCell label="Cash" field="cash" value={drawer.cash} editable={drEditable} onChange={handleDrawerChange} onBlur={handleDrawerBlur}/>
                        <DrCell label="Coin" field="coin" value={drawer.coin} editable={drEditable} onChange={handleDrawerChange} onBlur={handleDrawerBlur}/>
                        <DrCell label="Cash Pickup (Removed)" field="cashPickup"
                          value={pickTotal > 0 ? pickTotal.toFixed(2) : "0.00"}
                          editable={false} onChange={()=>{}} onBlur={()=>{}}/>
                      </div>
                    </div>
                    <SubRow sl="Total Cash" sv={st.cash} dl="Total Cash" dv={drCash}/>

                    {/* Other payments section */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                      <div style={{borderRight:`2px solid ${C.blueLight}`}}>
                        <SecHead label="Other Payments" sys={true}/>
                      </div>
                      <div><SecHead label="Other Payments" sys={false}/></div>
                    </div>
                    {[
                      {sl:"Check",       sv:st.check,      dl:"Check",       df:"check",      ed:drEditable},
                      {sl:"ACH/E-check", sv:st.achEcheck,  dl:"ACH/E-check", df:"achEcheck",  ed:drEditable},
                      {sl:"Credit Card", sv:st.creditCard, dl:"Credit Card", df:"creditCard", ed:false},
                      {sl:"Debit Card",  sv:st.debitCard,  dl:"Debit Card",  df:"debitCard",  ed:false},
                      {sl:"Money Order", sv:st.moneyOrder, dl:"Money Order", df:"moneyOrder", ed:drEditable},
                      {sl:"Reverse ATM", sv:st.reverseATM, dl:"Reverse ATM", df:"reverseATM", ed:drEditable},
                      {sl:"MOU",         sv:st.mou,        dl:"MOU",         df:"mou",        ed:drEditable},
                    ].map(r=>(
                      <div key={r.df} style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <SysCell label={r.sl} value={r.sv}/>
                        <DrCell label={r.dl} field={r.df} value={drawer[r.df]} editable={r.ed} onChange={handleDrawerChange} onBlur={handleDrawerBlur}/>
                      </div>
                    ))}
                    <SubRow sl="System Total" sv={sysTotal} dl="Total in Drawer" dv={drTotal} highlight/>

                    {/* Pickups + Balancing */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                      {/* Pickups */}
                      <div style={{borderRight:`2px solid ${C.blueLight}`,background:C.surfaceSys}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                          padding:"6px 16px",
                          background:`linear-gradient(90deg,${C.blueLight} 0%,${C.surfaceSys} 100%)`,
                          borderBottom:`1px solid ${C.border}`}}>
                          <div style={{display:"flex",alignItems:"center",gap:6}}>
                            <div style={{width:3,height:11,background:C.blue,borderRadius:2,opacity:0.6}}/>
                            <span style={{fontSize:10,fontWeight:700,color:C.blue,textTransform:"uppercase",letterSpacing:"0.07em"}}>
                              Cash Pickups
                            </span>
                            {pickups.length>0 && (
                              <span style={{background:C.blue,color:"#FFF",fontSize:9,fontWeight:700,
                                padding:"0 6px",borderRadius:10,lineHeight:"16px"}}>
                                {pickups.length}
                              </span>
                            )}
                          </div>
                          {beginLocked && !isClosed && (
                            <button onClick={()=>setShowPickup(true)} style={{
                              display:"flex",alignItems:"center",gap:4,
                              padding:"3px 10px",background:C.blue,color:"#FFF",
                              border:"none",borderRadius:5,fontSize:11,fontWeight:600,cursor:"pointer"}}>
                              <Icon.Plus s={10}/> Add
                            </button>
                          )}
                        </div>
                        {pickups.length===0
                          ? <div style={{padding:"11px 16px",fontSize:12,color:C.inkFaint,fontStyle:"italic"}}>No pickups recorded.</div>
                          : pickups.map(p=>(
                            <div key={p.id} style={{display:"flex",justifyContent:"space-between",
                              alignItems:"center",padding:"7px 16px",
                              borderBottom:`1px solid ${C.border}`}}>
                              <span style={{fontSize:12,color:C.inkSoft}}>{p.time}</span>
                              <div style={{display:"flex",alignItems:"center",gap:10}}>
                                <span style={{fontSize:12,fontWeight:600,color:"#B91C1C",fontVariantNumeric:"tabular-nums"}}>
                                  −{fmt(p.amount)}
                                </span>
                                {!isClosed && (
                                  <button onClick={()=>setPickups(ps=>ps.filter(x=>x.id!==p.id))}
                                    style={{background:"none",border:"none",cursor:"pointer",color:C.inkFaint,display:"flex",padding:2}}>
                                    <Icon.Trash s={12}/>
                                  </button>
                                )}
                              </div>
                            </div>
                          ))
                        }
                        {pickTotal>0 && (
                          <div style={{display:"flex",justifyContent:"space-between",
                            padding:"7px 16px",background:"#FEF2F2",
                            borderTop:`1px dashed ${C.redBorder}`}}>
                            <span style={{fontSize:12,fontWeight:600,color:"#7F1D1D"}}>Total Removed</span>
                            <span style={{fontSize:12,fontWeight:700,color:"#B91C1C",fontVariantNumeric:"tabular-nums"}}>
                              −{fmt(pickTotal)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Balancing */}
                      <div style={{background:"#FAFAFA"}}>
                        <div style={{padding:"6px 16px",background:"#F9FAFB",
                          borderBottom:`1px solid ${C.border}`,display:"flex",alignItems:"center",gap:6}}>
                          <div style={{width:3,height:11,background:C.inkFaint,borderRadius:2}}/>
                          <span style={{fontSize:10,fontWeight:700,color:C.inkSoft,textTransform:"uppercase",letterSpacing:"0.07em"}}>
                            Balancing
                          </span>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                          height:ROW,padding:"0 16px",borderBottom:`1px solid ${C.border}`}}>
                          <span style={{fontSize:12,color:C.inkSoft}}>Less Beginning Balance</span>
                          <span style={{fontSize:12,fontWeight:500,color:"#B91C1C",fontVariantNumeric:"tabular-nums"}}>
                            −{fmt(lessBegin)}
                          </span>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",
                          height:ROW+4,padding:"0 16px",background:"#F3F4F6"}}>
                          <span style={{fontSize:12,fontWeight:700,color:C.inkMid}}>Net Drawer Total</span>
                          <span style={{fontSize:14,fontWeight:700,color:C.ink,fontVariantNumeric:"tabular-nums"}}>
                            {fmt(drNet)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Discrepancy / Close bar */}
                    {isClosing && (
                      <div style={{
                        display:"flex",justifyContent:"space-between",alignItems:"center",
                        padding:"16px 20px",
                        background: hasDiff
                          ? "linear-gradient(90deg,#FEF2F2,#FFF5F5)"
                          : "linear-gradient(90deg,#F0FDF4,#F6FEF9)",
                        borderTop:`2px solid ${hasDiff?"#FECACA":C.greenBorder}`,
                      }}>
                        <div style={{display:"flex",alignItems:"center",gap:12}}>
                          <div style={{width:36,height:36,borderRadius:"50%",
                            background:hasDiff?"#FEE2E2":"#D1FAE5",
                            display:"flex",alignItems:"center",justifyContent:"center",
                            color:hasDiff?C.red:C.green}}>
                            {hasDiff ? <Icon.Alert s={17}/> : <Icon.Check s={17}/>}
                          </div>
                          <div>
                            <div style={{fontSize:14,fontWeight:700,color:hasDiff?C.red:C.green}}>
                              {hasDiff
                                ? <>Discrepancy of <span style={{fontVariantNumeric:"tabular-nums"}}>{fmt(Math.abs(disc))}</span></>
                                : "Drawer Balanced — Ready to Close"}
                            </div>
                            {hasDiff && (
                              <div style={{fontSize:11,color:C.inkSoft,marginTop:2}}>
                                System expects <span style={{fontVariantNumeric:"tabular-nums"}}>{fmt(sysTotal+pickTotal)}</span>
                                {" · "}Drawer net is <span style={{fontVariantNumeric:"tabular-nums"}}>{fmt(drNet)}</span>
                                {" · "}Supervisor approval required
                              </div>
                            )}
                          </div>
                        </div>
                        <button onClick={handleCloseOut} style={{
                          padding:"10px 22px",
                          background: hasDiff
                            ? "linear-gradient(135deg,#DC2626,#B91C1C)"
                            : "linear-gradient(135deg,#16A34A,#15803D)",
                          color:"#FFF",border:"none",borderRadius:8,
                          fontSize:13,fontWeight:700,cursor:"pointer",
                          display:"flex",alignItems:"center",gap:7,
                          boxShadow:hasDiff?"0 2px 8px rgba(185,28,28,0.3)":"0 2px 8px rgba(21,128,61,0.3)",
                        }}>
                          {hasDiff ? <Icon.Alert s={13}/> : <Icon.Check s={13}/>}
                          {hasDiff ? "Request Override & Close" : "Confirm Close Out"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>{/* end inner layout wrapper */}
                </div>{/* end scroll container */}
              </>
            )}
          </>
        )}
      </div>

      {/* ══ MODAL: Open Drawer ══════════════════════════════════════════════ */}
      {showOpenModal && (
        <Overlay>
          <div style={{background:"#FFF",borderRadius:16,width:500,
            boxShadow:"0 25px 60px rgba(0,0,0,0.35),0 8px 20px rgba(0,0,0,0.15)",
            overflow:"hidden"}}>
            <div style={{padding:"22px 28px 18px",borderBottom:`1px solid ${C.border}`,
              display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h2 style={{fontSize:20,fontWeight:700,color:C.ink}}>Open Drawer</h2>
              <button onClick={()=>{ setShowOpenModal(false); setPastBlocked(false); }}
                style={{background:"none",border:"none",cursor:"pointer",color:C.inkFaint,display:"flex"}}>
                <Icon.X s={18}/>
              </button>
            </div>
            <div style={{padding:"24px 28px 28px"}}>

              {/* Past drawer blocker */}
              {pastBlocked && (
                <div style={{background:"#FEF2F2",border:`1px solid ${C.redBorder}`,
                  borderRadius:10,padding:"14px 16px",marginBottom:18}}>
                  <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12}}>
                    <span style={{color:C.red,flexShrink:0,marginTop:1}}><Icon.Alert s={15}/></span>
                    <div>
                      <div style={{fontSize:13,fontWeight:700,color:C.red,marginBottom:3}}>
                        Unclosed Drawer from {fmtDate(DEMO_PENDING_PAST.date)}
                      </div>
                      <div style={{fontSize:12,color:"#7F1D1D"}}>
                        Drawer #{DEMO_PENDING_PAST.drawerNum} was not closed. You must reconcile it before opening today's drawer.
                      </div>
                    </div>
                  </div>
                  <button onClick={openPastReconciliation} style={{
                    width:"100%",padding:"10px",background:C.red,color:"#FFF",
                    border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer"}}>
                    Reconcile Past Drawer →
                  </button>
                </div>
              )}

              {/* Location */}
              <div style={{marginBottom:16}}>
                <label style={{fontSize:11,fontWeight:700,color:C.inkSoft,
                  textTransform:"uppercase",letterSpacing:"0.07em",display:"block",marginBottom:8}}>
                  Location
                </label>
                <input value={LOCATION} disabled style={{
                  width:"100%",padding:"10px 14px",
                  border:`1.5px solid ${C.border}`,borderRadius:8,
                  fontSize:14,fontWeight:600,color:C.inkMid,
                  background:"#F9FAFB",cursor:"not-allowed",letterSpacing:"0.01em",
                }}/>
              </div>

              {/* Date */}
              <div style={{marginBottom:16}}>
                <label style={{fontSize:11,fontWeight:700,color:C.inkSoft,
                  textTransform:"uppercase",letterSpacing:"0.07em",display:"block",marginBottom:8}}>
                  Date
                </label>
                <input
                  type="date"
                  value={drawerDate}
                  max={todayStr}
                  onChange={e=>{ setDrawerDate(e.target.value); setPastBlocked(false); }}
                  style={{
                    width:"100%",padding:"10px 14px",
                    border:`1.5px solid ${drawerDate<todayStr?C.amber:C.borderMid}`,borderRadius:8,
                    fontSize:14,color:C.ink,background:"#FFF",cursor:"pointer",
                    boxShadow: drawerDate<todayStr?`0 0 0 3px ${C.amberPale}`:"none",
                  }}
                />
                {drawerDate < todayStr && (
                  <div style={{marginTop:6,padding:"6px 10px",background:C.amberPale,
                    border:`1px solid ${C.amberBorder}`,borderRadius:6,
                    fontSize:11,color:C.amber,fontWeight:600}}>
                    ⚠ Reconciliation Mode — you are closing a past drawer
                  </div>
                )}
              </div>

              {/* Drawer Number — auto-assigned */}
              <div style={{marginBottom:24}}>
                <label style={{fontSize:11,fontWeight:700,color:C.inkSoft,
                  textTransform:"uppercase",letterSpacing:"0.07em",display:"block",marginBottom:8}}>
                  Drawer Number
                </label>
                <div style={{padding:"10px 14px",border:`1.5px solid ${C.border}`,borderRadius:8,
                  background:"#F9FAFB",fontSize:14,fontWeight:600,color:C.inkMid}}>
                  Drawer {drawerNum}
                </div>
              </div>

              <div style={{display:"flex",gap:12,justifyContent:"flex-end"}}>
                <button onClick={()=>{ setShowOpenModal(false); setPastBlocked(false); }}
                  style={{padding:"11px 22px",background:"#F9FAFB",
                    border:`1.5px solid ${C.border}`,borderRadius:8,
                    fontSize:14,fontWeight:600,color:C.inkSoft,cursor:"pointer"}}>
                  Cancel
                </button>
                <button
                  onClick={handleOpenDrawer}
                  disabled={!drawerDate}
                  style={{padding:"11px 28px",
                    background: (drawerDate && !pastBlocked) ? C.blue : "#9CA3AF",
                    color:"#FFF",border:"none",borderRadius:8,
                    fontSize:14,fontWeight:700,
                    cursor:(drawerDate && !pastBlocked)?"pointer":"not-allowed",
                    boxShadow:(drawerDate && !pastBlocked)?"0 2px 10px rgba(0,48,135,0.35)":"none",
                    transition:"background .15s,box-shadow .15s"}}>
                  {drawerDate < todayStr ? "Open for Reconciliation" : "Open Drawer"}
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      )}

      {/* ══ MODAL: Cash Pickup ══════════════════════════════════════════════ */}
      {showPickup && (
        <Overlay>
          <div style={{background:"#FFF",borderRadius:14,width:400,overflow:"hidden",
            boxShadow:"0 20px 50px rgba(0,0,0,0.25)"}}>
            <div style={{padding:"18px 22px 14px",borderBottom:`1px solid ${C.border}`,
              display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <h2 style={{fontSize:16,fontWeight:700,color:C.ink,marginBottom:2}}>Record Cash Pickup</h2>
                <p style={{fontSize:12,color:C.inkSoft}}>Enter the amount of cash removed from the drawer.</p>
              </div>
              <button onClick={()=>setShowPickup(false)}
                style={{background:"none",border:"none",cursor:"pointer",color:C.inkFaint,display:"flex"}}>
                <Icon.X s={17}/>
              </button>
            </div>
            <div style={{padding:"22px 24px 24px"}}>
              <label style={{fontSize:11,fontWeight:700,color:C.inkSoft,
                textTransform:"uppercase",letterSpacing:"0.07em",display:"block",marginBottom:8}}>
                Amount Removed ($)
              </label>
              <input
                autoFocus
                type="text"
                value={pickupAmt}
                onChange={e=>setPickupAmt(e.target.value.replace(/[^0-9.]/g,""))}
                onBlur={()=>pickupAmt&&setPickupAmt(autoFmt(pickupAmt))}
                placeholder="0.00"
                onKeyDown={e=>e.key==="Enter"&&handleAddPickup()}
                style={{width:"100%",padding:"12px 14px",fontSize:18,fontWeight:600,
                  border:`1.5px solid ${C.borderMid}`,borderRadius:8,
                  textAlign:"right",fontVariantNumeric:"tabular-nums",
                  marginBottom:20}}
              />
              <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                <button onClick={()=>setShowPickup(false)}
                  style={{padding:"10px 20px",background:"#F9FAFB",
                    border:`1.5px solid ${C.border}`,borderRadius:8,
                    fontSize:13,fontWeight:600,color:C.inkMid,cursor:"pointer"}}>
                  Cancel
                </button>
                <button onClick={handleAddPickup}
                  style={{padding:"10px 24px",background:C.blue,color:"#FFF",
                    border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",
                    boxShadow:"0 2px 8px rgba(0,48,135,0.3)"}}>
                  Record Pickup
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      )}

      {/* ══ MODAL: Supervisor Override (discrepancy) ═══════════════════════ */}
      {showOvr && (
        <Overlay>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            {/* Requester pill */}
            <div style={{background:C.blue,borderRadius:10,padding:"8px 28px",
              textAlign:"center",marginBottom:-1,zIndex:1,
              boxShadow:"0 4px 12px rgba(0,48,135,0.3)"}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.6)",
                textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:2}}>Requester</div>
              <div style={{fontSize:14,fontWeight:700,color:"#FFF"}}>{drawerCsr}</div>
            </div>
            {/* White card */}
            <div style={{background:"#FFF",borderRadius:14,width:480,
              boxShadow:"0 25px 60px rgba(0,0,0,0.3),0 8px 20px rgba(0,0,0,0.15)"}}>
              <div style={{padding:"22px 24px 24px"}}>
                {ovrOk ? (
                  <div style={{textAlign:"center",padding:"28px 0"}}>
                    <div style={{width:52,height:52,borderRadius:"50%",background:"#D1FAE5",
                      margin:"0 auto 14px",display:"flex",alignItems:"center",
                      justifyContent:"center",color:C.green}}>
                      <Icon.Check s={22}/>
                    </div>
                    <div style={{fontSize:15,fontWeight:700,color:C.green}}>Override Approved</div>
                    <div style={{fontSize:12,color:C.inkSoft,marginTop:4}}>Closing drawer…</div>
                  </div>
                ) : (
                  <>
                    {/* Title row + Destiny logo */}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
                      <div>
                        <h2 style={{fontSize:17,fontWeight:700,color:C.ink,marginBottom:4}}>Supervisor Override</h2>
                        <p style={{fontSize:12,color:C.inkSoft}}>
                          Required to close with discrepancy of{" "}
                          <span style={{fontWeight:700,color:C.red,fontVariantNumeric:"tabular-nums"}}>
                            {fmt(Math.abs(disc))}
                          </span>
                        </p>
                      </div>
                      <img src={FA.destinyWordmark} alt="Destiny"
                        style={{display:"block",height:22,width:79,objectFit:"contain",flexShrink:0,marginTop:2}}/>
                    </div>
                    <div style={{background:C.redPale,border:`1px solid ${C.redBorder}`,
                      borderRadius:8,padding:"10px 14px",marginBottom:18,
                      display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{fontSize:12,color:"#7F1D1D"}}>Drawer Discrepancy</span>
                      <span style={{fontSize:14,fontWeight:700,color:C.red,fontVariantNumeric:"tabular-nums"}}>
                        {fmt(Math.abs(disc))}
                      </span>
                    </div>
                    <div style={{display:"flex",gap:12,marginBottom:14}}>
                      <div style={{flex:1}}>
                        <label style={labelSt}>Supervisor Login ID</label>
                        <input value={ovrLogin} onChange={e=>setOvrLogin(e.target.value)}
                          placeholder="Login ID" style={fieldSt}/>
                      </div>
                      <div style={{flex:1}}>
                        <label style={labelSt}>Password</label>
                        <div style={{position:"relative"}}>
                          <input type={showPass?"text":"password"} value={ovrPass}
                            onChange={e=>setOvrPass(e.target.value)} placeholder="••••••••"
                            style={{...fieldSt,paddingRight:36}}/>
                          <button onClick={()=>setShowPass(!showPass)}
                            style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",
                              background:"none",border:"none",cursor:"pointer",color:C.inkFaint,display:"flex"}}>
                            <Icon.Eye off={showPass}/>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div style={{marginBottom:16}}>
                      <label style={labelSt}>Reason for Override</label>
                      <select value={ovrReason} onChange={e=>setOvrReason(e.target.value)}
                        style={{...fieldSt,color:ovrReason?C.ink:C.inkFaint}}>
                        <option value="">Select reason…</option>
                        <option value="counted">Cash Count Verified by Supervisor</option>
                        <option value="system_error">Suspected System Error</option>
                        <option value="training">Training / Test Transaction</option>
                        <option value="other">Other (see comments)</option>
                      </select>
                    </div>
                    {ovrErr && (
                      <div style={{marginBottom:12,padding:"8px 12px",background:C.redPale,
                        border:`1px solid ${C.redBorder}`,borderRadius:6,fontSize:12,color:C.red}}>
                        {ovrErr}
                      </div>
                    )}
                    <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
                      <button onClick={()=>setShowOvr(false)}
                        style={{padding:"10px 20px",background:"#F9FAFB",
                          border:`1.5px solid ${C.border}`,borderRadius:8,
                          fontSize:13,fontWeight:600,color:C.inkMid,cursor:"pointer"}}>
                        Cancel
                      </button>
                      <button onClick={handleOvrSubmit}
                        style={{padding:"10px 24px",background:C.blue,color:"#FFF",
                          border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",
                          boxShadow:"0 2px 8px rgba(0,48,135,0.3)"}}>
                        Submit Override
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Overlay>
      )}

      {/* ══ MODAL: Supervisor Login ══════════════════════════════════════════ */}
      {showSupvLogin && (
        <SupervisorLoginModal
          onLogin={(name)=>{ setSupvName(name); setSupervisorMode(true); setShowSupvLogin(false); }}
          onClose={()=>setShowSupvLogin(false)}
        />
      )}

      {/* ══ MODAL: Cash Calculator ═══════════════════════════════════════════ */}
      {showCashCalc && (
        <CashCalculatorModal
          calcBills={calcBills} setCalcBills={setCalcBills}
          calcCoins={calcCoins} setCalcCoins={setCalcCoins}
          onApply={(bills,coins)=>{
            setDrawer(d=>({...d, cash:bills.toFixed(2), coin:coins.toFixed(2)}));
            setShowCashCalc(false);
          }}
          onClose={()=>setShowCashCalc(false)}
        />
      )}

      {/* ══ MODAL: Print Report ══════════════════════════════════════════════ */}
      {showPrintReport && (
        <PrintReportModal
          drawerDate={drawerDate} drawerNum={drawerNum} openedAt={openedAt}
          drawerCsr={drawerCsr} beginVal={beginVal}
          st={st} sysTotal={sysTotal} drawer={drawer}
          pickups={pickups} pickTotal={pickTotal}
          drTotal={drTotal} drNet={drNet} disc={disc} hasDiff={hasDiff}
          isReconcile={isReconcile}
          onClose={()=>setShowPrintReport(false)}
        />
      )}
    </div>
  );
}

/* ─── Supervisor Admin View ─────────────────────────────────────────────────── */
function SupervisorAdminView({supvName,supvLocation,setSupvLocation,supvCsr,setSupvCsr,onExit,onCloseDrawer}) {
  const csrs     = CSR_BY_LOCATION[supvLocation] || [];
  const filtered = DEMO_OPEN_DRAWERS.filter(d=>
    d.location===supvLocation && (!supvCsr || d.csr===supvCsr)
  );
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",background:C.bg,fontFamily:SANS,overflow:"hidden"}}>
      {/* Admin header */}
      <div style={{background:`linear-gradient(90deg,#001F5C,#003087)`,padding:"12px 24px",
        display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <Icon.Shield s={15} color="#FFF"/>
          <span style={{color:"#FFF",fontWeight:700,fontSize:14}}>Admin Mode</span>
          <span style={{color:"rgba(255,255,255,0.45)",fontSize:13}}>·</span>
          <span style={{color:"rgba(255,255,255,0.75)",fontSize:13}}>{supvName || "SUPERVISOR"}</span>
        </div>
        <button onClick={onExit} style={{background:"rgba(255,255,255,0.1)",color:"#FFF",
          border:"1px solid rgba(255,255,255,0.2)",borderRadius:7,padding:"6px 16px",
          fontSize:12,fontWeight:600,cursor:"pointer"}}>
          Exit Admin
        </button>
      </div>

      {/* Filters */}
      <div style={{background:"#FFF",borderBottom:`1px solid ${C.border}`,
        padding:"16px 24px",display:"flex",gap:20,alignItems:"flex-end",flexShrink:0}}>
        <div>
          <label style={labelSt}>Location</label>
          <select value={supvLocation}
            onChange={e=>{ setSupvLocation(e.target.value); setSupvCsr(""); }}
            style={{...fieldSt,width:280,marginBottom:0}}>
            {LOCATIONS.map(l=><option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label style={labelSt}>CSR</label>
          <select value={supvCsr} onChange={e=>setSupvCsr(e.target.value)}
            style={{...fieldSt,width:220,marginBottom:0,color:supvCsr?C.ink:C.inkFaint}}>
            <option value="">— All CSRs —</option>
            {csrs.map(c=><option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Table */}
      <div style={{flex:1,overflowY:"auto",padding:"20px 24px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
          <h2 style={{fontSize:15,fontWeight:700,color:C.ink}}>Open Drawers</h2>
          <span style={{background:C.blue,color:"#FFF",fontSize:11,fontWeight:700,
            padding:"1px 8px",borderRadius:10}}>{filtered.length}</span>
        </div>
        {filtered.length===0 ? (
          <div style={{textAlign:"center",padding:"56px 0",color:C.inkFaint,fontSize:13}}>
            No open drawers found for this selection.
          </div>
        ) : (
          <div style={{background:"#FFF",borderRadius:10,border:`1px solid ${C.border}`,overflow:"hidden",
            boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
            {/* Header row */}
            <div style={{display:"grid",gridTemplateColumns:"72px 1fr 1fr 110px 110px 110px 148px",
              padding:"9px 16px",background:C.bg,borderBottom:`1px solid ${C.border}`,
              fontSize:10,fontWeight:700,color:C.inkSoft,textTransform:"uppercase",letterSpacing:"0.06em"}}>
              <span>Drawer</span><span>Location</span><span>CSR</span>
              <span>Date</span><span>Begin Bal</span><span>Sys Total</span>
              <span style={{textAlign:"right"}}>Action</span>
            </div>
            {filtered.map(dr=>(
              <div key={dr.id} style={{display:"grid",gridTemplateColumns:"72px 1fr 1fr 110px 110px 110px 148px",
                padding:"12px 16px",borderBottom:`1px solid ${C.border}`,alignItems:"center",fontSize:13}}>
                <span style={{fontWeight:700,color:C.blue}}>#{dr.drawer}</span>
                <span style={{color:C.inkSoft,fontSize:11,paddingRight:8}}>{dr.location}</span>
                <span style={{fontWeight:500}}>{dr.csr}</span>
                <span style={{color:dr.date<todayStr?C.amber:C.inkMid,fontWeight:dr.date<todayStr?600:400,fontSize:12}}>
                  {dr.date===todayStr?"Today":dr.date}{dr.date<todayStr?" ⚠":""}
                </span>
                <span style={{fontVariantNumeric:"tabular-nums",fontSize:12}}>{fmt(pv(dr.begin))}</span>
                <span style={{fontVariantNumeric:"tabular-nums",fontSize:12}}>{fmt(dr.sys)}</span>
                <div style={{textAlign:"right"}}>
                  <button onClick={()=>onCloseDrawer(dr)} style={{
                    background:`linear-gradient(135deg,#1A3A6B,#003087)`,color:"#FFF",
                    border:"none",borderRadius:7,padding:"7px 14px",
                    fontSize:12,fontWeight:700,cursor:"pointer",
                    boxShadow:"0 2px 6px rgba(0,48,135,0.3)"}}>
                    Close Drawer →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Supervisor Login Modal ────────────────────────────────────────────────── */
function SupervisorLoginModal({onLogin,onClose}) {
  const [loginId, setLoginId] = useState("");
  const [pass,    setPass]    = useState("");
  const [err,     setErr]     = useState("");
  const [showPw,  setShowPw]  = useState(false);

  const handleSubmit = () => {
    if (!loginId || !pass) { setErr("All fields are required."); return; }
    onLogin(loginId.toUpperCase());
  };

  return (
    <Overlay>
      <div style={{background:"#FFF",borderRadius:14,width:420,overflow:"hidden",
        boxShadow:"0 25px 60px rgba(0,0,0,0.3)"}}>
        <div style={{background:`linear-gradient(135deg,#001F5C,#003087)`,
          padding:"16px 22px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <Icon.Shield s={16} color="#FFF"/>
            <span style={{fontSize:16,fontWeight:700,color:"#FFF"}}>Supervisor Access</span>
          </div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.1)",
            border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",
            color:"rgba(255,255,255,0.7)",padding:6,borderRadius:6,display:"flex"}}>
            <Icon.X s={15}/>
          </button>
        </div>
        <div style={{padding:"22px 24px 24px"}}>
          <div style={{background:C.amberPale,border:`1px solid ${C.amberBorder}`,
            borderRadius:7,padding:"8px 12px",marginBottom:18,fontSize:11,color:C.amber,fontWeight:600}}>
            Demo mode — any credentials will be accepted
          </div>
          <div style={{marginBottom:14}}>
            <label style={labelSt}>Supervisor Login ID</label>
            <input value={loginId} onChange={e=>setLoginId(e.target.value)}
              placeholder="Supervisor ID" style={fieldSt} onKeyDown={e=>e.key==="Enter"&&handleSubmit()}/>
          </div>
          <div style={{marginBottom:16}}>
            <label style={labelSt}>Password</label>
            <div style={{position:"relative"}}>
              <input type={showPw?"text":"password"} value={pass}
                onChange={e=>setPass(e.target.value)} placeholder="••••••••"
                style={{...fieldSt,paddingRight:38}} onKeyDown={e=>e.key==="Enter"&&handleSubmit()}/>
              <button onClick={()=>setShowPw(!showPw)}
                style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",
                  background:"none",border:"none",cursor:"pointer",color:C.inkFaint,display:"flex"}}>
                <Icon.Eye off={showPw}/>
              </button>
            </div>
          </div>
          {err && <div style={{marginBottom:12,padding:"8px 12px",background:C.redPale,
            border:`1px solid ${C.redBorder}`,borderRadius:6,fontSize:12,color:C.red}}>{err}</div>}
          <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
            <button onClick={onClose} style={{padding:"10px 20px",background:"#F9FAFB",
              border:`1.5px solid ${C.border}`,borderRadius:8,fontSize:13,fontWeight:600,
              color:C.inkMid,cursor:"pointer"}}>Cancel</button>
            <button onClick={handleSubmit} style={{padding:"10px 24px",background:C.blue,color:"#FFF",
              border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",
              boxShadow:"0 2px 8px rgba(0,48,135,0.3)",display:"flex",alignItems:"center",gap:6}}>
              <Icon.Shield s={13} color="#FFF"/> Login as Supervisor
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

/* ─── Cash Calculator Modal ─────────────────────────────────────────────────── */
function CashCalculatorModal({calcBills,setCalcBills,calcCoins,setCalcCoins,onApply,onClose}) {
  const billsTotal = BILL_DENOMS.reduce((s,d)=>s+(calcBills[d]||0)*d, 0);
  const coinsTotal = COIN_DENOMS.reduce((s,c)=>s+(calcCoins[c.key]||0)*c.val, 0);
  const grandTotal = billsTotal+coinsTotal;

  const inputSt = {
    width:68, textAlign:"center", padding:"5px 6px",
    border:`1.5px solid ${C.borderMid}`, borderRadius:6, fontSize:13, fontWeight:600,
  };

  return (
    <Overlay>
      <div style={{background:"#FFF",borderRadius:14,width:660,
        boxShadow:"0 25px 60px rgba(0,0,0,0.3)",overflow:"hidden",
        maxHeight:"90vh",display:"flex",flexDirection:"column"}}>

        {/* Header */}
        <div style={{padding:"16px 22px 14px",borderBottom:`1px solid ${C.border}`,
          display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <Icon.Calc s={16} color={C.blue}/>
            <h2 style={{fontSize:17,fontWeight:700,color:C.ink}}>Cash Calculator</h2>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",color:C.inkFaint,display:"flex"}}>
            <Icon.X s={17}/>
          </button>
        </div>

        {/* Body */}
        <div id="print-content" style={{flex:1,overflowY:"auto",padding:"20px 22px"}}>
          {/* Print-only title */}
          <div style={{display:"none"}} className="print-only-title">
            <div style={{textAlign:"center",marginBottom:16,paddingBottom:12,borderBottom:"2px solid #003087"}}>
              <div style={{fontSize:10,letterSpacing:"0.14em",color:"#6B7280",marginBottom:2}}>CALIFORNIA DMV</div>
              <div style={{fontSize:18,fontWeight:800,color:"#003087"}}>CASH COUNT SHEET</div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,alignItems:"stretch"}}>
            {/* Bills */}
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{fontSize:11,fontWeight:700,color:C.blue,textTransform:"uppercase",
                letterSpacing:"0.07em",marginBottom:10,padding:"6px 10px",
                background:C.bluePale,borderRadius:6}}>
                Bills
              </div>
              {BILL_DENOMS.map(d=>(
                <div key={d} style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
                  <span style={{width:44,fontSize:13,fontWeight:600,color:C.inkMid,textAlign:"right"}}>${d}</span>
                  <span style={{color:C.inkFaint,fontSize:12}}>×</span>
                  <input type="number" min="0" value={calcBills[d]||""}
                    placeholder="0"
                    onChange={e=>setCalcBills(prev=>({...prev,[d]:parseInt(e.target.value)||0}))}
                    style={inputSt}/>
                  <span style={{fontSize:12,color:C.inkSoft,minWidth:64,textAlign:"right",
                    fontVariantNumeric:"tabular-nums"}}>
                    = {fmt((calcBills[d]||0)*d)}
                  </span>
                </div>
              ))}
              <div style={{marginTop:"auto",paddingTop:10}}>
                <div style={{padding:"8px 10px",background:C.blueLight,borderRadius:7,
                  display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:12,fontWeight:700,color:C.blue}}>Bills Total</span>
                  <span style={{fontSize:15,fontWeight:800,color:C.blue,fontVariantNumeric:"tabular-nums"}}>{fmt(billsTotal)}</span>
                </div>
              </div>
            </div>

            {/* Coins */}
            <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{fontSize:11,fontWeight:700,color:C.inkMid,textTransform:"uppercase",
                letterSpacing:"0.07em",marginBottom:10,padding:"6px 10px",
                background:"#F9FAFB",borderRadius:6}}>
                Coins
              </div>
              {COIN_DENOMS.map(c=>(
                <div key={c.key} style={{display:"flex",alignItems:"center",gap:8,marginBottom:7}}>
                  <span style={{width:54,fontSize:13,fontWeight:600,color:C.inkMid,textAlign:"right"}}>{c.label}</span>
                  <span style={{color:C.inkFaint,fontSize:12}}>×</span>
                  <input type="number" min="0" value={calcCoins[c.key]||""}
                    placeholder="0"
                    onChange={e=>setCalcCoins(prev=>({...prev,[c.key]:parseInt(e.target.value)||0}))}
                    style={inputSt}/>
                  <span style={{fontSize:12,color:C.inkSoft,minWidth:64,textAlign:"right",
                    fontVariantNumeric:"tabular-nums"}}>
                    = {fmt((calcCoins[c.key]||0)*c.val)}
                  </span>
                </div>
              ))}
              <div style={{marginTop:"auto",paddingTop:10}}>
                <div style={{padding:"8px 10px",background:"#F3F4F6",borderRadius:7,
                  display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:12,fontWeight:700,color:C.inkMid}}>Coins Total</span>
                  <span style={{fontSize:15,fontWeight:800,color:C.ink,fontVariantNumeric:"tabular-nums"}}>{fmt(coinsTotal)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grand total */}
          <div style={{marginTop:16,padding:"12px 16px",
            background:`linear-gradient(90deg,${C.blueLight},${C.bluePale})`,
            borderRadius:9,border:`1px solid ${C.border}`,
            display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:13,fontWeight:700,color:C.blue}}>Grand Total</div>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <span style={{fontSize:11,color:C.inkSoft}}>
                Bills {fmt(billsTotal)} + Coins {fmt(coinsTotal)}
              </span>
              <span style={{fontSize:22,fontWeight:800,color:C.blue,fontVariantNumeric:"tabular-nums"}}>{fmt(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div style={{padding:"14px 22px",borderTop:`1px solid ${C.border}`,
          display:"flex",gap:10,justifyContent:"space-between",alignItems:"center",flexShrink:0,background:"#FAFAFA"}}>
          <button onClick={()=>window.print()} style={{
            display:"flex",alignItems:"center",gap:6,
            padding:"8px 16px",background:"#FFF",color:C.inkMid,
            border:`1.5px solid ${C.border}`,borderRadius:7,fontSize:12,fontWeight:600,cursor:"pointer"}}>
            <Icon.Printer s={12}/> Print Count Sheet
          </button>
          <div style={{display:"flex",gap:10}}>
            <button onClick={onClose} style={{padding:"9px 20px",background:"#F9FAFB",
              border:`1.5px solid ${C.border}`,borderRadius:8,fontSize:13,fontWeight:600,
              color:C.inkMid,cursor:"pointer"}}>Cancel</button>
            <button onClick={()=>onApply(billsTotal,coinsTotal)} style={{
              padding:"9px 24px",background:`linear-gradient(135deg,#1A3A6B,#003087)`,color:"#FFF",
              border:"none",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",
              boxShadow:"0 2px 8px rgba(0,48,135,0.3)"}}>
              Apply to Drawer
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

/* ─── Print Report Modal ─────────────────────────────────────────────────────── */
function PrintReportModal({drawerDate,drawerNum,openedAt,drawerCsr,beginVal,st,sysTotal,drawer,pickups,pickTotal,drTotal,drNet,disc,hasDiff,isReconcile,onClose}) {
  const Row = ({label,value,bold,color}) => (
    <div style={{display:"flex",justifyContent:"space-between",padding:"4px 0",
      borderBottom:"1px solid #F3F4F6"}}>
      <span style={{fontSize:12,color:"#374151"}}>{label}</span>
      <span style={{fontSize:12,fontWeight:bold?700:500,color:color||"#111827",fontVariantNumeric:"tabular-nums"}}>{value}</span>
    </div>
  );
  const Section = ({title,children}) => (
    <div style={{marginBottom:18}}>
      <div style={{fontSize:10,fontWeight:700,color:"#003087",textTransform:"uppercase",
        letterSpacing:"0.08em",padding:"5px 0",borderBottom:"2px solid #003087",marginBottom:6}}>
        {title}
      </div>
      {children}
    </div>
  );

  return (
    <Overlay>
      <div style={{background:"rgba(0,0,0,0.5)",position:"fixed",inset:0,
        display:"flex",alignItems:"center",justifyContent:"center",zIndex:2000}}>
        <div style={{background:"#FFF",borderRadius:12,width:640,maxHeight:"90vh",
          display:"flex",flexDirection:"column",boxShadow:"0 30px 70px rgba(0,0,0,0.4)"}}>
          {/* Actions bar (hidden when printing) */}
          <div className="no-print" style={{padding:"14px 20px",borderBottom:"1px solid #E5E7EB",
            display:"flex",justifyContent:"space-between",alignItems:"center",background:"#F9FAFB",borderRadius:"12px 12px 0 0"}}>
            <span style={{fontSize:14,fontWeight:700,color:"#111827"}}>Drawer Balance Report</span>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>window.print()} style={{
                display:"flex",alignItems:"center",gap:6,padding:"8px 18px",
                background:"#003087",color:"#FFF",border:"none",borderRadius:7,
                fontSize:13,fontWeight:700,cursor:"pointer"}}>
                <Icon.Printer s={13} color="#FFF"/> Print
              </button>
              <button onClick={onClose} style={{padding:"8px 14px",background:"#FFF",
                border:"1px solid #E5E7EB",borderRadius:7,fontSize:13,fontWeight:600,
                color:"#374151",cursor:"pointer"}}>Close</button>
            </div>
          </div>

          {/* Report content */}
          <div id="print-content" style={{flex:1,overflowY:"auto",padding:"28px 32px",fontFamily:SANS}}>
            {/* Header */}
            <div style={{textAlign:"center",marginBottom:22,paddingBottom:16,borderBottom:"2px solid #003087"}}>
              <div style={{fontSize:10,letterSpacing:"0.14em",color:"#6B7280",marginBottom:2}}>CALIFORNIA DMV</div>
              <div style={{fontSize:22,fontWeight:800,color:"#003087",letterSpacing:"-0.01em"}}>DRAWER BALANCE REPORT</div>
              {isReconcile && (
                <div style={{display:"inline-block",marginTop:6,background:"#FFFBEB",
                  border:"1px solid #FDE68A",borderRadius:20,padding:"2px 12px",
                  fontSize:10,fontWeight:700,color:"#92400E",letterSpacing:"0.06em"}}>
                  RECONCILIATION
                </div>
              )}
            </div>

            {/* Info */}
            <Section title="Drawer Information">
              <Row label="Location" value={LOCATION}/>
              <Row label="Date" value={fmtDate(drawerDate)}/>
              <Row label="Drawer #" value={drawerNum}/>
              <Row label="Opened" value={openedAt}/>
              <Row label="Employee" value={drawerCsr}/>
              <Row label="Beginning Balance" value={fmt(pv(beginVal))} bold/>
            </Section>

            {/* System totals */}
            <Section title="System Transaction Total">
              <Row label="Cash" value={fmt(st.cash)}/>
              <Row label="Check" value={fmt(st.check)}/>
              <Row label="ACH/E-check" value={fmt(st.achEcheck)}/>
              <Row label="Credit Card" value={fmt(st.creditCard)}/>
              <Row label="Debit Card" value={fmt(st.debitCard)}/>
              <Row label="Money Order" value={fmt(st.moneyOrder)}/>
              <Row label="Reverse ATM" value={fmt(st.reverseATM)}/>
              <Row label="MOU" value={fmt(st.mou)}/>
              <Row label="TOTAL" value={fmt(sysTotal)} bold/>
            </Section>

            {/* Drawer contents */}
            <Section title="Drawer Contents">
              <Row label="Cash" value={fmt(pv(drawer.cash))}/>
              <Row label="Coin" value={fmt(pv(drawer.coin))}/>
              <Row label="Cash Pickup (Removed)" value={`−${fmt(pickTotal)}`}/>
              <Row label="Check" value={fmt(pv(drawer.check))}/>
              <Row label="ACH/E-check" value={fmt(pv(drawer.achEcheck))}/>
              <Row label="Credit Card" value={fmt(pv(drawer.creditCard))}/>
              <Row label="Debit Card" value={fmt(pv(drawer.debitCard))}/>
              <Row label="Money Order" value={fmt(pv(drawer.moneyOrder))}/>
              <Row label="Reverse ATM" value={fmt(pv(drawer.reverseATM))}/>
              <Row label="MOU" value={fmt(pv(drawer.mou))}/>
              <Row label="TOTAL IN DRAWER" value={fmt(drTotal)} bold/>
            </Section>

            {/* Cash pickups */}
            {pickups.length>0 && (
              <Section title={`Cash Pickups (${pickups.length})`}>
                {pickups.map(p=><Row key={p.id} label={p.time} value={`−${fmt(p.amount)}`}/>)}
                <Row label="Total Removed" value={`−${fmt(pickTotal)}`} bold/>
              </Section>
            )}

            {/* Summary */}
            <Section title="Balancing Summary">
              <Row label="Total in Drawer" value={fmt(drTotal)}/>
              <Row label="Less Beginning Balance" value={`−${fmt(pv(beginVal))}`}/>
              <Row label="Net Drawer Total" value={fmt(drNet)} bold/>
              <Row label="System Total + Pickups" value={fmt(sysTotal+pickTotal)}/>
              <Row label="Discrepancy"
                value={hasDiff ? fmt(Math.abs(disc)) : "$0.00"}
                bold color={hasDiff?"#C62828":"#166534"}/>
              <Row label="Status"
                value={hasDiff ? "CLOSED WITH SUPERVISOR OVERRIDE" : "CLOSED — BALANCED"}
                bold color={hasDiff?"#C62828":"#166534"}/>
            </Section>

            <div style={{textAlign:"center",marginTop:16,fontSize:10,color:"#9CA3AF"}}>
              Report generated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

/* ─── Landing Page ─────────────────────────────────────────────────────────── */
function LandingPage() {
  /* Shared card shell — 264×190px, white, rounded, shadow, px:56 */
  const cardShell = {
    background:"#FFF", borderRadius:8, border:"1px solid #E0E0E0",
    width:264, height:190, cursor:"pointer", flexShrink:0,
    boxShadow:"1px 3px 6px 0px rgba(0,0,0,0.05)",
    display:"flex", alignItems:"center",
    paddingLeft:56, paddingRight:56,
    overflow:"hidden", position:"relative",
  };
  /* Shared inner column — 150.525px wide (264 - 2×56 - 1.475 slack), full height */
  const cardInner = (pt=0) => ({
    display:"flex", flexDirection:"column", height:"100%",
    alignItems:"center", justifyContent:"space-between",
    position:"relative", flexShrink:0, width:150.525,
    paddingTop:pt, paddingBottom:16,
  });
  /* Absolutely-positioned image fragment helper */
  const af = (t,r,b,l) => ({position:"absolute",top:t,right:r,bottom:b,left:l});
  /* Flex centering wrapper (for rotated vector pieces) */
  const fc = (t,r,b,l) => ({...af(t,r,b,l), display:"flex", alignItems:"center", justifyContent:"center"});
  /* Inner img that fills its parent absolutely */
  const fillImg = (src) => <img alt="" src={src} style={{position:"absolute",display:"block",maxWidth:"none",width:"100%",height:"100%"}}/>;

  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",background:"#F7F8FF",
      padding:"32px 36px",fontFamily:SANS,overflowY:"auto"}}>

      {/* ── Greeting row ── */}
      <div style={{display:"flex",gap:80,alignItems:"center",marginBottom:36}}>
        <div style={{display:"flex",flexDirection:"column",gap:8,width:318,flexShrink:0}}>
          <h1 style={{fontSize:32,fontWeight:700,color:"#111827",lineHeight:1.2}}>
            Good morning! John
          </h1>
          <p style={{fontSize:16,color:"#111827",lineHeight:"36px"}}>
            {"You've 1 "}
            <span style={{color:"#0060b5"}}>pending work</span>
            {" at this time."}
          </p>
        </div>
        <div style={{width:288,height:162,flexShrink:0,overflow:"hidden"}}>
          <img src={FA.coffeeTable} alt=""
            style={{width:"100%",height:"100%",objectFit:"cover",display:"block",pointerEvents:"none"}}/>
        </div>
      </div>

      {/* ── Action cards ── */}
      <div>
        <h2 style={{fontSize:24,fontWeight:700,color:"#111827",marginBottom:16,lineHeight:"20px"}}>
          What you want to do?
        </h2>
        <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>

          {/* ── Customer Search card — Figma 26:445 ── */}
          <div style={cardShell}>
            <div style={cardInner(0)}>
              {/* Illustration: 141.842px tall, overflows clipped container.
                  All children are absolute within this box (display:contents wrappers omitted). */}
              <div style={{height:141.842,overflow:"hidden",position:"relative",flexShrink:0,width:"100%"}}>
                {/* Document background */}
                <div style={af("14.48%","7.04%","51.72%",0)}>
                  {fillImg(FA.csRect1)}
                </div>
                <div style={af("72.12%","18%","10.15%","10.97%")}>
                  {fillImg(FA.csRect2)}
                </div>
                <div style={af("58.27%","11.21%","19.01%","4.18%")}>
                  {fillImg(FA.csRect3)}
                </div>
                {/* Card strip (rotated 9°) */}
                <div style={fc("18.91%","14.73%","37.23%","4.18%")}>
                  <div style={{flexShrink:0,height:44.537,transform:"rotate(9deg)",width:116.525}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      <div style={af("-1.12%","-0.39%","-1.07%","-0.34%")}>
                        <img alt="" src={FA.csPath} style={{display:"block",maxWidth:"none",width:"100%",height:"100%"}}/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Magnifying glass handle outer */}
                <div style={fc("60.44%","5.6%","8.08%","64.74%")}>
                  <div style={{flexShrink:0,height:47.362,transform:"rotate(-45deg)",width:15.787}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec1)}
                    </div>
                  </div>
                </div>
                {/* Magnifying glass handle inner */}
                <div style={fc("60.94%","6.07%","8.58%","65.21%")}>
                  <div style={{flexShrink:0,height:46.358,transform:"rotate(-45deg)",width:14.783}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      <div style={af("-1.08%","-3.4%","-1.08%","-3.4%")}>
                        <img alt="" src={FA.csVec2} style={{display:"block",maxWidth:"none",width:"100%",height:"100%"}}/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hinge 1 */}
                <div style={fc("58.62%","29.61%","33.93%","63.37%")}>
                  <div style={{flexShrink:0,height:7.861,transform:"rotate(-45deg)",width:7.075}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec3)}
                    </div>
                  </div>
                </div>
                {/* Hinge 2 */}
                <div style={fc("59.12%","30.08%","34.43%","63.84%")}>
                  <div style={{flexShrink:0,height:6.861,transform:"rotate(-45deg)",width:6.075}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      <div style={af("-7.29%","-8.23%","-7.29%","-8.23%")}>
                        <img alt="" src={FA.csVec4} style={{display:"block",maxWidth:"none",width:"100%",height:"100%"}}/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Handle stripe */}
                <div style={fc("63.72%","11.15%","18.65%","72.23%")}>
                  <div style={{flexShrink:0,height:33.804,transform:"rotate(-45deg)",width:1.572}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csRect4)}
                    </div>
                  </div>
                </div>
                {/* Lens outer (Exclusion circle) */}
                <div style={fc("4.75%","15.73%","19.12%","12.54%")}>
                  <div style={{flexShrink:0,height:76.353,transform:"rotate(-45deg)",width:76.353}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec5)}
                    </div>
                  </div>
                </div>
                {/* Lens inner (Exclusion circle) */}
                <div style={fc("4.25%","15.26%","18.62%","12.07%")}>
                  <div style={{flexShrink:0,height:77.357,transform:"rotate(-45deg)",width:77.357}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec6)}
                    </div>
                  </div>
                </div>
                {/* Sparkle top-left 1 */}
                <div style={fc("18.91%","74.97%","75.03%","19.32%")}>
                  <div style={{flexShrink:0,height:6.289,transform:"rotate(60deg)",width:6.289}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec7)}
                    </div>
                  </div>
                </div>
                {/* Sparkle top-left 2 */}
                <div style={fc("19.39%","75.42%","75.52%","19.78%")}>
                  <div style={{flexShrink:0,height:5.289,transform:"rotate(60deg)",width:5.289}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      <div style={af("-9.45%","-9.45%","-9.45%","-9.45%")}>
                        <img alt="" src={FA.csVec8} style={{display:"block",maxWidth:"none",width:"100%",height:"100%"}}/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sparkle bottom 1 */}
                <div style={fc("72.8%","67.41%","23.03%","29.84%")}>
                  <div style={{flexShrink:0,height:4.143,transform:"rotate(90deg)",width:5.918}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec9)}
                    </div>
                  </div>
                </div>
                {/* Sparkle bottom 2 */}
                <div style={fc("72.12%","66.84%","22.34%","29.51%")}>
                  <div style={{flexShrink:0,height:5.503,transform:"rotate(90deg)",width:7.861}}>
                    <div style={{position:"relative",width:"100%",height:"100%"}}>
                      {fillImg(FA.csVec10)}
                    </div>
                  </div>
                </div>
                {/* Pin / pointer 1 */}
                <div style={af("62.69%","14.87%","32.87%","80.95%")}>
                  {fillImg(FA.csVec11)}
                </div>
                {/* Pin / pointer 2 */}
                <div style={af("63.05%","15.2%","33.22%","81.28%")}>
                  <div style={af("-9.45%","-9.45%","-9.45%","-9.45%")}>
                    <img alt="" src={FA.csVec12} style={{display:"block",maxWidth:"none",width:"100%",height:"100%"}}/>
                  </div>
                </div>
              </div>
              <p style={{fontSize:16,fontFamily:SANS,color:"#000",textAlign:"center",width:"100%"}}>
                Customer Search
              </p>
            </div>
          </div>

          {/* ── Scan QR code card — Figma 26:445 ── */}
          <div style={cardShell}>
            <div style={cardInner(16)}>
              {/* QR scan icon: 104×103px container clips a larger composed asset */}
              <div style={{height:103,overflow:"hidden",position:"relative",flexShrink:0,width:104}}>
                <div style={{position:"absolute",top:0,right:"-95.19%",bottom:"-57.28%",left:0}}>
                  {fillImg(FA.scanIcon)}
                </div>
              </div>
              <p style={{fontSize:16,fontFamily:SANS,color:"#000",textAlign:"center",minWidth:"100%"}}>
                Scan a QR code
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─── Status Badge ─────────────────────────────────────────────────────────── */
function StatusBadge({phase}) {
  const config = {
    active:  {label:"Open",     bg:"#ECFDF5",color:"#065F46",dot:"#10B981"},
    closing: {label:"Counting", bg:"#FFFBEB",color:"#92400E",dot:"#F59E0B"},
    closed:  {label:"Closed",   bg:"#F3E5F5",color:"#6A1B9A",dot:"#8E24AA"},
  }[phase] || {};
  return (
    <div style={{display:"flex",alignItems:"center",gap:5,
      background:config.bg,padding:"3px 10px 3px 7px",borderRadius:20,
      border:`1px solid ${config.dot}22`}}>
      <div style={{width:6,height:6,borderRadius:"50%",background:config.dot,
        boxShadow:`0 0 0 2px ${config.dot}33`}}/>
      <span style={{fontSize:11,fontWeight:700,color:config.color}}>{config.label}</span>
    </div>
  );
}

/* ─── Overlay ──────────────────────────────────────────────────────────────── */
function Overlay({children}) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(10,20,40,0.65)",
      backdropFilter:"blur(3px)",display:"flex",alignItems:"center",
      justifyContent:"center",zIndex:1000}}>
      {children}
    </div>
  );
}

/* ─── DrCell ───────────────────────────────────────────────────────────────── */
function DrCell({label, field, value, editable, onChange, onBlur}) {
  return (
    <div style={{
      display:"flex", justifyContent:"space-between", alignItems:"center",
      height:ROW, padding:"0 16px",
      background:C.surface,
      borderBottom:`1px solid ${C.border}`,
    }}>
      <span style={{fontSize:12, color: editable ? C.inkMid : C.inkFaint}}>{label}</span>
      <input
        className="dr-input"
        type="text"
        value={value ?? ""}
        disabled={!editable}
        onChange={e => onChange(field, e.target.value)}
        onBlur={() => onBlur(field)}
        placeholder="0.00"
        style={{
          width:108, textAlign:"right",
          border:`1.5px solid ${editable ? C.borderMid : "transparent"}`,
          borderRadius:5, padding:"4px 8px",
          fontSize:13, fontFamily:SANS,
          background: editable ? "#FFF" : "transparent",
          color: editable ? C.ink : C.inkFaint,
          cursor: editable ? "text" : "default",
          transition:"border-color .15s, box-shadow .15s",
        }}
      />
    </div>
  );
}

/* ─── Banner ───────────────────────────────────────────────────────────────── */
function Banner({bg,border,color,icon,children}) {
  return (
    <div style={{background:bg,border:`1px solid ${border}`,borderRadius:8,
      padding:"10px 16px",display:"flex",alignItems:"center",gap:10}}>
      <span style={{color,flexShrink:0}}>{icon}</span>
      <span style={{fontSize:12,color:"#374151"}}>{children}</span>
    </div>
  );
}

/* ─── Shared form styles ───────────────────────────────────────────────────── */
const labelSt = {
  fontSize:11, fontWeight:700, color:"#6B7280",
  textTransform:"uppercase", letterSpacing:"0.06em",
  display:"block", marginBottom:6,
};
const fieldSt = {
  width:"100%", padding:"9px 12px",
  border:"1.5px solid #D1D5DB", borderRadius:7,
  fontSize:13, outline:"none", background:"#FFF",
  fontFamily:SANS, color:"#111827", boxSizing:"border-box",
};
