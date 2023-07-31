import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import { Motion } from "@/components/Motion";

export default function Home() {
    return (
        <>
            <section>
                <LargeHeading>
                    Hi. I&apos;m Ahmad.
                    <br />A Dev. and Designer
                </LargeHeading>
                <Paragraph>Kuala Lumpur, Malaysia</Paragraph>
            </section>
            <section>
                <LargeHeading>Notable Projects.</LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
                    sit amet consectetur ipsum dolor sit amet consectetur.
                </Paragraph>
            </section>
        </>
    );
}
