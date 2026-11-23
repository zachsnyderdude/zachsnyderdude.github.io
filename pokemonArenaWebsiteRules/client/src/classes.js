// Tailwind class strings that get reused across the site.
// This replaces the old styles.css. Each name below matches the CSS class it came from.

// ---------- Text (bodytext, bodytext2-7, bodytextsup, bodytextsup2) ----------
const look =
  "font-['Trebuchet_MS',Arial,sans-serif] text-white [text-shadow:2px_2px_5px_black] [-webkit-text-stroke:0.25px_black]";

export const bodyText = `${look} text-[clamp(16px,2vw,21px)] text-center w-[min(60%,850px)] max-[1100px]:w-[70%] max-[850px]:w-[90%] mx-auto my-5`;
export const bodyText2 = `${look} text-[clamp(16px,2vw,21px)] font-semibold mb-[5px]`;
export const bodyText3 = `${look} text-[clamp(16px,2vw,19px)] font-semibold mb-[5px] px-[5%]`;
export const bodyText4 = `${look} text-[clamp(16px,2vw,20px)] font-semibold mb-[5px] ml-2.5`; // also bodytext5 and bodytext7
export const bodyText6 = `${look} text-[clamp(16px,2vw,19px)] font-semibold mb-[5px] ml-2.5`;
export const bodyTextSup = `${look} text-[clamp(16px,2vw,22px)] font-semibold mb-[5px]`;
export const bodyTextSup2 = `${look} text-[clamp(16px,2vw,20px)] font-semibold mb-[5px]`;

// ---------- Images ----------
export const header = "block mx-auto my-5 max-w-[90%]"; // .headers
export const smallHr = "mx-auto my-4 w-1/5 border-t-[3px] border-black"; // .smallHr

// ---------- Lists ----------
export const list1 = "list-disc list-inside text-left pl-10 mb-4";
export const list2 = "list-disc list-inside text-left pl-10 mb-0";
export const list3 = "list-disc pl-10 my-4"; // plain <ul> in the EP section
export const olist = "list-decimal list-inside text-left pl-10 mb-4";

export const listContainer =
  "flex justify-center items-start gap-5 p-[3%] max-[850px]:flex-col max-[850px]:items-center";
export const listColumn = "text-left";
export const divider = "w-0.5 self-stretch bg-black max-[850px]:hidden";

// ---------- Panels (border + dark overlay + background picture) ----------
export const panel = "border-[3px] border-black rounded-[15px]";

export const section1 =
  "w-[min(60%,850px)] max-[1100px]:w-[70%] max-[850px]:w-[90%] mx-auto my-5 pt-[50px] pb-[70px] bg-[url(/images/red.png)] bg-contain bg-[position:center_100%] bg-no-repeat";
export const section2 = `${panel} w-[min(45%,600px)] max-[850px]:w-[90%] mx-auto my-5 text-center p-[1%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/pikachu3.jpg)] bg-cover bg-center`;
export const section3 = `${panel} w-[min(65%,1000px)] max-[850px]:w-[90%] mx-auto my-5 text-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/greninja.jpg)] bg-cover bg-center bg-no-repeat`;
export const section4 = `${panel} p-[3%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/leafeon.jpg)] bg-cover bg-center`;
export const section5 = `${panel} p-[3%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/umbreon.jpg)] bg-cover bg-center`;
export const section6 = `${panel} mx-auto my-5 p-[3%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/garchomp3.jpg)] bg-cover bg-center`;
export const section7 = `${panel} w-3/5 mx-auto my-5 p-[1%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/bulbasaur2.jpg)] bg-cover bg-center bg-no-repeat`;
export const section8 = `${panel} w-3/5 mx-auto my-5 p-[1%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/lucario.jpg)] bg-cover bg-[position:0%_20%]`;
export const section9 = `${panel} w-3/5 mx-auto my-5 p-[3%] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/images/pokeball.png),url(/images/ninetales.jpg)] bg-[length:cover,200px,cover] bg-no-repeat bg-[position:center,80%_80%,0%_20%]`;

// ---------- Image + text side by side (Charizard / Gengar layouts) ----------
export const charizardLayout =
  "flex items-center justify-center gap-2.5 w-[min(65%,1000px)] mx-auto max-[850px]:flex-col max-[850px]:w-[90%]";
export const gengarLayout =
  "flex items-center justify-center gap-2.5 w-[min(70%,1000px)] mx-auto max-[850px]:flex-col max-[850px]:w-[90%]";
