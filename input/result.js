const zodiacSign = sessionStorage.getItem("zodiacSign");
const zodiacDate = sessionStorage.getItem("zodiacDate");

const day = sessionStorage.getItem("day");
const month = sessionStorage.getItem("month");

if (!zodiacSign) {
  location.href = "./inpsut.html";
}
document.title = `Your Zodiac - ${zodiacSign}`;

setTimeout( () => {
  const imageElement = document.querySelector("img");
  const  hello = document.querySelector('.result');
  imageElement.src = `./icons/${zodiacSign}.svg`;
  imageElement.alt = zodiacSign;
  document.getElementById("zodiac-sign").innerHTML = zodiacSign;
  document.getElementById("zodiac-date").innerHTML = zodiacDate;
  hello.style.display = "block";

  const load = document.querySelector('.load');
  load.style.display = "none";
},7000);

const btn = document.querySelector('.btn123');
// console.log(btn)
btn.addEventListener("click", () => {
  location.href = "./input.html";
})


if (month == 1&& day == 20 ){
  document.getElementById("photo").innerHTML ="<img src='./images/aquarius.jpg' id='pic'>";   
  document.getElementById("persona").innerText ="Dear Aquarian,The moon departs your sign and drifts into Pisces this morning, dearest Aquarius, putting you in a grounded and emotional headspace. Luckily, Saturn steps in to help you steady your heart this afternoon, though it'll be important that you implement healthy boundaries as a way to stay centered. Consider planning serious conversations for another day, understanding that the vibe will be charged. Meanwhile, Mercury retrograde and Chiron form an unbalanced connection, making it difficult to translate complex feelings into sensible words. The full moon rises tonight, putting you in the mood for self-pampering and a touch of luxury. ";
}

if (month == 1&& day ==21){
   
  document.getElementById("photo").innerHTML ="<img src='./images/aquarius1.jpg' id='pic'>";   
  document.getElementById("persona").innerHTML =" Dear Aquarian,A joyous energy floods your home this morning, dearest Aquarius, helping you feel secure within the confines of your space and most intimate connections. Lean into these vibes by finding ways to elevate your private life, valuing people and situations that don't earn you money. However, you'll want to be on guard for miscommunications when Luna faces off with Mercury retrograde this afternoon, as small misunderstandings could lead to major conflict if you're not careful. Consider doing something unexpected later tonight when Uranus becomes active, feeding your heart with the pursuit of fun and new experiences.";
}

if (month == 1&& day ==22){
   
  document.getElementById("photo").innerHTML ="<img src='./images/aquarius2.jpg' id='pic'>";   
  document.getElementById("persona").innerHTML =" Dear Aquarian,Pluto becomes active in the sector of your chart that governs dreams early this morning, dear Aquarius, ushering in strange experiences in the astral realms. Luckily, you'll find that it's easy to focus on the real world once Luna migrates into Aries, supercharging that beautiful brain of yours. Don't hesitate to ask questions, strike up interesting conversations, and speak loudly as the universe pushes you to exchange words and ideas. A spiritual element comes into play when Luna faces off with fiery Mars, though your gut instincts could lead you astray, making it important that you avoid hasty decisions.";
}

if (month == 1&& day ==23){
   
  document.getElementById("photo").innerHTML ="<img src='./images/aquarius3.jpg' id='pic'>";   
 document.getElementById("persona").innerHTML ="Dear Aquarian,The Aries moon connects with Venus retrograde in the early hours bringing activity to the psychic realms, though the messages you receive could seem mixed. Try not to fixate on what the other side may be trying to tell you, especially when Luna and Mercury retrograde form an unbalanced connection mid-morning, threatening to further the confusion. Luckily, you'll have a chance to reclaim clarity when Chiron becomes active later in the day, though it would be best to redirect your thoughts to real-world situations or connect with friends. Pay attention to your ideas just before midnight sets in and the Nodes of Fate guide you toward tomorrow. ";
}

if (month == 1&& day ==24){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius4.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,Your passions will come alive as Mars enters Libra, dear Aquarius, connecting you with your divine path and sense of optimism. Lean into your gut instincts throughout the coming weeks, prioritizing people, situations, and hobbies that set your soul on fire. Meanwhile, the Capricorn moon blows a kiss to Jupiter, bringing a grounded fullness to your heart. Watch out for miscommunications and be mindful to keep a positive internal dialogue later this afternoon when Luna and Chiron share a harsh square overhead. Luckily, good vibes flow when Mercury retrograde activates this evening, helping you shake off any funk that found you earlier. ";
}

if (month == 1&& day ==25){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius5.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,The moon enters your sign this morning, dearest Aquarius, acting as a breath of cosmic fresh air. This luminary placement is perfect for embracing new journeys, making it the perfect time to ask out your crush, apply for jobs, or start a passion project. Luckily, the universe adds some extra luck into the mix as Mars becomes active in your house of spirituality, supercharging your optimism and ability to reach dreams. Watch out for jealousy or obsessive behaviors later today when the sun and moon form an unbalanced connection, threatening to trigger conflict and internal funks.";
}

if (month == 1&& day ==26){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius6.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,The moon continues its journey through your sign this morning, dearest Water Bearer, forming a harsh connection with Jupiter. It may be difficult to control your emotions under this cosmic climate, especially if you start to feel defensive or disrespected. It will also be important to keep tabs on your own mood, even when others aren't actively triggering you. Good vibes flow later in the afternoon when Chiron becomes active, bringing healing to your heart when you speak the truth. Don't hold back if you have something important to say, trusting that using your words will set you free.";
}

if (month == 1&& day ==27){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius7.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,Extend the day by getting up earlier than usual, Aquarius. Even though it may be hard to leave the comfort of your bed, the rewards will be many. The celestial energy beckons you to get up and join the activities of the day. You'll be much more productive and accomplish a lot by the end of the day.";
}

if (month == 1&& day ==28){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius8.jpg' id='pic'>";   
document.getElementById("persona").innerHTML =" Dear Aquarian,You are very clever at science and are especially interested in anything which can help people. You are often fascinated by gadgets and inventions, and some Aquarians become great inventors themselves. Others may support political movements concerned with questions of freedom and justice. Aquarius people, are often not very emotional, because you are more interested in exchanging ideas and helping others";
}

if (month == 1&& day ==29){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius9.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,You are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.";
}

if (month == 1&& day ==30){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius10.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,You may currently be proud of what you can do for yourself financially -- even if someone else is offering you more. As the perceptive Moon unites with suspicious Saturn in your money zone, your confidence in your own basic stability can help you resist getting sucked into a situation that wouldn't be a good fit. On the other hand, don't reject an opportunity that would potentially be mutually beneficial out of a rigid obsession with self-reliance. Keep your mind flexible.";
}

if (month == 1&& day ==31){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius11.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,Impulse spending could potentially get you in trouble now. As the desirous Moon in your finance sector opposes discerning Mercury in your 8th House of Shared Resources, someone else with a stake in the situation may insist that you adhere closely to a budget. Don't go behind their back, but don't defer to them unquestioningly either. Although there's value in having a plan, sometimes situations shift over time. If changes at home have made this purchase necessary for your comfort, make sure they know that.";
}

if (month == 2&& day ==1){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius12.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,The energy is picking up today, so if you want to keep up, then get ready to move. Your busy 3rd house is positively pulsating as the Moon arrives for her monthly tour, reminding you that life is going to happen whether or not you’re living it, so you might as well jump in. Call up a friend or two and hit the town, checking out any spots that catch your attention. You can visit old haunts, but new places will be more exciting.";
}

if (month == 2&& day ==2){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius13.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,You’ll find more satisfaction today if you allow others to call the shots rather than trying to control every situation by yourself. The Moon in your communications sector is making a lovely trine to bountiful Venus in your partnership sector, bringing helpful and well-meaning people your way. Be open to their input -- they could have an idea or plan that impacts you all for the better. If you want to find joy today, don’t attempt to handle everything on your own.";
}

if (month == 2&& day ==3){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius14.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,Ruminating could presently get out of hand. The intimate Moon enters sensitive Pisces and unites with serious Saturn there, potentially turning our thoughts to painful matters. Anxious Mercury winds up wounded Chiron, connecting today's provocations to past hurts. When the Full Moon in Pisces peaks at 9:36 pm EDT, we may feel a sense of urgency to address our concerns with concrete action. Some problems simply aren't able to be solved in a day, but any ongoing tension at least needs an outlet.";
}

if (month == 2&& day ==4){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius16.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,There’s a push-me-pull-you energy to the day. The Moon in gentle Pisces starts out conjoining dreamy Neptune, but then she zips into Aries at 9:25 am EDT, causing the pace to pick up considerably. We may struggle to make easy compromises when the Moon then opposes Mars in Libra, but Mars will turn around and form a quincunx to Saturn in Pisces, so there are solutions to be found if we take the time to follow our intuition towards a successful outcome.";
}

if (month == 2&& day ==5){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius17.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,Progress is possible now, but we might need to let go of our desire to understand it. The intuitive Pisces Moon sextiles buoyant Jupiter, setting an upbeat tone. Alas, when Luna opposes nervous Mercury at 3:29 pm EDT, we may worry that following our hearts doesn't make logical sense. Fortunately, the Moon then harmonizes with innovative Uranus, making it clear that the best solutions tend to come about in unexpected ways. We can't control everything -- and that's a really good thing!";
}

if (month == 2&& day ==6){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius18.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,You’re going to ride the wave of good vibes this week! The Ace of Cups is signaling a time that is overflowing with positive emotional energy. Happiness, creativity, and compassion are yours for the taking. It also signifies the ability to strengthen your existing relationships -- and perhaps meet a new friend or lover! If you’ve felt closed off lately, it’s time to open your heart to welcome the love and peace you deserve. This is your chance to sip from the cup of profound spiritual fulfillment, so drink up!";
}

if (month == 2&& day ==7){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius19.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,People born on February 7 have a selfless and progressive nature, which makes them more likely to help others. They dislike the idea of social inequalities and ignore diversity. They have an innate sense of irony that can lead to jealousy and envy. In addition to this, people born on February 7 may appear to be harsh, ruthless, and impulsive, which is not always a good thing";
}

if (month == 2&& day ==8){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius20.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,Those born on the 8th of February feel things in the material world intensely and profoundly, and differ from other Aquarius representatives with their emotional capacity and lack of detachment from the world through intellectual work.";
}

if (month == 2&& day ==9){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius21.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,This day's people are strong and able to control all those around them. Their independence of thought is a great strength, and they may be strong and persistent in their cause. Sometimes they can be arrogant and need to learn how to appreciate the contribution of others. Sometimes their arrogance can cause conflicts. You should pay close attention to those who are not in your camp if you were born on February 9.";
}

if (month == 2&& day ==10){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius22.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,If you were born on February 10, you seek to achieve greatness and to be admired far and wide for it! You charge ahead with confidence and fearlessness, with little concern about what others think of you. This ambition and drive will certainly lead to success, but it can also lead to loneliness unless you learn that spending time and energy on friends and family is a kind of greatness worth appreciating, too.";
}

if (month == 2&& day ==11){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius23.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,If you were born on February 11, you spend a lot of time going out of your way to improve the lives of others -- whether they like it or not! You are sincere in your desire to make things better for everyone. However, in doing so you risk becoming overly involved or even meddlesome. Embrace your independence and pursue pleasure as you will, but don't forget to ask others what they want before you give them something they don't.";
}

if (month == 2&& day ==12){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius24.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,People born under the sign of Aquarius are independent, witty, and have a curious mind. They tend to hold onto their relationships without letting go. These people are loyal to a fault and can be difficult to break up with. However, they are highly dependable, honest, and broad-minded. Your friends and family will appreciate and respect you for your uniqueness and energy. ";
}

if (month == 2&& day ==13){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius25.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,The people born on February 13 have strong willpower and impulsiveness. They will have a plan and be social. Aquarius is not a good partner. They can get distracted and make bad decisions. Keep your friends and family close and keep things civil with your partner. Balance is everything!";
}

if (month == 2&& day ==14){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius26.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,The people born February 14th are often charming, perceptive, and humorous. This is why their personality traits are quick-witted, great communication skills and an open mind. They are also often known for their silver tongue, and they tend to think critically and analytically. These people prefer to work in jobs that require little energy such as the silk industry.";
}

if (month == 2&& day ==15){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius27.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,If you were born on February 15, you are a sensitive but strong soul with the need to express yourself! You're likely a creator of either quirky inventions or dreamy poetry, which serves as a positive outlet for pain you may have suffered in your emotional life.";
}

if (month == 2&& day ==16){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius28.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,as an Aquarius born on February 16th, the first thing anyone would say about you is what a great thinker you are. Charming and eloquent you also have your own way of using words and this helps you even in the most unexpected of situations.You are strong, stubborn and brave so you rarely hesitate to take initiative when the occasion arises. ";
}

if (month == 2&& day ==17){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius29.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,If you were born on February 17, you're a hypersensitive soul hiding beneath a hardened shell, ready to do battle with the world on behalf of your worthy cause! You are honest, ambitious, and determined to get where you want to go, so you will likely succeed in most endeavors. However, be wary of avoiding intimacy out of fear, or closing yourself off to others on your journey to the top -- you may get there, but do you want to be alone when you arrive!";
}

if (month == 2&& day ==18){
 
document.getElementById("photo").innerHTML ="<img src='./images/aquarius30.jpg' id='pic'>";   
document.getElementById("persona").innerHTML ="Dear Aquarian,People born on February 18 tend to be impulsive, impatient, and highly emotional. They can find it difficult to accept other people's mistakes or to view them in a positive light. They are a natural fit for this kind of job if they love leadership. You will need to teach them how to use your knowledge about people to build relationships. A February 18th personality is a good fit for a career in leadership.";
}

if (month == 2&& day == 19 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,Your key phrase is ‘I progress’, so your challenge is to balance your desire to have progressive and innovative attitudes with the more traditional circumstances in which you find yourself. Culture, tradition and conservative values need to be balanced against your own unique way of seeing things.";
}

if (month == 2&& day == 20 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You are a compassionate individual and this is the most notable characteristic of your star sign. You are the person who will pull over to the side of the road to help someone who is in difficulty or a creature that is in danger of being run over.";
}

if (month == 2&& day == 21 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,Being born on the 21st February, your Karma has brought you into a positive incarnation. These are successful vibrations for you indicating glory after many efforts. Very good poetic and artistic destiny is shown through this birth. You have a high degree of knowledge and are a Universal student. Lots of knowledge and learning in your path are shown.A powerful position can be offered to you It is a happy easygoing vibration and you will certainly attain what you want as these vibrations are good for your future path.";
}

if (month == 2&& day == 22 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,People born on this day have an open, creative nature and are very sensitive to criticism. This makes them ideal candidates for a variety of jobs that involve problem-solving and variety. This day-born people can be great writers, scientists, and secret agents.";
}

if (month == 2&& day == 23 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on February 23, you're a practical, capable, and trustworthy person who knows how to get things done! You have a gift for sizing up situations, solving problems, and moving yourself and others forward. You do have a dark side, however, and must guard against depression at times when you don't like what you see happening in the world around you. Embrace your fears and face them head on rather than running from them.";
}

if (month == 2&& day == 24 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,Your destiny is such that you will struggle for balance, usually the balance between family and work. You have a highly strung nature and this is generally the  of possibly taking on more than you can handle at any given moment. As you are essentially an emotional person the requirement in your case is to carefully plan your work and not take on too much. Often you may find yourself a stranger within your own family through overwork. These vibrations indicate a 'workaholic' tendency.";
}

if (month == 2&& day == 25 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you are born on this day, your day is on February 25. You have a keen sense of justice, and you are determined to help the right people win. You are also able to inspire others, and you may find that the people around you will respond positively to your good deeds. You may need to keep your cool when dealing with matters of the heart. Because you've likely been hurt in your past, you need to learn how to be open and supportive in relationships.";
}

if (month == 2&& day == 26 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on February 26, you're an old soul with a great understanding of what makes other people tick! You are so sure of yourself that others can't help but choose to follow your lead, yet you do require a lot of time alone to process your thoughts. Learning to trust others and yourself will give you the strength and of a balanced life.";
}

if (month == 2&& day == 27 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,Pisceans born on February 27th are imaginative, compassionate, and intuitive. They have a great sense of empathy and can often tell what someone else is feeling without them having to say it. They are highly creative individuals who enjoy expressing themselves through art or music.";
}

if (month == 2&& day == 28 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on February 28, you're a lively and adventurous thrill-seeker with an impulsive nature a zillion friends! Your constant desire for the next greatest thing can lead you toward exciting experiences, but it can also lead you astray. Beneath your bravado you long for genuine acceptance and intimacy, and if you slow down for a minute you may even find it. Then, like few others, you'll have the best of both worlds!";
}

if (month == 3&& day == 1 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You are a born leader with great individual and romantic patterns displayed by your energies at the time of your birth. You may experience some emotional confusion which at times can confuse others as you are likely to give off mixed signals. It is important for you to clarify inwardly what it is you want in relationships.Often you have a strong desire to simply get away and escape from the pressures and responsibilities of your daily routine and life.";
}
if (month == 3&& day == 2 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,Being a Pisces born on March 2nd, you are devoted to your goals, some of which are very ambitious. At the same time, you still keep your feet on the ground and understand that not all is possible all the time.The best part is that you simply don't give up and seem to challenge yourself more and more, especially when you feel that others don't think you can accomplish certain things. ";
}

if (month == 3&& day == 3 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,People born on March 3 are known for being creative and imaginative. They can be particularly adept at analysing situations and creating their own solutions. Their imagination is also a great asset. Combining these traits could lead to many different careers, including acting, writing and art.";
}

if (month == 3&& day == 4 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You are an explorer and deep thinker. You are very accepting of others and you are very impressionable, which makes you vulnerable to being exploited. On the other hand, you will be very satisfied when you help others. This will allow you to be fulfilled and attract interesting people to your life. In your love life, you will be looking for someone who can be your equal when it comes to being romantic.";
}

if (month == 3&& day == 5 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You can bring out the best in people with the March 5 birthdate, but you need to be careful and manage your own power. You are highly creative because of the energy that flows through you when March 5 falls. You can use your creativity to make your life better in so many different ways. While your intuition and creative ability will be impressive, you'll find yourself irritated and impatient more often than not.";
}

if (month == 3&& day == 6 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You are ruled by the Planet of Love, Venus, so it shows your drive for both worldly success and happiness in personal relationships. The qualities of love, sympathy and harmony are trademarks so all of the refined and aesthetic pleasures of art, poetry and beauty are brought out by your birth number.Your personality is very agreeable and you sometimes attempt to maintain your friends, even when those relationships may already be outworn. Learn to let go of those relationships that have no real value in your life. You have a strong attraction for members of the opposite sex so will never be without an admirer, but beware of over sentimentality. You may have a tendency to hang on to the past, and need to firmly realise that the only constant thing in life is change.";
}

