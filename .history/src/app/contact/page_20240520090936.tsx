import Image from "next/image";

import { Input } from "@/components/ui/input";
function ContactPage() {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-1/2">
        <Image src="/contact.png" alt="Contact image" fill></Image>
      </div>
      <form className="w-1/2 hflex flex-col justify-center">
        <Input></Input>
      </form>
    </div>
  );
}

export default ContactPage;
