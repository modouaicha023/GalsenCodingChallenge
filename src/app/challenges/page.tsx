import ChallengeItem from "@/components/ChallengeItem";
import Container from "@/components/ui/container";
import { Challenge } from "@/lib/types";
import { challenges as allChalleges } from "../api/data";
function Challenges() {
  return (
    <Container>
      <div className="flex flex-wrap ">
        {allChalleges.map((challenge) => (
          <ChallengeItem {...(challenge as Challenge)} />
        ))}
      </div>
    </Container>
  );
}

export default Challenges;
