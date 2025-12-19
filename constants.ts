
import { Helpline, CityData, StateData } from './types';

export const NATIONAL_HELPLINES: Helpline[] = [
  { id: '1', name: 'National Emergency', number: '112', category: 'Emergency', description: 'All-in-one emergency number' },
  { id: '2', name: 'Police', number: '100', category: 'Emergency' },
  { id: '3', name: 'Fire Brigade', number: '101', category: 'Emergency' },
  { id: '4', name: 'Ambulance', number: '108', category: 'Emergency', description: 'Primary health emergency response' },
  { id: '4b', name: 'Ambulance (Alternative)', number: '102', category: 'Emergency' },
  { id: '5', name: 'Disaster Management', number: '108', category: 'Emergency' },
  { id: '6', name: 'Women Helpline', number: '181', category: 'Social' },
  { id: '7', name: 'Women Emergency', number: '1091', category: 'Social' },
  { id: '8', name: 'Child Helpline', number: '1098', category: 'Social' },
  { id: '9', name: 'Senior Citizen Helpline', number: '14567', category: 'Social' },
  { id: '10', name: 'Mental Health (Tele-MANAS)', number: '14416', category: 'Emergency', description: 'Toll-free 1-800-891-4416' },
  { id: '11', name: 'Road Accident Emergency', number: '1073', category: 'Emergency' },
  { id: '12', name: 'Railway Emergency', number: '139', category: 'Utility' },
  { id: '13', name: 'Cyber Crime Helpline', number: '1930', category: 'Emergency', description: 'National cyber fraud reporting' },
  { id: '14', name: 'Anti Corruption', number: '1064', category: 'Social' },
  { id: '15', name: 'LPG Gas Emergency', number: '1906', category: 'Utility' },
  { id: '16', name: 'Electricity Complaint', number: '1912', category: 'Utility' },
  { id: '17', name: 'Water Supply Complaint', number: '1916', category: 'Utility' },
];

export const CITY_DATA: CityData[] = [
  {
    name: 'Delhi', state: 'Delhi NCR',
    numbers: { 'Police': '100', 'Women Helpline': '1091', 'Ambulance': '102 / 108', 'Fire': '101', 'Child Helpline': '1098', 'Cyber Crime': '1930' }
  },
  {
    name: 'Mumbai', state: 'Maharashtra',
    numbers: { 'Police': '100', 'Women Helpline': '103', 'Ambulance': '108', 'Fire': '101', 'Disaster': '108', 'Child Helpline': '1098' }
  },
  {
    name: 'Bengaluru', state: 'Karnataka',
    numbers: { 'Police': '100', 'Women Helpline': '181', 'Ambulance': '108', 'Fire': '101', 'Child Helpline': '1098', 'Cyber Crime': '1930' }
  },
  {
    name: 'Chennai', state: 'Tamil Nadu',
    numbers: { 'Police': '100', 'Women Helpline': '1091', 'Ambulance': '108', 'Fire': '101', 'Child Helpline': '1098' }
  },
  {
    name: 'Kolkata', state: 'West Bengal',
    numbers: { 'Police': '100', 'Women Helpline': '1091', 'Ambulance': '108', 'Fire': '101', 'Disaster': '1070', 'Child Helpline': '1098' }
  },
  {
    name: 'Hyderabad', state: 'Telangana',
    numbers: { 'Police': '100', 'Women Helpline': '181 / 1091', 'Ambulance': '108', 'Fire': '101', 'Child Helpline': '1098' }
  },
  {
    name: 'Pune', state: 'Maharashtra',
    numbers: { 'Police': '100', 'Ambulance': '108', 'Fire': '101', 'Women Helpline': '103', 'Child Helpline': '1098' }
  },
  {
    name: 'Ahmedabad', state: 'Gujarat',
    numbers: { 'Police': '100', 'Ambulance': '108', 'Fire': '101', 'Women Helpline': '181', 'Child Helpline': '1098' }
  },
  {
    name: 'Jaipur', state: 'Rajasthan',
    numbers: { 'Police': '100', 'Ambulance': '108', 'Fire': '101', 'Women Helpline': '181', 'Child Helpline': '1098' }
  },
  {
    name: 'Lucknow', state: 'Uttar Pradesh',
    numbers: { 'Police': '100', 'Women Helpline': '1090', 'Ambulance': '108', 'Fire': '101', 'Child Helpline': '1098' }
  },
  {
    name: 'Patna', state: 'Bihar',
    numbers: { 'Police': '100', 'Ambulance': '108', 'Fire': '101', 'Women Helpline': '181', 'Child Helpline': '1098' }
  }
];