if (month == 3&& day == 7 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You might be wondering about your future relationship with your partner if you were born on the 7th of March. This date is known for being generous and charming, while they dislike conflict. If you have an argument with your partner, you'll end up feeling bad for days and may withdraw into resentment. Instead, find a partner who understands your need for freedom and flexibility.";
}

if (month == 3&& day == 8 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on March 8, you are fiercely independent and you don't like being told what to do -- but you usually do the right thing on your own, anyhow. This is because you have great compassion for others and are willing to fight for what you believe in.";
}

if (month == 3&& day == 9 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,People born in Pisces have an unpredictability that is hard to predict. If you are born on March 9, you may feel that a lot of your dreams never materialize. People born on March 9 often rely on their instincts and intuition to guide them through their lives.";
}

if (month == 3&& day == 10 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans, If you were born on March 10, you're one of the most sympathetic and empathetic people of all. You are strong and energetic, too, and you use those qualities to fight with compassion for those less fortunate.";
}

if (month == 3&& day == 11 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans, If you were born on March 11, you're a trendsetter who is capable of having a great influence on those around you. Your combined intuition and intellect make you something of a visionary, able to recognize a need, create a game plan, and get results.";
}

if (month == 3&& day == 12 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on March 12, you're a bit of a wild thing. Brave and adventurous, you're not scared of taking big risks to try new things and learn more about yourself and the world around you. You also have a deeply serious side and love to contemplate and discuss metaphysical matters. Your desire for movement and willingness to engage in risky business may lead you into trouble from time to time, and you may be accused of lacking focus. But when it comes down to it, you're a heck of a lot of fun to be around.";
}

if (month == 3&& day == 13 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You are sensitive and idealistic, but you are able to adapt yourself. Often you are driven by emotions. You have a spiritual or mystic bent of mind, so you can be impractical and illogical. You are introspective and shy. However, if your hidden inner pride is hurt you react emotionally. You are compassionate and tolerant, so you do not want to hurt anyone. Besides you can be influenced by others. You are moody and people find it hard to understand you.";
}

if (month == 3&& day == 14 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on March 14, you are rather brilliant. You have many talents and ideas, and you enjoy creating and inventing new things. In fact, you have so many great ideas, it's hard to stick with just one, which may lead to an inability to make strong decisions or pick just one path to follow. Sometimes this makes you moody, but overall you are sensitive, compassionate, and you want to make a difference in the world. Learn to trust your own instincts better, and you will!";
}

if (month == 3&& day == 15 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You possess much personal magnetism and inner strength. Often you are drawn to the more challenging of any chosen paths, and you have a strong sense of responsibility. Success comes to you through hard work and a personality that is sweetly persuasive and very likable. It’s important for you that others see you in a favorable light, and you are helpful and thoughtful not only with the people close to you but also with strangers.";
}

if (month == 3&& day == 16 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,If you were born on March 16, you are both imaginative and practical, which makes you a very balanced person. You know how to work hard when you're working and play hard when you're playing, and generally you are a likable and fun person to be around. Your sensitive and caring nature makes you a solid and reliable friend to many, but be sure to make enough time for yourself and your own needs, too. It's OK to lose your balance and indulge in your own private passions every once in a while.";
}

if (month == 3&& day == 17 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,Born on this cusp, you are influenced by fantastical Neptune, the ruling planet of Pisces, and Mars, the ruling planet of Aries. Neptune will boost your imagination, while active Mars will get you fired up with initiative. This makes you a creative individual who takes your dreams and puts them into action. You know how to make your wishes become realities!";
}

if (month == 3&& day == 18 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You have a drive for independence which is backed by high idealism and imagination. What more could you ask for? You don't want any support outwardly, but let's face it - no man is an island unto himself. So don't fight it, you do need love and the odd compliment - who knows, you might even start enjoying it!";
}

if (month == 3&& day == 19 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,There are some recurring issues of authority, power and control stemming from childhood. As a , you have a driving desire to be the leader. This almost compulsive force within you may stifle your spiritual and inner self-contentment.At times your own health may become an obsession and so practical pursuits that can make you forget yourself and that calm your flagrant nature are absolutely essential. Just smile and watch it all pass.";
}

if (month == 3&& day == 20 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/pisces29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Pisceans,You are a compassionate individual and this is the most notable characteristic of your star sign. You are the person who will pull over to the side of the road to help someone who is in difficulty or a creature that is in danger of being run over.";
}

if (month == 3&& day == 21){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Born on this cusp, you are influenced by fantastical Neptune, the ruling planet of Pisces, and Mars, the ruling planet of Aries. Neptune will boost your imagination, while active Mars will get you fired up with initiative. This makes you a creative individual who takes your dreams and puts them into action. You know how to make your wishes become realities!";
}

if (month == 3&& day == 22){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Friendship and mateship is of utmost importance to you in life. It is as if you are driven by the desire to be accepted. In your search for acceptance, you will come across the most unusual people and circumstances. This will  in abrupt changes in your relationships. You have strong worldly ambitions but you have to experience some delay before your true goals are achieved.You have hidden explosive tendencies. You should either curb them or pursue a career in pyrotechnics.";
}

if (month == 3&& day == 23){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You have such a powerful work ethic, such a desire to perfect your work practices that burnout is inevitable by the age of 40 if you don't pace yourself. Even though you think you have mountains of energy, it is best to rest as soon as you start to feel strained. You have a highly nervous nature which may  in physical problems which can be exacerbated by a likely allergy to certain foods.";
}

if (month == 3&& day == 24){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Your main focus in life seems to be relationships. You are highly sexed and seem to live for approval and acceptance in your social sphere. Relationships don't seem to go that smoothly, but there's certainly never a dull moment with you. It is important for you to avoid beginning new relationships before completing others. You have a romantic disposition, but boy are you flighty, and flirty too!";
}

if (month == 3&& day == 25){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You give too much in the hope of pleasing others. You need to be watchful even of your own motivation in this respect. Being psychic and possibly clairvoyant too, you absorb the vibrations of others like a sponge soaking up water Not all of the people who seem genuine are. Use a little bit of intellectual discrimination as well as an intuitive or psychic reception.";
}

if (month == 3&& day == 26){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Yours is no ordinary vibration. You have a special destiny. And that's not surprising as you have a very powerful career and material appetites. You will achieve your desired ends through the discipline of your nature. Coupled with the keen observation of others, a career in public relations, or at least in a 'people' industry is a good bet.You may be overly critical and pedantic at times, but that is why you are so good with details too. Know when to nitpick and when to look at the larger pictur";
}

if (month == 3&& day == 27){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,If you were born on March 27, you have a unique style of dress and an attention-getting demeanor, but frankly you are more fascinated by your own work and accomplishments than you are by other people. Your single-minded approach to working hard and achieving your goals can make you seem self-absorbed, though really you are just preoccupied with being the best you can be and making your mark on the world. If you really want to make a mark, though, keep in mind that personal relationships are important, too. Take vacations from yourself to let others in every once in a while.";
}

if (month == 3&& day == 28){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Your vibration reveals contradictory energies within you. Emotionally you are not fulfilled but you certainly have a dramatic flair and a pleasing personality. The theatre or the arts may attract you and many good dancers and performers were born under the vibration common to yours. Don't be so nervous about change. In your case, it is a debilitating thing. The secret is to simply do what you love and love what you do.";
}

if (month == 3&& day == 29){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You are courageous, bold, and a natural leader. These traits also make you a desirable partner in business, a reliable manager, and a valuable team member. You can sometimes be aggressive. Aries is a fiery sign and this combined with the Sun's power can sometimes cause you to be overly aggressive.";
}

if (month == 3&& day == 30){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,If your day is March 30th, you are in the prime of Aries season. The first sign of the zodiac, Aries suns are curious, independent, and vivacious. There is an endless undercurrent of energy to this special sign, largely due to their fire element associations and cardinal modality.";
}

if (month == 3&& day == 31){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,True innovators among Aries representatives, individuals born on the 31st of March are on a mission to discover something, set free from social norms and opinions of other people, and become as liberal and open as they possibly can.";
}

if (month == 4&& day == 1){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You possess great creative potential and charisma and enhance your appearance by selecting the finest attire to make an impression on others. A born leader, people look up to you but take care not to abuse the positions of respect and authority that will be invested in you.";
}

if (month == 4&& day == 2){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,If you were born on this particular day, you were born in the second decan of Aries, which is ruled secondarily by the sun. The Leo decan of Aries likely makes you more gregarious than the average Aries, and it may also make you a bit more attention-seeking given the fact that the sun is the center of our solar system!";
}

if (month == 4&& day == 3){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,The beneficial Jupiter is your ruler and reflects your moral and spiritual nature. You have standards that are very high and you aspire to the principles of integrity and fair play in all areas of your life. You exhibit empathy, compassion and a genuine concern for all people, but at the same time may also exhibit good executive ability. You have well balanced and sound judgement, are honest in your dealings, self-confident and are known for your jovial exuberant spirit.";
}

if (month == 4&& day == 4){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,The sign of Aries rules initiative, novelty, and the individual self. It is important to remember that the April 4th birthdays are high-risk for injuries and accidents. Persons born April 4th should be mindful of their own self-control.";
}
if (month == 4&& day == 5){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,An Aries born on April 5 is a natural aristocrat, has a high opinion of themselves and may even be self-centered. However, that attitude in no way influences their ability to interact with others or to be likeable. They possess a sense of destiny and may often find themselves involved in unusual circumstances.";
}

if (month == 4&& day == 6){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,If you were born on April 6, you have a quirky and powerful mind! Your brain is brimming with new and creative thoughts, plans, and ideas. In fact, it's probably uncomfortable trying to cram all that inspiration into your head. It's no wonder you're so eager to share your thoughts with the world!";
}

if (month == 4&& day == 7){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You are ruled by the mythical God, Neptune, which describes your nature most adequately. Just like the vast ocean you are restless, moody and fond of change and travel. You love the water and places connected with the sea. You possess unusual and original ideas on religion and philosophy. It means your compassion has risen to sublime heights and you will do anything for a person in need. In this respect, you must learn to balance your own needs lest you become a victim of the people you are trying to help.";
}

if (month == 4&& day == 8){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,At times you may appear pessimistic and so you need to balance your mind with more joy, optimism and inner sunshine. Try to remove some of the cynicism towards your own life processes and by balancing your cautious nature. You will no doubt begin to see better results in your life.You are very good with money, highly resourceful and prudent in all of your dealings. You have strong ambition with a solid sense of purpose - all of the important elements that make for success.";
}

if (month == 4&& day == 9){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You are governed by the bold and energetic Mars which brings to the fore your active, passionate and impulsive nature. The upside is you do not like laziness of any sort,?so work and physical activity are activities at which you excel.The double Mars energy makes you aggressive, ruthless and somewhat insensitive. Try hard to compromise in relationships by listening to others. You are not always right. Your life lesson is humility.";
}

if (month == 4&& day == 10){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Youthfulness, instigating energy, and optimism are all associated with Aries, particularly an Aries born on April 10th. As a cardinal fire sign, each and every Aries sun brings action, vibrance, and initiation into their life and passions";
}

if (month == 4&& day == 11){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You are such a social human being but at times can also be hot-headed restless and impatient. You want it now! You have strong emotions that can be channeled creatively so take a bit of the fire of your spirit and pump it into those directions rather than banging your head against a wall. You have an innate love of sharing and being rewarded for work done fairly but have the tendency to take on far too many tasks and responsibilities for your own good.";
}

if (month == 4&& day == 12){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You need to soften your demands on others. Try not expecting too much so as to not be disappointed with the outcome. After all, humans are humans. You have high ideals, big plans and strong ambitions which your friends and work colleagues can't keep up with. It could be that this may be a form of attention seeking, stemming from a need for approval.Be content with your own self.";
}

if (month == 4&& day == 13){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Life is constantly moving, changing and erupting into a multitude of directions in your case. At times, this may be suddenly or without any prior warning. Just when you thought it was all settling down - BOOM - another drama. Try quietening down your life and planning carefully for a more secure and predictable outcome. Your life lesson is to learn the art of controlling your emotions whilst at the same time expressing your frustration's.";
}

if (month == 4&& day == 14){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You have a distinct if not forceful manner which you must realise will overwhelm others at times. You are quick witted and humorous streak is most able to disarm and influence those around you whenever you need assistance. Don't develop the habit of using these magical powers of influence you possess for trivial desires as you may alienate friends by doing so.You may suffer some health or constitutional weakness in the throat at some stage. Pay attention to your breathing process.";
}
if (month == 4&& day == 15){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,If you were born on April 15, you are a squeaky-clean perfectionist! From the cleanliness of your home to your moral decision making, you try to make everything in your life pure and perfect. You're likely a little obsessive compulsive with the need to control the events, results, and people around you.";
}

if (month == 4&& day == 16){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Born on this cusp, you are influenced by both active Mars and sensual Venus -- the ruling planets of Aries and Taurus. Mars is a planet of motivation and drive, while Venus embodies the power of persuasion. Together, this combination of energy is an unstoppable mix that has you leading the way up the ladder of success!";
}

if (month == 4&& day == 17){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,Being born on the Cusp of Power blesses you with a great deal of strength and influence. You're a natural-born leader who's destined for success at home and in the workplace. Others will continually turn to you for guidance and inspiration, so make sure to be kind when they do! You have a tendency to be quite forceful, and your strong opinions can sometimes rub others the wrong way. If you lead with a smile on your face, nothing will get in your way.";
}

if (month == 4&& day == 18){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,You are completely unafraid to disagree with anyone and to make your opinions known. Often quite loudly Try lightening your manner a touch and practising the art of quiet assertion. Your energies indicate constant bickering and squabbling are likely if you don't temper the abrasive side of your nature. Strangely though your debating skill may in fact bring you good fortune and gains in law, legal disputes, sales or the diplomatic corps. You have great physical power and pride in your bodily strength. There are indications of injury, possibly to the knees and ankles.";
}

if (month == 4&& day == 19){
 
document.getElementById("photo").innerHTML ="<img src='./images/aries.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Aries,On April 19, a new moon and solar eclipse in Aries brings a communication showdown and/or breakdown, marking a sudden ending or new beginning in your life. If you got something to let fly and you mean it-now is the time, but if not, you might be best avoiding any serious conversations today.";
}

if (month == 4&& day == 20){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,as this month begins, your innate determination and practicality not only benefit your personal goals but also strengthen your relationships. Your unwavering commitment to loved ones enhances your connections. Additionally, this commitment to practicality extends to your financial matters. Setting clear financial objectives and taking the first step towards them aligns with your practical nature, increasing the likelihood of future prosperity.";
}

if (month == 4&& day == 21){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, your relationships may face challenges today, testing your patience. Your resilience in these moments will not only preserve harmony but also contribute to your overall fortune. Maintaining composure in difficult situations can prevent financial setbacks and keep your monetary ventures on track.";
}

if (month == 4&& day == 22){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, nurturing your artistic side within your relationships fosters deeper emotional bonds. Creative endeavors and shared expressions of art can bring joy to your connections. Furthermore, exploring creative pursuits can lead to financial opportunities in the long run, aligning with your practicality.";
}

if (month == 4&& day == 23){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,connecting with nature today can rejuvenate both your relationships and fortune. Spending time outdoors can create cherished memories with loved ones while providing mental clarity to make informed financial decisions.";
}

if (month == 4&& day == 24){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Trust your intuition today in both relationships and financial matters, Taurus. Your instincts will guide you through relationship challenges and help you make sound financial choices, potentially leading to an increase in your fortune.";
}

if (month == 4&& day == 25){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,financial focus today is aligned with your practical approach. Evaluating your budget and investment opportunities is not only wise but also ensures that your financial future remains stable, benefiting both your relationships and personal wealth.";
}

if (month == 4&& day == 26){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Prioritizing self-care enhances your relationships, Taurus. By nurturing your well-being, you can give more to your loved ones. Additionally, self-care habits can lead to increased productivity and financial success, contributing positively to your fortune.";
}

if (month == 4&& day == 27){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, your dedication to your career may benefit your financial fortune but be mindful of balancing work and relationships. Prioritizing quality time with loved ones ensures that your success in one area doesn't come at the expense of the other.";
}

if (month == 4&& day == 28){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Open and honest communication is the key to both healthy relationships and financial success, Taurus. Addressing conflicts and misunderstandings with loved ones creates a supportive atmosphere. Similarly, transparent financial discussions can lead to better money management and increased fortune.";
}

if (month == 4&& day == 29){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, Injecting adventure into your day benefits both relationships and fortune, Taurus. Exploring new experiences with loved ones can strengthen bonds, while your willingness to embrace change can open doors to financial opportunities.";
}

if (month == 4&& day == 30){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Staying grounded and practical serves you well in both relationships and financial matters, Taurus. Your reliability in maintaining your commitments to loved ones is mirrored in your financial consistency, contributing to your overall fortune.";
}

if (month == 5&& day == 1){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,prioritize your health as it positively influences your relationships and financial well-being. Physical well-being ensures mental clarity for making wise financial decisions while supporting your ability to nurture relationships.";
}

if (month == 5&& day == 2){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, Your determination drives both your personal goals and your relationships, Taurus. As you persist toward your aspirations, your financial fortunes may grow as well. Your unwavering willpower is a valuable asset.";
}

if (month == 5&& day == 3){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Patience remains your virtue, benefiting your relationships and financial stability, Taurus. Acknowledging that significant achievements take time prevents hasty decisions and potential financial setbacks.";
}

if (month == 5&& day == 4){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Shifting your focus to your home and family nurtures your relationships, Taurus. Creating a harmonious domestic environment bolsters emotional bonds. Additionally, a supportive home life can positively influence your financial ventures.";
}

if (month == 5&& day == 5){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, Trust your practical instincts regarding financial decisions, Taurus. Your ability to make calculated choices contributes to financial success, potentially securing your financial future and enhancing your relationships.";
}

if (month == 5&& day == 6){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Being a source of strength in your relationships extends to your financial endeavors, Taurus. Offering support and guidance to loved ones mirrors your determination to make sound financial choices that can improve your fortune.";
}

if (month == 5&& day == 7){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, Embracing sensuality in your relationships deepens emotional connections, Taurus. This vulnerability can lead to stronger bonds. Similarly, indulging in life's pleasures can provide moments of joy and relaxation, positively influencing your financial well-being.";
}

if (month == 5&& day == 8){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Rely on your practicality to overcome relationship challenges and financial setbacks, Taurus. Trust in your ability to find efficient solutions in both areas of your life, fostering harmony and preserving your fortune.";
}

if (month == 5&& day == 9){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Open and honest communication remains essential for relationships and financial success, Taurus. Expressing your feelings fosters deeper connections, while transparent financial discussions lead to better decision-making, ultimately benefiting your fortune.";
}

