const sign1 = sessionStorage.getItem("sign1");
const sign2 = sessionStorage.getItem("sign2");

const div1 = document.querySelector(".sign1");
const div2 = document.querySelector(".sign2");
const para = document.querySelector(".para");

div1.innerHTML = sign1;
div2.innerHTML = sign2;

        if(sign1=="Aries" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Aries")
        {
           para.innerText = "There is never a dull moment between an Aries and Aquarius, which makes their relationship extremely exciting.\nBoth signs are insanely adventurous, so they are always up for anything--in and out of the bedroom.\nThey enjoy trying new things and make sure to have a good time in the process.\nThey especially love doing things together as  a team.While other couples might grow tired of one another,these two stay strong and always enjoy being others.\nBut they both know the importance of hanging out with friends and having some solo time,too."
        }
        else if (sign1=="Taurus" && sign2=="Cancer" || sign1=="Cancer" && sign2=="Taurus")
        {
          para.innerText = "Taurus and Cancer seriously get each other.These two zodiac signs work well with one another because they hold a tight connection both physically and emotionally.They understand each other inside and out, which helps allow their bond to ignite even more as the relationship grows. There's also a great appreciation for one another, as both signs value who the other is and what they have to offer.This couple is powerful because they each know how to complement the other with ease, making for a long lasting love that's hard to come by."
        }
        else if(sign1=="Gemini" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Gemini")
        {
           para.innerText = "A Gemini and Aquarius have a crazy mental and emotional connection.They get each other to the fullest,like they have known one another for years even if it's only been months (or weeks).These two signs are also big on creativity and ideas.While they are very in tune with on another and enjoy spending as much time toghther as possible, they also enjoy their independence.But this doesn't weem to bother the relationship, since they both understand the importance of spending time apart to make the heart grow fonder."
        }
        else if(sign1=="Cancer" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Cancer")
        {
            para.innerText = "Cancer and Pisces are two cool water signs and instinctively have one massive cosmic connection.They work well together because each one knows just who the other is and they are proud of that.These signs also have a very strong sense of themselves,which makes them easily able to form a solid bond that can last.To make things even better,they have very compatible individual traits that mesh well together.Pisces is all about connection with others,which Cancer is devoted to nurturing those around them.That allows the two to work well.The end result is a deep,mental connection that isn't easily taken away."
        }
        else if(sign1=="Leo" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Leo")
        {
        para.innerText = "The passion is high between Leo and Sagittarius,as both signs both enjoy life and love others who feel the same.They are both passionate about what they want out of this world and extremely encouraging in helping the other achieve any goal or dream.Both are fire signs and have a profound understanding of the other.This is the couple that's so fun, everyonr flocks to be arouond them.You know the type : the exact couple you have wanted to be for years.The passion these two signs have for life,love,and each other is incredibly intoxicating."
        }
        else if(sign1=="Virgo" && sign2=="Taurus" || sign1=="Taurus" && sign2=="Virgo")
        {
            para.innerText = "As both are earth signs, Virgo and Taurus really hit it off.Easygoing and pratical in their everyday lives,their relationship is cool,calm and collected.These two zodiac signs are also honest and sincere,which makes them incredible people to get close to,especially in a serious,long-term relationship.You won't find two other signs as devoted to each other as Virgo and Taurus.They not only have a lot of integrity,but they also have the same characteristics and values.This allows them to truly understand one another to the fullest."
        }
        else if(sign1=="Libra" && sign2=="Gemini" || sign1=="Gemini" && sign2=="Libra")
        {
            para.innerText = "A relationship between a Libra and Gemini is all about a strong intellectual connection.Both are air signs and deep into mental stimulation.The mind is a very interesting and sexy thing to them, and they enjoy learning more about it as time goes on.These signs also provide a great understanding and appreciation for the other,which makes them an excellent match.And as far as harmony goes,they know how to work it.A couple like this enjoys keeping the peace within their relationship by offering friendship,knowledge,and understanding to one another."
        }
        else if(sign1=="Scorpio" && sign2=="Cancer" || sign1=="Cancer" && sign2=="Scorpio")
        {
            para.innerText = "Sometimes having two passionate people in a relationship doesn't work.This couple can be perfect.These two water signs are intense when it comes to emotions, but that only seems to make them even more compatible.They're also deeply devoted tp one another and provide a terrific support system.Both share very similar morals and are caring toward each other and those around them."
        }
        else if(sign1=="Sagittarius" && sign2=="Aries" || sign1=="Aries" && sign2=="Sagittarius")
        {
            para.innerText = "Sagittarius and Aries are both fire signs , so you can expect some series hot passion between the two,making for a dynamite pair.They have insane amounts of energy to bring into the relationship.And they both appreciate each other's wild enthusiasm for the other persin and life around them.While in some instances opposites attract,these two signs show that being more alike can bring you even closer.This is a couple that can power through anything life throws their way, and they will do it together with some series pep in their step."
        }
        else if(sign1=="Capricorn" && sign2=="Taurus" || sign1=="Taurus" && sign2=="Capricorn")
        {
            para.innerText = "There's a reason these two signs have been reported to have more chemistry than any of the other astrological signs. Capricorn and Taurus have something most only daydream about: endless adoration. These two lovebirds will be together forever and actually enjoy one another's company to the end.The reason their bond is so tight is because they hold the sincerest respect and love for each other that only true soul mates can offer. Their admiration for the other is almost unnerving, but also incredibly touching."
        }
        else if(sign1=="Aquarius" && sign2=="Gemini" || sign1=="Gemini" && sign2=="Aquarius")
        {
        para.innerText = "Aquarius and Gemini are both air signs that have a killer psychological connection. And it goes deep—really deep, like finishing each other's sentences. Their relationship is almost mystical because it's one no one else can comprehend. After all, only they know what's going on in their heads, and each other's.They get what works for them and don't care that others might not see it. And while both of these signs have a strong sense of individuality, they don't let it hurt their relationship. In fact, it only strengthens it. But in the end, these two choose to stride through life walking arm-in-arm because they'd rather be together than apart."
        }
        else if(sign1=="Pisces" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Pisces")
        {
            para.innerText = "Another pair that's very intuitive to one another is Pisces and Scorpio. These two zodiac signs can get into each other's minds and know what they are thinking almost as well as if they were thinking it themselves. But they aren't just into intellect; they both have a hunger to understand the other's body and soul and learn what makes the other person tick.They want to know everything about the other because they hold such a high respect for the other sign. The passion is sky-high with this couple, and they aren't afraid of being romantic, no matter how mushy and over-the-top."
        }
        else if(sign1=="Aries" && sign2=="Aries")
        {
            para.innerText = "When two Aries come together in a love affair, there's bound to be fireworks.These two are always competing, which can make for quite a challenging love match. An Aries-Aries relationship is like looking into a mirror: Aries understands their partner's need for independence because they're the same way. At times, however, they can be possessive and turn into two Rams butting heads. They have to learn not to compete with one another so much. If they can do so, their partnership can be extremely powerful.If they can do so, their partnership can be extremely powerful."
        }
        else if(sign1=="Aries" && sign2=="Taurus" || sign1=="Taurus" && sign2=="Aries")
        {
            para.innerText = "When Aries and Taurus come together in a love affair, the partnership is a natural union of Love, represented by Taurus, and Passion, represented by Aries.This relationship is all about balance. Aries wants to jump right in and get into it, while Taurus prefers to go much more slowly. This can create a problem; Taurus loves to be wooed and romanced — two concepts that are basically foreign to straightforward, brash, totally unsubtle Aries. An Aries-Taurus partnership can be a great learning experience for both Signs. Taurus can help Aries rein in some of the more foolish, impractical impulses, and Aries can help Taurus be more spontaneous and adventurous."
        }
        else if(sign1=="Aries" && sign2=="Gemini" || sign1=="Gemini" && sign2=="Aries")
        {
            para.innerText = "When Aries and Gemini come together in a love affair, they connect on a physical as well as an intellectual level.These two Signs love activity and stay optimistic even in the most trying of times. Signs that are two apart in the Zodiac usually enjoy excellent communication and a deep understanding of one another. Aries's independent, pioneering spirit is attractive to Gemini, who also values independence. If Gemini feels that Aries is being too controlling or if Aries takes Gemini's flirtatious nature too seriously, arguments may set the tone of the relationship. They create a good balance together."
        }
        else if(sign1=="Aries" && sign2=="Cancer" || sign1=="Cancer" && sign2=="Aries")
        {
            para.innerText = "When Aries and Cancer come together in a love affair, it's a case of opposites attracting.Aries is rash and brash while Cancer is sensitive and emotional. Aries can certainly be emotional — in a fiery, impetuous way that can completely overwhelm Cancer. Even though Cancer usually likes to take time with relationships, Aries's whirlwind approach can be extremely stimulating. Aries, on the other hand, may find the Cancerian sensitivity appealing; it's a good balance for the typical Aries bluntness. Troubles may arise if Cancer's mood swings or Aries's aggression becomes hurtful."
        }
        else if(sign1=="Aries" && sign2=="Libra" || sign1=="Libra" && sign2=="Aries")
        {
            para.innerText = "When Aries and Libra come together in a love affair, the inherent polarity of the Zodiac is invoked.Aries and Libra are directly opposite one another in the Zodiac — 180 degrees apart. Each Sign possesses qualities that the other lacks; combined with Libra's natural yen for harmony, this can be a relationship that enjoys great balance. Aries is the Sign of Self while Libra is the Sign of Partnership, and the differences continue: Aries is impulsive, excitable and ready to jump right into something new and exciting, while Libra is indecisive, peace-loving and prefers a calm, smooth approach."
        }
        else if(sign1=="Aries" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Aries")
        {
            para.innerText = "When Aries and Scorpio come together in a love match, it can be the kind of relationship where they both wonder how they ever managed apart.Both Signs love power and they can achieve just about anything — as long as they learn to share the spotlight. Scorpio is very focused; once they set their sights on Aries, Aries is most likely powerless to resist! Scorpio has a deeper and more complex devotion to this relationship than does Aries.Scorpio is very focused; once they set their sights on Aries, Aries is most likely powerless to resist! Scorpio has a deeper and more complex devotion to this relationship than does Aries."
        }
        else if (sign1=="Aries" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Aries")
        {
            para.innerText = "When Aries and Capricorn come together in a love match, they must work hard to maintain their mutual energy.Their approaches can seem almost opposite to one another — Aries is all about acting without bothering to consider where the action is directed or what it will attain, while Capricorn is all about judging whether (or how much) it will benefit them before they take action. Aries moves fast and, to Capricorn, at least, seems to risk it all. Capricorn abhors unnecessary risk. They move at a slower pace, working inexhaustibly toward well-defined goals (usually related to career or other forms of public advancement). Both partners always get where they're going, only in different ways — and usually where they're going is totally different, too!"
        }
        else if(sign1=="Taurus" && sign2=="Taurus")
        {
            para.innerText = "When two Taureans come together in a love affair, it's a very sensuous and stable relationship — which pleases both of them to no end.Those are two of the things a Taurus prizes most in a relationship (along with fidelity, sharing good food and other creature comforts …) When two people both of this Sign get together, it can be the love connection of a lifetime. They will spoil one another to both their hearts' content: Taurus can respect their sweetheart's desire for life's little luxuries, because they have that need themselves. Both partners are charming, graceful and dignified."
        }
        else if(sign1=="Aries" && sign2=="Leo" || sign1=="Leo" && sign2=="Aries")
        {
            para.innerText = "When Aries and Leo come together in a love affair, the sparks will fly! Both are Fire Signs, passionate and dynamic, with a healthy love of sportsmanship and competition.There is a lot of action in this relationship. Both Signs want to be the boss and problems can arise when their equally-large egos get in the way. These partners have genuine admiration and respect for each other, but they need to learn to take turns commanding and giving orders — even when they're only choosing a movie at the video store!These partners have genuine admiration and respect for each other, but they need to learn to take turns commanding and giving orders — even when they're only choosing a movie at the video store!."
        }
        else if(sign1=="Aries" && sign2=="Virgo" || sign1=="Virgo" && sign2=="Aries")
        {
            para.innerText = "When Aries and Virgo come together in a love match, they may think at first that they have nothing in common and nothing to learn from one another.This relationship takes time to develop as each partner must learn to understand where the other is coming from. Aries and Virgo can seem like total opposites: While Aries is brash, dominant and aggressive, always jumping into new things and almost always impatient, Virgo is detail-oriented and quiet, even shy, and works patiently toward long-term goals. Aries's energy is fiery and impetuous while Virgo's is much slower and more grounded. "
        }
        else if(sign1=="Aries" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Aries")
        {
            para.innerText = "When Aries and Pisces come together in a love match, they can be very good for one another.Aries is a strong Sign; they are almost completely prey to their impulses, which they follow without a second thought to the outcome or possible consequences. Dreamy Pisces is much quieter and more internally-focused; they're the Poets of the Zodiac. On the surface an Aries and a Pisces may seem an unlikely pair, but when there's love involved, they can truly fulfill one another's needs. Pisces is very intuitive, both as a person and as a lover; Aries must take care to return this favor so Pisces won't begin to see their Aries partner as stingy and selfish."
        }
        else if(sign1=="Taurus" && sign2=="Gemini" || sign1=="Gemini" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Gemini come together in a love affair, they must both take the time to learn what the dynamics of the relationship are and how they can best get along.They both have much to offer one another and much to learn in this relationship, but it will take a bit of adjustment and effort on both sides. Gemini's Symbol is the Twins; this Sign can often be of two minds about things. If possessive Taurus is able to let go and give one Twin the relationship security and intimacy it wants while allowing the other Twin its freedom, things will go well between these two."
        }
        else if(sign1=="Taurus" && sign2=="Leo" || sign1=="Leo" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Leo come together in a love affair, they can be a great couple because they know how to stroke one another's egos and love to have their own stroked! They have similar needs: Taurus needs plenty of affection, to be loved and cherished, while Leo likes compliments and wants to be adored and admired.They're both extremely loyal and possessive lovers. Since they have such similar desires, they can generally provide for one another's needs quite well.Since they have such similar desires, they can generally provide for one another's needs quite well."
        }
        else if(sign1=="Taurus" && sign2=="Libra" || sign1=="Libra" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Libra come together in a love affair, it can be the unification of two halves of a whole.These two Signs are thought of as being karmically linked. They're both looking for security in a relationship and they share a love of art, poetry and culture. This relationship may start slowly as, on the surface, they might have few common interests. However, once they understand one another they may learn they have much more in common than was first apparent.However, once they understand one another they may learn they have much more in common than was first apparent"
        }
        else if(sign1=="Taurus" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Scorpio come together in a love affair, their union is nothing if not intense, whether that's in a positive or a negative way.They are opposite Signs in the Zodiac, giving them a special, complex connection. They can combine to make a whole, each partner's strengths balancing the other's weaknesses. Their sexual attraction is likely to be off the charts! Taurus and Scorpio have tons in common, but because their personalities are so powerful, they often swing between passionate love and passionate disagreement!.Their sexual attraction is likely to be off the charts! Taurus and Scorpio have tons in common, but because their personalities are so powerful, they often swing between passionate love and passionate disagreement!."
        }
        else if(sign1=="Taurus" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Sagittarius come together in a love affair, their connection can be incredibly passionate and steamy, but they must give themselves time to learn about the particular energy this relationship generates.They both have much to gain from their union! While Sagittarius thrives when they're constantly experiencing new people, places, foods and more, Taurus can be quite content with routine as it affords them the security they so prize. Early in the relationship, Taurus might tend to demand more commitment and stability than Sagittarius is ready to give."
        }
        else if(sign1=="Taurus" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Aquarius come together, they can move mountains — if they can figure out how to coordinate their efforts.Taurus's practical, down-to-earth approach to life is about as opposite as can be to Aquarius's unconventional, out-of-this-world approach to just about everything! Taurus resists change and Aquarius is the most progressive of all 12 Signs of the Zodiac. How do these two get along, then. They may appear to have few common interests, but they share a very strong desire to succeed."
        }
        else if(sign1=="Taurus" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Taurus")
        {
            para.innerText = "When Taurus and Pisces come together in a love affair, it's generally a happy union.They are two positions apart within the Zodiac, and such Signs tend to have karmic ties and a deep empathy for one another. While Pisces is idealistic, dreamy and impressionistic, Taurus is more down-to-earth and practical. They're both nurturers, however, and both prize harmony and stability in a relationship.They're both nurturers, however, and both prize harmony and stability in a relationship."
        }
        else if(sign1=="Gemini" && sign2=="Gemini")
        {
            para.innerText = "When two Geminis partner off, it really is like four people coming together (Gemini is represented by the Twins).This relationship can never be dull, which is a good thing — these two can get bored easily! Since they have the same need for intellectual stimulation and nearly-constant chatter, they serve very well as one another's sounding boards off which to bounce new ideas and theories. Gemini is all about freedom and variety of expression, and two Geminis together will enjoy this to the fullest. Others enjoy two Geminis as a couple as well."
        }
        else if(sign1=="Gemini" && sign2=="Cancer" || sign1=="Cancer" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Cancer come together in a love affair, it may be a rather curious relationship. Sensitive, emotional Cancer has trouble communicating clearly, but clear communication is what defines Gemini.Cancer is the sign of home and hearth, while Gemini is the thinker.Gemini is an Air sign and Cancer is a Water sign. If these two signs can work together they can be a great team; after all, the best decisions are made by incorporating the emotions and the intellect. The trouble for these two lies in learning to cooperate. They come from such opposite points of view that at times it can seem as if they simply have nothing in common."
        }
        else if(sign1=="Gemini" && sign2=="Leo" || sign1=="Leo" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Leo come together in a love affair, their relationship is playful and high-spirited, characterized by light activity and optimism.Gemini thrives on mental stimulation and is therefore very attracted to Leo's creative, dramatic spirit. There can be trouble between these two, however: If Leo takes Gemini's flirty, outgoing nature too seriously, or if Gemini thinks Leo wants to maintain total control of the relationship, arguments may break out. Though their approaches are different."
        }
        else if(sign1=="Gemini" && sign2=="Virgo" || sign1=="Virgo" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Virgo come together in a love affair, it's crucial to the survival of the relationship that they take time to learn about one another's approach to life and love — and remember that both partners' attitudes are worth understanding! Gemini is symbolized by the Twins; they can see both sides of a story, they tend to vacillate between two courses of action and sometimes they can seem as if they have a split personality! "
        }
        else if(sign1=="Gemini" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Scorpio come together in a love affair, they'll need to learn to understand and accept one another's differences — and if they can, they will be a nearly unbreakable couple.Where Gemini is adaptable, intellectual, outgoing and chatty, Scorpio tends to be secretive, focused, intense and determined. Gemini tends to take things lightly, including their lover; Scorpio, on the other hand, has a very deep need for emotional connection and intimacy."
        }
        else if(sign1=="Gemini" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Sagittarius come together in a love affair, it can be a truly spectacular match! These two are extremely compatible; any rough spots they encounter during the course of the relationship are sure to be smoothed over with a minimum of effort.Both have attention spans that love to move quickly from one thing to the next in order to absorb as much experience as possible."
        }
        else if(sign1=="Gemini" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Capricorn come together in a love affair, it may be tough for them to remember why they're together at all, as the ways in which they approach the world couldn't be more opposite.These two Signs' challenge as a couple is to learn to maintain a similar pace so they can arrive at the same place at the same time."
        }
        else if(sign1=="Gemini" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Gemini")
        {
            para.innerText = "When Gemini and Pisces come together in a love affair, they can make a very empathetic and mutually satisfying couple.This relationship is all about flexibility and connection."
        }
        else if(sign1=="Cancer" && sign2=="Cancer")
        {
            para.innerText = "When two Cancerians come together in a love affair, a loving and yet very emotional domestic relationship ensues.If they can find a way to keep their fluid and moody emotions in check, this relationship will nurture both lovers."
        }
        else if(sign1=="Cancer" && sign2=="Leo" || sign1=="Leo" && sign2=="Cancer")
        {
            para.innerText = "When Cancer and Leo make a love match, they understand and know how to satisfy basic emotional needs within one another.Since their desires are similar, a Cancer and a Leo may fill very important voids in each other's lives."
        }
        else if(sign1=="Cancer" && sign2=="Virgo" || sign1=="Virgo" && sign2=="Cancer")
        {
            para.innerText = "When Cancer and Virgo make a love match, a strong, down-to-earth relationship with staying power is the happy result.No lightweight love here: These two were not really built for flings! Cancer and Virgo deeply admire one another: Virgo respects Cancer's quiet strength and dedication while Cancer appreciates Virgo's keen adaptability and intelligence."
        }
        else if(sign1=="Cancer" && sign2=="Libra" || sign1=="Libra" && sign2=="Cancer")
        {
            para.innerText = "When Cancer and Libra make a love match, they give to one another important things that each lacks.However, the more they get to know one another, the better each individual in this Cancer-Libra love match will recognize and respect positive qualities in the other."
        }
        else if (sign1=="Cancer" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Cancer")
        {
            para.innerText = "When Cancer and Sagittarius make a love match, they both need to be patient and give the relationship time to grow and mature.But as time goes by, Sagittarius will learn to appreciate the strong emotional support that Cancer offers."
        }
        else if(sign1=="Cancer" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Cancer")
        {
            para.innerText = "When Cancer and Capricorn make a love match, it's a celestial pairing of great tenacity and determination.These two Signs from opposite sides of the Zodiac can come together to create a very successful and secure connection."
        }
        else if(sign1=="Cancer" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Cancer")
        {
            para.innerText = "When Cancer and Aquarius make a love match, it can be a case of opposites attracting.They love to find themselves amongst friends; social settings are simply their thing! If a Cancer and an Aquarius can find a way to combine these qualities in a positive way, they can go anywhere together."
        }
        else if(sign1=="Leo" && sign2=="Leo")
        {
            para.innerText = "When two Leos join together in a love match, they draw a great deal of attention.This duo was instantly attracted to their fellow Lion's good looks, and neither was shy in manifesting their desires."
        }
        else if(sign1=="Leo" && sign2=="Virgo" || sign1=="Virgo" && sign2=="Leo")
        {
            para.innerText = "When Virgo and Leo join together in a love match, they may initially overlook common interests and feel they have nothing to gain from one another.Although there are differences, they make a wonderful love match when each partner warms up to the other's unfamiliar style."
        }
        else if(sign1=="Leo" && sign2=="Libra" || sign1=="Libra" && sign2=="Leo")
        {
            para.innerText = "When Leo and Libra join together in a love match, theirs is an agreeable union.They can enjoy a very smooth relationship because each can appreciate and benefit from the positive attributes of the other."
        }
        else if(sign1=="Scorpio" && sign2=="Leo" || sign1=="Leo" && sign2=="Scorpio")
        {
            para.innerText = "When Leo and Scorpio join together in a love match, the result is usually a dynamic and intense union.Both members of this love match are able to give the other what they need and while enjoying one another's strengths."
        }
        else if (sign1=="Leo" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Leo")
        {
            para.innerText = "When Leo and Capricorn join together in a love match, they form a mutually supportive union.Although they may seem to be an unlikely couple on the surface, their love will grow as they discover similarities."
        }
        else if(sign1=="Leo" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Leo")
        {
            para.innerText = "When Leo and Aquarius join together in a love match, the merging of Aquarian foresight and Leo creativity causes people to take notice.Both are attracted to all things novel, and are thrill-seekers; they may even occasionally turn life into a giant game of Truth or Dare."
        }
        else if(sign1=="Leo" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Leo")
        {
            para.innerText = "When Leo and Pisces join together in a love match, each partner enjoys the new perspective the other brings to life in general.When they care for one another, they each fill the other's voids and have a caring, mutually beneficial relationship."
        }
        else if(sign1=="Virgo" && sign2=="Virgo")
    {
        para.innerText = "When two Virgos join together in a love match, they are likely to structure their lives in beautiful conjunction.Though their shared perfectionism and skepticism could lead to conflict, the level-headed Virgo duo will quickly resolve any disputes and move on to more pleasant times."
    }
    else if( sign1=="Virgo" && sign2=="Libra" || sign1=="Libra" && sign2=="Virgo")
    {
        para.innerText = "When Virgo and Libra join together in a love match, it can be like puting two puzzle pieces together.The Virgo-Libra relationship may trickle along in the beginning, but it will rev up once both partners grow to respect one another."
    }
    else if( sign1=="Virgo" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Virgo")
    {
        para.innerText = "When Virgo and Scorpio join together in a love match, these Signs that are two apart in the Zodiac are brought together.Usually, this couple will stay away from crowds; they aren't too inclined to go to parties or dances, but alone they can form a very fulfilling union."
    }
    else if(sign1=="Virgo" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Virgo")
    {
        para.innerText = "When Virgo and Sagittarius join together in a love match, the result is a well-rounded couple.Virgo may demand perfection too soon for Sagittarius's taste, but over time Sagittarius will appreciate a steady and reliable lover whose head isn't always in the clouds."
    }
    else if(sign1=="Virgo" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Virgo")
    {
        para.innerText = "When Virgo and Capricorn join together in a love match, theirs is a pragmatic, smart relationship.Both Signs are highly rational, and both expect a lot of themselves and others. Virgo adores Capricorn's dedication and intensity, while Capricorn admires Virgo's intuition and attention to detail. Together they form a solid union based firmly in reality.Together they form a solid union based firmly in reality."
    }
    else if(sign1=="Virgo" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Virgo")
    {
        para.innerText = "When Virgo and Aquarius join together in a love match, they bring out either the best or worst in one another.But these two lovers may actually thrive on their differences; they grow together as they learn about one another."
    }
    else if(sign1=="Virgo" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Virgo")
    {
        para.innerText = "When Virgo and Pisces join together in a love match, it generally makes for a healthy relationship.Each partner in this couple brings out the best aspects in the other."
    }
    else if( sign1=="Libra" && sign2=="Libra")
    {
        para.innerText = "When two Libras come together in a love affair, they form one of the most agreeable, romantic and well-balanced relationships around.If they're just dating, they spend their time at romantic movies and coffee houses; if they're cohabiting, their house looks like an art gallery, full of the finest and loveliest of everything."
    }
    else if(sign1=="Libra" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Libra")
    {
        para.innerText = "When Libra and Scorpio come together in a love match, they tend to make a very emotionally connected and mutually satisfying union.These two Signs can make a very loyal, close and satisfying partnership."
    }
    else if(sign1=="Libra" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Libra")
    {
        para.innerText = "The merging of Libra and Sagittarius can be paradise found for both Signs; this combination is a harmonious one, to say the least.Together they will reach new horizons in love and in life."
    }
    else if(sign1=="Libra" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Libra")
    {
        para.innerText = "When Libra and Capricorn come together in a love match, they can be a good couple — if they can uncover their sometimes difficult to find similarities.This is not to say, however, that there is no meeting point for these two; if they are coming from a base of mutual love and respect, they can work to find their common ground."
    }
    else if(sign1=="Libra" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Libra")
    {
        para.innerText = "When Libra and Aquarius join in a love match, their relationship can serve to heighten and strengthen both Signs' consciousness.Both Signs are also very energetic, enthusiastic types; this relationship is not likely to become stagnant."
    }
    else if(sign1=="Libra" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Libra")
    {
        para.innerText = "When Libra and Pisces come together in a love affair, theirs is a congenial and even-tempered romance.This is an honest partnership that values truth and harmony in itself and in the world."
    }
    else if(sign1=="Scorpio" && sign2=="Scorpio")
    {
        para.innerText = "When two Scorpions make a love match, it is a fierce tempest of intense passion.This relationship could go either way: It will either be the most wonderful thing in the world or a destruction of both involved."
    }
    else if( sign1=="Scorpio" && sign2=="Sagittarius" || sign1=="Sagittarius" && sign2=="Scorpio")
    {
        para.innerText = "If a Scorpio and a Sagittarius want to make a love match, they should be warned to slow down, take their time getting to know one another on a deep, significant level or else they run the risk of getting way ahead of themselves.If Scorpio can control their emotions, these two are in for satisfaction and excitement."
    }
    else if(sign1=="Scorpio" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Scorpio")
    {
        para.innerText = "When Scorpio and Aquarius make a love match, it is a fusion of two very different life philosophies and many very different needs.This pair may seem to have very little in common, but they both have such strong wills that, when focused on their relationship, can get them what they need and want."
    }
    else if(sign1=="Scorpio" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Scorpio")
    {
        para.innerText = "When Scorpio and Pisces make a love match, theirs is a splendid union of much respect and understanding.However, Pisces also has a tendency to withdraw into their own mind, and can forgive Scorpio for being mysterious or withdrawn at times."
    }
    else if(sign1=="Sagittarius" && sign2=="Sagittarius")
    {
        para.innerText = "When two Sagittarians join together in a love match, the truth-loving natures makes theirs a near perfect relationship.An occasional hotheaded dispute can erupt in the Sagittarius-Sagittarius relationship, when one fact-fanatic Sag partner carries things a little too far."                                                                 
    }
    else if(sign1=="Sagittarius" && sign2=="Capricorn" || sign1=="Capricorn" && sign2=="Sagittarius")
    {
        para.innerText = "When Sagittarius and Capricorn join together in a love match, things may start slow and they may feel that they don't have much to gain from the other.Their differences can actually forge a stronger relationship in the long run, there being vast amounts each partner can learn from the other."
    }
    else if(sign1=='Sagittarius' && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Sagittarius")
    {
        para.innerText = "When Sagittarius and Aquarius join together in a love match, Aquarian ideals and Sagittarian knowledge combine to make them a creative and unique couple.Together, the two can fly without fear of falling."
    }
    else if(sign1=="Sagittarius" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Sagittarius")
    { 
        para.innerText = "When Sagittarius and Pisces join together in a love match, a relationship of realized dreams is formed.But as their love for one another grows, they are more likely to be able to satisfy the philosophical cravings of the other and maintain a healthy relationship."
    }
    else if(sign1=="Capricorn" && sign2=="Capricorn")
    {
        para.innerText = "When two Capricorns join together in a love match, they create and contribute to a whole new, exciting element in one another's lives.But, all of this ambition and lust for life is bound to make these Goats lock horns, and a dispute between two tempers like these is not to be taken lightly."
    }
    else if(sign1=="Capricorn" && sign2=="Aquarius" || sign1=="Aquarius" && sign2=="Capricorn")
    {
        para.innerText = "When Capricorn and Aquarius join together in a love match, they tend to bring out the most positive attributes of one another.On the surface, they may seem like total opposites, but once these two set eyes on one another, an unbreakable bond is formed."
    }
    else if(sign1=="Capricorn" && sign2=="Scorpio" || sign1=="Scorpio" && sign2=="Capricon")
    {
        para.innerText = "When Scorpio and Capricorn make a love match, they get an opportunity to not only enjoy a loving relationship and learn the value of being a pair, but also to grow and mature as individuals.Though they may be shy of getting involved and not the quickest to trust and share, these two Signs will discover that they can have quite a profound connection — one of friendship and deep loyalty."
    }
    else if(sign1=="Capricorn" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Capricorn")
    {
        para.innerText = "When Capricorn and Pisces join together in a love match, on the surface, it may appear to be opposites attracting.They admire one another: Capricorn appreciates Pisces's kind nature, and Pisces is drawn in by Capricorn's quick wit and tenacity."
    }
    else if(sign1=="Aquarius" && sign2=="Aquarius")
    {
        para.innerText = "When two Aquarians join together in a love match, they focus on the more positive aspects of humanity.Together, they enjoy following current events and discussing modern, progressive ideas."
    }
    else if(sign1=="Aquarius" && sign2=="Pisces" || sign1=="Pisces" && sign2=="Aquarius")
    {``
        para.innerText = "When Aquarius and Pisces join together in a love match, there is much compassion and creation.Aquarius can often be quick to judge those who don't share their vision, while Pisces is often too compassionate, even for those who don't necessarily deserve it."
    }
    else if(sign1=="Pisces" && sign2=="Pisces")
    {
        para.innerText = "When two Pisceans join together in a love match, there is a union of two sensitive and emotional people.They share a love of beauty and peace unparalleled in the Zodiac, and both are equally committed to maintaining this ideal relationship."
    }