myData = [
[42.340075,-71.0895367, 'Northeastern, Boston, MA 02115, USA'],
[38.2113643,-85.7470011, 'Bradley Ave, Louisville, KY, USA'],
[32.778949,35.019648, 'Technion/ Sports Building, Haifa'],
[18.4574518,73.8837999, 'Vishwakarma Institutes Play Ground, Yashodhan Society, Kapil Nagar, Kondhwa Budrukh, Vishwakarma, Maharashtra 411048, India'],
[42.4036847,-71.120482, 'South Hall Tufts University, 30 Lower Campus Rd, Somerville, MA 02144, USA'],
[-37.914517,145.1303881, 'Monash College, Wellington Rd, Clayton VIC 3168, Australia'],
[53.2948229,69.4047872, 'Kokshetau 020000, Kazakhstan'],
[40.7127837,-74.0059413, 'New York, NY, USA'],
[52.2869741,104.3050183, 'Irkutsk, Irkutsk Oblast, Russia'],
[31.1790057,121.4219573, 'Shanghai Sixth Peoples Hospital Affiliated to Shanghai Jiao Tong University In-patient Department, Xuhui, Shanghai, China, 200231'],
[8.5080482,4.5849938, 'Kwara State University, Ilorin, Nigeria'],
[-38.3105571,146.4292232, 'Monash University Gippsland Student Lounge, 7N Mary Grant Bruce Dr, Churchill VIC 3842, Australia'],
[-34.9221963,138.5922272, 'Yungondi Building, North Terrace, Adelaide SA 5000, Australia'],
[47.80949,13.05501, 'Salzburg, Austria'],
[27.7518284,-82.6267345, 'St Petersburg, FL, USA'],
[54.7903112,32.0503663, 'Smolensk, Smolensk Oblast, Russia'],
[40.4469796,-3.7278167, 'Av. Complutense, Madrid, Madrid, Spain'],
[24.4325423,54.6174842, 'Masdar Institute Bus Station - Abu Dhabi - United Arab Emirates'],
[51.5266171,-0.1260773, 'University Of London, 1-11 Cartwright Gardens, Kings Cross, London WC1H 9EB, UK'],
[39.5069974,-84.745231, 'Oxford, OH 45056, USA'],
[59.393847,24.6650872, 'Tallinn University of Technology Stadium, 12616 Tallinn, Estonia'],
[58.3733281,26.7265098, 'University of Tartu Physics Building, 50103 Tartu, Estonia'],
[33.6778327,-117.8151285, 'Padua, Irvine, CA 92614, USA'],
[18.5544976,73.8257325, 'Pune University, Ganeshkhind, Pune, Maharashtra, India'],
[37.8764984,-122.2804342, 'California St, Berkeley, CA, USA'],
[43.0447617,-89.4245627, 'University of Wisconsin-Madison Arboretum, 1207 Seminole Hwy, Madison, WI 53711, USA'],
[39.9304437,116.3076925, 'Capital Normal University, Haidian, Beijing, China, 100037'],
[37.983917,23.7293599, 'Athens, Greece'],
[10.7295115,79.0196067, 'Sastra University Road, Tirumalaisamudram, Tamil Nadu 613401, India'],
[21.1470404,79.0397862, 'Nagpur University Campus, Nagpur, Maharashtra 440033, India'],
[41.9197689,-91.649501, 'Duke St SW, Cedar Rapids, IA 52404, USA'],
[37.7634766,-122.4390923, 'States St, San Francisco, CA 94114, USA'],
[30.2850284,-97.7335226, 'University of Texas at Austin, Austin, TX, USA'],
[61.6858074,27.2734876, '50100 Mikkeli, Finland'],
[32.4204729,-85.0323718, 'H. Curtis Pitts Hall, 3413 S Seale Rd, Phenix City, AL 36869, USA'],
[41.557583,-8.397568, 'Universidade do Minho, 4710 Braga, Portugal'],
[-33.0444219,-71.6066334, 'Pontificia Universidad Catolica De Valparaiso - Gimpert, Valparaíso, Valparaíso, Región de Valparaíso, Chile'],
[40.6331249,-89.3985283, 'Illinois, USA'],
[30.0199119,31.5001527, 'AUC Library, Cairo Governorate 11835, Egypt'],
[55.1170375,36.5970818, 'Obninsk, Kaluga Oblast, Russia'],
[31.9026385,34.8085102, 'Weizmann Institute of Science, Herzl St 234, Rehovot, 76100, Israel'],
[31.767879,-106.440736, 'Washington, El Paso, TX 79905, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[43.8562586,18.4130763, 'Sarajevo, Bosnia and Herzegovina'],
[4.602551,-74.066627, 'Consultorio Jurídico Universidad de Los Andes, Cl. 19, Bogotá, Bogotá, Colombia'],
[40.0082221,-105.2591119, 'Colorado Ave & University Heights, Boulder, CO 80302, USA'],
[53.4129429,59.0016233, 'Magnitogorsk, Chelyabinsk Oblast, Russia'],
[46.4062583,8.9040484, 'Usc, 6749, Switzerland'],
[52.124815,-106.589195, 'Simon Fraser Crescent, Saskatoon, SK S7H, Canada'],
[34.0247033,-81.0131844, 'New York Ave, Columbia, SC 29204, USA'],
[38.1999105,-85.7659121, 'Southern Pkwy, Louisville, KY, USA'],
[14.606319,121.0977669, 'Warsaw, Pasig, Metro Manila, Philippines'],
[52.2296756,21.0122287, 'Warsaw, Poland'],
[-40.900557,174.885971, 'New Zealand'],
[-40.3850866,175.6140639, 'Massey University, Palmerston North, New Zealand'],
[35.8715218,-97.5672431, 'Noble Ave, Guthrie, OK 73044, USA'],
[45.1847248,9.1582069, 'Pavia PV, Italy'],
[38.6598662,-90.3123536, 'Columbia Ave, University City, MO 63130, USA'],
[50.0755381,14.4378005, 'Prague, Czech Republic'],
[41.8313852,-87.6272216, 'Iit Tower, 10 W 35th St, Chicago, IL 60616, USA'],
[40.7933949,-77.8600012, 'State College, PA, USA'],
[33.4249307,-111.8884532, 'Utah, Tempe, AZ 85281, USA'],
[39.4813156,-0.3505, 'Universitat Politècnica, 46022 Valencia, Valencia, Spain'],
[33.6140008,-117.8440006, 'Vienna, Newport Beach, CA 92660, USA'],
[44.4267674,26.1025384, 'Bucharest, Romania'],
[41.2692748,-72.7552478, 'University of New Haven, Branford Trolley Trail, Branford, CT 06405, USA'],
[47.761605,-122.19303, 'UW Bothell & Cascadia College, Bothell, WA 98011, USA'],
[38.6679152,-90.3322259, 'Drexel Dr, University City, MO 63130, USA'],
[32.083852,34.79197, 'Helsinki St, Tel Aviv-Yafo, Israel'],
[42.2783714,-83.7371794, 'University of Michigan, Ann Arbor, MI, USA'],
[55.8304307,49.0660806, 'Kazan, Tatarstan, Russia'],
[12.0263438,79.8492812, 'Pondicherry University, Kalapet, Puducherry 605014, India'],
[31.204638,121.5853839, 'Nanyang Technological University Shanghai Office, Pudong, Shanghai, China, 201203'],
[35.712815,135.9711705, 'Nyu, Mihama, Mikata District, Fukui Prefecture 919-1201, Japan'],
[47.5584793,21.620443, 'Debrecen, Debrecen University-Botanical Garden, 4032 Hungary'],
[34.1515641,-117.3354402, 'N State St, San Bernardino, CA, USA'],
[50.4501,30.5234, 'Kiev, Ukraine'],
[46.4618977,-80.9664534, 'University Laurentian, Copper Cliff, ON P0M 1N0, Canada'],
[55.755826,37.6173, 'Moscow, Russia'],
[52.2016671,0.1177882, 'University Of Cambridge, Cambridge, Cambridge, Cambridgeshire CB2, UK'],
[35.9525664,51.490619, 'Payame Noor, Meygun, Tehran, Iran'],
[46.5189865,6.5676007, 'EPFL, 1015 Lausanne, Switzerland'],
[45.2671352,19.8335496, 'Novi Sad, Serbia'],
[57.6954209,11.9853213, 'Gothenburg University Library, Renströmsgatan 4, 412 55 Göteborg, Sweden'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[22.4828735,88.394867, 'Jadavpur University Lake, Sahid Smirity Colony, Pancha Sayar, Kolkata, West Bengal 700094'],
[26.1529683,91.6639235, 'Gauhati University, Jalukbari, Guwahati, Assam, India'],
[-34.4414891,-58.7595663, 'Universidad de Buenos Aires, Manuel Alberti, Buenos Aires, Argentina'],
[44.4061457,8.9682634, 'Università degli studi di Genova - Dipartimento di Medicina Sperimentale (DIMES), 16143 Genova, Italy'],
[4.864758,-74.050918, 'Chía, Chía, Cundinamarca, Colombia'],
[43.4553461,-76.5104973, 'Oswego, NY, USA'],
[17.4930263,78.3906218, 'Jawaharlal Nehru Technological University, Kukatpally, Hyderabad, Telangana, India'],
[50.503887,4.469936, 'Belgium'],
[42.3518484,-71.1107301, 'Boston University Bridge, Massachusetts, USA'],
[64.9078809,-147.7117155, 'Manchester Loop, Fairbanks, AK 99712, USA'],
[51.1877226,6.7938734, 'Fachhochschule Düsseldorf, 40225 Düsseldorf, Germany'],
[28.6379654,-106.094602, 'Simon Bolívar, Chihuahua, Chih., Mexico'],
[33.7462838,-118.0087443, 'Westminster Mall, Westminster, CA 92683, USA'],
[31.269181,120.737606, 'Soochow University Students Apartment, Song Tao Jie, Wuzhong Qu, Suzhou Shi, Jiangsu Sheng, China, 215123'],
[39.174335,-86.505469, 'Hilltop Garden and Nature Center at Indiana University, 2367 E 10th St, Bloomington, IN 47408, USA'],
[18.9331831,72.8341894, 'KP Shethi Building, Janmabhoomi Marg, Kala Ghoda, Fort, Mumbai, Maharashtra 400001, India'],
[42.3077541,-83.0182189, 'Ottawa St, Windsor, ON, Canada'],
[28.3580163,75.5887989, 'BITS, Pilani, Rajasthan 333031, India'],
[38.0269358,-84.5059723, 'University Dr, Lexington, KY, USA'],
[25.25968,82.989115, 'IIT Gymkhana, RR 11, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221001, India'],
[50.862282,-2.4998561, 'E M Mitchell & Sons, Hermitage, Dorchester, Dorset DT2 7BB, UK']
];
