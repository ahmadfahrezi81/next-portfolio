import Icons from "@/components/Icons";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
//need to style it

export default function NotFound() {
    return (
        <section className="h-[50vh] w-full flex flex-col items-center gap-5">
            <Icons.Squirrel color="#fff" size={120} />
            <LargeHeading> Page not found</LargeHeading>
            <Paragraph>
                The page you are looking for doesn&apos;t exist.
            </Paragraph>

            <div className="flex items-center justify-center gap-5 w-full">
                <Link href="/">
                    <Button>
                        Back to Safety
                        <Icons.Trees size={25} className="ml-2" />
                    </Button>
                </Link>
            </div>
        </section>
    );
}