if (month == 5&& day == 10){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Exploring your creative talents with loved ones enhances your relationships, Taurus. Shared creative pursuits can be not only emotionally rewarding but also financially promising if pursued as a shared hobby or venture.";
}

if (month == 5&& day == 11){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,seize potential financial opportunities today with your practical approach. Analyze them carefully, ensuring that they align with your long-term financial goals, as well as benefit your relationships.";
}

if (month == 5&& day == 12){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Taking a break and focusing on relaxation today benefits both your relationships and fortune, Taurus. Recharge your energy to be fully present in your connections and maintain mental clarity for financial decisions.";
}

if (month == 5&& day == 13){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Have confidence in your abilities and share your strengths within your relationships, Taurus. Your practical approach to life can inspire loved ones, while your determination can lead to financial opportunities that bolster your fortune.";
}

if (month == 5&& day == 14){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,keep your long-term goals in sight. Persistence and dedication will lead to both financial success and the deepening of your relationships. Stay committed to your path, envisioning the prosperous and fulfilling future that awaits you.";
}

if (month == 5&& day == 15){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Surrounding yourself with beauty today enhances your sense of well-being and inspires creativity, benefiting both your relationships and financial ventures, Taurus.";
}

if (month == 5&& day == 16){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,exercise prudence in your decisions today. Consider the long-term consequences of your actions, both in your relationships and financial choices. Your thoughtful approach will lead to successful outcomes.";
}

if (month == 5&& day == 17){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,Express gratitude and appreciation to your loved ones, Taurus. Acts of kindness strengthen your relationships and create a supportive atmosphere that can also benefit your financial ventures.";
}

if (month == 5&& day == 18){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans, take a step closer to your dreams today, whether they involve your relationships or financial aspirations. Small, deliberate actions contribute to significant progress. Trust in your abilities and maintain your determination";
}

if (month == 5&& day == 19){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,your relationships may face challenges today, testing your patience. Your resilience in these moments will not only preserve harmony but also contribute to your overall fortune. Maintaining composure in difficult situations can prevent financial setbacks and keep your monetary ventures on track. Cultivate a mindset of resilience and adaptability, understanding that challenges are opportunities for growth in both your personal and financial life.";
}

if (month == 5&& day == 20){
 
document.getElementById("photo").innerHTML ="<img src='./images/taurus30.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Taureans,nurturing your artistic side within your relationships fosters deeper emotional bonds. Creative endeavors and shared expressions of art can bring joy to your connections. Furthermore, exploring creative pursuits can lead to financial opportunities in the long run, aligning with your practicality. Embrace a creative mindset, allowing your imagination to flow freely in both your relationships and financial ventures. Creativity can be a powerful force for positive change.";
}
  
if (month == 5&& day == 21){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, As a Gemini, you begin the month with the Sun in your sign, which heightens your sociable and communicative nature. Mercury, your ruling planet, is in harmonious aspect with Venus, enhancing your charm and diplomacy. This is an excellent time to express your thoughts and ideas clearly, making it easier to connect with others on both personal and professional levels. Your adaptability and curiosity are strong, paving the way for exciting new experiences.";
}

if (month == 5&& day == 22){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,The Moon is in your house of finances, encouraging you to focus on your financial well-being. You may feel the urge to analyze your budget or explore investment opportunities. Your natural communication skills are in the spotlight, making it a great day for networking and strengthening relationships. Be open to new social connections as they can lead to valuable opportunities down the road.";
}

if (month == 5&& day == 23){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,With the Moon in your house of self-worth and values, you may find yourself reflecting on your personal values and priorities. This is an ideal time to assess your emotional needs and how they align with your financial goals. Listen to your intuition when making financial decisions, and don't be afraid to seek advice from trusted sources.";
}

if (month == 5&& day == 24){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Mercury, your ruling planet, is in a favorable aspect with Mars, energizing your communication skills and mental agility. You'll find it easier to express yourself and initiate conversations, making it an excellent day for negotiations or tackling any pending tasks. Your adaptability helps you navigate any challenges that may arise.";
}

if (month == 5&& day == 25){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,The Sun forms a supportive aspect with Jupiter, bringing opportunities for financial growth and expansion. It's a good time to set long-term financial goals and think about strategies to achieve them. Your practical approach to money matters, combined with your optimism, can lead to increased prosperity in the future.,";
}

if (month == 5&& day == 26){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,The Moon is in your sign today, enhancing your emotional awareness and adaptability. This is a day to embrace change and spontaneity. Consider exploring new hobbies or taking a short trip to satisfy your curiosity and need for adventure.";
}

if (month == 5&& day == 27){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Mercury, your ruling planet, continues to be in sync with Venus, emphasizing your charm and intellectual prowess. Engaging in meaningful conversations and sharing your knowledge can deepen your connections with others. Your ability to adapt your communication style to suit different audiences is a valuable asset.";
}

if (month == 5&& day == 28){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Today's focus is on your physical health and well-being. Engage in activities that support your vitality, such as exercise, a balanced diet, or relaxation techniques. A healthy body enhances your charisma and overall energy levels.";
}

if (month == 5&& day == 29){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,With the Moon in your house of relationships, you're encouraged to nurture deeper emotional bonds with loved ones. Your empathetic nature allows you to understand their perspectives and strengthen the emotional connections you share. Be a source of support and comfort to those close to you.";
}

if (month == 5&& day == 30){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Mercury's alignment with Saturn emphasizes your practicality and attention to detail in financial matters. It's an excellent day for budgeting, setting financial goals, and considering long-term investments. Your disciplined approach ensures stability and security.";
}

if (month == 5&& day == 31){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,The Sun forms a harmonious aspect with Uranus, bringing opportunities for personal growth and change. Be open to new experiences, and don't be afraid to embrace innovative ideas. Your adaptability allows you to navigate life's twists and turns with ease.";
}

if (month == 6&& day == 1){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Mercury, your ruling planet, continues to enhance your communication skills. Showcase your versatility by engaging in stimulating conversations and debates. Your intellectual prowess shines, making you a captivating conversationalist.";
}

if (month == 6&& day == 2){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,With the Moon in your house of introspection, it's a day to take a mental break and engage in relaxation techniques. Journaling, meditation, or simply quiet contemplation can help you maintain mental clarity and emotional balance.";
}

if (month == 6&& day == 3){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Venus enters your sign today, enhancing your charm and appeal. It's a favorable time for social interactions, and your ability to express love and affection deepens emotional bonds with loved ones.";
}

if (month == 6&& day == 4){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Financial planning and review are highlighted as Mercury forms a beneficial aspect with Pluto. Assess your investments and ensure they align with your long-term financial objectives. Your diligent and practical approach leads to increased prosperity.";
}

if (month == 6&& day == 5){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Mercury's alignment with Neptune encourages you to embrace personal development and learning. Stay open to new knowledge and experiences, as your adaptability ensures a bright future filled with personal and professional growth.";
}

if (month == 6&& day == 6){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, With the Moon in your house of friendships and social connections, it's an ideal time to engage in diverse social interactions. Your adaptability allows you to connect with people from various backgrounds, fostering positive interactions.";
}

if (month == 6&& day == 7){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Prioritize physical health by dedicating time to exercise and nourishing foods. Your charisma thrives when you're in good shape, making it easier to connect with others on both personal and professional levels.";
}

if (month == 6&& day == 8){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, The Moon in your house of deep emotions encourages you to actively listen to loved ones and show genuine interest in their thoughts and feelings. Your understanding nature fosters harmonious relationships.";
}

if (month == 6&& day == 9){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,The Sun forms a beneficial aspect with Saturn, highlighting your practicality in financial matters. Evaluate potential sources of income and investments carefully. Your adaptability ensures you can pivot when necessary, while your practical approach keeps your financial path stable.";
}

if (month == 6&& day == 10){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Embrace change and remain optimistic as the Moon forms a favorable aspect with Jupiter. Your charismatic personality enhances relationships and opens new avenues for personal and professional growth. Stay open to new ideas and approaches.";
}

if (month == 6&& day == 11){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Mercury, your ruling planet, continues to enhance your communication skills. Engage in meaningful conversations to strengthen connections. Prioritize relaxation and well-being for your health, as it supports your overall vitality.";
}

if (month == 6&& day == 12){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,With the Moon in your house of introspection and emotional depth, dedicate time to relaxation and stress relief. Engaging in practices that promote mental clarity and emotional balance is essential for your well-being.";
}

if (month == 6&& day == 13){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Express your love and appreciation to loved ones today. Small acts of kindness and heartfelt gestures strengthen emotional bonds. Keep an adaptable mindset in both personal and financial matters, as it allows you to navigate various situations with grace and effectiveness.";
}

if (month == 6&& day == 14){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,The Moon forms a beneficial aspect with Pluto, making it a favorable day for financial planning and review. Assess your investments and ensure they align with your long-term goals. Your financial diligence leads to increased prosperity.";
}

if (month == 6&& day == 15){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Embrace personal development and continuous learning. Your adaptability ensures a bright future filled with growth and success. Maintain your versatility in relationships and financial endeavors.";
}

if (month == 6&& day == 16){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Your adaptability is a valuable asset today, as the Moon forms harmonious aspects with both Uranus and Mercury. Engage in meaningful interactions and stay open-minded. Dedicate time to physical well-being for overall health and vitality.";
}

if (month == 6&& day == 17){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini, Prioritize physical activity and fitness, as the Moon aligns favorably with Mars. Your charismatic personality thrives when you're in good health. Stay practical in financial matters and continue to maintain an adaptable mindset.";
}

if (month == 6&& day == 18){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Express love and appreciation to loved ones, strengthening emotional bonds. Stay open to potential financial opportunities that may arise from your caring and adaptable nature. Your willingness to connect on an intimate level deepens your relationships.";
}

if (month == 6&& day == 19){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Reflect on your financial journey. Prudent choices have secured your fortune. Continue with a practical approach to personal and financial success, knowing that your adaptability and willingness to learn will continue to contribute to your prosperity.";
}

if (month == 6&& day == 20){
 
document.getElementById("photo").innerHTML ="<img src='./images/gemini30.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Gemini,Show your multifaceted personality. Your versatility and charm make you captivating in various settings. Maintain adaptability and open-mindedness on your journey of growth and success. Your ability to connect with people from all walks of life fosters positive interactions and opens doors to new possibilities.";
}

if (month == 6&& day == 21){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You are emotional. Your live is often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind your composure. But you are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them.";
}

if (month == 6&& day == 22){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You have a strong sense of your own individuality and pride yourself on the fact that you are different. Not just in your personality but your tastes are also eccentric and the way you communicate your ideas and opinions may be just as unusual and unorthodox. In a traditional environment, this approach may not always work for you and may only serve to label you a 'fruitcake'. Try toning down some of these unconventional traits and you may be surprised to find that people will in fact not only accept but come to love them.";
}

if (month == 6&& day == 23){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Born on the Cusp of Magic, you have the gift of being both a communicator and a listener. Whether you're sharing interesting facts and witty anecdotes or letting a loved one cry on your shoulder, you're able to handle yourself gracefully in any social setting. Others will continually choose to confide in you, and you are often known as the therapist of your group. However, you may find that while you're a devoted conversationalist, you're not able to share your feelings with others as easily as they share theirs with you.";
}

if (month == 6&& day == 24){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You are a hard worker who loves your family and profession equally. At times you may feel the inner tug of divided loyalties as you try to balance your extremely self-demanding nature with the requirements of loved ones. In this area, only balance can offer you some satisfaction";
}

if (month == 6&& day == 25){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Great compassion and refinement of feeling and thought are indicated by these planetary vibrations. You're sensitive through and through and often take even the most general statements in conversation personally. You genuinely do try and help other people, even at your own expense and may even know when people require that help without them having to ask you. Such is the power of your inner vision. Some great clairvoyants are born under these vibrations so a career in the psychic sciences is not out of the question.";
}

if (month == 6&& day == 26){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You should expect to sacrifice hard if your June 26th day was a success. Cancers can be creative and bright, making them great conversationalists. They may feel restricted when it comes time to express themselves. It can feel as though you don't have anything to share with your loved ones.";
}

if (month == 6&& day == 27){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,If you were born on June 27, you're a protective guard dog! You care very deeply for your family and friends, and if anyone threatens them, you'll bite. The goals and standards you set for yourself are admirable, and you tend to be your own harshest critic. It's also tough for you not to judge those around you who don't do the same. You're kind of intense, but you push for greatness and it will pay off! Just remember to ease up on your loved ones.";
}

if (month == 6&& day == 28){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Money plays an important part in your destiny. Banking, real estate, finance, investments even the speculative arena may attract you. You may have to work hard for your money but at times also find luck knocking at your door and will be pleasantly surprised at the quick jumps in professional life that may just 'happen'.Any headaches, or eye aches, or pain in the eye may be an indicator of the possible weakness of the Sun at birth requiring tests for soundness of vis";
}

if (month == 6&& day == 29){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Being born on the Cusp of Oscillation makes you lover and a leader, helping you come across as both influential and commanding. Your natural empathy and genuine interest for others allows you to connect with people easily. Once you've earned their trust, you can proceed to lead! You're a beautiful blend of caring and passionate, and you should use this energy to help others in need or raise awareness for a good cause. You have the charisma and emotional intuition to get people going and to do as you ask -- just make sure you're using this for good and not for your own personal gain.";
}

if (month == 6&& day == 30){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Being born on the Cusp of Oscillation makes you lover and a leader, helping you come across as both influential and commanding. Your natural empathy and genuine interest for others allows you to connect with people easily. Once you've earned their trust, you can proceed to lead! You're a beautiful blend of caring and passionate, and you should use this energy to help others in need or raise awareness for a good cause. You have the charisma and emotional intuition to get people going and to do as you ask -- just make sure you're using this for good and not for your own personal gain.";
}

if (month == 7&& day == 1){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,It's quite remarkable that being ruled by the Sun, you would feel any form of depression at all. But it is true. You oscillate between the optimum and dynamic and determined energy of the Sun to the receptive and self-doubting Lunarian who lets things get to you. You have a complex emotional nature - usually through an overindulgence in giving to others - but from confused motives. If you truly want to help the world you must help yourself first. You inwardly possess an aspiring spirit with considerable restlessness. You are capable of profound insights and may be better off acting on first hunches.";
}

if (month == 7&& day == 2){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Your double Moon energy infuses you with an abundance of over sensitivity that can swing you into the realms of anxiety. You harbour a sense of insecurity at the heart of your nature. You're all heart and people like that. They may keep using it too - not necessarily because it helps them - but because it gives them control over you. Be wary of attracting partners who like to abuse their power over you. They may be overly critical and you'll just accept it, as the Moon is one of the most receptive of planets. With careful handling of your responses in love and human relationships, an exciting and imaginative future is awaiting you.";
}

if (month == 7&& day == 3){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You are emotional about work and health issues usually throwing yourself into the latter, particularly if personal affairs aren't faring too well. It's almost like a substitute for other forms of work. Bigger, Better, More is your motto. But hiding behind your excessive work patterns as a means of escape isn't the way to resolve those issues. You may also become fastidiously pre-occupied with your own abilities and sense of worth. Jupiter often produces a rather large ego - usually with good intentions. But plenty of things that didn't succeed were started with the same good motives"; 
}

if (month == 7&& day == 4){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You've never really had a problem with letting people know how you feel, but still, the power of Uranus excites and often de-stabilises relationships for you. You wonder why you alienate others and find yourself at a distance from people many a time. The abrupt and unpredictable nature of Uranus finds its way not only into your character but also into your life circumstances as well.";
}

if (month == 7&& day == 5){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You possess a most interestingly creative element within your speech. This is the Power of Mercury - the Communicator, who endows you with great thinking capacity, and wit too. Never over-embellish the truth though. Tall tales don't always ring true in the minds of others - and may harm your credibility.";
}

if (month == 7&& day == 6){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Venus ruling social situations and love of home make your life a veritable garden of flowers in which you, the butterfly, wish to taste each and every color and fragrance. You love beauty and friendship, even idealising others to your own detriment. Learn to scrutinise the motivations of others. You love to entertain and beautify your surroundings - will always have people in your house, and make your home a shelter for one and all.";
}

if (month == 7&& day == 7){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Neptune rules your higher aspirations and will be focusing attention on your love affairs and partnerships for a long time. Any confusions, unresolved issues and withheld feelings should be expressed openly in your life. You tend to say 'yes' to circumstances which you inwardly feel inhibit your true life purpose. Being stifled by the one you love that love may turn into resentment and long suffering.";
}

if (month == 7&& day == 8){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Saturn makes you a most reliable and dedicated person in life. Moon also makes you sensitive to the needs of others. This is a wonderful combination for someone looking for a friend or partner who will sincerely serve their needs.Try not to be too concerned about your financial prospects. When you meet the right person you will be able to pool your resources and work together towards a common financial goal.It's most important for you to marry for love and not simply for status or the dollar value that a relationship provides.";
} 

if (month == 7&& day == 9){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,The power of Mars and sensitivity of Moon combine to create a somewhat contradictory nature. On one hand the sensitive, caring and emotional elements will be expressed. At other times however, your strong willed sometimes aggressive nature will create head-on confrontations. In the house, you are the master. You need to control your immediate surroundings.";
}

if (month == 7&& day == 10){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You exhibit your authoritarian power and leadership potential in the area of finances and will no doubt gauge your success and esteem in the world by the way you earn. Status, power, money and all the glamorous things that can be bought will hold an attraction for you.You are generous with family and friends but need to look beyond the financial/material level of give and take to find true meaning in love. You may push yourself hard and eventually may lose sight of the original goal you had in mind. Your warmth and honourable demeanour make you popular and magnetic.";
}

if (month == 7&& day == 11){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You have a strong sense of the emotional links between yourself and others. Your genetic, hereditary and family history may intrigue you even if you pursue a serious career path, the double Moon influence on your life will keep pulling you back to a family base where you will finally understand your true purpose. Love of family, sharing and nurturing are natural for you.You genuinely express your feelings but at times feel pressure at decision time when emotions can and do cloud your rational judgment. The Sun also fires up your emotions and makes you somewhat proud and obstinate.";
}

if (month == 7&& day == 12){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,A wonderful blend of Lunarian and Jupiterian energies combine to offer you a lucky path in life if you choose. You will always consider the positive and favourable in all people and circumstances. This attitude works well for you, as long as you remember that other people in your life may not aspire to the same heights as you. Don't judge others harshly in that respect.";
}

if (month == 7&& day == 13){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,An 'electrical' aura pervades your being, which can brand you a bit of an unusual individual. Conversely, the influence of Uranus on the Moon can interfere with the ... functioning of your emotional responses. Relationships can be stormy with your erratic and sometimes volatile demands.A powerful sex drive and desire for exciting or stimulating sexual encounters, may not always relieve you of the high stress and anxiety you tend to attract as part of your day to day routine. Off to my Meditation Cave with you...";
}

