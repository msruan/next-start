import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
function ContactPage() {
  return (
    <div className="flex h-full w-full">
      <div className="relative h-full w-1/2">
        <Image src="/contact.png" alt="Contact image" fill></Image>
      </div>
      <form className="h- flex w-1/2 flex-col justify-end gap-4">
        <Input className="p-6" placeholder="Full name" type="text"></Input>
        <Input className="p-6" placeholder="Email address" type="text"></Input>
        <Input
          className="p-6"
          placeholder="Phone number (Optional)"
          type="text"
        ></Input>
        <Textarea placeholder="Message"></Textarea>
      </form>
    </div>
  );
}

export default ContactPage;
