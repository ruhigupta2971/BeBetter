import "./Stories.css";
import StoriesData from "./StoriesData";
import ngo1 from "../assets/disha.jpg";
import ngo2 from "../assets/vatsalya.jpg";
import ngo3 from "../assets/gram.png";

function Stories() {
  return (
    <div className="stories">
      <h1>NGOs</h1>
      <p>You can discover different NGOs around you.</p>
      <div className="storiescard">
        <StoriesData
          image={ngo1}
          heading="Disha Foundation"
          text="The mission of Disha Foundation is to contribute to the creation of a society which provides equal opportunity to persons with disability, to live with dignity and realize their maximum potential.
          Mrs. P.N. Kavoori is the founder of Disha Foundation and provides special education at the centre for differently abled children. 
          She established Disha Foundation with the Khaitan family, with full support from Rajmata Gayatri Devi and the royal family. 
          The organization was registered as a trust in 1997.
          The school has all facilities for the special education as well as physiotherapy and other relevant activities for children with special needs. 
          The organisation has had many students excelling in sports and participating and winning gold in international podiums as well."
        />
        <StoriesData
          image={ngo2}
          heading="Vatslya"
          text="Vatsalya began its work in 2001 with interventions focused on children. 
          They eventually expanded their activities to other areas where a need was felt. 
          It seemed to be more effective to address a community as a whole. 
          With almost similar resources and a little extra enthusiasm, the organisation was able to accomplish a lot in very little time.
          Dr. Hitesh Gupta is a co-founder of Vatsalya and currently designated as CEO of the organisation. 
          He is the key driving force in Vatsalya and involved in healthcare, treatment of HIV/AIDS, vocational training of young people and child rights related projects as researcher, guide and manager. 
          His major responsibility is to run operations of Vatsalya effectively and efficiently to make a difference in the life of the underprivileged population and meet the goals and vision of Vatsalya."
        />
        <StoriesData
          image={ngo3}
          heading="Gram Chetna Kendra"
          text="Gram Chetna Kendra was formed by a group of socially conscious individuals of Khedi Milak district of Jaipur, Rajasthan. 
          Piercing issues like droughts of educational, healthcare and government services plaguing the society ignited the hearts of the founders to channel their efforts towards people based development to ensure just and equal opportunities with minimum basic essentials for all and quality life for rural masses.
          Working relentlessly for more than 30 years, their clouds of projects filled with streams of development have showered their services on 791 villages covering 11 districts of Rajasthan. 
          Recognizing the various efforts of the trust towards bringing about literacy and social justice, the government of Rajasthan has honored them for outstanding contribution to the community."
        />
      </div>
    </div>
  );
}

export default Stories;
