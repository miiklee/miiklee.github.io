// New background colour
#define TFT_BROWN 0x38E0

// Pause in milliseconds between screens, change to 0 to time font rendering
#define WAIT 1000

#include <TFT_eSPI.h> // Graphics and font library for ST7735 driver chip
#include <SPI.h>

TFT_eSPI tft = TFT_eSPI();  // Invoke library, pins defined in User_Setup.h


void setup(void){

tft.init();
tft.setRotation(1);

}

void loop(){
int x = rand() % 100;
String names [] = {"Die Harder", 
"Matt",
"Bighead Burton",
"Fingers",
"Homeskillet",
"Big Baby Burton",
"Burt the Billowy Bear",
"Curtis",
"Blackstar",
"Chocolate Columbo",
"Magic Head",
"Spellmaster",
"The SuperSniffer",
"Slicks",
"Peter Panic",
"Gus T.T. Showbiz",
"Ovaltine Jenkins",
"Schoonie U-Turn Singleton",
"Vernest Lambert Watkins",
"Bud (from The Cosby Show)",
"Nick Nack",
"Bruton Gaster",
"Lavender Gooms",
"Lemongrass Gogulope",
"Squirts MacIntosh",
"Weepy Boy Santos",
"Stewart Lee",
"Mc (clicks) Tock",
"François",
"Galileo Humpkins",
"Gus Silly-Pants Jackson",
"Fearless Guster",
"Shmuel Cohen",
"Methuselah Honeysuckle",
"Shutterfly Simmons",
"Paddy Simcox",
"Chesterfield McMilla",
"Felicia Fancybottom",
"Tan",
"Ernesto Agapito Garces con y a de Abelar",
"Longbranch Pennywhistle",
"Scrooge Jones",
"D’Andre Pride",
"Hummingbird Saltalamacchia",
"Wally Ali",
"Art Vandelay",
"Dequan Smallpox Randolph",
"Trapezius Milkington",
"Sterling Cooper",
"Burton Oil Can Guster",
"Hollabackatcha",
"Jazz Hands",
"Gus Brown",
"John Slade",
"Detective Miles",
"Greg",
"Doughnut Holschtein",
"Ron Davis",
"Bob Adams",
"Harry Munroe",
"Rich Fingerland",
"Black Magic",
"Cheswick",
"Shawn, no relation",
"Magic Eight Ball Head",
"Shaggy Buddy Snap",
"Ghee Buttersnaps", "The Heater", "The Vault of Secrets",
"Clementine Woolysocks",
"Pinky Guscatero",
"Guts",
"Ol’ Ironside",
"Old Iron Stomach",
"John Jacob Jingley-Schmidt",
"Santonio Holmes",
"Deon Richmond",
"Gurton Buster",
"Chaz Bono",
"Chocolate Einstein",
"MC ClapYoHandz",
"Sher-Black-Lock",
"Whittlebury",
"G-Force",
"Mellowrush",
"Crankshaft",
"Sammy",
"Joey Bishop",
"Slick Fingers",
"Imhotep",
"Control Alt Delete",
"The Jackal",
"Adewale Akinnuoye-Agbaje",
"Donut Holestein",
"Yasmine Bleeth",
"Lodge Blackman",
"Jet Blackness",
"Mission Face",
"Radio Star (Video will kill him)",
"Gus Jay Gubta", 
"Reginald G-String", "Crowd Pleaser",
"Fingers",
"Cinderella"};
String random_name = names[x];

  tft.setTextSize(2);
  tft.fillScreen(TFT_BLACK);
  tft.setTextColor(TFT_GREEN, TFT_BLACK);

tft.drawString("I'm Shawn Spencer,", 0, 0, 2);
tft.drawString("this is my partner", 0, 32, 2);
tft.setTextColor(TFT_WHITE, TFT_BLACK);
tft.drawString(random_name, 0, 64, 2);
delay(WAIT);

}