if (month == 7&& day == 14){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,If you were born on July 14, you're charming, funny, and one heck of an actor! You know what role to play for each person you meet. This doesn't mean that you're not a genuine person -- you just have a lot of layers! There are different sides to your personality that present themselves at the right times. This makes you well-liked and gives you a strong confidence. Just remember that at the end of the day, the person that has to like you the most is YOU.";
}

if (month == 7&& day == 15){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Venus and Moon reveal your inner drive for satisfaction in the domestic and relationship spheres of your life and find it hard to excel in any other area of love and harmony aren't present. These vibrations indicate a very sentimental nature.You need to experience life in its fullness now, without comparison or judgment of how things used to be. Your 24th year is excellent in regard to relationships and marriage.";
}

if (month == 7&& day == 16){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,You are a rare human being and express the higher possibilities of nature, empathy and compassion. Your refined and sensitive thoughts may find expression through artistic or musical channels - not only as an egotistical activity - but as a means of uplifting those less fortunate than yourself.You often feel at odds with yourself and wonder what destiny holds for you. The teen years may leave you disillusioned with relationships as you tend to give more than you receive. This may stem from an avoidance of clear self-study and coming to terms with escapist tendencies. Don't run away from the world. Face the difficulties as well as the successes with a sense of adventure. Ages 34 and 43 are turning points for you.";
}

if (month == 7&& day == 17){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,The influence of Saturn will draw you into regarding money as a means of emotional satisfaction. That won't work for you in the long run. The minor influence of Neptune does however point to a career which offers much variety and creative input, thereby balancing the purely financial influence of your life.As a , you can expect a varied and colorful destiny, with many foreign contacts and journeys. Meeting and doing business with foreigners is a very conducive line of activity for you.You are very traditional when it comes to love affairs. Although you may have hidden passions, it is important to form a strong emotional connection with your partner. People born on this day are also attracted to creative and independent thinkers. Though you will be warm and loving, you must not appear to be self-sufficient. In love affairs, you should look for partners who are compatible with your own unique personality.";
}

if (month == 7&& day == 18){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Though your natural impulse is to boldly go where no man has gone before, something stops you. Some sense of inadequacy at times. This frustrates you and denies you the success that would otherwise be yours. You harbour grudges at times which are better expressed through the Mars influence. Even then, you may be abrupt and irritable in off-loading your frustrations.Be more tactful and diplomatic in dealing with others and don't be too proud to ask for help.";
}

if (month == 7&& day == 19){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Your vibrations are a very powerful blend of Sun, Moon and also Mars. As such your strong sense of identity makes you fit for all sorts of leadership positions where responsibility is concerned. Though you like to take centre stage and present your own virtues and abilities it will never be at the expense of others' reputation.In fact, you may use your power to assist those beneath you to attain a higher status. Your 28th year may bring renewed career opportunities.";
}

if (month == 7&& day == 20){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,A double Moon influence accentuates the emotional and intuitive power of your birth. Caring and considerate even to strangers, others are immediately impressed by your kindness and hospitality. You like to nurture not only people but projects and work ideas from inception to completion. You go the extra mile in making sure that things are hunky dory.You have a tendency to cling to that which you have nurtured and must therefore learn the lesson of letting go.";
}

if (month == 7&& day == 21){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer30.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,Jupiter's influence magnifies your inner life and sometimes makes you feel that your emotions are 'realer' than the world outside. You must learn to balance the outer and inner - focussing clearly on your goals. There is a sense of magnitude in your expectation of things. 'Bigger is better' may actually become your motto. You tend to aim high and even if things don't always work out exactly as planned, your jovial optimism acts as a buffer with a resilience that is second to none.Clint Eastwood once said, 'A man's got to know his limitations' - that means that you must know when to draw the line. Don't overdo it. Your 30th year brings good fortune.";
}

if (month == 7&& day == 22){
 
document.getElementById("photo").innerHTML ="<img src='./images/cancer31.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Cancerians,A triple Moon influence coupled with Uranus may make life an emotional roller-coaster ride if you don't learn the art of channeling and directing that enormous pool of energy. You want material successes and make achievement the sole criteria for your happiness sometimes. Don't alienate your loved ones in the pursuit of financial independence.You have quick, almost lightning quick reactions and like to seize opportunities as and where they happen. You don't miss much in life - but try stabilising your feelings a little more.";
}
if (month == 7&& day == 23 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Your ruling planet is the Sun, representing vitality, leadership, and self-expression.You belong to the fire element, which symbolizes passion, creativity, and energy.As a Leo, you are known for your confident and outgoing nature. You tend to be charismatic, enthusiastic, and often the life of the party. You are a natural leader and enjoy being in the spotlight. You are also known for your generosity and loyalty to your loved ones.You are determined and can be highly creative. You have a strong sense of self and are not afraid to pursue your goals. You are often very warm and caring.On the downside, you can sometimes be seen as arrogant or attention-seeking. You may struggle with being overly stubborn or prideful at times.You are often drawn to careers that allow you to be in the spotlight or positions of leadership. You excel in creative fields, entertainment, or any profession that requires charisma and self-assuredness.In relationships, you are a passionate and affectionate partner. You seek admiration and loyalty from your loved ones and are usually generous in return. However, you may need to be mindful of your need for attention, which can sometimes lead to conflicts. You are generally compatible with other fire signs (Aries and Sagittarius) and also with air signs (Gemini, Libra, and Aquarius).";
}

if (month == 7&& day == 24 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo, If you are a Leo, you are known for your self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles. Leo is a generous sign, and if you were born under it, you are often willing to help others. You can be quite giving and warm-hearted. Leos are typically creative, and you enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it. Leo individuals are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about.If you're a Leo, you often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention.";
}

if (month == 7&& day == 25 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on July 25th, you have a natural sense of self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles.Leo is a generous sign, and if you were born on July 25th, you are often willing to help others. You can be quite giving and warm-hearted.You are typically creative, and you enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it. As a Leo born on July 25th, you are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about. You often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention";
}

if (month == 7&& day == 26 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on July 26, you have a natural sense of confidence. You are likely to feel comfortable in social situations and may often find yourself taking on leadership roles. Leo is a generous sign, and if you were born on this day, you tend to be generous and willing to help others. You have a warm-hearted nature.You are typically creative and enjoy expressing yourself through various forms of art, including music, drama, and visual arts. Once you set your sights on a goal, you can be highly determined and persistent in achieving it. Your determination often helps you succeed in your endeavors. You value loyalty in your relationships. If you are a Leo born on July 26, you are known for being loyal to your friends and loved ones. You prioritize your connections and are protective of those you care about.Leo individuals often have a strong desire for recognition and praise, and you are no exception. You enjoy being in the spotlight and receiving attention for your accomplishments.";
}

if (month == 7&& day == 27 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on July 27, you possess a natural self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles. Leo is a generous sign, and if you were born on July 27, you are often willing to help others. You can be quite giving and warm-hearted.Leos born on July 27 are typically creative and enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it.Leo individuals born on July 27 are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about.If you're a Leo born on July 27, you often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention. ";
}

if (month == 7&& day == 28 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on July 28th, you possess natural self-assuredness. You tend to exude confidence and are often comfortable taking on leadership roles.Leo is known for its generosity, and if you were born on this date, you have a willingness to help others. You can be quite giving and warm-hearted. You have a natural inclination toward creativity. Expressing yourself through various forms of art, such as music, drama, or visual arts, is something that resonates with you. When you set your sights on a goal, your determination shines through. You can be highly persistent in pursuing what you desire.Your loyalty to your friends and loved ones is one of your most admirable qualities. You place a strong emphasis on your relationships and are protective of those close to you.If you were born on July 28th as a Leo, you often have a strong desire for recognition and praise. Being in the spotlight and receiving attention is something you tend to enjoy.";
}

if (month == 7&& day == 29 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on July 29, you possess a natural self-assuredness. You are typically confident and comfortable in social situations, often taking on leadership roles.Leo is a generous sign, and if you were born on July 29, you are often willing to help others. You can be quite giving and warm-hearted.Leos are usually creative, and you enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it.Leo individuals are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about.If you're a Leo born on July 29, you often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention.";
}

if (month == 7&& day == 30 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Leos, including those born on July 30th, are known for their self-confidence and charisma. You have a natural ability to command attention and often enjoy being in the spotlight.Leos tend to be generous and warm-hearted. You're willing to help others and are often quite giving.Leo is associated with creativity, and individuals born on this date may have a strong artistic or creative streak. You enjoy expressing yourself through various forms of art.With your natural confidence and determination, you can take on leadership roles with ease. You're not afraid to step up and guide others when necessary.You value your relationships and are known for your loyalty to friends and loved ones. You're protective of those you care about and are a dependable friend.Leos born on July 30th often have a strong desire for recognition and praise. You thrive on positive feedback and acknowledgment.Once you set your sights on a goal, you can be highly determined and persistent in achieving it.";
}

if (month == 7&& day == 31 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on July 31st, you possess a natural sense of self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles. Leo is a generous sign, and if you were born on July 31st, you are often willing to help others. You can be quite giving and warm-hearted.You are typically creative and enjoy expressing yourself through various forms of art, including music, drama, and visual arts. Once you set your sights on a goal, you can be highly determined and persistent in achieving it.If you were born on July 31st as a Leo, you are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about.: Leo individuals, including those born on July 31st, often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention.";
}

if (month == 8&& day == 1 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on August 1st, you possess natural self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles. Leo is a generous sign, and if you were born on August 1st, you are often willing to help others. You can be quite giving and warm-hearted.Leos, especially those born on August 1st, are typically creative individuals. You enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it. Leo individuals, like yourself, are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about. If you're a Leo born on August 1st, you often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention.";
}

if (month == 8&& day == 2 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on August 2nd, you possess a natural self-assuredness. You tend to exude confidence and often find yourself comfortable in leadership roles.Leo is a generous sign, and you are no exception. You have a willingness to help others and are known for your warm-hearted and giving nature.Your Leo nature makes you quite creative. You enjoy expressing yourself through various artistic forms, whether it's music, drama, or visual arts. Once you set your sights on a goal, your determination shines through. You are highly persistent and dedicated to achieving your objectives.Loyalty is one of your strong suits. You place great importance on your relationships and are fiercely protective and devoted to your loved ones.As an August 2nd Leo, you have a natural craving for recognition and praise. You thrive in the spotlight and appreciate the attention and acknowledgment.";
}

if (month == 8&& day == 3 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on August 3, you possess a natural sense of self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles.Leo is a generous sign, and if you were born on August 3, you are often willing to help others. Your generous nature makes you quite giving and warm-hearted.Leos born on August 3 are typically creative individuals. You enjoy expressing yourself through various forms of art, including music, drama, and visual arts.When you set your sights on a goal, your determination and persistence shine through. You are known for your unwavering commitment to achieving what you desire. If you were born on August 3 as a Leo, you are known for your loyalty to your friends and loved ones. You prioritize your relationships and are protective of those you care about.You often have a strong desire for recognition and praise. Being in the spotlight and receiving attention appeals to you, as is typical of Leo individuals.";
}

if (month == 8&& day == 4 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on August 4th, you possess a natural self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles.Leo is a generous sign, and you, as a Leo born on this date, are often willing to help others. Your generosity shines, and you have a warm-hearted nature.You are typically creative, and you enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, your determination and persistence are remarkable. You don't easily give up on what you're passionate about.Your loyalty to your friends and loved ones is unwavering. You prioritize your relationships and are known for being protective of those you care about. As a Leo born on August 4th, you often have a strong desire for recognition and praise. You thrive in the spotlight and enjoy receiving attention for your achievements.";
}

if (month == 8&& day == 5 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo, If you are a Leo born on August 5th, you possess self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles.Leo is a generous sign, and if you were born on August 5th under it, you are often willing to help others. You can be quite giving and warm-hearted. You are typically creative, and you enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it. Leo individuals are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about.If you're a Leo born on August 5th, you often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention.";
}

if (month == 8&& day == 6 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you are a Leo born on August 6, you are known for your self-assuredness. You tend to be confident and comfortable in social situations, often taking on leadership roles.Leo is a generous sign, and if you were born on August 6 under this sign, you are often willing to help others. You can be quite giving and warm-hearted. Leos are typically creative, and you enjoy expressing yourself through various forms of art, including music, drama, and visual arts.Once you set your sights on a goal, you can be highly determined and persistent in achieving it. If you were born on August 6 as a Leo, you are known for your loyalty to your friends and loved ones. You often prioritize your relationships and are protective of those you care about. Leos born on August 6 often have a strong desire for recognition and praise. You enjoy being in the spotlight and receiving attention.";
}

if (month == 8&& day == 7 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,As a Leo, the Sun is your ruling planet, which represents your core essence and identity. Leos tend to radiate confidence, self-expression, and a natural leadership quality.Leo is a Fire sign, indicating enthusiasm, passion, and a dynamic approach to life. You have a strong sense of purpose and enjoy taking action.Leo is one of the Fixed signs of the zodiac, which means you can be determined, persevering, and resistant to change once you've set your sights on a goal.Leos are known for their warm-heartedness, generosity, and a desire for recognition and appreciation. You often seek the spotlight and enjoy being admired.Leo is associated with creativity and self-expression. Many Leos have artistic talents and enjoy showcasing their creativity in various forms.Leos are fiercely loyal to their friends and loved ones. You value your relationships and are protective of those close to you.Leos are often seen as courageous individuals who are unafraid to face challenges and take risks when necessary.You may have a natural flair for drama and theatrics, and you're not shy about expressing your emotions.";
}

if (month == 8&& day == 8 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Leos, in general, are known for their self-confidence and natural leadership abilities. If you were born on August 8, you likely exude self-assuredness and have a strong presence.Leo individuals, including those born on August 8, are often generous and willing to help others. You have a warm heart and enjoy making people feel special.Leo is a creative sign, and August 8 Leos may have a strong artistic or creative streak. You might excel in various forms of art, such as music, drama, or visual arts. Once you set your mind on a goal, you are likely to pursue it with great determination and persistence. You have a strong work ethic and can be quite ambitious. Leos born on August 8 are known for their loyalty to their friends and loved ones. You value your relationships and are protective of those you care about. People born on this date often have a magnetic personality and can draw others to them with their charm and charisma. You enjoy being in the spotlight and can be quite entertaining.Leo individuals, including those born on August 8, often have a strong desire for recognition and praise. You thrive on acknowledgment and appreciation.";
}

if (month == 8&& day == 9 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Leos are often seen as natural leaders. If you were born on August 9, you likely have a strong desire to take charge and lead others. You have the confidence and charisma to inspire and influence those around you. Leo is a creative and expressive sign, and August 9 Leos are no exception. You may have a strong passion for the arts, whether it's music, theater, visual arts, or any other creative outlet. Your creativity shines brightly.Leos are known for their warm-hearted and generous nature. People born on this date often have a generous spirit and are willing to go the extra mile to help their friends and loved ones.Individuals born on August 9 often have a strong desire for recognition and appreciation. You thrive when you receive praise and attention for your efforts and talents.Loyalty is a hallmark trait of Leo. You are fiercely loyal to your friends and loved ones, and you value the bonds you share with them.Leos born on August 9 tend to be determined and persistent in pursuing their goals. Once you set your mind to something, you are likely to work diligently to achieve it.Many Leos enjoy being in the spotlight, and you are no exception. You have a natural flair for drama and may excel in performing arts or public speaking.";
}

if (month == 8&& day == 10 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,The enhanced Solar vibration of your birth gives you a very strong sense of identity and purpose. You have a warm outgoing nature and the ability to enforce your strong will on others - whether they like it or not!! If you can regulate a carefully direct your natural autocratic tendencies, you will make a great leader and become an inspiration to others around you.Others are automatically drawn to your bright and attractive manner and want to help you even without being asked. At about the age of 28, some good fortune will come your way.";
}

if (month == 8&& day == 11 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 11, you will dig until you find the truth! Honesty and integrity are your number-one values, and you choose to uphold them without a doubt. You live an honorable life that many will look up to throughout the years. These traits make you a good leader and a loyal friend. Remember not to take life so seriously! It's OK to laugh and be silly and still stick to your morals. You'll be much more approachable with a smile on your face.";
}

if (month == 8&& day == 12 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 12, you hold on tight to your traditions! Routine and loyalty make you comfortable and happy. This can be found in religion, politics, friendships, family, or any other piece of life! No matter where you put your energy, you dive in and stick to it. You are great at planning events and getting like-minded people together to celebrate on a regular basis. It's hard work, but you enjoy doing it! Make sure to have an open mind and explore activities, beliefs, or relationships outside of your wheelhouse. You never know what will bring you joy!";
}

if (month == 8&& day == 13 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,The so-called unluckiest of numbers isn't really that unlucky after all. It in fact, makes you aware of the need to work hard and achieve results with a totally independent and willful streak. You take a strange pride in being able to say 'I did it without any help'. Some of your colleagues may think you're a little crazy. You employ very unorthodox techniques in achieving your end. This will invite suspicion and even enemies at different times in your life - even though you have no hard feelings with others.You are temperamental and possess a short fuse. Family life is not a smooth area for you and so be on guard to foster the more nurturing traits of your character.";
}

if (month == 8&& day == 14 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 14, you are hip, trendy, and downright cool! Whether it's fashion, music, food, or news, you're always up on the latest updates and are a spring of knowledge and useful tips. Trendsetting comes easy to you and everyone around you is always impressed by the fabulous way you carry yourself. Remember to unplug and spend some time away from the never-ending hustle and bustle of life. Take some time to be quiet and stop worrying about the next big thing!";
}

if (month == 8&& day == 15 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,As Venus rules your 10th and 3rd Solar Houses, a career path that offers ample social scope and flexibility is a must. You take great pride in the presentation of ideas and work projects. Any of the artistic and creative professions are an ideal area for your ruling Sun to shine. And shine you will. But the sub influence of Mercury and also the 34d House of changes means that stability may be short lived - especially in 'affairs of the heart'.Impulsiveness and quick decisions within your love life should be curtailed for a more stable and long term fulfillment in marriage. Your 24th and 33rd years are significant but marriage may take place even earlier."; 
}

if (month == 8&& day == 16 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 16, you enjoy anything that tickles your senses! From food to art to sex, you have a very refined palate and you go after what you want. Your charm and magnetic energy is very persuasive and allows you to get your way most of the time! Normally, you have good intentions and simply enjoy certain luxuries in life. Make sure that you're not taking advantage of others or being cruel and irresponsible when you set your sites on something you desire.";
}

if (month == 8&& day == 17 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 17, you're a firecracker! There's a powerful energy running through you that could explode at any moment. Oftentimes, this type of force can be overwhelming and have negative effects. However, if you can learn to find balance and control, you have the ability to be a dynamic influence who can make incredible changes! Learn how to harness your internal stirrings and release your power at appropriate times and in small doses, and watch the world turn its attention to you.";
}

