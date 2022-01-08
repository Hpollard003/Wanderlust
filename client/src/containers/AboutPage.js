import React from "react";
import Earfy from "../assets/earthy.gif";

const AboutPage = () => {
  return (
    <div className="text-light page-list">
      About Page{" "}
              <img
                src={Earfy}
                height="40"
                alt=""
                className="rounded rounded-circle "
                loading="lazy"
              />
      <p className="card navbar-bg-gradient p-3">The story begins twenty years after Odysseus left to fight in the Trojan War, and ten years after he began his journey home to Ithaca. We enter the story in medias res – in the middle of things: Odysseus is trapped on an island with the lovesick goddess Calypso, while his wife and son suffer the transgressions of the suitors, noble young men who vie for queen Penelope's hand. The loyal queen has rebuffed their advances for many years, because she holds out hope that Odysseus may one day return. In the meantime the suitors have run free in the household, holding noisy parties and draining the resources of the estate.
The goddess Athena decides to intervene on Odysseus's behalf. She convinces Zeus to send the messenger god Hermes to disentangle Odysseus from Calypso's grasp, and she herself flies to Ithaca to give courage and guidance to the helpless young prince Telemachus. She inspires Telemachus to set sail to Pylos and Sparta in search of news about Odysseus; his newfound confidence and familial feeling alarms the suitors, who plot to murder him on his way home. King Nestor of Pylos can't give Telemachus any information about Odysseus, but King Menelaus of Sparta reports that he learned from the sea god Proteus that Odysseus is alive on the island Ogygia.
Meanwhile, Hermes flies to Ogygia and tells Calypso to let Odysseus go. Odysseus departs, and sails for seventeen days until he sees the Phaeacian shore; after some difficulties, he reaches land and falls asleep. The next morning, the Phaeacian princess Nausicaa finds him on the beach in a pitiable state. She gives him food and clothes and offers to introduce him to her parents, the king and queen – but she asks that he enter the city at a distance from her, to ward off uncharitable gossip.
After he spends some time at court, he tells Alcinous and Arete the full story of his travels. He describes the Cicones, who punished Odysseus's men for recklessness and greed, and the Lotus Eaters, whose flowers sent his men into a happy stupor. He tells the king and queen how he blinded the Cyclops Polyphemus, who called on his father Poseidon to avenge him. He tells them about Aeolus's bag of winds and about the cannibal Laestrygonians, the witch Circe that turned his men into pigs, the journey to the kingdom of the dead, the alluring Sirens and the monsters Scylla and Charybdis. With each trial, the crew's death toll rose, and Odysseus's ingenuity grew more desperate. Finally, the men anchored on the Island of the Sun. The prophet Tiresias warned Odysseus to keep his crew from harming the Sun God's cattle, but the men killed a few animals when Odysseus was asleep. When they were once again at sea, Zeus sent down a punitive bolt of lightning that killed every man except Odysseus, who floated on a makeshift raft to Calypso's island, where he lived in captivity for seven years.
Here Odysseus finishes his story. The next day, Alcinous sends him home in a Phaeacian ship loaded with treasure. Athena apprises him of the dire situation in his household, warns him of the suffering still to come, and disguises him as a ragged beggar. She sends him to the farm of the loyal swineherd Eumaeus; she also advises Telemachus to hurry home from Sparta. Father and son reunite and plot their revenge against the suitors.
The next day, Eumaeus and Odysseus come to court. The king's old dog Argos recognizes him despite his changed appearance, and the nurse Eurycleia recognizes him by the familiar hunting scar on his knee. Penelope is friendly to him but does not yet guess his real identity. Some of the suitors mock and abuse Odysseus in his disguise, but the king exercises great self-restraint and does not respond in kind. Finally, the despairing queen announces that she will hold an archery contest: she will marry the man that can use Odysseus's bow to shoot an arrow through a row of axes. But none of the suitors can even string Odysseus's bow, let alone shoot it.
Odysseus, of course, shoots the arrow with grace and ease. Just then the slaughter begins. With the help of Athena, the swineherd, and the cowherd, Odysseus and Telemachus murder the suitors one by one; they also kill the disloyal maids and servants. Soon enough, Odysseus reunites with Penelope. The suitors' families gather to avenge the murders, but Zeus orders them to stand down. Odysseus must leave for a brief journey to appease Poseidon, who still holds a grudge. Nevertheless, Ithaca is once again at peace.</p>
    </div>
  );
};

export default AboutPage;
