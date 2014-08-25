/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Middle-Side-Dogs',
            type:'image',
            rect:['82px','-50px','386px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Middle-Side-Dogs.png",'0px','0px']
         },
         {
            id:'Bottom-Dog-Row',
            type:'image',
            rect:['82px','-50px','386px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Bottom-Dog-Row.png",'0px','0px']
         },
         {
            id:'Top-Dog-Row',
            type:'image',
            rect:['87px','-50px','386px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Top-Dog-Row.png",'0px','0px']
         },
         {
            id:'Middle-Dogs-Middle',
            type:'image',
            rect:['82px','-49px','386px','500px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Middle-Dogs-Middle.png",'0px','0px']
         },
         {
            id:'Group',
            type:'group',
            rect:['640','22','234','166','auto','auto'],
            c:[
            {
               id:'Text2',
               type:'text',
               rect:['17px','11px','201px','145px','auto','auto'],
               text:"Our walks have gone from frustrating excursions to enjoyable and fun bonding experiences...",
               align:"left",
               font:['Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[[],[],['-15','6']]
            },
            {
               id:'ReadMoreBlue',
               type:'image',
               rect:['107px','121px','100px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"ReadMoreBlue.png",'0px','0px']
            }]
         },
         {
            id:'Group3',
            type:'group',
            rect:['645','221','234','215','auto','auto'],
            c:[
            {
               id:'Text2Copy',
               type:'text',
               rect:['17px','11px','201px','145px','auto','auto'],
               text:"Thank you, Zaira and Jose, who have embraced [my dog's] craziness for the past 7 months, and have tolerated her incessant need to be the CGC class clown…",
               align:"left",
               font:['Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[[],[],['-15','6']]
            },
            {
               id:'ReadMoreBlueCopy',
               type:'image',
               rect:['112px','182px','100px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"ReadMoreBlue.png",'0px','0px']
            }]
         },
         {
            id:'Text2Copy2',
            type:'text',
            rect:['58px','34px','201px','145px','auto','auto'],
            text:"A few friends even commented on how more mellow [my dog] seemed!",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","normal","none","normal"],
            transform:[[],[],['15','-6']]
         },
         {
            id:'ReadMoreBlueCopy2',
            type:'image',
            rect:['69px','151px','100px','33px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ReadMoreBlue.png",'0px','0px']
         },
         {
            id:'Group2Copy',
            type:'group',
            rect:['41','206px','234','166','auto','auto'],
            c:[
            {
               id:'Text2Copy3',
               type:'text',
               rect:['17px','11px','201px','145px','auto','auto'],
               text:"Thank you, [Leap Dog Training] for all your hard work with Sammy so far!  He is really coming along :)",
               align:"left",
               font:['Arial, Helvetica, sans-serif',18,"rgba(0,0,0,1)","normal","none","normal"],
               transform:[[],[],['15','-6']]
            },
            {
               id:'ReadMoreBlueCopy3',
               type:'image',
               rect:['28px','128px','100px','33px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"ReadMoreBlue.png",'0px','0px']
            }]
         },
         {
            id:'Sticker-and-background',
            type:'image',
            rect:['239px','-13px','422px','422px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Sticker-and-background.png','0px','0px']
         },
         {
            id:'lets-get-started4',
            type:'image',
            rect:['369px','295px','165px','47px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"lets-get-started4.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Middle-Dogs-Middle}": [
            ["style", "top", '-37px'],
            ["style", "opacity", '0'],
            ["style", "left", '255px'],
            ["style", "width", '385px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '11px'],
            ["transform", "skewY", '6deg'],
            ["transform", "skewX", '-15deg'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "font-size", '18px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '11px'],
            ["transform", "skewY", '-6deg'],
            ["transform", "skewX", '15deg'],
            ["style", "opacity", '1'],
            ["style", "left", '17px'],
            ["style", "font-size", '18px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '49px'],
            ["transform", "skewY", '-6deg'],
            ["transform", "skewX", '15deg'],
            ["style", "opacity", '0'],
            ["style", "left", '58px'],
            ["style", "font-size", '18px']
         ],
         "${_ReadMoreBlueCopy}": [
            ["style", "top", '182px'],
            ["style", "opacity", '1'],
            ["style", "left", '112px']
         ],
         "${_Middle-Side-Dogs}": [
            ["style", "top", '-35px'],
            ["style", "opacity", '0'],
            ["style", "left", '254px']
         ],
         "${_Group3}": [
            ["style", "opacity", '0']
         ],
         "${_ReadMoreBlueCopy3}": [
            ["style", "top", '128px'],
            ["style", "opacity", '1'],
            ["style", "left", '28px']
         ],
         "${_lets-get-started4}": [
            ["style", "top", '295px'],
            ["style", "height", '47px'],
            ["style", "opacity", '0'],
            ["style", "left", '369px'],
            ["style", "width", '165px']
         ],
         "${_Top-Dog-Row}": [
            ["style", "top", '-34px'],
            ["style", "opacity", '0'],
            ["style", "left", '259px']
         ],
         "${_Group}": [
            ["style", "top", '37px'],
            ["style", "opacity", '0']
         ],
         "${_Bottom-Dog-Row}": [
            ["style", "top", '-35px'],
            ["style", "opacity", '0'],
            ["style", "left", '254px']
         ],
         "${_Sticker-and-background}": [
            ["style", "top", '2px'],
            ["transform", "scaleY", '0.06'],
            ["style", "height", '422px'],
            ["transform", "scaleX", '0.06'],
            ["style", "opacity", '0'],
            ["style", "left", '239px'],
            ["style", "width", '422px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(177,167,197,0.00)'],
            ["style", "width", '900px'],
            ["style", "height", '550px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Group2Copy}": [
            ["style", "top", '236px'],
            ["style", "opacity", '0'],
            ["style", "left", '16px']
         ],
         "${_ReadMoreBlue}": [
            ["style", "top", '121px'],
            ["style", "opacity", '0'],
            ["style", "left", '107px']
         ],
         "${_Text2}": [
            ["style", "top", '11px'],
            ["transform", "skewY", '6deg'],
            ["transform", "skewX", '-15deg'],
            ["style", "opacity", '0'],
            ["style", "left", '17px'],
            ["style", "font-size", '18px']
         ],
         "${_ReadMoreBlueCopy2}": [
            ["style", "top", '166px'],
            ["style", "opacity", '0'],
            ["style", "left", '69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5500,
         autoPlay: true,
         timeline: [
            { id: "eid113", tween: [ "style", "${_Text2Copy2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_Text2Copy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 1000 },
            { id: "eid197", tween: [ "style", "${_Top-Dog-Row}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "style", "${_Top-Dog-Row}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0 },
            { id: "eid183", tween: [ "style", "${_Middle-Side-Dogs}", "top", '-35px', { fromValue: '-35px'}], position: 5000, duration: 0 },
            { id: "eid201", tween: [ "style", "${_Middle-Side-Dogs}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "style", "${_Middle-Side-Dogs}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0 },
            { id: "eid218", tween: [ "style", "${_ReadMoreBlueCopy}", "opacity", '1', { fromValue: '1'}], position: 5000, duration: 0 },
            { id: "eid204", tween: [ "style", "${_lets-get-started4}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 500 },
            { id: "eid185", tween: [ "style", "${_Text2Copy2}", "top", '49px', { fromValue: '49px'}], position: 5000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Group}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1500 },
            { id: "eid193", tween: [ "style", "${_Group2Copy}", "left", '16px', { fromValue: '16px'}], position: 5000, duration: 0 },
            { id: "eid195", tween: [ "style", "${_Middle-Dogs-Middle}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "style", "${_Middle-Dogs-Middle}", "opacity", '0', { fromValue: '0'}], position: 2500, duration: 0 },
            { id: "eid194", tween: [ "style", "${_Group2Copy}", "top", '236px', { fromValue: '236px'}], position: 5000, duration: 0 },
            { id: "eid167", tween: [ "transform", "${_Sticker-and-background}", "scaleY", '1', { fromValue: '0.06'}], position: 0, duration: 5000 },
            { id: "eid189", tween: [ "style", "${_Sticker-and-background}", "top", '2px', { fromValue: '2px'}], position: 5000, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1500 },
            { id: "eid187", tween: [ "style", "${_Middle-Dogs-Middle}", "top", '-37px', { fromValue: '-37px'}], position: 5000, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Group2Copy}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Group2Copy}", "opacity", '0', { fromValue: '0'}], position: 1500, duration: 0 },
            { id: "eid127", tween: [ "style", "${_Group2Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 1000 },
            { id: "eid199", tween: [ "style", "${_Bottom-Dog-Row}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid200", tween: [ "style", "${_Bottom-Dog-Row}", "opacity", '0', { fromValue: '0'}], position: 5000, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Middle-Side-Dogs}", "left", '254px', { fromValue: '254px'}], position: 5000, duration: 0 },
            { id: "eid107", tween: [ "style", "${_Bottom-Dog-Row}", "left", '254px', { fromValue: '254px'}], position: 5000, duration: 0 },
            { id: "eid186", tween: [ "style", "${_Top-Dog-Row}", "top", '-34px', { fromValue: '-34px'}], position: 5000, duration: 0 },
            { id: "eid105", tween: [ "style", "${_Top-Dog-Row}", "left", '259px', { fromValue: '259px'}], position: 5000, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Middle-Dogs-Middle}", "left", '255px', { fromValue: '255px'}], position: 5000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Sticker-and-background}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 5000 },
            { id: "eid220", tween: [ "style", "${_Group3}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1500 },
            { id: "eid184", tween: [ "style", "${_Group}", "top", '37px', { fromValue: '37px'}], position: 5000, duration: 0 },
            { id: "eid188", tween: [ "style", "${_Bottom-Dog-Row}", "top", '-35px', { fromValue: '-35px'}], position: 5000, duration: 0 },
            { id: "eid178", tween: [ "style", "${_ReadMoreBlueCopy2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid180", tween: [ "style", "${_ReadMoreBlueCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 1000 },
            { id: "eid181", tween: [ "style", "${_ReadMoreBlueCopy2}", "top", '166px', { fromValue: '166px'}], position: 5000, duration: 0 },
            { id: "eid166", tween: [ "transform", "${_Sticker-and-background}", "scaleX", '1', { fromValue: '0.06'}], position: 0, duration: 5000 },
            { id: "eid112", tween: [ "style", "${_ReadMoreBlue}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-16015802");
