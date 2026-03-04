import Container from "@/components/common/Container";
import Paragraph from "@/components/common/Paragraph";
import SectionTitle from "@/components/common/SectionTitle";
import Stack from "@/components/common/Stack";

export default function FeaturedJobs() {
  return (
    <Container className="py-14">
      <Stack align="center" gap="sm">
        <SectionTitle>Featured Jobs</SectionTitle>
        <Paragraph>
          Find your next job with ease. Browse featured jobs and connect with
          top recruiters.
        </Paragraph>
      </Stack>
      <div className="grid grid-cols-3 gap-3.5"></div>
    </Container>
  );
}