if (month == 8&& day == 18 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 18, you know how to go with the flow! Life has had its ups, downs, and unexpected surprises that come at the most inopportune moments. Yet, you persevere! You are a strong, patient individual who will never give up hope. It's not easy for you to trust others completely because of the challenges you've faced, but you are very likeable and people admire your tough skin. Always watch your own back, but keep in mind that there are some good people that want to be your friends or family!";
} 

if (month == 8&& day == 19 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Born on this Cusp, you are influenced by the Sun, the ruling planet of Leo, and Mercury, the ruling planet of Virgo. You are big, bright, and shine over everyone, but you're also able to process, think, and talk about the tiny details. You have two strong forces encouraging you to both think hard and act big, so it's important to find harmony between the two.";
}

if (month == 8&& day == 20 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,If you were born on August 20, you can create powerful dreams using your imagination! There is always a new idea, thought, or fantasy swirling around in that big brain of yours. Most of the time, this is a fun and useful trait that allows you to solve problems and offer innovative solutions. However, if you sit still for too long and don't allow your ideas to be heard and seen, they have the ability to overwhelm you and make you feel anxious and maybe even a little scared. So, share your thoughts! Give advice, create new things, and solve dilemmas to stay happy and healthy.";
}

if (month == 8&& day == 21 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Your magnanimous nature is probably your most notable trait as Jupiter controls your day of birth. Far sighted and aspiring to the 'larger than life' principle, you give a lot but also expect a lot in return. You may be compulsively driven by the need for success and others' approval. Often you are hard on the people you love most, especially children, and may at your worst moments be branded a bit of a tyrant. Try diluting the truth when offering constructive criticism. Early successes after age 21 are indicated.";
}

if (month == 8&& day == 22 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/leo30.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Leo,Humility is one of your lessons in life. You love praise and attention because this makes you feel as though your efforts have not been in vain. Success for Leo, however, is not a selfish action as the fruits of your labour are shared with those you love.Many Leos reach the pinnacle of their professions due to their ambitious nature. Others recognise your unique abilities, even if they don’t know you too well. You make a powerful impression everywhere you go.";
}

if (month == 8 && day == 23 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,As the sun enters your sign today,your practical and analytical personality takes center stage. You're infused with a fresh sense of purpose and vitality, marking the start of your day season. Your meticulous attention to detail and organizational skills will be your greatest assets. Use them to plan and envision the path ahead. Remember to embrace your self-critical nature positively, striving for personal growth while practicing self-compassion. Today, let your natural inclination for service and reliability guide you.";
}

if (month == 8 && day == 24 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today the cosmic energies encourage you to prioritize self-care and well-being. With the sun in your sign, your innate sense of responsibility and practicality shines brightly. Balance your pursuit of perfection with self-compassion, and remember that self-love is just as essential as helping others. Leverage your keen attention to detail to assess your health and make any necessary adjustments. Strengthen your relationships with loved ones by offering your reliable and caring nature. Your analytical mind can also serve you well in problem-solving and decision-making today.";
}

if (month == 8 && day == 25 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo, your practicality and attention to detail continue to guide you today. The sun in your sign empowers you to take control of your life. Your analytical mind is sharp, making it an excellent time for strategic planning and refining your goals. However, remember not to be too hard on yourself. While your perfectionism is a valuable trait, don't forget to appreciate your achievements. Share your wisdom and practical advice with others, but also take time to relax and recharge.";
}

if (month == 8 && day == 26 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your analytical and reliable nature shines brightly. With the sun illuminating your sign, you're in your element. Focus on refining your goals and organizing your priorities. You may find satisfaction in helping others by offering practical solutions. Just remember not to let self-criticism overshadow your accomplishments. It's a great day to connect with friends and loved ones, sharing your wisdom and offering support.";
}

if (month == 8 && day == 27 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,You have a keen sense of good and bad and for that they are highly discriminating. You have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.";
}

if (month == 8 && day == 28 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and attention to detail continue to shine. Your meticulous nature is an asset in both personal and professional endeavors. However, it's essential to balance your pursuit of perfection with self-compassion. Embrace your self-criticism as a tool for growth rather than a hindrance. Share your insights and practical solutions with those who seek your guidance, and remember to celebrate your own achievements along the way.";
}

if (month == 8 && day == 29 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues to grace your sign, your practical and analytical personality shines. Your meticulous attention to detail and exceptional organizational skills continue to be your greatest assets. Use them to plan and envision the path ahead. Embrace your self-critical nature positively, striving for personal growth while practicing self-compassion. Today, let your natural inclination for service and reliability guide you.";
}

if (month == 8 && day == 30 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and analytical abilities are accentuated. Your attention to detail is unmatched, making it an excellent time for meticulous work and strategic planning. However, be mindful not to let self-criticism hold you back. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those who seek your guidance.";
}

if (month == 8 && day == 31 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your analytical and practical nature continues to be your strengths. With the sun in your sign, you're in your element, empowered to refine your goals and organize your priorities. Your keen attention to detail allows you to tackle challenges with precision. Embrace your self-critical tendencies positively, using them as a catalyst for personal growth. Remember to extend the same level of care and support to yourself as you do to others.";
}

if (month == 9 && day == 1 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues its journey through your sign, your practical and analytical personality takes center stage. You're filled with a fresh sense of purpose and vitality, ready to tackle challenges with precision and efficiency. Your meticulous attention to detail and organizational skills remain your greatest assets. Today, let your natural inclination for service and reliability guide you as you navigate both personal and professional endeavors.";
}

if (month == 9 && day == 2 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and reliability are in the spotlight. Your meticulous attention to detail empowers you to tackle tasks with precision and efficiency. While your pursuit of perfection is admirable, remember to balance it with self-compassion. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those who value your wisdom.";
}

if (month == 9 && day == 3 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and attention to detail continue to shine. Your meticulous nature is an asset in both personal and professional endeavors. However, it's essential to balance your pursuit of perfection with self-compassion. Embrace your self-criticism as a tool for growth rather than a hind";
}

if (month == 9 && day == 4 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your analytical and practical nature continues to be your strengths. With the sun in your sign, you're in your element, empowered to refine your goals and organize your priorities. Your keen attention to detail allows you to tackle challenges with precision. Embrace your self-critical tendencies positively, using them as a catalyst for personal growth. Remember to offer yourself the same level of care and support that you provide to others.";
}

if (month == 9 && day == 5 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues its journey through your sign, your practical and analytical personality takes center stage. You're filled with a fresh sense of purpose and vitality, ready to tackle challenges with precision and efficiency. Your meticulous attention to detail and organizational skills remain your greatest assets. Today, let your natural inclination for service and reliability guide you as you navigate both personal and professional endeavors.";
}

if (month == 9 && day == 6 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and reliability are in the spotlight. Your meticulous attention to detail empowers you to tackle tasks with precision and efficiency. While your pursuit of perfection is admirable, remember to balance it with self-compassion. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those who value your wisdom.";
}

if (month == 9 && day == 7 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and attention to detail continue to shine. Your meticulous nature is an asset in both personal and professional endeavors. However, it's essential to balance your pursuit of perfection with self-compassion. Embrace your self-criticism as a tool for growth rather than a hindrance. Share your insights and practical solutions with those who seek your guidance, and remember to celebrate your own achievements along the way.";
}

if (month == 9 && day == 8 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues its journey through your sign, your practical and analytical personality takes center stage. You're filled with a fresh sense of purpose and vitality, ready to tackle challenges with precision and efficiency. Your meticulous attention to detail and organizational skills remain your greatest assets. Today, let your natural inclination for service and reliability guide you as you navigate both personal and professional endeavors.";
}

if (month == 9 && day == 9 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and analytical abilities are accentuated. Your attention to detail is unmatched, making it an excellent time for meticulous work and strategic planning. However, be mindful not to let self-criticism hold you back. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those who seek your guidance.";
}

if (month == 9 && day == 10 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues to grace your sign, your practical and analytical personality shines. Your meticulous attention to detail and exceptional organizational skills continue to be your greatest assets. Use them to plan and envision the path ahead. Embrace your self-critical nature positively, striving for personal growth while practicing self-compassion. Today, let your natural inclination for service and reliability guide you. ";
}

if (month == 9 && day == 11 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your analytical and practical nature continues to be your strengths. With the sun in your sign, you're in your element, empowered to refine your goals and organize your priorities. Your keen attention to detail allows you to tackle challenges with precision. Embrace your self-critical tendencies positively, using them as a catalyst for personal growth. Remember to extend the same level of care and support to yourself as you do to others.";
}

if (month == 9 && day == 12 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and reliability are in the spotlight. Your meticulous attention to detail empowers you to tackle tasks with precision and efficiency. While your pursuit of perfection is admirable, remember to balance it with self-compassion. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those around you.";
}

if (month == 9 && day == 13 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your analytical and practical nature continues to be your strengths. With the sun in your sign, you're in your element, empowered to refine your goals and organize your priorities. Your keen attention to detail allows you to tackle challenges with precision. Embrace your self-critical tendencies positively, using them as a catalyst for personal growth. Remember to offer yourself the same level of care and support that you provide to others.";
}

if (month == 9 && day == 14 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues to grace your sign, your practical and analytical personality shines. Your meticulous attention to detail and exceptional organizational skills continue to be your greatest assets. Use them to plan and envision the path ahead. Embrace your self-critical nature positively, striving for personal growth while practicing self-compassion. Today, let your natural inclination for service and reliability guide you.";
}

if (month == 9 && day == 15 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your practical and analytical nature continues to be your guiding light. With the sun in your sign, you're empowered to take control of your life. Your attention to detail and organizational skills are invaluable assets. Use them to refine your goals and envision a path to success. Remember to practice self-compassion and celebrate your achievements along the way. ";
}

if (month == 9 && day == 16 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun journeys through your sign, your practical and analytical personality shines brightly. Your meticulous attention to detail and organizational skills are your greatest assets. Use them to plan and envision the path ahead. While your pursuit of perfection is commendable, remember to balance it with self-compassion. Your analytical mind serves you well in both personal and professional matters. Share your insights and practical solutions with those who value your wisdom.";
}

if (month == 9 && day == 17 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and analytical abilities are accentuated. Your attention to detail is unmatched, making it an excellent time for meticulous work and strategic planning. However, be mindful not to let self-criticism hold you back. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those who seek your guidance.";
}

if (month == 9 && day == 18 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,Today your analytical and practical nature continues to shine. With the sun in your sign, you're in your element, empowered to refine your goals and organize your priorities. Your keen attention to detail allows you to tackle challenges with precision. Embrace your self-critical tendencies positively, using them as a catalyst for personal growth. Remember to offer yourself the same level of care and support that you provide to others.";
}

if (month == 9 && day == 19 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and attention to detail continue to shine. Your meticulous nature is an asset in both personal and professional endeavors. However, it's essential to balance your pursuit of perfection with self-compassion. Embrace your self-criticism as a tool for growth rather than a hindrance. Share your insights and practical solutions with those who seek your guidance, and remember to celebrate your own achievements along the way.";
}

if (month == 9 && day == 20 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo, as the sun continues its journey through your sign, your practical and analytical personality takes center stage. You're filled with a fresh sense of purpose and vitality, ready to tackle challenges with precision and efficiency. Your meticulous attention to detail and organizational skills remain your greatest assets. Today, let your natural inclination for service and reliability guide you as you navigate both personal and professional endeavors.";
}

if (month == 9 && day == 21 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,With the sun in your sign, Virgo, your practicality and reliability are in the spotlight. Your meticulous attention to detail empowers you to tackle tasks with precision and efficiency. While your pursuit of perfection is admirable, remember to balance it with self-compassion. Embrace your self-criticism positively, using it as a tool for self-improvement. Share your insights and practical solutions with those who value your wisdom.";
}

if (month == 9 && day == 22 ){
 
document.getElementById("photo").innerHTML ="<img src='./images/virgo30.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Virgo,as the sun continues its journey through your sign, your practical and analytical personality takes center stage. You're filled with a fresh sense of purpose and vitality, ready to tackle challenges with precision and efficiency. Your meticulous attention to detail and organizational skills remain your greatest assets. Today, let your natural inclination for service and reliability guide you as you navigate both personal and professional endeavors.";
}
  
if (month == 9&& day == 23){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,As the sun enters your sign today, dear Libra, your charming and diplomatic personality takes center stage. You're infused with a fresh sense of balance and harmony, marking the start of your day season. Your ability to see all sides of a situation and your natural peacemaking skills will be your greatest assets. Use them to foster cooperation and positive connections with others. Remember to take time for self-care and nurture your own well-being while you graciously attend to the needs of those around you.";
}

if (month == 9&& day == 24){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today the cosmic energies encourage you to focus on your personal goals and aspirations. With the sun in your sign, your innate sense of fairness and justice shines brightly. Balance your desire for harmony with assertiveness, and remember that your needs are just as important as others'. Use your keen sense of aesthetics and diplomacy to enhance your surroundings and relationships. Your ability to find beauty and balance in life will be your guiding light.";
}
if (month == 9&& day == 25){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,your charm and diplomacy continue to guide you today. The sun in your sign empowers you to find balance and harmony in your life. Your natural ability to see all perspectives makes you an excellent mediator and problem solver. However, remember to prioritize self-care and well-being as you tend to the needs of those around you. Your gracious and caring nature can uplift not only your own spirits but also those of others. ";
}

if (month == 9&& day == 26){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charming and diplomatic nature shines brightly. With the sun illuminating your sign, you're in your element. Focus on finding balance and harmony in your life, both in your personal relationships and within yourself. Your innate sense of fairness and justice will serve you well. However, don't forget to take time for self-care and relaxation. Your ability to create beauty and cultivate positive connections is your greatest strength.";
}

if (month == 9&& day == 27){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,as the sun continues its journey through your sign, your charming and diplomatic personality takes center stage. You're filled with a fresh sense of balance and harmony, ready to foster cooperation and positive connections with others. Your ability to see all sides of a situation and find common ground remains your greatest asset. Today, let your natural peacemaking skills guide you as you navigate both personal and professional interactions. ";
}

if (month == 9&& day == 28){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy continue to shine. Your innate sense of fairness and justice empowers you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and decision-making. However, remember to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 9&& day == 29){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,as the sun continues to grace your sign, your charming and diplomatic personality shines. Your ability to find balance and harmony in your life is your greatest asset. Use your natural peacemaking skills to foster cooperation and positive connections with others. While you tend to the needs of those around you, remember to take time for self-care and nurture your own well-being. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 9&& day == 30){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are accentuated. Your innate sense of fairness and justice allows you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and problem-solving. However, don't forget to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 10&& day == 1){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charming and diplomatic nature continues to guide you. The sun in your sign empowers you to find balance and harmony in your life. Your natural ability to see all sides of a situation makes you an excellent mediator and problem solver. Remember to prioritize self-care and well-being as you graciously attend to the needs of those around you. Your ability to create beauty and foster positive connections is your greatest strength.";
}

if (month == 10&& day == 2){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are in the spotlight. Your innate sense of fairness and justice shines brightly, allowing you to find balance and harmony in your life. Use your ability to see all perspectives to your advantage, both in personal relationships and decision-making. However, don't forget to take time for self-care and relaxation. Your gracious and caring nature can uplift not only your own spirits but also those of others.";
}

if (month == 10&& day == 3){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,as the sun continues its journey through your sign, your charming and diplomatic personality takes center stage. You're filled with a fresh sense of balance and harmony, ready to foster cooperation and positive connections with others. Your ability to see all sides of a situation and find common ground remains your greatest asset. Today, let your natural peacemaking skills guide you as you navigate both personal and professional interactions.";
}

if (month == 10&& day == 4){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charm and diplomacy continue to shine. The sun in your sign empowers you to find balance and harmony in your life. Your innate sense of fairness and justice allows you to navigate conflicts with grace and tact. Remember to prioritize self-care and well-being as you tend to the needs of those around you. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 10&& day == 5){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are accentuated. Your innate sense of fairness and justice empowers you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and problem-solving. However, don't forget to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 10&& day == 6){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are in the spotlight. Your innate sense of fairness and justice shines brightly, allowing you to find balance and harmony in your life. Use your ability to see all perspectives to your advantage, both in personal relationships and decision-making. However, don't forget to take time for self-care and relaxation. Your gracious and caring nature can uplift not only your own spirits but also those of others.";
}

if (month == 10&& day == 7){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,as the sun continues to grace your sign, your charming and diplomatic personality shines. Your ability to find balance and harmony in your life is your greatest asset. Use your natural peacemaking skills to foster cooperation and positive connections with others. While you tend to the needs of those around you, remember to take time for self-care and nurture your own well-being. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 10&& day == 8){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charming and diplomatic nature continues to guide you. The sun in your sign empowers you to find balance and harmony in your life. Your natural ability to see all sides of a situation makes you an excellent mediator and problem solver. Remember to prioritize self-care and well-being as you graciously attend to the needs of those around you. Your ability to create beauty and foster positive connections is your greatest strength.";
}

if (month == 10&& day == 9){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are accentuated. Your innate sense of fairness and justice empowers you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and problem-solving. However, don't forget to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 10&& day == 10){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra, as the sun continues its journey through your sign, your charming and diplomatic personality takes center stage. You're filled with a fresh sense of balance and harmony, ready to foster cooperation and positive connections with others. Your ability to see all sides of a situation and find common ground remains your greatest asset. Today, let your natural peacemaking skills guide you as you navigate both personal and professional interactions.";
}

if (month == 10&& day == 11){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are accentuated. Your innate sense of fairness and justice empowers you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and problem-solving. However, don't forget to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 10&& day == 12){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charm and diplomacy continue to shine. The sun in your sign empowers you to find balance and harmony in your life. Your innate sense of fairness and justice allows you to navigate conflicts with grace and tact. Remember to prioritize self-care and well-being as you tend to the needs of those around you. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 10&& day == 13){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are in the spotlight. Your innate sense of fairness and justice shines brightly, allowing you to find balance and harmony in your life. Use your ability to see all perspectives to your advantage, both in personal relationships and decision-making. However, don't forget to take time for self-care and relaxation. Your gracious and caring nature can uplift not only your own spirits but also those of others.";
}

if (month == 10&& day == 14){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra, as the sun continues to grace your sign, your charming and diplomatic personality shines. Your ability to find balance and harmony in your life is your greatest asset. Use your natural peacemaking skills to foster cooperation and positive connections with others. While you tend to the needs of those around you, remember to take time for self-care and nurture your own well-being. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 10&& day == 15){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charming and diplomatic nature continues to guide you. The sun in your sign empowers you to find balance and harmony in your life. Your natural ability to see all sides of a situation makes you an excellent mediator and problem solver. Remember to prioritize self-care and well-being as you graciously attend to the needs of those around you. Your ability to create beauty and foster positive connections is your greatest strength.";
}