export const STATE_DATA: StateData[] = [
  {
    region: 'North India',
    states: [
      { name: 'Jammu & Kashmir', womenHelpline: '181', districts: ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'] },
      { name: 'Himachal Pradesh', womenHelpline: '181', districts: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul-Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'] },
      { name: 'Punjab', womenHelpline: '181', districts: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Muktsar', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar', 'Sangrur', 'Shahid Bhagat Singh Nagar', 'Tarn Taran'] },
      { name: 'Haryana', womenHelpline: '181', districts: ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'] },
      { name: 'Uttarakhand', womenHelpline: '181', districts: ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'] },
      { name: 'Uttar Pradesh', womenHelpline: '1090', districts: ['Agra', 'Aligarh', 'Prayagraj', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'] },
      { name: 'Delhi (UT)', womenHelpline: '1091', districts: ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'] }
    ]
  },
  {
    region: 'West India',
    states: [
      { name: 'Rajasthan', womenHelpline: '181', districts: ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'] },
      { name: 'Gujarat', womenHelpline: '181', districts: ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'] },
      { name: 'Maharashtra', womenHelpline: '103', districts: ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'] },
      { name: 'Goa', womenHelpline: '181', districts: ['North Goa', 'South Goa'] },
      { name: 'Dadra & Nagar Haveli', womenHelpline: '181', districts: ['Dadra and Nagar Haveli', 'Daman', 'Diu'] }
    ]
  },
  {
    region: 'Central India',
    states: [
      { name: 'Madhya Pradesh', womenHelpline: '181', districts: ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'] },
      { name: 'Chhattisgarh', womenHelpline: '181', districts: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Manendragarh-Chirmiri-Bharatpur', 'Mohla-Manpur-Ambagarh Chowki', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sakti', 'Sarangarh-Bilaigarh', 'Sukma', 'Surajpur', 'Surguja'] }
    ]
  },
  {
    region: 'East India',
    states: [
      { name: 'Bihar', womenHelpline: '181', districts: ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'] },
      { name: 'Jharkhand', womenHelpline: '181', districts: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj', 'Seraikela-Kharsawan', 'Simdega', 'West Singhbhum'] },
      { name: 'West Bengal', womenHelpline: '1091', districts: ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'] },
      { name: 'Odisha', womenHelpline: '181', districts: ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Baudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghapur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Sonepur', 'Sundargarh'] }
    ]
  },
  {
    region: 'North-East India',
    states: [
      { name: 'Assam', womenHelpline: '181', districts: ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metro', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong', 'Bajali', 'Tamulpur'] },
      { name: 'Arunachal Pradesh', womenHelpline: '181', districts: ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Itanagar Capital Complex', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'] },
      { name: 'Manipur', womenHelpline: '181', districts: ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'] },
      { name: 'Meghalaya', womenHelpline: '181', districts: ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'] },
      { name: 'Mizoram', womenHelpline: '181', districts: ['Aizawl', 'Champhai', 'Hnahthial', 'Khawzawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Saitual', 'Serchhip'] },
      { name: 'Nagaland', womenHelpline: '181', districts: ['Chümoukedima', 'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Niuland', 'Noklak', 'Peren', 'Phek', 'Shamator', 'Tseminyü', 'Tuensang', 'Wokha', 'Zunheboto'] },
      { name: 'Tripura', womenHelpline: '181', districts: ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'] },
      { name: 'Sikkim', womenHelpline: '181', districts: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim', 'Pakyong', 'Soreng'] }
    ]
  },
  {
    region: 'South India',
    states: [
      { name: 'Tamil Nadu', womenHelpline: '1091', districts: ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'] },
      { name: 'Karnataka', womenHelpline: '181', districts: ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikkaballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir', 'Vijayanagara'] },
      { name: 'Kerala', womenHelpline: '181', districts: ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'] },
      { name: 'Andhra Pradesh', womenHelpline: '181', districts: ['Anakapalli', 'Anantapur', 'Annamayya', 'Bapatla', 'Chittoor', 'East Godavari', 'Eluru', 'Guntur', 'Kakinada', 'Konaseema', 'Krishna', 'Kurnool', 'Nandyal', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Prakasam', 'Srikakulam', 'Sri Potti Sriramulu Nellore', 'Sri Sathya Sai', 'Tirupati', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa', 'Alluri Sitarama Raju'] },
      { name: 'Telangana', womenHelpline: '181', districts: ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Kumuram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Hanamkonda', 'Yadadri Bhuvanagiri'] },
      { name: 'Puducherry (UT)', womenHelpline: '181', districts: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam'] }
    ]
  }
];
