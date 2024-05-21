import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
function ContactPage() {
  return (
    <div className="flex h-full w-full">
      <div className="relative h-main w-2/5 object-cover">
        <Image src="/contact.png" alt="Contact image" fill></Image>
      </div>
      <form className="h- flex w-3/5 flex-col justify-center gap-4">
        <Input className="p-6" placeholder="Full name" type="text"></Input>
        <Input className="p-6" placeholder="Email address" type="text"></Input>
        <Input
          className="p-6"
          placeholder="Phone number (Optional)"
          type="text"
        ></Input>
        <Textarea cols={30} rows={10} placeholder="Message"></Textarea>
        <Button variant={"ghost"} className=" bg-blue-600">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactPage;
