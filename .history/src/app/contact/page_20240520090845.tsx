import Image from "next/image";
import Inpu
import { Input } from "postcss";
function ContactPage() {
  return (
    <div className="h-full w-full">
      <div className="relative h-full w-1/2">
        <Image src="/contact.png" alt="Contact image" fill></Image>
      </div>
      <form>
        
        <Input></Input>
      </form>
    </div>
  );
}

export default ContactPage;
