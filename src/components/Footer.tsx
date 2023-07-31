import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";

function Footer() {
    return (
        <footer>
            <div className="p-5 flex gap-10 bg-slate-300 rounded-2xl">
                <div className="flex flex-col gap-6 m-5">
                    <LargeHeading align="left">Let&apos;s chat.</LargeHeading>
                    <Paragraph align="left">
                        Have an exciting project in mind or just want to talk?
                        <br />
                        Feel free to say hi!
                    </Paragraph>
                </div>
                <Image
                    className="rounded"
                    src="/footerAnimation.gif"
                    width={300}
                    height={50}
                    alt="Animated GIF"
                    style={{ objectFit: "cover" }}
                />
            </div>

            <div>
                <div>All logo</div>
                <div>Email copy thing</div>
            </div>

            <div>
                <span>Logo</span>
                <span>Copyright © 2023</span>
            </div>
        </footer>
    );
}

export default Footer;
