import Container from "@/components/common/Container";
import Paragraph from "@/components/common/Paragraph";
import SectionTitle from "@/components/common/SectionTitle";
import Stack from "@/components/common/Stack";
import { stepData } from "./stepData";
import StepCard from "./StepCard";

export default function StepSection() {
  return (
    <Container
      variant={"wide"}
      className="py-24 flex flex-col gap-28 overflow-hidden"
    >
      <Stack align="center">
        <SectionTitle className="w-full md:w-3/4 lg:w-1/5 " align={"center"}>
          Easy steps to land your next job
        </SectionTitle>
        <Paragraph
          className="w-full md:w-3/4 lg:w-2/5"
          size="md"
          color="muted"
          align={"center"}
        >
          Create your profile, browse jobs that match your skills, and get
          noticed by top employers quickly and easily.
        </Paragraph>
      </Stack>
      <div className="grid grid-cols-3 gap-3.5">
        {stepData.map((item) => (
          <StepCard step={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
}