if (month == 10&& day == 16){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are accentuated. Your innate sense of fairness and justice empowers you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and problem-solving. However, don't forget to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 10&& day == 17){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charm and diplomacy continue to shine. The sun in your sign empowers you to find balance and harmony in your life. Your innate sense of fairness and justice allows you to navigate conflicts with grace and tact. Remember to prioritize self-care and well-being as you tend to the needs of those around you. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 10&& day == 18){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,as the sun continues its journey through your sign, your charming and diplomatic personality takes center stage. You're filled with a fresh sense of balance and harmony, ready to foster cooperation and positive connections with others. Your ability to see all sides of a situation and find common ground remains your greatest asset. Today, let your natural peacemaking skills guide you as you navigate both personal and professional interactions.";
}

if (month == 10&& day == 19){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are accentuated. Your innate sense of fairness and justice empowers you to find balance in all aspects of your life. Use your ability to see all perspectives to your advantage, both in personal relationships and problem-solving. However, don't forget to prioritize self-care and well-being. Your gracious and caring nature can bring harmony not only to your surroundings but also to your inner world.";
}

if (month == 10&& day == 20){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,as the sun continues to grace your sign, your charming and diplomatic personality shines. Your ability to find balance and harmony in your life is your greatest asset. Use your natural peacemaking skills to foster cooperation and positive connections with others. While you tend to the needs of those around you, remember to take time for self-care and nurture your own well-being. Your ability to create beauty and cultivate positive relationships is your guiding light.";
}

if (month == 10&& day == 21){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,With the sun in your sign, Libra, your charm and diplomacy are in the spotlight. Your innate sense of fairness and justice shines brightly, allowing you to find balance and harmony in your life. Use your ability to see all perspectives to your advantage, both in personal relationships and decision-making. However, don't forget to take time for self-care and relaxation. Your gracious and caring nature can uplift not only your own spirits but also those of others.";
}

if (month == 10&& day == 22){
 
document.getElementById("photo").innerHTML ="<img src='./images/libra28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Libra,Today your charming and diplomatic nature continues to guide you. The sun in your sign empowers you to find balance and harmony in your life. Your natural ability to see all sides of a situation makes you an excellent mediator and problem solver. Remember to prioritize self-care and well-being as you graciously attend to the needs of those around you. Your ability to create beauty and foster positive connections is your greatest strength.";
}

if (month == 10 && day == 23){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,October 23 Scorpios are highly determined individuals who pursue their goals with unwavering focus.Passionate: They are known for their intense passion and can be deeply emotional in their relationships and pursuits.Scorpios tend to be secretive and mysterious, often revealing their true feelings only to a select few.People born on this date often possess a magnetic charm and charisma that draws others to them.Scorpios are known for their resilience and ability to bounce back from adversity.They have a strong sense of self and are not afraid to assert themselves when necessary.Scorpios can be prone to jealousy and possessiveness in relationships, which stems from their intense emotions.They have a strong intuition and can often sense things that others may not.";
}

if (month == 10 && day == 24){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian, They possess a remarkable ability to navigate complex situations with diplomacy and tact.October 24 Scorpios often have a magnetic charm that makes them captivating in social interactions.They approach their endeavors with unwavering passion, channeling their intensity into their pursuits.These Scorpios are exceptionally determined individuals, often achieving their goals through persistent efforts.They have a strong intuition, allowing them to grasp subtle nuances and unspoken emotions. Similar to many Scorpios, those born on October 24 can be secretive, selectively revealing their innermost thoughts and feelings.They display empathy and sensitivity, making them compassionate friends and confidants.Many individuals born on this date possess creative and artistic talents, excelling in various forms of artistic expression.";
}

if (month == 10 && day == 25){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,October 25 Scorpios have a remarkable intuitive ability, allowing them to discern hidden truths and motives.They approach life with a fervent passion, channeling their intense emotions into their pursuits and relationships.These Scorpios are marked by their unwavering determination and tenacity, which fuels their success.They often possess a magnetic and charismatic presence that draws others to them effortlessly.Similar to many Scorpios, those born on October 25 tend to be enigmatic, keeping their true thoughts and emotions concealed at times. They exhibit resilience and bounce back from adversity with strength, emerging from challenges even more determined.They demonstrate empathy and sensitivity, making them compassionate and understanding friends and partners.Many individuals born on this date have a penchant for delving into profound subjects and emotions, ";
}

if (month == 10 && day == 26){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,Scorpios born on October 26 possess an inborn insight that allows them to uncover hidden truths and decipher concealed motivations with exceptional acumen. They approach life with an intense and unwavering dedication, infusing their endeavors and relationships with a fiery commitment.These Scorpios often exude an irresistible charisma and magnetism that naturally draws people into their world. Similar to many Scorpios, those born on October 26 tend to envelop themselves in an enigmatic aura, carefully guarding their innermost thoughts and emotions.They exhibit remarkable resilience, akin to the mythical phoenix, rising stronger and more determined from life's adversities. Possessing a profound well of empathy and sensitivity, they make steadfast and compassionate friends and partners. Many individuals born on this date are intellectual explorers, delving deep into the realms of thought and emotion in pursuit of profound understanding.";
}

if (month == 10 && day == 27){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian, October 27 Scorpios possess an inborn intuition that allows them to perceive hidden truths and unravel concealed motivations with remarkable precision. They approach life with an unrelenting and passionate drive, infusing their pursuits and relationships with fervor. These Scorpios often exude a magnetic charisma and charm, drawing others toward them effortlessly. Similar to many Scorpios, those born on October 27 carry an air of complexity, preferring to keep their inner thoughts and emotions hidden.They exhibit a remarkable resilience, akin to the mythical phoenix, emerging from life's challenges even more determined.Possessing deep empathy and sensitivity, they make dependable and compassionate friends and partners.Many individuals born on this date are intellectual explorers, venturing into the depths of thought and emotion in search of profound insights.";
}

if (month == 10 && day == 28){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,October 28 Scorpios possess an inherent intuition that enables them to uncover hidden truths and decode concealed motivations with remarkable precision.They approach life with a relentless and fervent passion, infusing their pursuits and relationships with unwavering dedication. These Scorpios often exude a magnetic allure and charisma that naturally draws others into their sphere of influence. Similar to many Scorpios, those born on October 28 carry an air of complexity, preferring to keep their innermost thoughts and emotions veiled. They exhibit remarkable resilience, akin to the mythical phoenix, emerging from life's trials even more determined and invigorated. Possessing profound empathy and sensitivity, they make steadfast and understanding friends and partners. Many individuals born on this date are intellectual explorers, delving deep into the realms of thought and emotion in pursuit of profound understanding.";
} 

if (month == 10 && day == 29){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,October 29 Scorpios possess a natural gift for uncovering hidden truths and deciphering concealed motivations, unveiling the mysteries of life with an uncanny insight. They approach life with an enduring and unwavering passion, continuously fueling their pursuits and relationships with a burning fervor. These Scorpios often emit an aura of magnetic intrigue and allure, effortlessly drawing individuals into the depths of their captivating persona. Similar to many Scorpios, those born on October 29 exude a profound complexity, preferring to keep their innermost thoughts and emotions veiled beneath layers of intriguing enigma. They exhibit remarkable resilience, akin to a phoenix, emerging from life's challenges with a transformed spirit, evolving into more potent versions of themselves. Possessing deep empathy and a wellspring of wisdom, they become cherished sources of insight and unwavering support for friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into the intricate landscapes of thought and emotion to unearth profound revelations.";
}

if (month == 10 && day == 30){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,October 30 Scorpios possess an inherent ability to discern hidden truths and unravel the complexities of life, wielding their intuitive insights like a beacon of clarity.They approach life with a steadfast and unwavering enthusiasm, infusing their pursuits and relationships with a perpetual fire of determination. These Scorpios often radiate an enigmatic allure that draws people into their orbit, where they become entranced by the mysteries within. Similar to many Scorpios, those born on October 30 carry a multifaceted complexity, revealing only layers of themselves as they choose, like an intricate puzzle waiting to be solved.They exhibit remarkable resilience, akin to a chameleon, adapting and evolving in the face of life's challenges, always emerging with newfound strength.Possessing profound empathy and a wealth of wisdom, they become trusted advisors and empathetic listeners, offering insights and solace to friends and partners. Many individuals born on this date are intellectual adventurers, embarking on profound journeys of thought and emotion to unearth the hidden treasures of understanding.";
}

if (month == 10 && day == 31){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,October 31 Scorpios possess an innate ability to unveil hidden truths and decipher the intricacies of life, wielding their intuitive powers to illuminate the darkest corners of existence.They approach life with a perpetual and unwavering passion, maintaining a burning dedication that fuels their pursuits and relationships throughout their journey. These Scorpios often exude a mystical allure that beckons individuals into their mystical realm, where the mystical becomes their everyday. Similar to many Scorpios, those born on October 31 embody a multi-layered complexity, selectively revealing different facets of their character, much like a captivating mosaic. They display remarkable resilience, akin to a shapeshifter, adapting and transforming in response to life's challenges, emerging from each transformation with heightened strength.Possessing profound empathy and an abundance of insight, they become cherished confidants and sources of solace, offering profound wisdom to friends and partners. Many individuals born on this date are intellectual voyagers, setting sail into the uncharted seas of thought and emotion, where they discover the treasures of profound understanding. ";
}

if (month == 11 && day == 1){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 1 Scorpios possess an inborn ability to uncover hidden truths and decipher life's complexities, serving as torchbearers of enlightenment. They embrace life with a perpetual and unyielding passion, keeping the flames of dedication burning brightly in both their pursuits and relationships.These Scorpios often exude a magnetic enigma, drawing individuals into their mysterious aura, where they become entranced by the enigmatic forces at play. Similar to many Scorpios, those born on November 1 exhibit a multifaceted complexity, revealing different layers of their personality like a captivating mosaic.They display remarkable resilience, akin to a shape-shifter, adapting and transforming in response to life's challenges, emerging with renewed strength and purpose.Possessing profound empathy and a wellspring of wisdom, they become trusted advisors and empathetic listeners, offering insights and solace to friends and partners. Many individuals born on this date are intellectual pioneers, boldly embarking on journeys into the uncharted territories of thought and emotion, seeking profound revelations.";
}

if (month == 11 && day == 2){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 2 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, becoming beacons of clarity in the midst of obscurity.They approach life with an enduring and unwavering devotion, fueling their pursuits and relationships with an eternal flame of commitment.These Scorpios often exude a mystical magnetism, drawing individuals into their mystical realm, where the ordinary takes on an ethereal quality.Similar to many Scorpios, those born on November 2 exhibit a multi-layered complexity, revealing different facets of their character like an ever-evolving masterpiece. They display remarkable resilience, akin to a phoenix, emerging from life's challenges reborn and rejuvenated, with each setback serving as a catalyst for transformation. Possessing profound empathy and a vast wellspring of wisdom, they become cherished confidants and sources of solace, offering profound guidance to friends and partners.Many individuals born on this date are intellectual explorers, embarking on courageous journeys into the uncharted territories of thought and emotion, where they uncover the hidden gems of profound understanding.";
}

if (month == 11 && day == 3){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 3 Scorpios possess an inherent ability to gain profound insights, uncovering hidden truths and unraveling life's intricate mysteries with innate wisdom.They approach life with an enduring and unending passion, keeping the flames of determination alive in both their endeavors and relationships.These Scorpios often exude an enigmatic allure that draws individuals into their mysterious orbit, where they become captivated by the enigmatic charm.Similar to many Scorpios, those born on November 3 display multi-layered complexity, revealing different facets of their persona like a constantly evolving masterpiece.They exhibit remarkable resilience, akin to a phoenix, emerging stronger and renewed from life's challenges, each setback fostering transformation.Possessing deep empathy and a wellspring of wisdom, they become trusted confidants and sources of profound solace, offering valuable insights to friends and partners.Many individuals born on this date are intellectual explorers, boldly embarking on journeys into uncharted territories of thought and emotion, seeking profound revelations.";
}

if (month == 11 && day == 4){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 4 Scorpios possess an innate depth of understanding, allowing them to plumb the depths of hidden truths and unravel the intricacies of life with a natural insight. They approach life with an eternal and unwavering fervor, maintaining a perpetual flame of commitment that fuels both their pursuits and relationships.These Scorpios often exude a mysterious charm that draws individuals into their enigmatic world, where they become enchanted by the allure of the unknown.Similar to many Scorpios, those born on November 4 display a multifaceted complexity, revealing different layers of their character like an ever-evolving masterpiece.They exhibit remarkable resilience, akin to a phoenix, emerging from life's challenges reborn and revitalized, with each trial serving as a catalyst for metamorphosis.Possessing profound empathy and a wellspring of wisdom, they become trusted advisors and sources of profound solace, offering valuable guidance to friends and partners.Many individuals born on this date are intellectual adventurers, boldly journeying into the uncharted realms of thought and emotion, where they discover profound revelations.";
}

if (month == 11 && day == 5){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 5 Scorpios possess an innate gift for revealing hidden truths and deciphering the intricacies of life, becoming torchbearers of enlightenment.They approach life with an eternal and unwavering passion, maintaining a perpetual flame of dedication that fuels their pursuits and relationships.These Scorpios often exude a magnetic mystique that draws individuals into their enigmatic world, where they become entranced by the allure of the unknown.Similar to many Scorpios, those born on November 5 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, emerging from life's trials reborn and rejuvenated, with each challenge serving as a catalyst for transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering valuable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, seeking profound revelations.";
}

if (month == 11 && day == 6){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 6 Scorpios possess an inherent gift for illuminating hidden truths and deciphering life's intricate tapestry, serving as guiding lights through the darkness.They approach life with an eternal and unwavering intensity, maintaining an unquenchable fire of dedication that fuels both their pursuits and relationships. These Scorpios often exude a magnetic enigma that draws individuals into their enigmatic world, where they become spellbound by the mysteries that surround them.Similar to many Scorpios, those born on November 6 exhibit a multidimensional complexity, revealing different facets of their character like an ever-evolving masterpiece. They display remarkable resilience, akin to a shape-shifter, adapting and transforming in response to life's challenges, emerging with renewed strength and purpose. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual pioneers, boldly embarking on journeys into uncharted territories of thought and emotion, where they discover profound revelations.";
}

if (month == 11 && day == 7){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 7 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate fabric of life, acting as guiding stars in the night sky of existence. They approach life with eternal and unwavering vigor, maintaining a ceaseless flame of dedication that propels their pursuits and relationships forward. These Scorpios often exude a mystical magnetism that draws individuals into their enigmatic realm, where they become captivated by the aura of the arcane.Similar to many Scorpios, those born on November 7 exhibit a multifaceted complexity, revealing different facets of their character like a constantly evolving masterpiece.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual pioneers, boldly embarking on journeys into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 8){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 8 Scorpios possess an inherent gift for revealing hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of wisdom.They approach life with enduring and unwavering passion, maintaining a perpetual flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude magnetic intrigue, drawing individuals into their enigmatic world, where they become entranced by the captivating aura of mystery.Similar to many Scorpios, those born on November 8 display a multilayered complexity, revealing different facets of their character like a constantly shifting mosaic.They exhibit remarkable resilience, akin to a phoenix, emerging from life's challenges reborn and revitalized, with each setback serving as a catalyst for transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual explorers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 9){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 9 Scorpios possess an inborn ability to illuminate hidden truths and decipher the intricate patterns of life, acting as beacons of enlightenment.They approach life with enduring and unwavering dedication, maintaining an eternal flame of passion that fuels both their pursuits and relationships.These Scorpios often exude a magnetic enigma that draws individuals into their enigmatic realm, where they become spellbound by the captivating aura of mystery. Similar to many Scorpios, those born on November 9 exhibit a multifaceted complexity, revealing different facets of their character like a constantly evolving masterpiece.They display remarkable resilience, akin to a shape-shifter, adapting and transforming in response to life's challenges, emerging with renewed strength and purpose.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual pioneers, boldly embarking on journeys into uncharted territories of thought and emotion, where they uncover profound revelations.";
}

if (month == 11 && day == 10){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 10 Scorpios possess an inborn ability to illuminate hidden truths and decipher the intricate web of life, serving as guides through the labyrinth of existence.They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels their pursuits and relationships. These Scorpios often exude a mystical magnetism that draws individuals into their enigmatic world, where they become entranced by the captivating aura of the unknown. Similar to many Scorpios, those born on November 10 display a multifaceted complexity, revealing different facets of their character like an ever-evolving mosaic.They exhibit remarkable resilience, akin to a phoenix, emerging from life's challenges reborn and revitalized, with each setback serving as a catalyst for transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual explorers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 11){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 11 Scorpios possess an inborn ability to illuminate hidden truths and decipher the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude a mystical magnetism that draws individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 11 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations";
}

if (month == 11 && day == 12){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 12 Scorpios possess an innate gift for revealing hidden truths and deciphering life's intricate tapestry, acting as torchbearers of wisdom. They approach life with enduring and unwavering intensity, maintaining an eternal flame of dedication that propels their pursuits and relationships forward.These Scorpios often exude magnetic enigma, drawing individuals into their enigmatic realm, where they become spellbound by the captivating aura of mystery. Similar to many Scorpios, those born on November 12 exhibit a multifaceted complexity, revealing different facets of their character like a constantly evolving mosaic.They display remarkable resilience, akin to a phoenix, emerging from life's challenges reborn and revitalized, with each setback serving as a catalyst for transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual explorers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 13){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 13 Scorpios possess an inborn ability to illuminate hidden truths and decipher the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude a mystical magnetism that draws individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 13 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic. They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 14){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 14 Scorpios possess an innate gift for revealing hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering fervor, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 14 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, emerging from life's challenges reborn and revitalized, with each setback serving as a catalyst for profound transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual explorers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 15){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 15 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment. They approach life with enduring and unwavering zeal, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude a mystical magnetism that draws individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 15 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 16){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 16 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 16 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners. Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 17){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 17 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment. They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels both their pursuits and relationships. These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 17 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 18){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 18 Scorpios possess an innate gift for revealing hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown.Similar to many Scorpios, those born on November 18 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic. They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 19){
 
document.getElementById("photo").innerHTML ="<img src='./images/scoripo26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 19 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering passion, maintaining an eternal flame of dedication that fuels both their pursuits and relationships. These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become entranced by the captivating aura of the unknown. Similar to many Scorpios, those born on November 19 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation.Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 20){
//  
document.getElementById("photo").innerHTML ="<img src='./images/scoripo27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 20 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment. They approach life with enduring and unwavering fervor, maintaining an eternal flame of dedication that fuels both their pursuits and relationships. These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become spellbound by the captivating aura of the unknown.Similar to many Scorpios, those born on November 20 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 21){
//  
document.getElementById("photo").innerHTML ="<img src='./images/scoripo28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Scorpian,November 20 Scorpios possess an inherent gift for illuminating hidden truths and deciphering the intricate tapestry of life, acting as torchbearers of enlightenment.They approach life with enduring and unwavering fervor, maintaining an eternal flame of dedication that fuels both their pursuits and relationships.These Scorpios often exude mystical magnetism, drawing individuals into their enigmatic realm, where they become spellbound by the captivating aura of the unknown.Similar to many Scorpios, those born on November 20 exhibit a multifaceted complexity, revealing different facets of their character like a constantly shifting mosaic.They display remarkable resilience, akin to a phoenix, rising stronger and reborn from life's trials, with each challenge serving as a catalyst for profound transformation. Possessing profound empathy and a deep well of wisdom, they become trusted confidants and sources of profound solace, offering invaluable insights to friends and partners.Many individuals born on this date are intellectual pioneers, boldly venturing into uncharted territories of thought and emotion, where they unearth profound revelations.";
}

