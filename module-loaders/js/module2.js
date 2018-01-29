var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Johnny",
  "last_name": "Stanley",
  "email": "jstanley0@jigsy.com",
  "gender": "Male",
  "ip_address": "20.77.18.217"
}, {
  "id": 2,
  "first_name": "Justin",
  "last_name": "Boyd",
  "email": "jboyd1@jiathis.com",
  "gender": "Male",
  "ip_address": "72.38.163.229"
}, {
  "id": 3,
  "first_name": "Jerry",
  "last_name": "Torres",
  "email": "jtorres2@ning.com",
  "gender": "Male",
  "ip_address": "136.119.218.175"
}, {
  "id": 4,
  "first_name": "Rebecca",
  "last_name": "Long",
  "email": "rlong3@cbslocal.com",
  "gender": "Female",
  "ip_address": "25.231.13.102"
}, {
  "id": 5,
  "first_name": "Donna",
  "last_name": "Campbell",
  "email": "dcampbell4@gov.uk",
  "gender": "Female",
  "ip_address": "183.164.89.26"
}, {
  "id": 6,
  "first_name": "Phillip",
  "last_name": "Watkins",
  "email": "pwatkins5@hugedomains.com",
  "gender": "Male",
  "ip_address": "28.219.137.215"
}, {
  "id": 7,
  "first_name": "Billy",
  "last_name": "Schmidt",
  "email": "bschmidt6@businessweek.com",
  "gender": "Male",
  "ip_address": "252.65.194.175"
}, {
  "id": 8,
  "first_name": "Annie",
  "last_name": "Henry",
  "email": "ahenry7@home.pl",
  "gender": "Female",
  "ip_address": "49.236.231.184"
}, {
  "id": 9,
  "first_name": "Craig",
  "last_name": "Nichols",
  "email": "cnichols8@scribd.com",
  "gender": "Male",
  "ip_address": "181.96.10.207"
}, {
  "id": 10,
  "first_name": "Judith",
  "last_name": "Mccoy",
  "email": "jmccoy9@nba.com",
  "gender": "Female",
  "ip_address": "196.54.5.189"
}, {
  "id": 11,
  "first_name": "Diana",
  "last_name": "Franklin",
  "email": "dfranklina@xrea.com",
  "gender": "Female",
  "ip_address": "250.179.147.11"
}, {
  "id": 12,
  "first_name": "Peter",
  "last_name": "Mason",
  "email": "pmasonb@comsenz.com",
  "gender": "Male",
  "ip_address": "194.30.127.74"
}, {
  "id": 13,
  "first_name": "Margaret",
  "last_name": "Murray",
  "email": "mmurrayc@msn.com",
  "gender": "Female",
  "ip_address": "56.154.58.204"
}, {
  "id": 14,
  "first_name": "Stephanie",
  "last_name": "Long",
  "email": "slongd@buzzfeed.com",
  "gender": "Female",
  "ip_address": "125.128.168.56"
}, {
  "id": 15,
  "first_name": "Patricia",
  "last_name": "Lopez",
  "email": "plopeze@buzzfeed.com",
  "gender": "Female",
  "ip_address": "60.113.76.164"
}, {
  "id": 16,
  "first_name": "Michael",
  "last_name": "Walker",
  "email": "mwalkerf@washingtonpost.com",
  "gender": "Male",
  "ip_address": "138.48.135.46"
}, {
  "id": 17,
  "first_name": "Clarence",
  "last_name": "Reid",
  "email": "creidg@purevolume.com",
  "gender": "Male",
  "ip_address": "125.237.150.67"
}, {
  "id": 18,
  "first_name": "Catherine",
  "last_name": "Arnold",
  "email": "carnoldh@goo.ne.jp",
  "gender": "Female",
  "ip_address": "65.231.144.40"
}, {
  "id": 19,
  "first_name": "Debra",
  "last_name": "Reid",
  "email": "dreidi@ihg.com",
  "gender": "Female",
  "ip_address": "183.28.172.136"
}, {
  "id": 20,
  "first_name": "Carl",
  "last_name": "Frazier",
  "email": "cfrazierj@fc2.com",
  "gender": "Male",
  "ip_address": "245.146.197.153"
}]

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " femaltes!");