import Container from "@/components/common/Container";
import Paragraph from "@/components/common/Paragraph";
import SectionTitle from "@/components/common/SectionTitle";
import Stack from "@/components/common/Stack";

export default function StepSection() {
  return (
    <Container className="py-16">
      <div>
        <Stack>
          <SectionTitle align={"center"}>
            Easy steps to land your next job
          </SectionTitle>
          <Paragraph size="lg" color="muted" align={"center"}>
            Create your profile, browse jobs that match your skills, and get
            noticed by top employers quickly and easily.
          </Paragraph>
        </Stack>
      </div>
    </Container>
  );
}