if (month == 11 && day == 22){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 22 Sagittarians possess an innate and boundless optimism that lights up their path in life, allowing them to embrace each day with enthusiasm. They have an insatiable curiosity that leads them on philosophical journeys, seeking to understand the deeper meaning behind life's mysteries. These Sagittarians are adventurous souls, always eager to embark on new experiences and explore uncharted territories, whether physically or intellectually.Similar to many Sagittarians, those born on November 22 exhibit multifaceted wisdom, offering diverse perspectives on various aspects of life.They display remarkable resilience and adaptability, able to adjust their course when faced with challenges, much like skilled navigators steering through rough waters.Possessing empathy and a deep well of understanding, they become trusted guides and mentors, offering valuable insights and support to those who seek their counsel. Many individuals born on this date are visionary thinkers, envisioning a future that's bright and filled with possibilities, and working diligently to make those dreams a reality.";
}

if (month == 11 && day == 23){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 23 Sagittarians possess an infectious enthusiasm that spreads like wildfire, infusing vitality into every aspect of their lives. They are relentless explorers of truth, driven by an insatiable hunger for knowledge, constantly delving into the profound mysteries of existence.These Sagittarians are pioneering spirits, ever-ready to embark on daring adventures and conquer uncharted territories, whether in the physical world or the realms of thought. Much like a prism refracting light, those born on November 23 radiate diverse wisdom, offering a kaleidoscope of insights that enrich the tapestry of life.They master the art of resilience and adaptability, navigating the turbulent seas of life with unwavering fortitude, akin to seasoned captains steering their ships through storms. With hearts overflowing with empathy, they naturally assume the role of compassionate leaders and mentors, extending a helping hand and offering profound guidance to those in need.Many individuals born on this date are architects of visionary dreams, crafting a future illuminated by boundless possibilities and tirelessly working to transform those dreams into reality.";
}

if (month == 11 && day == 24){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 24 Sagittarians are marked by an eternal wanderlust that fuels their zest for life, always seeking new horizons to explore. They are philosophical visionaries, driven by an insatiable quest for wisdom, constantly delving into the profound mysteries of existence with a visionary perspective.These Sagittarians are natural trailblazers of adventure, never shying away from thrilling experiences and boldly forging paths into the unknown, whether in the physical or intellectual realms.Much like a kaleidoscope of knowledge, those born on November 24 possess versatile wisdom, offering a spectrum of perspectives that illuminate various facets of life.They master the art of resilience and adaptability, navigating life's challenges with the poise of skilled captains steering their ships through turbulent waters. With hearts brimming with empathy, they naturally assume the role of empathetic leaders and mentors, providing profound guidance and support to those who seek their counsel.Many individuals born on this date are visionary creators, sculpting a future filled with possibilities and tirelessly working to manifest their dreams into reality.";
}

if (month == 11 && day == 25){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 25 Sagittarians possess an unwavering optimism that acts as a constant beacon, illuminating their path in life with a radiant positivity.They are philosophical pioneers, driven by an insatiable thirst for wisdom, embarking on intellectual journeys to uncover the profound truths hidden in the fabric of existence. These Sagittarians are fearless explorers, always eager to venture into new territories, whether they are geographical frontiers or uncharted territories of thought. Much like a multifaceted gem, those born on November 25 exhibit wisdom that gleams from various angles, offering a diverse spectrum of insights into the complexity of life.They master the art of adaptation and resilience, akin to skilled navigators who can steer their course with grace through life's turbulent waters. Possessing deep empathy and understanding, they naturally become trusted guides and mentors, providing valuable support and wisdom to those in search of guidance.Many individuals born on this date are visionary dreamers, envisioning a future filled with boundless possibilities and tirelessly working to manifest those dreams into reality.";
}

if (month == 11 && day == 26){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 26 Sagittarians are born with a spirit of boundless adventure, forever seeking the next thrilling experience that life has to offer.They are natural philosophical explorers, driven by an insatiable curiosity to uncover the profound truths that lie beneath the surface of existence. These Sagittarians are fearless trailblazers, unafraid to tread uncharted paths, whether they lead to physical frontiers or unexplored realms of thought.Much like a multifaceted gem, those born on November 26 possess wisdom that shimmers from various angles, providing a diverse array of insights into the complexities of life.They exhibit remarkable resilience and adaptability, akin to skilled navigators who can steer their course with grace through life's tumultuous waters.With their hearts brimming with empathy, they naturally step into the roles of trusted mentors and guides, offering profound guidance and support to those who seek their wisdom.Many individuals born on this date are visionary architects, envisioning a future filled with endless possibilities and working tirelessly to transform those dreams into reality.";
}

if (month == 11 && day == 27){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 27 Sagittarians are eternal explorers, forever curious about the world around them, and eager to dive headfirst into the mysteries of life. They are dedicated philosophical seekers, driven by an insatiable thirst for wisdom, relentlessly pursuing the deeper truths that underlie existence.These Sagittarians are fearless adventurers, always prepared to venture into uncharted territories, whether they be physical frontiers or unexplored realms of thought.Similar to a tapestry woven from various threads, those born on November 27 possess diverse wisdom, offering a spectrum of insights into the multifaceted nature of life. They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned navigators guiding their ships through turbulent waters. With hearts overflowing with empathy, they naturally step into roles as empathetic mentors and guides, extending a caring hand and providing profound guidance to those in need.Many individuals born on this date are visionary dreamweavers, crafting dreams of a future brimming with limitless possibilities and tirelessly working to turn those dreams into reality.";
}

if (month == 11 && day == 28){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 28 Sagittarians are perpetual explorers, always seeking the next adventure and eager to dive headfirst into the endless possibilities of life. They are philosophical visionaries, driven by an insatiable thirst for wisdom, relentlessly pursuing the deeper truths that underlie the tapestry of existence.These Sagittarians are fearless pioneers, ready to blaze trails into uncharted territories, whether they be geographical frontiers or unexplored realms of thought. Much like a kaleidoscope of knowledge, those born on November 28 possess a diverse and ever-shifting wisdom, offering a multitude of perspectives on the complexities of life.They excel in the art of adaptation and resilience, navigating life's challenges with the finesse of seasoned captains guiding their ships through turbulent waters. With hearts overflowing with empathy, they naturally become empathetic guides and mentors, extending a helping hand and providing profound guidance to those who seek their wisdom. Many individuals born on this date are visionary architects, weaving dreams of a future filled with limitless potential and tirelessly working to manifest those dreams into reality.";
}

if (month == 11 && day == 29){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 29 Sagittarians are ever-curious wanderers, forever drawn to the allure of new experiences, exploring the world with unbridled enthusiasm.They are dedicated philosophical explorers, on a constant quest for wisdom, tirelessly seeking the profound truths that lie beneath the surface of existence. These Sagittarians are fearless trailblazers, unafraid to venture into uncharted territories, whether they be geographical frontiers or unexplored landscapes of thought.Similar to a mosaic of knowledge, those born on November 29 possess versatile wisdom, offering a spectrum of insights into the intricate web of life.They excel in the art of resilience and adaptability, navigating life's challenges with the skill of seasoned navigators guiding their ships through tumultuous waters.With hearts brimming with empathy, they naturally take on the roles of empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in need.Many individuals born on this date are visionary dreamers, weaving dreams of a future filled with boundless possibilities and working tirelessly to turn those dreams into reality.";
}

if (month == 11 && day == 30){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,November 30 Sagittarians are eternal adventurers, forever seeking the thrill of new experiences, and embracing life with an unquenchable spirit of exploration. They are passionate philosophical questers, driven by an insatiable thirst for wisdom, delving into the profound mysteries of existence with unwavering dedication. These Sagittarians are fearless pioneers, always ready to lead the way into uncharted territories, whether they are geographic frontiers or unexplored realms of thought. Much like a prism refracting light, those born on November 30 possess wisdom that shimmers from various angles, offering a diverse spectrum of insights into the complexities of life.They master the art of adaptation and resilience, akin to skilled navigators steering through life's turbulent waters with grace and poise. With hearts brimming with empathy, they naturally assume the roles of empathetic mentors and guides, providing profound guidance and support to those who seek their wisdom.Many individuals born on this date are visionary creators, sculpting dreams of a future teeming with limitless possibilities and tirelessly working to bring those dreams to fruition."; 
}
if (month == 12 && day == 1){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians, December 1 Sagittarians are perpetual explorers, driven by an insatiable curiosity that fuels their constant search for new adventures and knowledge. They are philosophical pioneers, embarking on intellectual journeys to uncover the profound truths that shape the universe and human existence. These Sagittarians are fearless adventurers, always ready to venture into the unknown, whether it's exploring distant lands or delving into uncharted realms of thought.Similar to a kaleidoscope of wisdom, those born on December 1 possess a diverse array of insights that offer unique perspectives on life's intricacies. They excel in the art of adaptation and resilience, navigating life's challenges with the finesse of skilled sailors steering through turbulent waters.With hearts overflowing with empathy, they naturally become trusted guides and mentors, offering valuable support and wisdom to those in need.Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with endless possibilities and working diligently to turn those dreams into reality.";
}

if (month == 12 && day == 2){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 2 Sagittarians are ever-curious wanderers, driven by an insatiable appetite for new experiences, continually seeking out adventures that enrich their lives.They are committed philosophical explorers, embarking on intellectual journeys to unearth the profound truths that underlie existence, constantly expanding their understanding.These Sagittarians are fearless trailblazers, unafraid to lead the way into uncharted territories, whether in the physical world or the realms of thought.Similar to a mosaic of wisdom, those born on December 2 possess versatile insights, offering a diverse spectrum of perspectives on the intricacies of life. They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned captains steering their ships through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a helping hand and providing profound guidance to those in search of wisdom. Many individuals born on this date are visionary dreamers, weaving dreams of a future filled with boundless potential and tirelessly working to turn those dreams into reality.";
}

if (month == 12 && day == 3){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 3 Sagittarians are perpetual adventurers, driven by an unquenchable thirst for new experiences, always seeking to add exciting chapters to their life's story.They are dedicated philosophical questers, embarking on intellectual journeys to uncover the profound truths that underlie the fabric of existence, continually expanding their intellectual horizons.These Sagittarians are fearless explorers, ready to tread where others hesitate, whether it's exploring distant lands or pushing the boundaries of conventional thought. Much like a kaleidoscope of wisdom, those born on December 3 possess a diverse range of insights, offering a multifaceted view of life's complexities.They excel in the art of adaptation and resilience, navigating life's twists and turns with the grace of seasoned navigators steering their course through tumultuous waters.With hearts brimming with empathy, they naturally become empathetic guides and mentors, providing valuable support and wisdom to those seeking their counsel. Many individuals born on this date are visionary dreamers, crafting dreams of a future filled with limitless possibilities and working diligently to bring those dreams to fruition. ";
}

if (month == 12 && day == 4){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 4 Sagittarians are eternal explorers, forever drawn to the thrill of new experiences, eagerly seeking out adventures to quench their insatiable curiosity. They are passionate philosophical pioneers, embarking on intellectual journeys to unearth the profound truths that shape the universe and the human condition.These Sagittarians are fearless trailblazers, always ready to lead the way into uncharted territories, whether they are geographical frontiers or unexplored realms of thought.Similar to a multifaceted gem, those born on December 4 possess wisdom that shimmers from various angles, offering a diverse spectrum of insights into life's intricacies.They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned navigators steering through turbulent waters.With hearts overflowing with empathy, they naturally become empathetic mentors and guides, offering valuable support and wisdom to those in need.Many individuals born on this date are visionary creators, weaving dreams of a future filled with boundless possibilities and working tirelessly to bring those dreams to fruition. ";
}

if (month == 12 && day == 5){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 5 Sagittarians are perpetual adventurers, with an unwavering thirst for new experiences, always eager to embark on exciting journeys that expand their horizons.They are dedicated philosophical explorers, driven by an insatiable curiosity to uncover the profound truths that lie beneath the surface of life, constantly seeking to broaden their intellectual horizons.These Sagittarians are fearless trailblazers, unafraid to step into uncharted territories, whether they are physical frontiers or unexplored realms of thought.Similar to a mosaic of knowledge, those born on December 5 possess versatile wisdom, offering a diverse range of insights into the complexities of existence. They excel in the art of adaptation and resilience, navigating life's twists and turns with the finesse of skilled captains steering their ships through turbulent waters. With hearts brimming with empathy, they naturally assume the roles of empathetic mentors and guides, extending a helping hand and providing profound guidance to those in need. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with endless possibilities and working tirelessly to bring those dreams to fruition.";
}

if (month == 12 && day == 6){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 6 Sagittarians are eternal seekers, constantly on a quest for new knowledge and experiences, driven by an insatiable curiosity about the world.They are philosophical navigators, charting intellectual waters to uncover profound truths and insights that illuminate the complexities of existence.These Sagittarians are fearless explorers, always ready to venture into uncharted territories, whether they be geographical frontiers or unexplored domains of thought.Similar to a multifaceted jewel, those born on December 6 possess wisdom that gleams from various angles, providing a rich tapestry of perspectives on life.They excel in the art of adaptation and resilience, navigating life's challenges with the dexterity of seasoned navigators guiding their ships through turbulent seas.With hearts brimming with empathy, they naturally assume the roles of empathetic guides and mentors, offering valuable support and profound insights to those seeking their counsel. Many individuals born on this date are visionary dreamers, weaving dreams of a future filled with boundless potential and tirelessly working to manifest those dreams into reality.";
}

if (month == 12 && day == 7){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 7 Sagittarians possess an innate spirit of adventure, always eager to explore new horizons and seek thrilling experiences that invigorate their lives.They are dedicated philosophical explorers, driven by an insatiable hunger for wisdom, relentlessly probing the depths of existence to uncover profound truths. These Sagittarians are fearless pioneers, boldly forging new paths in life, whether it's in the physical world or the uncharted territories of thought. Much like a tapestry woven from various threads, those born on December 7 possess diverse wisdom, offering a rich spectrum of insights into the intricacies of life. They excel in the art of resilience and adaptability, navigating life's challenges with the finesse of skilled navigators steering their course through turbulent waters.With hearts brimming with empathy, they naturally become empathetic guides and mentors, offering profound support and wisdom to those who seek their guidance. Many individuals born on this date are visionary thinkers, crafting dreams of a future filled with boundless possibilities and tirelessly working to make those dreams a reality.";
}

if (month == 12 && day == 8){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 8 Sagittarians are ever-curious explorers, their insatiable curiosity driving them to constantly seek out new adventures and expand their horizons. They are philosophical pioneers, embarking on intellectual journeys to uncover profound truths and insights, continuously pushing the boundaries of knowledge.These Sagittarians are fearless adventurers, always ready to venture into uncharted territories, whether they be physical landscapes or unexplored realms of thought.Much like a kaleidoscope of wisdom, those born on December 8 possess versatile insights, offering a diverse range of perspectives on the complexities of life. They excel in the art of adaptation and resilience, navigating life's challenges with the grace of seasoned navigators steering their course through turbulent waters.With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in need.Many individuals born on this date are visionary creators, weaving dreams of a future filled with boundless possibilities and tirelessly working to bring those dreams to fruition.";
}

if (month == 12 && day == 9){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 9 Sagittarians are eternal explorers, forever drawn to the allure of new experiences, embracing life with unbridled enthusiasm and a thirst for adventure.They are philosophical navigators, charting intellectual courses to uncover profound truths and insights, continually broadening their understanding of the world. These Sagittarians are fearless pioneers, unafraid to forge new paths in life, whether in the physical realm, exploring new places, or the uncharted territories of thought.Similar to a multifaceted gem, those born on December 9 possess wisdom that shines from various angles, offering a diverse spectrum of perspectives on life's complexities.They excel in the art of adaptation and resilience, navigating life's challenges with the poise of skilled navigators steering their ships through turbulent waters.With hearts brimming with empathy, they naturally become empathetic mentors and guides, offering valuable support and profound guidance to those in search of wisdom.Many individuals born on this date are visionary dreamers, weaving dreams of a future filled with boundless possibilities and working tirelessly to make those dreams a reality";
}

if (month == 12 && day == 10){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 10 Sagittarians are born with an innate sense of adventure, always seeking the thrill of new experiences and embracing life with boundless enthusiasm.They are natural philosophical explorers, driven by an insatiable curiosity to uncover the profound truths that underlie existence, continually expanding their intellectual horizons. These Sagittarians are fearless trailblazers, unafraid to pave their own paths in life, whether it's in the physical world or the uncharted realms of thought.: Much like a mosaic of wisdom, those born on December 10 possess versatile insights, offering a diverse spectrum of perspectives on the intricacies of life.They excel in the art of adaptation and resilience, navigating life's twists and turns with the skill of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic guides and mentors, extending a compassionate hand and providing profound guidance to those in need.Many individuals born on this date are visionary dreamers, crafting dreams of a future filled with boundless possibilities and tirelessly working to bring those dreams to fruition.";
}

if (month == 12 && day == 11){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 11 Sagittarians are eternal wanderers, forever captivated by the allure of new experiences, embracing life's adventures with boundless enthusiasm. They are dedicated philosophical explorers, embarking on intellectual journeys to uncover profound truths and insights that enrich their understanding of the world. These Sagittarians are fearless trailblazers, unafraid to forge their own paths in life, whether they lead to physical frontiers or unexplored territories of thought. Similar to a kaleidoscope of wisdom, those born on December 11 possess a diverse range of insights, offering a rich tapestry of perspectives on the intricacies of existence.They excel in the art of adaptation and resilience, navigating life's challenges with the grace of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in need. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and tirelessly working to bring those dreams to fruition.";
}

if (month == 12 && day == 12){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 12 Sagittarians are innate explorers, always driven by a deep sense of curiosity, eager to venture into uncharted territories and embrace the wonders of life. They are philosophical pioneers, embarking on intellectual quests to uncover profound truths and insights, continuously expanding their understanding of the universe. These Sagittarians are fearless adventurers, unafraid to tread where others hesitate, whether it's discovering new places or exploring the uncharted realms of thought. Much like a mosaic of knowledge, those born on December 12 possess versatile wisdom, offering a diverse array of perspectives on the intricacies of existence.They excel in the art of adaptation and resilience, navigating life's twists and turns with the skill of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic guides and mentors, offering valuable support and profound guidance to those in search of wisdom. Many individuals born on this date are visionary dreamers, weaving dreams of a future filled with boundless possibilities and tirelessly working to manifest those dreams into reality.";
}

