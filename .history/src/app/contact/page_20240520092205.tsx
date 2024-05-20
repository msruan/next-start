import Image from "next/image";

import { Input } from "@/components/ui/input";
function ContactPage() {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-1/2">
        <Image src="/contact.png" alt="Contact image" fill></Image>
      </div>
      <form className="flex h-full w-1/2 flex-col justify-center">
        <Input className="w-full" de type="text">
        </Input>
      </form>
    </div>
  );
}

export default ContactPage;