if (month == 12 && day == 13){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians, December 13 Sagittarians are innate adventurers, born with an insatiable thirst for new experiences, constantly seeking out uncharted territories and embracing the wonders of life. They are natural philosophical explorers, driven by an insatiable curiosity to uncover profound truths and insights, tirelessly delving into the mysteries of existence. These Sagittarians are fearless trailblazers, always ready to lead the way into the unknown, whether it's discovering new places or boldly venturing into unexplored realms of thought. Much like a multifaceted gem, those born on December 13 possess versatile wisdom, offering a rich spectrum of perspectives on the intricacies of life. They excel in the art of adaptation and resilience, navigating life's challenges with the grace of skilled navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in search of wisdom.: Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and working tirelessly to bring those dreams to fruition.";
}

if (month == 12 && day == 14){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians, December 14 Sagittarians are eternal explorers, forever captivated by the allure of new experiences, eagerly embracing life's adventures with boundless enthusiasm. They are philosophical pioneers, embarking on intellectual quests to unearth profound truths and insights, continually pushing the boundaries of knowledge. These Sagittarians are fearless adventurers, unafraid to blaze new trails in life, whether they lead to physical frontiers or unexplored realms of thought. Much like a kaleidoscope of wisdom, those born on December 14 possess a diverse array of insights, offering a vibrant tapestry of perspectives on the intricacies of existence.They excel in the art of adaptation and resilience, navigating life's challenges with the grace of skilled navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic guides and mentors, extending a compassionate hand and providing profound guidance to those in need. Many individuals born on this date are visionary dreamers, weaving dreams of a future filled with boundless possibilities and tirelessly working to manifest those dreams into reality.";
}

if (month == 12 && day == 15){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 15 Sagittarians are innate explorers, born with an unquenchable thirst for new experiences, always seeking out uncharted territories to embark on thrilling adventures. They are natural philosophical pioneers, driven by an insatiable curiosity to uncover profound truths and insights, dedicating themselves to the relentless pursuit of wisdom. These Sagittarians are fearless trailblazers, unafraid to lead the way into uncharted territories, whether they are geographical frontiers or the unexplored realms of thought. Much like a kaleidoscope of knowledge, those born on December 15 possess versatile wisdom, offering a diverse array of perspectives on the complexities of life. They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in search of wisdom. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and working tirelessly to bring those dreams to fruition.";
}

if (month == 12 && day == 16){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 16 Sagittarians are eternal adventurers, forever captivated by the allure of new experiences, eagerly embracing life's journeys with boundless enthusiasm.They are philosophical pioneers, embarking on intellectual quests to unearth profound truths and insights, continually pushing the boundaries of knowledge. These Sagittarians are fearless trailblazers, unafraid to blaze new trails in life, whether they lead to physical frontiers or uncharted realms of thought. Much like a kaleidoscope of wisdom, those born on December 16 possess a diverse array of insights, offering a vibrant tapestry of perspectives on the intricacies of existence. They excel in the art of adaptation and resilience, navigating life's challenges with the grace of skilled navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic guides and mentors, extending a compassionate hand and providing profound guidance to those in need. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and tirelessly working to manifest those dreams into reality.";
}

if (month == 12 && day == 17){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 17 Sagittarians are innate explorers, born with an unquenchable thirst for new experiences, always seeking out uncharted territories to embark on thrilling adventures. They are natural philosophical pioneers, driven by an insatiable curiosity to uncover profound truths and insights, dedicating themselves to the relentless pursuit of wisdom. These Sagittarians are fearless trailblazers, unafraid to lead the way into uncharted territories, whether they are geographical frontiers or the unexplored realms of thought.Much like a kaleidoscope of knowledge, those born on December 17 possess versatile wisdom, offering a diverse array of perspectives on the complexities of life. They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in search of wisdom.Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and working tirelessly to bring those dreams to fruition.";
}

if (month == 12 && day == 18){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius26.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 18 Sagittarians are eternal explorers, forever captivated by the allure of new experiences, eagerly embracing life's adventures with boundless enthusiasm. They are philosophical pioneers, embarking on intellectual quests to unearth profound truths and insights, continually pushing the boundaries of knowledge.These Sagittarians are fearless trailblazers, unafraid to blaze new trails in life, whether they lead to physical frontiers or uncharted realms of thought.: Much like a kaleidoscope of wisdom, those born on December 18 possess a diverse array of insights, offering a vibrant tapestry of perspectives on the intricacies of existence.They excel in the art of adaptation and resilience, navigating life's challenges with the grace of skilled navigators steering their course through turbulent waters.With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in need. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and tirelessly working to manifest those dreams into reality.";
}

if (month == 12 && day == 19){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 19 Sagittarians are innate explorers, born with an unquenchable thirst for new experiences, always seeking out uncharted territories to embark on thrilling adventures.They are natural philosophical pioneers, driven by an insatiable curiosity to uncover profound truths and insights, dedicating themselves to the relentless pursuit of wisdom. These Sagittarians are fearless trailblazers, unafraid to lead the way into uncharted territories, whether they are geographical frontiers or the unexplored realms of thought. Much like a kaleidoscope of knowledge, those born on December 19 possess versatile wisdom, offering a diverse array of perspectives on the complexities of life. They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in search of wisdom. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and tirelessly working to bring those dreams to fruition.";
}

if (month == 12 && day == 20){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 20 Sagittarians are eternal explorers, forever captivated by the allure of new experiences, eagerly embracing life's adventures with boundless enthusiasm. They are philosophical pioneers, embarking on intellectual quests to unearth profound truths and insights, continually pushing the boundaries of knowledge.These Sagittarians are fearless trailblazers, unafraid to blaze new trails in life, whether they lead to physical frontiers or uncharted realms of thought. Much like a kaleidoscope of wisdom, those born on December 20 possess a diverse array of insights, offering a vibrant tapestry of perspectives on the intricacies of existence.They excel in the art of adaptation and resilience, navigating life's challenges with the grace of skilled navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in need. Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and tirelessly working to manifest those dreams into reality.";
}

if (month == 12 && day == 21){
//  = ("Sagittarius.");
document.getElementById("photo").innerHTML ="<img src='./images/sagittarius29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Sagittarians,December 21 Sagittarians are innate explorers, born with an unquenchable thirst for new experiences, always seeking out uncharted territories to embark on thrilling adventures.They are natural philosophical pioneers, driven by an insatiable curiosity to uncover profound truths and insights, dedicating themselves to the relentless pursuit of wisdom.: These Sagittarians are fearless trailblazers, unafraid to lead the way into uncharted territories, whether they are geographical frontiers or the unexplored realms of thought. Much like a kaleidoscope of knowledge, those born on December 21 possess versatile wisdom, offering a diverse array of perspectives on the complexities of life. They excel in the art of adaptation and resilience, navigating life's challenges with the skill of seasoned navigators steering their course through turbulent waters. With hearts brimming with empathy, they naturally become empathetic mentors and guides, extending a compassionate hand and providing profound guidance to those in search of wisdom.Many individuals born on this date are visionary dreamweavers, crafting dreams of a future filled with boundless possibilities and tirelessly working to bring those dreams to fruition.";
}

if(month == 12 && day == 22 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your disciplined and responsible nature will shine. You may find yourself taking charge of tasks and responsibilities effortlessly.Your determination and ambition will be your driving force, helping you tackle challenges with ease.While you have a strong work ethic, don't forget to take some time for self-care and relaxation. Balancing work and personal life is essential for your overall well-being.In relationships, your loyalty and dedication will be appreciated by those close to you. Consider expressing your emotions openly to strengthen your bonds.";
}

if(month == 12 && day == 23 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn1.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your practical and responsible nature will guide your actions. You'll approach tasks with efficiency and effectiveness.Your ambition is likely to be at its peak, making it a great day to pursue your goals and aspirations. Focus on long-term plans and career advancements.However, be mindful of potential work-related stress. Balance your professional endeavors with moments of relaxation and self-care.In your relationships, your loyalty and dedication will be evident. Take time to connect with loved ones and share your feelings openly to deepen your bonds.";
}

if(month == 12 && day == 24 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn2.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will shine. You'll approach your tasks and obligations with efficiency and precision.Your ambition will drive you to pursue your goals, and you may find opportunities for career advancement or recognition. While you're hardworking, remember to take some time for self-care and relaxation to maintain your well-being.In your relationships, your loyalty and dedication will be appreciated by those close to you. Express your feelings openly to strengthen your bonds.";
}

if(month == 12 && day == 25 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn3.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will be your guiding force. You'll approach your tasks and commitments with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal goals. Keep pushing forward with confidence.It's essential to maintain a balance between your professional endeavors and self-care. Take some time to recharge and relax.In your relationships, your loyalty and dedication will shine. Be open and communicative with loved ones to deepen your connections.";
}

if(month == 12 && day == 26){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn4.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your practical and responsible nature will guide your actions. You'll tackle tasks and responsibilities with efficiency and dedication. Your ambition is likely to be strong, driving you to work diligently towards your goals. This could lead to positive developments in your career or personal life. It's important to remember self-care amidst your hard work. Take breaks and find moments of relaxation to maintain your overall well-being.In your relationships, your loyalty and dedication will be appreciated. Open and honest communication will strengthen your connections with loved ones.";
}

if(month == 12 && day == 27 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn5.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will be your strength. You'll approach your tasks with precision and a strong work ethic.Your ambition and determination are likely to lead you toward progress, whether in your career or personal endeavors.Don't forget to take breaks and engage in self-care to maintain your well-being. Balancing work and relaxation is key.In your relationships, your loyalty and dedication will shine. Express your feelings openly to deepen your connections with loved ones.";
}

if(month == 12 && day == 28 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn6.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will serve you well. You'll approach your tasks with precision and dedication.Your ambition and determination may open doors to opportunities in your career or personal life. Stay focused on your long-term goals.Remember to balance your hard work with self-care. Taking breaks and finding moments of relaxation will help maintain your well-being.In your relationships, your loyalty and dedication will be appreciated.Be open and communicative with loved ones to strengthen your connections.";
}

if(month == 12 && day == 29 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn7.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will be your guiding light. Approach your tasks with determination and precision. Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Keep your goals in focus.It's important to find a balance between your professional commitments and self-care. Take time for relaxation and rejuvenation.In your relationships, your loyalty and dedication will shine. Express your feelings openly to nurture your connections with loved ones.";
}

if(month == 12 && day == 30 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn8.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn, Today, your responsible and practical nature will be your guiding force. You'll tackle your tasks with precision and dedication.Your ambition and determination may lead you to significant achievements in your career or personal pursuits. Stay focused on your goals.It's crucial to balance your hard work with self-care. Take moments for relaxation and rejuvenation to maintain your well-being.In your relationships, your loyalty and dedication will shine. Express your feelings openly to deepen your connections with loved ones.";
}

if(month == 12 && day == 31 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn9.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn, Today, your responsible and disciplined nature will guide your actions. Approach your tasks with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal goals. Stay focused on what you want to achieve.It's essential to find a balance between your professional commitments and self-care. Take some time to relax and recharge.In your relationships, your loyalty and dedication will be valued. Be open and communicative with loved ones to strengthen your bonds.";
}

if(month == 1 && day == 1 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn10.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will shine brightly. You'll approach your tasks and obligations with precision and dedication.Your ambition and determination are likely to drive you toward notable achievements in your career or personal aspirations. Stay focused on your goals.Remember to balance your hard work with self-care. Taking moments for relaxation and rejuvenation will maintain your overall well-being.In your relationships, your loyalty and dedication will be appreciated. Express your feelings openly to nurture your connections with loved ones.";
}

if(month == 1 && day == 2){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn11.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will be your guiding strength. Approach your tasks with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Stay focused on your objectives.It's essential to balance your professional commitments with self-care. Take moments for relaxation and rejuvenation to maintain your overall well-being.In your relationships, your loyalty and dedication will shine. Open and honest communication will strengthen your bonds with loved ones.";
}

if(month == 1 && day == 3 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn12.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will be your guiding light. You'll approach your tasks with precision and dedication.Your ambition and determination are likely to lead to significant achievements in your career or personal goals. Stay focused on your aspirations.It's important to find a balance between your professional commitments and self-care. Take time to relax and recharge to maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Be open and communicative with loved ones to strengthen your connections.";
}

if(month == 1 && day == 4 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn13.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will guide your actions. You'll tackle tasks and responsibilities with determination and precision.Your ambition and strong work ethic may lead to notable progress in your career or personal endeavors. Stay focused on your goals.Don't forget to balance your hard work with self-care. Taking breaks and engaging in relaxation will help maintain your overall well-being. In your relationships, your loyalty and dedication will shine. Express your feelings openly to deepen your connections with loved ones.";
}

if(month == 1 && day == 5 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn14.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will be your strength. You'll approach your tasks with precision and dedication.Your ambition and determination are likely to lead you to notable achievements in your career or personal goals. Stay focused on what you want to accomplish.It's essential to find a balance between your professional commitments and self-care. Taking moments for relaxation and rejuvenation will maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Open and honest communication will strengthen your bonds with loved ones.";
}

if(month == 1 && day == 6 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn15.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will guide your actions. You'll approach your tasks with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Keep your goals in focus.Remember to balance your hard work with self-care. Taking breaks and engaging in relaxation will help maintain your overall well-being.In your relationships, your loyalty and dedication will shine. Be open and communicative with loved ones to strengthen your connections.";
}

if(month == 1 && day == 7 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn16.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will be your guiding force. Approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead you to significant achievements in your career or personal goals. Stay focused on your objectives.It's essential to balance your professional commitments with self-care. Take time to relax and rejuvenate to maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Express your feelings openly to nurture your connections with loved ones.";
}

if(month == 1 && day == 8 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn17.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will be your strength. You'll approach your tasks and obligations with determination and precision. Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Stay focused on your goals.Don't forget to balance your hard work with self-care. Taking moments for relaxation and rejuvenation will help maintain your overall well-being.In your relationships, your loyalty and dedication will shine. Express your feelings openly to deepen your connections with loved ones.";
}

if(month == 1 && day == 9 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn18.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will guide your actions. Approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead to notable progress in your career or personal pursuits. Stay focused on your objectives.It's important to find a balance between your professional commitments and self-care. Take some time to relax and rejuvenate to maintain your overall well-being. In your relationships, your loyalty and dedication will be appreciated. Be open and communicative with loved ones to strengthen your bonds.";
}

if(month == 1 && day == 10 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn19.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will serve you well. Approach your tasks and obligations with determination and precision. Your ambition and strong work ethic may lead to significant progress in your career or personal goals. Stay focused on your aspirations.Don't forget the importance of self-care. Taking breaks and engaging in relaxation will help maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Express your feelings openly to nurture your connections with loved ones.";
}

if(month == 1 && day == 11 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn20.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will shine. You'll approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead you to significant progress in your career or personal goals. Stay focused on your objectives. It's essential to find a balance between your professional commitments and self-care. Taking moments for relaxation and rejuvenation will maintain your overall well-being.In your relationships, your loyalty and dedication will be appreciated. Open and honest communication will strengthen your bonds with loved ones.";
}

if(month == 1 && day == 12 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn21.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn, Today, your responsible and disciplined nature will be your guiding force. Approach your tasks with determination and precision. Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Stay focused on your goals.It's crucial to balance your professional commitments with self-care. Take moments for relaxation and rejuvenation to maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Be open and communicative with loved ones to strengthen your connections.";
}

if(month == 1 && day == 13 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn22.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will shine. You'll approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead you to significant progress in your career or personal goals. Stay focused on your objectives. Remember the importance of self-care. Taking breaks and engaging in relaxation will help maintain your overall well-being.In your relationships, your loyalty and dedication will be appreciated. Express your feelings openly to nurture your connections with loved ones.";
} 

if(month == 1 && day == 14 ){
//  = ("Capricorn.");
document.getElementById("photo").innerHTML ="<img src='./images/capricorn23.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will guide your actions. You'll tackle tasks and obligations with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Stay focused on your goals.It's important to find a balance between your professional commitments and self-care. Take some time to relax and rejuvenate to maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Be open and communicative with loved ones to strengthen your bonds.";
}

if(month == 1 && day == 15 ){
document.getElementById("photo").innerHTML ="<img src='./images/capricorn24.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will be your guiding force. You'll approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead you to notable progress in your career or personal pursuits. Stay focused on your objectives.It's essential to balance your professional commitments with self-care. Taking moments for relaxation and rejuvenation will help maintain your overall well-being.In your relationships, your loyalty and dedication will be appreciated. Be open and communicative with loved ones to strengthen your connections.";
}

if(month == 1 && day == 16 ){
document.getElementById("photo").innerHTML ="<img src='./images/capricorn25.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will be your guiding force. You'll tackle tasks and obligations with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal endeavors. Stay focused on your goals.It's crucial to balance your professional commitments with self-care. Taking moments for relaxation and rejuvenation will maintain your overall well-being. In your relationships, your loyalty and dedication will shine. Be open and communicative with loved ones to strengthen your bonds.";
}

if(month == 1 && day == 17 ){
document.getElementById("photo").innerHTML ="<img src='./images/capricorn29.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will guide your actions. You'll approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead you to notable progress in your career or personal goals. Stay focused on your objectives.It's essential to find a balance between your professional commitments and self-care. Take moments for relaxation and rejuvenation to maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Open and honest communication will strengthen your bonds with loved ones.";
}

if(month == 1 && day == 18 ){
document.getElementById("photo").innerHTML ="<img src='./images/capricorn27.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and disciplined nature will be your guiding strength.Approach your tasks with determination and precision.Your ambition and strong work ethic are likely to lead you to significant progress in your career or personal endeavors. Stay focused on your goals. Remember the importance of self-care. Taking breaks and engaging in relaxation will help maintain your overall well-being.In your relationships, your loyalty and dedication will be appreciated. Be open and communicative with loved ones to strengthen your bonds.";
}

if(month == 1 && day == 19 ){
document.getElementById("photo").innerHTML ="<img src='./images/capricorn28.jpg' id='pic'>";
document.getElementById("persona").innerHTML ="Dear Capricorn,Today, your responsible and practical nature will shine. You'll approach your tasks with determination and precision.Your ambition and strong work ethic may lead to significant progress in your career or personal goals. Stay focused on your objectives. It's essential to balance your professional commitments with self-care. Taking moments for relaxation and rejuvenation will maintain your overall well-being.In your relationships, your loyalty and dedication will be valued. Express your feelings openly to deepen your connections with loved ones.";
}

else if (month>12||day>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;








